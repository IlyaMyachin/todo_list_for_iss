import {ref} from 'vue'
import {defineStore} from 'pinia'
import {setGlobalLocale} from '@/i18n'
import AppStore, {AppState, defaultAppState} from '@/types/app/AppStore'

const defineAppStore = defineStore('app', () => {
    const state = ref<AppState>(defaultAppState())

    const reset = () => {
        setGlobalLocale()
        hideAppModal()
    }

    const hideAppModal = () => state.value.modal.active = false
    const showAppModal = () => state.value.modal.active = true

    return {
        ...{
            state,
            reset,
            showAppModal,
            hideAppModal
        }
    }
}, {
    persist: {
        afterRestore: ctx => {
            ctx.store.reset()
            ctx.store.hideAppModal()
        }
    }
})

const useAppStore = (): AppStore => defineAppStore()

export default useAppStore