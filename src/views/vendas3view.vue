<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import SideBar from '@/components/SideBar.vue'

const isSidebarOpen = ref(false)
const sidebarRef = ref(null)
const appContainer = ref(null)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const handleClickOutside = (event) => {
  if (appContainer.value && !appContainer.value.contains(event.target) && isSidebarOpen.value) {
    closeSidebar()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
<template>
 <div class="flex" ref="appContainer">
    <SideBar :isOpen="isSidebarOpen" @close="closeSidebar" ref="sidebarRef" />
    <div class="flex-1">
      <header class="bg-color1 shadow fixed w-screen">
        <div class="container py-8 flex items-center">
          <button class="text-white text-lg mx-16" @click="toggleSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="40"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path>
                </g>
              </g>
            </svg>
          </button>
          <h1 class="text-4xl font-bold text-white ml-8 mr-0.5">Lay</h1>
          <h1 class="text-4xl font-bold text-color2">UP</h1>
          <img src="../assets/icons8-layers-48.png" width="43" alt="" />
          <div class="relative flex flex-row w-full">
            <input
              type="text"
              placeholder="SEARCH FOR..."
              class="bg-white text-color2 font-bold border border-color2 rounded-sm py-2 px-4 ml-20 w-10/12 focus:outline-none focus:text-black"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 48 48"
              class="searchIcon"
            >
              <path
                d="M 20.5 6 C 12.515556 6 6 12.515562 6 20.5 C 6 28.484438 12.515556 35 20.5 35 C 23.773158 35 26.788919 33.893018 29.220703 32.050781 L 38.585938 41.414062 A 2.0002 2.0002 0 1 0 41.414062 38.585938 L 32.050781 29.220703 C 33.893017 26.788918 35 23.773156 35 20.5 C 35 12.515562 28.484444 6 20.5 6 z M 20.5 10 C 26.322685 10 31 14.677319 31 20.5 C 31 23.295711 29.914065 25.820601 28.148438 27.697266 A 2.0002 2.0002 0 0 0 27.701172 28.144531 C 25.824103 29.912403 23.29771 31 20.5 31 C 14.677315 31 10 26.322681 10 20.5 C 10 14.677319 14.677315 10 20.5 10 z"
              ></path>
            </svg>
          </div>
          <div class="text-white flex flex-row">
            <!--perfil-->
            <img src="../assets/icons8-usuário-60.png" class="bg-white rounded w-13" alt="" />
            <div class="flex flex-col ml-3 text-lg">
              <router-link to="/login">Pedro</router-link>
              <router-link to="/login">123456789</router-link>
            </div>
          </div>
        </div>
      </header>

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
  </div>
  </div>
</template>
