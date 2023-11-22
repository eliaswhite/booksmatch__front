import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/HomeView.vue')
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: ()=> import('@/views/CategoriesView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('@/views/LoginView.vue')
    },

  ]
})

export default router
