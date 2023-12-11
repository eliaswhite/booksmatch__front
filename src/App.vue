<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { useBookStore } from './stores/book';

const bookStore = useBookStore();

onMounted(async ()=> {
  await bookStore.getBooks();
  await bookStore.getCategories();
  await bookStore.getAuthors();
  await bookStore.getPublishers();
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
