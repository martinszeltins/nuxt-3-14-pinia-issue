import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const appName = ref('Nuxt App 3.14')

    return {
        appName
    }
})
