import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import en from './locales/en.json'

// Global styles
import './assets/styles/tokens.css'
import './assets/styles/base.css'
import './assets/styles/utilities.css'
import './assets/styles/animations.css'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en },
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
