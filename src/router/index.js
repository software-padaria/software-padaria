import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/vendas1',
      name:'vendas1',
      component: () => import('../views/vendas1view.vue')

    },
    {
      path:'/vendas2',
      name:'vendas2',
      component: () => import('../views/vendas2view.vue')
    },
    {
      path: '/vendas3',
      name: 'vendas3',
      component: () => import('../views/vendas3view.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue')
    }
]
})

export default router
