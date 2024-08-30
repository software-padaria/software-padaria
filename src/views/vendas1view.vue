<script setup>
import Menu from '../assets/components/menuPag.vue'
</script>
<template>
  <div class="bg-gray-500 w-full h-screen">
    <div class="w-full h-[10vh] bg-black">
      <Menu class="h-full w-full" />
    </div>
    <div class="flex justify-center items-center h-[90vh] w-full">
      <div class="flex flex-col w-[70%] h-[90%] bg-gray-400 rounded-xl">
        <div class="w-full h-[40%]">

        </div>
        <div class="w-full h-[30%] gap-2">
          <div class="flex gap-2 justify-center w-full h-[50%]">
            <span class="text-6xl">Caixa</span>
            <span class="text-6xl text-red-800">Fechado</span>
          </div>
          <div class="flex h-[50%] w-full border-t-2 justify-center items-center">
            <span class="text-4xl">Abra o caixa para finalizar suas vendas</span>
          </div>
        </div>
        <div class="h-[30%] w-full flex flex-col justify-center items-center gap-4">
          <button class="bg-red-600 w-96 h-20 rounded-md ">Abrir Caixa</button>
          <button class="bg-gray-500 w-96 h-20 rounded-md">Fechar Caixa</button>
        </div>
      </div>
    </div>
  </div>
</template>
