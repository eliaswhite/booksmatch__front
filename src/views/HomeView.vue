<script setup>
import { computed } from 'vue';
import Header from '../components/Header.vue';

import { useBookStore } from '../stores/book';

const bookStore = useBookStore()

const books = computed(() => bookStore.books)
</script>

<template>
  <Header />
  <main>
    <section class="news">

      <h2>
        Recentes
      </h2>

      <div class="books">
        <div v-for="book in books" class="book">
          <img :src="book.capa" alt="">
          <p class="title">{{ book.titulo }}</p>
          <p class="price">R$ {{ book.preco }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .news {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .news h2 {
    font-size: 2.0rem;
    text-transform: uppercase;
    color: var(--text);
    background-color: var(--primary);
    padding: 5px 20px;
    border-radius: 40px;
  }

  .news .books {
    display: flex;
    width: 90%;
    gap: 30px;
    overflow-x: auto;
  }
  
  .books .book {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
  }
  
  .book img{
    width: 200px;
    height: 320px;
    margin-bottom: 10px;
  }
  .book .title {
    font-size: 1.3rem;
    text-transform: uppercase;
    text-wrap: wrap;
  }

  .book .price {
    font-size: 1.3rem;
    font-weight: bold;
  }
</style>
