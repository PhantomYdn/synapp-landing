import { renderToString, type SSRContext } from '@vue/server-renderer'
import { createMemoryHistory } from 'vue-router'
import { createSiteApp } from './app'
export { pageMetas, metaTags, structuredData } from './services/seo.service'

export async function render(path: string) {
  const { app, router } = createSiteApp(createMemoryHistory())
  await router.push(path)
  await router.isReady()
  const context: SSRContext = {}
  const html = await renderToString(app, context)
  return { html, modules: [...(context.modules || [])] as string[] }
}
