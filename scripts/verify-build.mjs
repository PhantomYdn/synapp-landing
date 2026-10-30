import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { resolve } from 'node:path'

const origin = 'https://synapp.us'
const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
assert.ok(urls.length >= 8, 'Sitemap must include the landing pages and documentation')
assert.equal(new Set(urls).size, urls.length, 'Sitemap URLs must be unique')
const titles = new Set()
const descriptions = new Set()
for (const url of urls) {
  assert.ok(url.startsWith(`${origin}/`), `Wrong sitemap origin: ${url}`)
  const { pathname } = new URL(url)
  const filename = resolve('dist', `.${pathname}${pathname.endsWith('/') ? 'index.html' : ''}`)
  const html = await readFile(filename, 'utf8')
  assert.equal((html.match(/<link\b[^>]*rel="canonical"/g) || []).length, 1, `One canonical required: ${url}`)
  assert.ok(html.includes(`href="${url}"`), `Self-referencing canonical required: ${url}`)
  assert.ok(!html.includes('synapp.io'), `Old domain found: ${url}`)
  assert.ok(!html.includes('og-image.png'), `Missing social image found: ${url}`)
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One rendered H1 required: ${url}`)
  assert.ok(!html.includes('<!--app-html-->'), `Unrendered app: ${url}`)
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  assert.ok(title && !titles.has(title), `Distinct title required: ${url}`)
  titles.add(title)
  const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"/)?.[1]
  assert.ok(description && !descriptions.has(description), `Distinct description required: ${url}`)
  descriptions.add(description)
  assert.ok(html.includes('property="og:url" content="' + url + '"'), `Sharing URL required: ${url}`)
  assert.ok(html.includes('name="twitter:image"'), `Twitter image required: ${url}`)
  assert.ok(!/<meta[^>]+name="robots"[^>]+content="noindex/.test(html), `Public page must be indexable: ${url}`)
  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const target = match[1].split(/[?#]/)[0]
    if (!target.startsWith('/') || target.startsWith('//')) continue
    const local = resolve('dist', `.${target}${target.endsWith('/') ? 'index.html' : ''}`)
    // GitHub Pages and the docs server both support extensionless .html links.
    try { await access(local) } catch {
      try { await access(`${local}.html`) } catch {
        assert.fail(`Missing local link or asset ${target} in ${url}`)
      }
    }
  }
  if (!pathname.startsWith('/docs/')) {
    const schema = html.match(/<script id="page-schema" type="application\/ld\+json">(.*?)<\/script>/s)?.[1]
    assert.ok(schema, `Structured data required: ${url}`)
    assert.equal(JSON.parse(schema)['@context'], 'https://schema.org')
  }
}
const notFound = await readFile('dist/404.html', 'utf8')
assert.ok(notFound.includes('noindex, follow'), '404 page must not be indexed')
assert.ok(notFound.includes('Page not found'), '404 page must explain the missing page')
assert.ok(!notFound.includes('rel="canonical"'), '404 page must not canonicalize to the homepage')
assert.ok((await readFile('dist/robots.txt', 'utf8')).includes(`Sitemap: ${origin}/sitemap.xml`))
await access('dist/full_white.png')
await access('dist/.nojekyll')
console.log(`SEO checks passed for ${urls.length} rendered pages, their metadata, structured data, links, and assets.`)
