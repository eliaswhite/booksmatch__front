<script setup>
import { computed, ref } from 'vue';
import Header from '../components/Header.vue';
import { useBookStore } from '../stores/book';

const bookStore = useBookStore();

const authors = computed(()=> bookStore.authors);
const categories = computed(()=> bookStore.categories)
const publishers = computed(()=> bookStore.publishers)

const title = ref(null)
const price = ref(null)

const showAuthors = ref(false)
const showCategories = ref(false)
const showPublishers = ref(false)

const activeAuthor = ref(null);
const activeCategorie = ref(null)
const activePublisher = ref(null)

const imageUrl = ref(null)
const image = ref(null)

function uploadImage(event) {
    console.log(event)
    const file = event.target.files[0];
    if (file) {
        imageUrl.value = URL.createObjectURL(file);
        image.value = file
    }
}

function addBook() {
    const book = {
        titulo: title.value,
        preco: price.value,
        autores: [activeAuthor.value.id],
        categoria: activeCategorie.value.id,
        editora: activePublisher.value.id,
        capa: null
    }
    const formData = new FormData();
    formData.append('file', image.value);
    formData.append('description', title.value);
    bookStore.addBook(book, formData);
}
</script>

<template>
    <Header/>

    <main>
        <h2>
            Cadastrar Livro
        </h2>

        <section>
            <div class="image">
                <img v-if="imageUrl != null" :src="imageUrl" alt="" class="resultImage">
                <img v-else src="/imagem.png" alt="" class="resultImage">
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" @change="uploadImage"/>
                <label for="imageUpload">
                    <img src="/add-image.png" alt="">
                </label>
            </div>

            <input type="text" placeholder="Titulo" class="title" v-model="title">

            <div class="authors">
                
                <div class="drop" @click="showAuthors = !showAuthors">
                    <p v-if="activeAuthor != null">
                    {{ activeAuthor.nome }}
                    </p>
                    <p v-else>
                        Autor
                    </p>

                    <img src="/drop.png" alt="Dropdown">
                </div>

                <span v-if="showAuthors">
                    <p v-for="author in authors" :key="author.id" @click="activeAuthor = author, showAuthors = false">
                        {{ author.nome }}
                    </p>
                </span>
            </div>

            <div class="categories">
                <div class="drop" @click="showCategories = !showCategories" >
                    <p v-if="activeCategorie != null">
                        {{ activeCategorie.descricao }}
                    </p>
                    <p v-else>
                        Categoria
                    </p>

                    <img src="/drop.png" alt="Dropdown">
                </div>

                <span v-if="showCategories">
                    <p v-for="categorie in categories" :key="categorie.id" @click="activeCategorie = categorie, showCategories = false">
                        {{ categorie.descricao }}
                    </p>
                </span>
            </div>

            <div class="publishers">
                
                <div class="drop" @click="showPublishers = !showPublishers">
                    <p v-if="activePublisher != null">
                    {{ activePublisher.nome }}
                    </p>
                    <p v-else>
                        Editora
                    </p>

                    <img src="/drop.png" alt="Dropdown">
                </div>

                <span v-if="showPublishers">
                    <p v-for="publisher in publishers" :key="publisher.id" @click="activePublisher = publisher, showPublishers = false">
                        {{ publisher.nome }}
                    </p>
                </span>
            </div>

            <input type="number" placeholder="Preço" class="price" v-model="price">

            <button @click="addBook">Salvar</button>
        </section>
    </main>
</template>

<style scoped>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;
        gap: 50px;
        padding: 50px 0;
    }

    h2 {
        font-size: 2.0rem;
        font-weight: bolder;
        text-transform: uppercase;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .title, .price {
        width: 100%;
        height: 30px;
        border: none;
        background-color: var(--second);
        padding: 0 10px;
        border-radius: 5px;
        outline: 0;
    }

    .title::placeholder, .price::placeholder {
        color: black;
    }

    .authors, .categories, .publishers {
        width: 100%;
        height: 30px;
        position: relative;
        background-color: var(--second);
        font-size: 1.3rem;
        border-radius: 5px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .authors .drop, .categories .drop, .publishers .drop{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .authors .drop img, .categories .drop img, .publishers .drop img {
        width: 10px;
        height: 10px;
    }

    .authors span, .categories span, .publishers span {
        position: absolute;
        top: 32px;
        left: 0;
        width: 100%;
        overflow-y: auto;
        height: 100px;
        z-index: 9;
        background-color: var(--second);
        padding: 5px 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .authors span p:hover, .categories span p:hover, .publishers span p:hover{
        color: #888;
    }

    button {
        background-color: var(--primary);
        border: none;
        height: 40px;
        border-radius: 5px;
        font-size: 1.6rem;
        color: var(--text);
        font-weight: bolder;
        text-transform: uppercase;
        cursor: pointer;
    }

    .image {
        position: relative;
    }

    .image label {
        position: absolute;
        right: -20px;
        bottom: 10px;
        background-color: var(--second);
        border-radius: 50%;
        padding: 10px;
        cursor: pointer;
    }
    .image input {
        display: none;
    }

    .image label img{
        width: 20px;
        height: 20px;
    }

    .image .resultImage {
        width: 200px;
        height: 320px;
    }
</style>