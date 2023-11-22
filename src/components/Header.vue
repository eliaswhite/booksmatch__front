<script setup>
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';

const router = useRouter()

const links = [{
    name: 'Inicio',
    path: '/'
},
{
    name: 'Categorias',
    path: '/categorias'
},
{
    name: 'Livros',
    path: '/livros'
}
]

const activeRouter = computed(()=> router.currentRoute.value.path)

onMounted(()=> {
    console.log(activeRouter.value)
})
</script>

<template>
    <header>
        <h1>
            BooksMatch
        </h1>

        <section class="links">
            <div class="link" v-for="link in links" :class="activeRouter == link.path ? 'activeRoute' : ''">
                <router-link :to="link.path">
                    <p>
                        {{ link.name }}
                    </p>
                </router-link>
            </div>
        </section>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: var(--primary);
}

h1 {
    font-size: 3.0rem;
    font-weight: bolder;
    text-transform: uppercase;
}

.links {
    display: flex;
    gap: 20px;
}

.links .link {
    font-size: 2rem;
    text-transform: uppercase;
    cursor: pointer;
    color: var(--second);
}

a {
    text-decoration: none;
    color: var(--second);
}

.activeRoute p{
    color: black !important;
}
</style>