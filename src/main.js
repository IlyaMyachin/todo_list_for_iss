import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// Warnings hook
app.config.warnHandler = (msg, vm, trace) => null

// Router
import router from './router'
// Use router
app.use(router)

// Pinia
import pinia from './pinia'
app.use(pinia)

// i18n
import i18n from './i18n'
app.use(i18n)

// Font awesome icons
import FontAwesomeIcon from './font-awesome'
app.component('font-awesome-icon', FontAwesomeIcon)

// Bulma
import './css/setup.scss'

app.mount('body')
