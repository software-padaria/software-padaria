<script setup>

</script>

<template>
  <div class="w-[90vw]">
    <h2 class="text-3xl text-white mt-10">CADASTRO DE FORNECEDORES</h2>
  </div>
  <div class="flex w-[90vw] h-[90vh]  mt-10 ">
    <div class="w-[70vw] h-[60vh]">
      <div class="bg-color3 p-4 w-[70vw] h-[60vh] border-r-2 rounded">
        <div class="mb-4">
          <ul class="flex border-b border-gray-700 text-white font-bold">
            <router-link to="/fornecedores2" class="mr-4 ">Geral</router-link>
            <router-link to="/fornecedores3" class="mr-4 pb-2">Endereço</router-link>
            <router-link to="/fornecedores4" class="pb-2">Extras</router-link>
        </ul>
        </div>
        <div class="grid grid-cols-2 gap-4  ">
          <input type="text" placeholder="Nome do Produto"
            class="placeholder:text-white bg-transparent border-2 h-[5vh] text-white p-2 rounded">
          <input type="text" placeholder="Valor do Produto"
            class="bg-transparent placeholder:text-white border-2 h-[5vh] text-white p-2 rounded">
          <input type="text" placeholder="Codigo do Produto"
            class="bg-transparent placeholder:text-white border-2 h-[5vh] text-white p-2 rounded">
          <input type="text" placeholder="Valor de Compra"
            class="bg-transparent placeholder:text-white border-2 h-[5vh] text-white p-2 rounded">
        </div>
        <div class="flex gap-4 py-4">
          <button class="  text-white py-2 px-4 rounded  bg-green-600">
            <i class=""> Adicionar Produto</i>
          </button>
          <button class="  text-white py-2 px-4 rounded  bg-red-600">
            <i class=""> Deletar Produto</i>
          </button>
        </div>
        <div class="mt-4">
          <div class="grid grid-cols-2 gap-4  ">
            <input type="text" placeholder="Nome do Produto"
              class="placeholder:text-white bg-transparent border-2 h-[5vh] text-white p-2 rounded">
            <input type="text" placeholder="Valor do Produto"
              class="bg-transparent placeholder:text-white border-2 h-[5vh] text-white p-2 rounded">
            <input type="text" placeholder="Codigo do Produto"
              class="bg-transparent placeholder:text-white border-2 h-[5vh] text-white p-2 rounded">
            <input type="text" placeholder="Valor de Compra"
              class="bg-transparent placeholder:text-white border-2 h-[5vh] text-white p-2 rounded">
          </div>
        </div>

      </div>
    </div>
    <div class="flex flex-col items-center gap-4 pt-3 w-[70vw] h-[60vh] bg-color3 overflow-auto">
      <div class="w-[90%] h-[10%] flex ">
        <div class="bg-gray-900 w-fit  rounded-rounded-left">
          <img src="../../assets/icons8-usuário-60.png" alt="">
        </div>
        <div class="bg-gray-700 flex items-center pl-2 w-full text-2xl rounded-rounded-right">
          <h1 class="">Nome</h1>
        </div>
      </div>

      <div class="w-[90%] h-[10%] flex ">
        <div class="bg-gray-900 w-fit  rounded-rounded-left">
          <img src="../../assets/icons8-usuário-60.png" alt="">
        </div>
        <div class="bg-gray-700 flex items-center pl-2 w-full text-2xl rounded-rounded-right">
          <h1 class="">Nome</h1>
        </div>
      </div>

      <div class="w-[90%] h-[10%] flex ">
        <div class="bg-gray-900 w-fit  rounded-rounded-left">
          <img src="../../assets/icons8-usuário-60.png" alt="">
        </div>
        <div class="bg-gray-700 flex items-center pl-2 w-full text-2xl rounded-rounded-right">
          <h1 class="">Nome</h1>
        </div>
      </div>

      <div class="w-[90%] h-[10%] flex ">
        <div class="bg-gray-900 w-fit  rounded-rounded-left">
          <img src="../../assets/icons8-usuário-60.png" alt="">
        </div>
        <div class="bg-gray-700 flex items-center pl-2 w-full text-2xl rounded-rounded-right">
          <h1 class="">Nome</h1>
        </div>
      </div>

      <div class="w-[90%] h-[10%] flex justify-center ">
         <button class="bg-green-500 rounded-md font-bold w-[90vw]">
          Salvar Fornecedores
         </button>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center w-screen pb-14 h-10vh">
  <div class="flex justify-between w-[90vw] h-[10vh] pt-10">
    <button class="bg-gray-600 text-white py-2 px-4 rounded">ADICIONAR FORNECEDOR</button>
    <button class="bg-blue-600 text-white py-2 px-4 rounded">EDITAR FORNECEDOR</button>
    <button class="bg-blue-800 text-white py-2 px-4 rounded">VISUALIZAR FORNECEDORES</button>
    <button class="bg-green-600 text-white py-2 px-4 rounded">SALVAR FORNECEDOR</button>
    <button class="bg-red-600 text-white py-2 px-4 rounded">REMOVER FORNECEDOR</button>
  </div>
</div>
</template>
