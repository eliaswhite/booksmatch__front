import { defineStore } from "pinia";
import loginService from "@/api/login.js"

export const useLoginStore = defineStore('login', {
    state: () => {
        return {
        isLoggedIn: false,
        user: {}
        }
    },
    actions: {
        async login(user) {
            console.log(user)
            const data = await loginService.login(user);
            this.isLoggedIn = true;
            this.user = data;
            console.log(this.user)
        }
    }
})