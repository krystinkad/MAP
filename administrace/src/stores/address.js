import { defineStore } from 'pinia'

export const serverAddress = defineStore('serverAddress', {
    state: () => {
        return {
            address: "http://localhost:5174"
        }
    }
})