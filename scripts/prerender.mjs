import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { render, pageMetas, metaTags, structuredData } from '../.prerender/entry-server.js'

const template = await readFile('dist/index.html', 'utf8')
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'))
const escape = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character])

for (const meta of Object.values(pageMetas)) {
  const tags = Object.entries(metaTags(meta)).map(([key, value]) =>
    `<meta ${key.startsWith('og:') ? 'property' : 'name'}="${key}" content="${escape(value)}">`)
  if (!meta.noindex) {
    tags.push(`<link rel="canonical" href="${escape(new URL(meta.path, 'https://synapp.us').href)}">`)
    tags.push(`<script id="page-schema" type="application/ld+json">${JSON.stringify(structuredData(meta)).replace(/</g, '\\u003c')}</script>`)
  }
  // Render every route independently so state cannot leak between pages.
  const { html: rendered, modules } = await render(meta.path)
  const styles = new Set()
  const preloads = new Set()
  const visited = new Set()
  function collectStyles(key) {
    if (visited.has(key) || !manifest[key]) return
    visited.add(key)
    if (manifest[key].file.endsWith('.js')) preloads.add(manifest[key].file)
    for (const css of manifest[key].css || []) styles.add(css)
    for (const dependency of manifest[key].imports || []) collectStyles(dependency)
  }
  for (const key of Object.keys(manifest)) {
    if (modules.some((id) => id === key || id.endsWith(`/${key}`))) collectStyles(key)
  }
  for (const css of styles) {
    if (!template.includes(`href="/${css}"`)) tags.push(`<link rel="stylesheet" href="/${css}">`)
  }
  for (const file of preloads) {
    if (!template.includes(`href="/${file}"`)) tags.push(`<link rel="modulepreload" crossorigin href="/${file}">`)
  }
  const head = `<title>${escape(meta.title)}</title>\n${tags.join('\n')}`
  const result = template.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, () => head)
    .replace('<!--app-html-->', () => rendered)
  const output = resolve('dist', meta.noindex ? '404.html' : `.${meta.path}index.html`)
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, result)
  console.log(`Rendered ${meta.path}`)
}
await writeFile('dist/.nojekyll', '')
await rm('.prerender', { recursive: true, force: true })
