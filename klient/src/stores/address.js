import { defineStore } from 'pinia'

export const serverAddress = defineStore('serverAddress', {
    state: () => {
        return {
            address: "https://kristynadrevikovska.cz:5174"
        }
    }
})