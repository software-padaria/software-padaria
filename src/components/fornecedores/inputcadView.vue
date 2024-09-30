<script setup>

</script>

<template>
    <div class="w-[90vw] h-[90vh] overflow-auto mt-10 ">
        <h2 class="text-3xl text-white mb-4">CADASTRO DE FORNECEDORES</h2>
        <div class="bg-color3 p-4 rounded">
            <div class="mb-4">
                <ul class="flex border-b border-gray-700 text-white font-bold">
                    <router-link to="/fornecedores2" class="mr-4 ">Geral</router-link>
                    <router-link to="/fornecedores3" class="mr-4 pb-2">Endereço</router-link>
                    <router-link to="/fornecedores4" class="pb-2">Extras</router-link>
                </ul>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4 ">
                <input type="text" placeholder="Nome" class="placeholder:text-white bg-transparent border-2 h-[5vh] text-white p-2 rounded">
                <input type="text" placeholder="CNPJ" class="bg-transparent placeholder:text-white border-2 h-[5vh] text-white p-2 rounded">
                <input type="text" placeholder="CPF" class="bg-transparent placeholder:text-white border-2 h-[5vh] text-white p-2 rounded">
                <input type="text" placeholder="Insc. Estadual" class="bg-transparent placeholder:text-white border-2 h-[5vh] text-white p-2 rounded">
                <input type="text" placeholder="Insc. Municipal" class="bg-transparent placeholder:text-white border-2 h-[5vh] text-white p-2 rounded">
            </div>
            <div class="mb-4">
                <h3 class="text-lg font-bold mb-2">Contatos</h3>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="flex items-center">
                        <select class="bg-transparent border-2 text-white h-[5vh] p-2 rounded-l-md">
                            <option>Celular</option>
                            <option>Telefone</option>
                        </select>
                        <input type="text" placeholder="Número"
                            class="bg-transparent placeholder:text-white border-2 text-white p-2 h-[5vh] rounded-r-md flex-grow">
                        <input type="text" placeholder="Observações*"
                            class="bg-transparent placeholder:text-white border-2 text-white p-2 h-[5vh] rounded ml-4 flex-grow">
                    </div>
                    <div class="flex items-center justify-center">
                        <div class="bg-transparent border-2 placeholder:text-white text-white p-2 rounded-l-md h-[5vh]">
                            <option>Email</option>
                        </div>
                        <input type="text" placeholder="Email"
                            class="bg-transparent border-2 h-[5vh] text-white p-2 rounded-r-md flex-grow">
                    </div>
                </div>
                <div class="flex fle-col gap-4">
                <button class="bg-color4  text-white py-2 px-4 rounded">
                    <i class="fas fa-plus"> CONTATOS</i>
                </button>
                <button class="  text-white py-2 px-4 rounded  bg-green-600">
                    <i class="fas fa-plus"> SALVAR FORNECEDOR</i>
                </button>
            </div>
            </div>
        </div>

        <div class="flex justify-between pt-10">
            <button class="bg-gray-600 text-white py-2 px-4 rounded">ADICIONAR FORNECEDOR</button>
            <button class="bg-blue-600 text-white py-2 px-4 rounded">EDITAR FORNECEDOR</button>
            <button class="bg-blue-800 text-white py-2 px-4 rounded">VISUALIZAR FORNECEDORES</button>
            <button class="bg-green-600 text-white py-2 px-4 rounded">SALVAR FORNECEDOR</button>
            <button class="bg-red-600 text-white py-2 px-4 rounded">REMOVER FORNECEDOR</button>
        </div>
    </div>
</template>
