import { readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

async function pages(directory, prefix = '') {
  const result = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${prefix}/${entry.name}`
    if (entry.isDirectory() && entry.name !== 'assets') {
      result.push(...await pages(join(directory, entry.name), path))
    } else if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== '404.html') {
      result.push(path.replace(/index\.html$/, ''))
    }
  }
  return result
}
const urls = (await pages('dist')).sort()
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>https://synapp.us${path}</loc></url>`).join('\n')}
</urlset>
`)
console.log(`Sitemap contains ${urls.length} public pages.`)
