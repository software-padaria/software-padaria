import { createRouter, createWebHistory } from 'vue-router'
import RegistroEstoque from '../views/RegistroEstoque.vue';
import RegistroConsumo from '../views/RegistroConsumo.vue';
import RegistroClientes from '../views/RegistroClientes.vue';
import RegistroVendas from '../views/RegistroVendas.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'RegistroVendas',
      component: RegistroVendas
    },
    {
      path: '/RegistroEstoque',
      name: 'RegistroEstoque',
      component: RegistroEstoque
    },
    {
      path: '/RegistroConsumo',
      name: 'RegistroConsumo',
      component: RegistroConsumo
    },
    {
      path: '/RegistroClientes',
      name: 'RegistroClientes',
      component: RegistroClientes
    },
  ]
})

export default router
