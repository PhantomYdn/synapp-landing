import { createWebHistory } from 'vue-router'
import { createSiteApp } from './app'
import './assets/styles/tokens.css'
import './assets/styles/base.css'
import './assets/styles/utilities.css'
import './assets/styles/animations.css'

const { app, router } = createSiteApp(createWebHistory(), import.meta.env.PROD)
router.isReady().then(() => app.mount('#app'))
