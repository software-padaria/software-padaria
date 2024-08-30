<script setup>
  import { defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close']);

const handleItemClick = () => {
  emit('close');
};
  </script>

<template>
    <div :class="['fixed top-0 left-0 w-64 h-full bg-color3 text-black transition-transform duration-300', {'-translate-x-full': !isOpen, 'translate-x-0': isOpen}]">
      <div class="p-5">
        <div class="text-2xl font-bold mb-6">Menu</div>
        <ul>
          <li class="mb-4 font-bold">
            <router-link to="/" class="hover:text-color5" @click.native="handleItemClick">HOME</router-link>
          </li>
          <li class="mb-4 font-bold">
            <router-link to="/estoque" class="hover:text-color5" @click.native="handleItemClick">ESTOQUE</router-link>
          </li>
          <li class="mb-4 font-bold">
            <router-link to="/vendas" class="hover:text-color5" @click.native="handleItemClick">VENDAS</router-link>
          </li>
          <li class="mb-4 font-bold ">
            <router-link to="/pedidos" class="hover:text-color5" @click.native="handleItemClick">PEDIDOS</router-link>
          </li>
          <li class="mb-4 font-bold">
            <router-link to="/fornecedores" class="hover:text-color5" @click.native="handleItemClick">FORNECEDORES</router-link>
          </li>
          <li class="mb-4 font-bold">
            <router-link to="/relatorios" class="hover:text-color5" @click.native="handleItemClick">RELATÓRIOS</router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <style scoped>
  .translate-x-0 {
    transform: translateX(0);
  }
  
  .translate-x-full {
    transform: translateX(-100%);
  }
  </style>