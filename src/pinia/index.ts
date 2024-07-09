import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// Use Pinia persisted state
pinia.use(piniaPluginPersistedstate)

export default pinia