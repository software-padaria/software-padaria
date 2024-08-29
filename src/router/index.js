import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/RegistroVendas',
      name: 'RegistroVendas',
      component: () => import('../views/RegistroVendas.vue')
    },
    {
      path: '/RegistroEstoques',
      name: 'RegistroEstoques',
      component: () => import('../views/RegistroEstoques.vue')
    },
    {
      path: '/RegistroConsumos',
      name: 'RegistroConsumos',
      component: () => import('../views/RegistroConsumos.vue')
    },
    {
      path: '/RegistroClientes',
      name: 'RegistroClientes',
      component: () => import('../views/RegistroClientes.vue')
    },
  ]
})

export default router
