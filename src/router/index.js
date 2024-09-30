<<<<<<< Updated upstream
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')

    },
    {
      path:'/RegistroClientes',
      name:'RegistroClientes',
      component: () => import('../views/RegistroClientes.vue')
    },
    {
      path: '/RegistroConsumo',
      name: 'RegistroConsumo',
      component: () => import('../views/RegistroConsumo.vue')
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
    },
    {
      path: '/RegistroEstoque',
      name: 'RegistroEstoque',
      component: () => import('../views/RegistroEstoque.vue')
    },
    {
      path: '/RegistroVendas',
      name: 'RegistroVendas',
      component: () => import('../views/RegistroVendas.vue')
    },
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
]
})

export default router
=======
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vendas1',
      name: 'vendas1',
      component: () => import('../views/vendas1view.vue')
    },
    {
      path: '/vendas2',
      name: 'vendas2',
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
    },
    {
      path: '/fornecedores',
      name: 'Fornecedores',
      component: () => import('../views/fornecedores/FornecedoresView.vue')
    },
    {
      path: '/fornecedores2',
      name: 'Fornecedores2',
      component: () => import('../views/fornecedores/Fornecedores2View.vue')
    },
    {
      path: '/fornecedores3',
      name: 'Fornecedores3',
      component: () => import('../views/fornecedores/Fornecedores3View.vue')
    },
    {
      path: '/fornecedores4',
      name: 'Fornecedores4',
      component: () => import('../views/fornecedores/Fornecedores4View.vue')
    },
  ],
})

export default router
>>>>>>> Stashed changes
