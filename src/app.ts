import { createApp, createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n'
import type { RouterHistory } from 'vue-router'
import App from './App.vue'
import { createSiteRouter } from './router'
import en from './locales/en.json'

export function createSiteApp(history: RouterHistory, hydrate = true) {
  const app = hydrate ? createSSRApp(App) : createApp(App)
  const router = createSiteRouter(history)
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en }
  })
  app.use(router)
  app.use(i18n)
  return { app, router }
}
