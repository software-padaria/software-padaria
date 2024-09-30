<script setup>
import Menu from '@/components/menuView.vue'
import { ref } from 'vue'

const table = ref([
    {
        dtcad: '16/06/2024',
        prod: '4',
        pfis: 'Julio Pacheco',
        empresa: 'Pacheco Carne e Massas LTDA.',
        CPF: '128.819.442-00',
        CNPJ: '84418702000180'
    }
])
</script>

<template>
    <!--Menu-->
    <Menu></Menu>

    <div class="w-[full] h-screen flex flex-col items-center bg-color4">
        <div class="flex items-end text-4xl w-[90vw] h-[5vh] border-b-2 border-white text-white">
            <h1>Fornecedores</h1>
        </div>
        <div class="flex justify-between text-2xl w-[90vw] h-[5vh] mt-4">
            <div class="w-[20%] h-full flex items-center justify-center bg-color6 rounded-md">
               <router-link to="/fornecedores2">Novo Fornecedor</router-link>
            </div>
            <div class="w-[60%] h-full flex justify-between px-2">
                <div class="flex items-center w-[80%] h-full bg-white rounded-rounded-left p-2">
                    <h1>Buscar Fornecedor</h1>
                </div>
                <div class="flex items-center w-[20%] bg-color6 rounded-rounded-right justify-center ">
                    <h1>Pesquisar</h1>
                </div>
            </div>
            <div class="flex items-center w-[20%] h-full flex bg-color6 rounded-md">
                <div class="flex items-center justify-center w-[20%] h-full rounded-rounded-left bg-color3">
                    <h1>Total</h1>
                </div>
                <div class="flex items-center justify-center w-[80%] h-full ">
                    <h1>6 Fornecedores</h1>
                </div>
            </div>
        </div>

        <div class="w-[90vw] h-[90vh] overflow-auto mt-10">
        <table class="w-full text-xl">
            <thead class="text-white">
                <tr>
                    <th class="text-center p-2">Data de Cadastro</th>
                    <th class="text-center p-2">Produto</th>
                    <th class="text-center p-2">Fornecedor</th>
                    <th class="text-center p-2">Empresa</th>
                    <th class="text-center p-2">CPF</th>
                    <th class="text-center p-2">CNPJ</th>
                </tr>
            </thead>
            <tbody class="text-white">
                <tr v-for="(item, index) in 6" :key="index" class="bg-color3 ">
                    <td class="p-2 text-center h-[100px]" >{{ table[0].dtcad }}</td>
                    <td class="p-2 text-center border-x-2 h-[100px]">{{ table[0].prod }}</td>
                    <td class="p-2 text-center border-x-2 h-[100px]">{{ table[0].pfis }}</td>
                    <td class="p-2 text-center border-x-2 h-[100px]">{{ table[0].empresa }}</td>
                    <td class="p-2 text-center border-x-2 h-[100px]">{{ table[0].CPF }}</td>
                    <td class="p-2 text-center border-x-2 h-[100px]">{{ table[0].CNPJ }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="flex w-[90vw] h-[10vw] justify-between rounded-md text-white font-bold">
        <div class="flex justify-center items-center w-[20%] h-[5vh] rounded-md bg-green-400">
            <h1>Adicionar Fornecedor</h1>
        </div>
        <div class="flex justify-center items-center w-[20%] h-[5vh] rounded-md bg-color1">
            <h1>Editar Fornecedor</h1>
        </div>
        <div class="flex justify-center items-center w-[20%] h-[5vh] rounded-md bg-blue-400">
            <h1>Vizualizar Fornecedor</h1>
        </div>
        <div class="flex justify-center items-center w-[20%] h-[5vh] rounded-md bg-red-500">
            <h1>Remover Forncedor</h1>
        </div>
    </div>
</div>
</template>

<style scoped></style>