<script setup>
import { ref, computed } from 'vue';
import { useBookStore } from '../stores/book';
import Header from '../components/Header.vue';

const bookStore = useBookStore();

const categories = computed(() => bookStore.categories)

const input = ref(null)
const showMessage = ref(false);
const message = ref()

async function addCategorie() {
    const categorie = {
        descricao: input.value
    }
    await bookStore.addCategorie(categorie);
}

async function deleteCategorie(id) {
    const data = await bookStore.deleteCategorie(id);
    message.value = data;
    showMessage.value = true;
    setTimeout(() => {
        showMessage.value = false
    }, 3000)
}
</script>

<template>
    <Header />

    <main>
        <div class="input">
            <input type="text" placeholder="Adicionar categoria" v-model="input">
            <button @click="addCategorie">
                Salvar
            </button>
        </div>

        <div class="categories">
            <div v-for="categorie in categories" class="categorie">
                <p>
                    {{ categorie.descricao }}
                </p>

                <button @click="deleteCategorie(categorie.id)">
                    <img src="/delete.png" alt="">
                </button>
            </div>
        </div>

        <span class="message" v-if="showMessage">
            <p>
                {{ message.message }}
            </p>
        </span>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 50px;
    padding: 50px 0;
}

.input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 30px;
}

.input input {
    width: 80%;
    height: 100%;
    border: none;
    background-color: var(--second);
    padding: 0 10px;
}

.input button {
    width: 20%;
    height: 100%;
    border: none;
    background-color: var(--primary);
    color: var(--text);
    font-weight: bolder;
    text-transform: uppercase;
    cursor: pointer;
}

.categories {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 30%;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;

}

.categories .categorie {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background-color: var(--second);
    padding: 10px 20px;
    font-size: 1.6rem;
}

.categories .categorie button {
    border: none;
    width: 20px;
    height: 20px;
    background-color: transparent;
    cursor: pointer;
}

.categories .categorie button img {
    width: 100%;
    height: 100%;
}

.message {
    position: fixed;
    right: 0;
    top: 20%;
    padding: 10px 20px;
    font-size: 1.3rem;
    color: var(--text);
    text-transform: uppercase;
    font-weight: bold;
    background-color: var(--primary) ;
}




</style>