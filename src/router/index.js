import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/RegistroVendas',
      name: 'RegistroVendas',
      component: () => import('../views/RegistroVendas.vue')
    },
  ]
})

export default router
