<script setup>
import { ref } from 'vue';
import { useLoginStore } from '@/stores/login.js';

import { useRouter } from 'vue-router';

const loginStore = useLoginStore();
const router = useRouter();

const username = ref(null);
const password = ref(null);

async function login() {
    const user = {
        username: username.value,
        password: password.value
    }
    await loginStore.login(user)
    router.push('/')
}
</script>

<template>
    <main>
        <header>
            <h1>
                Booksmatch
            </h1>
        </header>

        <section>
            <img src="/userIcon.png" alt="">

            <input type="text" class="name" placeholder="Nome" v-model="username">

            <input type="password" class="password" placeholder="Senha" v-model="password">

            <button @click="login">
                Login
            </button>
        </section>
    </main>
</template>

<style scoped>
    main {
        width: 100%;
        height: 100%;
        background-color: var(--second);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    header {
        width: 100%;
        height: 10%;
        background-color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header h1 {
        color: var(--text);
        font-size: 3.0rem;
        text-transform: uppercase;
        font-weight: bolder;
    }

    section {
        display: flex;
        flex-direction: column;
        height: 50%;
        width: 15%;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin: auto;
    }

    section img {
        width: 200px;
    }

    section input {
        width: 100%;
        height: 30px;
        border: none;
        border-radius: 10px;
        outline: 0;
        padding-left: 10px;
    }

    section button {
        width: 50%;
        padding: 10px 0px;
        border: none;
        border-radius: 5px;
        background-color: var(--primary);
        color: var(--text);
        font-weight: bolder;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>