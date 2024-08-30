<script setup>
import Menu from '../assets/components/menuPag.vue'
</script>
<template>
  <div class="bg-gray-800 w-full h-screen">
    <div class="w-full h-[10vh] bg-black">
      <Menu class="h-full w-full" />
    </div>
    <div class="flex justify-center items-center h-[90vh] w-full">
      <div class="flex flex-col w-[70%] h-[90%] rounded-xl">
        <div class="w-full h-[40%]">

        </div>
        <div class="w-full h-[30%] gap-2">
          <div class="flex gap-2 justify-center w-full h-[50%]">
            <span class="text-6xl text-green-800">Abertura de</span>
            <span class="text-6xl text-green-800">caixa</span>
          </div>
          <div class="flex h-[40%] w-full border-t-2 border-black justify-center items-center">
            <span class="text-4xl">Informe os valores para abrir o caixa</span>
          </div>
        </div>
        <div class="h-[40%] w-full flex flex-col justify-center items-center">
          <div class="flex flex-col items-center justify-center w-96 h-40 bg-white rounded-t-xl">
            <h4 class="text-xs">
              disponivel em caixa
            </h4>
            <h1 class="text-4xl">
              R$ 00,00
            </h1>
          </div>
          <button class="bg-green-600 w-96 h-20 rounded-md ">Abrir Caixa</button>
        </div>
      </div>
    </div>
  </div>
</template>
