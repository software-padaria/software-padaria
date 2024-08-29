<template>
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900">
          <div class="container mx-auto px-4 py-8">
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                <h1 class="text-2xl font-bold text-white ml-2">LayUP</h1>
              </div>
              <div class="flex items-center">
                <input type="text" class="border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="SEARCH FOR...">
                <svg class="w-6 h-6 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <button class="ml-4 flex items-center rounded-md bg-gray-700 px-4 py-2 text-white">
                  <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  Pedro
                  <span class="ml-2 text-xs">123456789</span>
                </button>
              </div>
            </div>
            
            <div class="w-full rounded-lg shadow-lg bg-gray-800 p-8">
              <div class="flex justify-end">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancelar Operação</button>
              </div>
              <div class="flex flex-col items-center justify-center">
                <svg class="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 0112 0v1z"></path></svg>
                <h2 class="text-2xl font-bold text-green-500 mt-4">ABERTURA DE CAIXA</h2>
                <p class="text-sm text-gray-400 mt-2">Informe os valores para abrir o caixa</p>
              </div>
              <div class="mt-8 w-full flex justify-center flex-col items-center vg">
                <div class="bg-white w-duzz rounded-lg shadow-lg p-4 text-center">
                  <p class="text-sm text-gray-700 font-bold">DISPONÍVEL EM CAIXA</p>
                  <h3 class="text-3xl font-bold text-green-500 mt-2 ">R$0,00</h3>
                   <button class=" w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 ">ABRIR CAIXA</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </template>
      
      