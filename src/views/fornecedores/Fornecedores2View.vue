<script setup>
import Menu from '@/components/menuView.vue'
import CadG from '@/components/fornecedores/inputcadView.vue'

</script>

<template>
    <Menu />

    <div class="w-[full] h-screen flex flex-col items-center bg-color4">
        <div class="flex items-end text-4xl w-[90vw] h-[5vh] border-b-2 border-white text-white">
            <h1>Fornecedores</h1>
        </div>
        <div class="flex justify-between text-2xl w-[90vw] h-[5vh] mt-4">
            <div class="w-[20%] h-full flex items-center justify-center bg-color6 rounded-md">
                <h1>Novo Forncedor</h1>
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

        <CadG />
       
    </div>

</template>
