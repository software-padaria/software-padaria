<script setup>
import { RouterLink } from 'vue-router'
import Menu from '../assets/components/menuPag.vue'
</script>

<template>

  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-800">
    <div class="container mx-auto px-4 py-8">
     <Menu></Menu>

      <div class="w-full rounded-lg p-8">
        <div class="flex justify-end">
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Cancelar Operação
          </button>
        </div>
        <div class="flex flex-col items-center justify-center">
          <svg
            class="w-24 h-24 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 0112 0v1z"
            ></path>
          </svg>
          <h2 class="text-2xl font-bold text-green-500 mt-4">ABERTURA DE CAIXA</h2>
          <p class="text-sm text-gray-400 mt-2">Informe os valores para abrir o caixa</p>
        </div>
        <div class="mt-8 w-full flex justify-center flex-col items-center vg">
          <div class="bg-white w-duzz rounded-lg shadow-lg p-4 text-center">
            <p class="text-sm text-gray-700 font-bold">DISPONÍVEL EM CAIXA</p>
            <h3 class="text-3xl font-bold text-green-500 mt-2">R$0,00</h3>

            <RouterLink to="/vendas3"
              class="w-full bg-green-500 hover:bg-green-700 text-white justify-center flex font-bold py-2 px-4 rounded mt-4"
              >ABRIR CAIXA</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
