<script setup>
import { RouterLink } from 'vue-router'
import Menu from '../assets/components/menuPag.vue'
</script>
<template>
  <div class="h-full p-4 bg-gray-800">
    <Menu></Menu>

    <div class="grid grid-cols-2 gap-4 bg-gray-800">
      <div class="bg-gray-100 p-4 rounded">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                ></path>
              </svg>
            </button>
            <span class="font-bold">QUANTIDADE</span>
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </button>
          </div>
          <span class="font-bold">1</span>
        </div>
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 12H6"
                ></path>
              </svg>
            </button>
            <span class="font-bold">DESCRIÇÃO DO ITEM OU CÓDIGO DE BARRAS</span>
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </button>
          </div>
          <div class="w-16 h-16 bg-gray-300 rounded-md flex items-center justify-center">
            <svg
              class="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </div>
        </div>
        <table class="w-full text-left text-gray-500 dark:text-gray-400">
          <thead class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">Quantidade</th>
              <th scope="col" class="px-6 py-3">Item/Descrição</th>
              <th scope="col" class="px-6 py-3">Valor Unitário</th>
              <th scope="col" class="px-6 py-3">Desconto</th>
              <th scope="col" class="px-6 py-3">Valor Total</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <button
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      ></path>
                    </svg>
                  </button>
                  <span class="font-bold">1</span>
                  <button
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td class="px-6 py-4">192838948994<br />Cafe com leite</td>
              <td class="px-6 py-4">4,50</td>
              <td class="px-6 py-4">% R$ 0,00</td>
              <td class="px-6 py-4">4,50</td>
            </tr>
            <tr class="bg-white hover:bg-gray-200 dark:hover:bg-gray-600">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <button
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      ></path>
                    </svg>
                  </button>
                  <span class="font-bold">1</span>
                  <button
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td class="px-6 py-4">188219302847<br />Coca-Cola lata</td>
              <td class="px-6 py-4">5,50</td>
              <td class="px-6 py-4">% R$ 0,00</td>
              <td class="px-6 py-4">5,50</td>
            </tr>
            <tr class="bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <button
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      ></path>
                    </svg>
                  </button>
                  <span class="font-bold">1</span>
                  <button
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td class="px-6 py-4">111776542789<br />Pacote Pão Int.</td>
              <td class="px-6 py-4">7,00</td>
              <td class="px-6 py-4">% R$ 0,00</td>
              <td class="px-6 py-4">7,00</td>
            </tr>
            <tr class="bg-white hover:bg-gray-200 dark:hover:bg-gray-600">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <button
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      ></path>
                    </svg>
                  </button>
                  <span class="font-bold">1</span>
                  <button
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td class="px-6 py-4">122756429921<br />Bananada</td>
              <td class="px-6 py-4">4,00</td>
              <td class="px-6 py-4">% R$ 0,00</td>
              <td class="px-6 py-4">4,00</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between items-center mt-4">
          <div class="flex items-center">
            <span class="font-bold">ITENS:</span>
            <span class="font-bold ml-2">4</span>
          </div>
          <div class="flex items-center">
            <span class="font-bold">SUBTOTAL:</span>
            <span class="font-bold ml-2">21,00</span>
          </div>
        </div>
        <div class="flex justify-between items-center mt-4">
          <div class="flex items-center">
            <span class="font-bold">DESCONTOS:</span>
            <span class="font-bold ml-2">0,00</span>
          </div>
          <div class="flex items-center">
            <span class="font-bold">TOTAL A PAGAR:</span>
            <span class="font-bold ml-2">21,00</span>
          </div>
        </div>
        <button
          class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          FINALIZAR VENDA
        </button>
      </div>
      <div class="bg-gray-100 p-4 rounded">
        <div class="flex justify-between items-center mb-4">
          <span class="font-bold">SALDO A PAGAR</span>
          <span class="font-bold">R$21,00</span>
        </div>
        <div class="mb-4">
          <span class="font-bold">INFORME O VALOR E SELECIONE A FORMA DE PAGAMENTO</span>
        </div>
        <div class="flex justify-between items-center mb-4">
          <span class="font-bold">R$</span>
          <input type="text" class="border rounded px-4 py-2 mr-2 w-32 text-right" value="0,00" />
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div class="mb-4">
          <button
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Método de Pagamento
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
        <div class="mb-4">
          <button
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Dados do Cliente
          </button>
        </div>
        <div class="mb-4">
          <input type="text" class="border rounded px-4 py-2 w-full" placeholder="Nome" />
        </div>
        <div class="mb-4">
          <input type="text" class="border rounded px-4 py-2 w-full" placeholder="CPF (opcional)" />
        </div>
        <div class="mb-4">
          <input
            type="text"
            class="border rounded px-4 py-2 w-full"
            placeholder="Cod. Cadastro (opcional)"
          />
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full bg-gray-100 p-4 rounded-t-lg">
      <div class="flex items-center justify-center">
        <svg
          class="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
