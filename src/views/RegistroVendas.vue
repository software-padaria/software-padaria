<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import SideBar from '@/components/SideBar.vue';

const isSidebarOpen = ref(false);
const sidebarRef = ref(null);
const appContainer = ref(null);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const handleClickOutside = (event) => {
  if (appContainer.value && !appContainer.value.contains(event.target) && isSidebarOpen.value) {
    closeSidebar();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="flex" ref="appContainer">
    <SideBar :isOpen="isSidebarOpen" @close="closeSidebar" ref="sidebarRef" />
    <div class="flex-1">
      <header class="bg-color1 shadow">
        <div class="container py-8 flex items-center">
          <button class="text-white text-lg mx-16" @click="toggleSidebar">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0,0,256,256">
              <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                style="mix-blend-mode: normal">
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
            <input type="text" placeholder="SEARCH FOR..."
              class="bg-white text-color2 font-bold border border-color2 rounded-sm py-2 px-4 ml-20 w-10/12 focus:outline-none focus:text-black" />
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48"
              class="searchIcon">
              <path
                d="M 20.5 6 C 12.515556 6 6 12.515562 6 20.5 C 6 28.484438 12.515556 35 20.5 35 C 23.773158 35 26.788919 33.893018 29.220703 32.050781 L 38.585938 41.414062 A 2.0002 2.0002 0 1 0 41.414062 38.585938 L 32.050781 29.220703 C 33.893017 26.788918 35 23.773156 35 20.5 C 35 12.515562 28.484444 6 20.5 6 z M 20.5 10 C 26.322685 10 31 14.677319 31 20.5 C 31 23.295711 29.914065 25.820601 28.148438 27.697266 A 2.0002 2.0002 0 0 0 27.701172 28.144531 C 25.824103 29.912403 23.29771 31 20.5 31 C 14.677315 31 10 26.322681 10 20.5 C 10 14.677319 14.677315 10 20.5 10 z">
              </path>
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
    </div>
  </div>
  <div class="font-sans bg-color4 text-white flex flex-col min-h-screen">
    <main class="p-5">
      <section class="relative bg-cover bg-center h-72 mb-5 mx-auto max-w-screen-lg">
        <div class="absolute bottom-5 left-5 text-white">
          <h1 class="text-6xl mb-2">All in One</h1>
          <p class="text-2xl">Todos seus relatórios em um lugar só</p>
          <nav class="relative bg-white mt-10 mx-auto w-full max-w-lg rounded">
            <label @click="toggleMenu" class="block py-3 px-5 text-black text-xl font-semibold cursor-pointer">
              <span class="inline-block px-0">REGISTRO DE VENDAS</span>
              <span class="float-right inline-block">+</span>
            </label>
            <ul :class="{ 'h-[120px] translate-y-[-3px]': isMenuOpen, 'h-0': !isMenuOpen }"
              class="bg-white absolute w-full overflow-hidden text-center transition-all duration-400 ease-in-out list-none">
              <li class="py-2">
                <router-link to="/RegistroEstoque" class="text-black">REGISTRO DE ESTOQUE</router-link>
              </li>
              <li class="py-2">
                <router-link to="/RegistroConsumo" class="text-black">REGISTRO DE CONSUMO</router-link>
              </li>
              <li class="py-2">
                <router-link to="/RegistroClientes" class="text-black">REGISTRO DE CLIENTES</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <input type="text" placeholder="Search Register..."
        class="mx-auto mb-2 w-full max-w-xs bg-white border-none rounded-lg p-3 text-black text-lg" />
      <section class="rounded-lg mx-auto max-w-screen-2xl">
        <table class="w-fit border-collapse mx-auto text-2xl">
          <thead>
            <tr>
              <th class="p-3">Data</th>
              <th class="p-3">Hora</th>
              <th class="p-3">Cliente</th>
              <th class="p-3">Produtos</th>
              <th class="p-3">Vendedor</th>
              <th class="p-3">Valor Total</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-neutral-700">
              <td class="border text-center">16/02/2024</td>
              <td class="border text-center">16:24</td>
              <td class="border text-center">William</td>
              <td class="border">
                <div class="flex items-center gapx-5 py-0 mb-1">
                  <div class="overflow-x-auto">
                    <table class="w-auto text-xs">
                      <thead>
                        <tr>
                          <th class="px-1 p-1 border text-center">QUANT.</th>
                          <th class="px-1 p-1 border text-left">Item/Descrição</th>
                          <th class="px-1 p-1 border text-center">Valor Uni.</th>
                          <th class="px-1 p-1 border text-center">Desc.</th>
                          <th class="px-1 p-1 border text-center">Valor Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="px-1 p-1 text-center">x1</td>
                          <td class="px-1 p-1 text-left">192838948994 Cafe com leite</td>
                          <td class="px-1 p-1 text-center">4,50</td>
                          <td class="px-1 p-1 text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-center">4,50</td>
                        </tr>
                        <tr>
                          <td class="px-1 p-1 text-center">x2</td>
                          <td class="px-1 p-1 text-left">182139285494 Pastel de Carn.</td>
                          <td class="px-1 p-1 text-center">7,50</td>
                          <td class="px-1 p-1 text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-center">15,00</td>
                        </tr>
                        <tr>
                          <td class="px-1 p-1 text-center">x1</td>
                          <td class="px-1 p-1 text-left">225849385968 Bolo de Laranja</td>
                          <td class="px-1 p-1 text-center">17,00</td>
                          <td class="px-1 p-1 text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-center">17,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
              <td class="px-5 py-0 border text-center">Lucas</td>
              <td class="px-5 py-0 border text-center">R$41,50</td>
              <td class="px-5 py-0 border text-center"><button @click="showCode = !showCode">
                  . . .</button></td>
            </tr>
          </tbody>
          <tbody>
            <tr class="bg-neutral-700">
              <td class="px-5 py-0 border text-center">16/02/2024</td>
              <td class="px-5 py-0 border text-center">19:00</td>
              <td class="px-5 py-0 border text-center">Matheus</td>
              <td class="border">
                <div class="flex items-center gapx-5 py-0 mb-1">
                  <div class="overflow-x-auto">
                    <table class="w-auto text-xs">
                      <thead>
                        <tr>
                          <th class="px-1 p-1 border text-center">QUANT.</th>
                          <th class="px-1 p-1 border text-left">Item/Descrição</th>
                          <th class="px-1 p-1 border text-center">Valor Uni.</th>
                          <th class="px-1 p-1 border text-center">Desc.</th>
                          <th class="px-1 p-1 border text-center">Valor Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="px-1 p-1 text-center">x1</td>
                          <td class="px-1 p-1 text-left">192838948994 Cafe com leite</td>
                          <td class="px-1 p-1 text-center">4,50</td>
                          <td class="px-1 p-1 text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-center">4,50</td>
                        </tr>
                        <tr>
                          <td class="px-1 p-1 text-center">x2</td>
                          <td class="px-1 p-1 text-left">182139285494 Pastel de Carn.</td>
                          <td class="px-1 p-1 text-center">7,50</td>
                          <td class="px-1 p-1 text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-center">15,00</td>
                        </tr>
                        <tr>
                          <td class="px-1 p-1 text-center">x1</td>
                          <td class="px-1 p-1 text-left">225849385968 Bolo de Laranja</td>
                          <td class="px-1 p-1 text-center">17,00</td>
                          <td class="px-1 p-1 text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-center">17,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
              <td class="px-5 py-0 border text-center">João Guilherme</td>
              <td class="px-5 py-0 border text-center">R$41,50</td>
              <td class="px-5 py-0 border text-center"><button @click="showCode = !showCode">
                  . . .</button></td>
            </tr>
          </tbody>
          <tbody>
            <tr class="bg-neutral-700">
              <td class="px-5 py-0 border text-center">16/02/2024</td>
              <td class="px-5 py-0 border text-center">19:45</td>
              <td class="px-5 py-0 border text-center">Leila</td>
              <td class="border">
                <div class="flex items-center gapx-5 py-0 mb-1">
                  <div class="overflow-x-auto">
                    <table class="w-auto text-xs">
                      <thead>
                        <tr>
                          <th class="px-1 p-1 border text-center">QUANT.</th>
                          <th class="px-1 p-1 border text-left">Item/Descrição</th>
                          <th class="px-1 p-1 border text-center">Valor Uni.</th>
                          <th class="px-1 p-1 border text-center">Desc.</th>
                          <th class="px-1 p-1 border text-center">Valor Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="px-1 p-1 text-center">x1</td>
                          <td class="px-1 p-1 text-left">192838948994 Cafe com leite</td>
                          <td class="px-1 p-1 text-center">4,50</td>
                          <td class="px-1 p-1 text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-center">4,50</td>
                        </tr>
                        <tr>
                          <td class="px-1 p-1 text-center">x2</td>
                          <td class="px-1 p-1 text-left">182139285494 Pastel de Carn.</td>
                          <td class="px-1 p-1 text-center">7,50</td>
                          <td class="px-1 p-1 text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-center">15,00</td>
                        </tr>
                        <tr>
                          <td class="px-1 p-1 text-center">x1</td>
                          <td class="px-1 p-1 text-left">225849385968 Bolo de Laranja</td>
                          <td class="px-1 p-1 text-center">17,00</td>
                          <td class="px-1 p-1 text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-center">17,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
              <td class="px-5 py-0 border text-center">Lucas</td>
              <td class="px-5 py-0 border text-center">R$41,50</td>
              <td class="px-5 py-0 border text-center"><button @click="showCode = !showCode">
                  . . .</button></td>
            </tr>
          </tbody>
          <tbody>
            <tr class="bg-neutral-700">
              <td class="px-5 py-0 border text-center">16/02/2024</td>
              <td class="px-5 py-0 border text-center">20:06</td>
              <td class="px-5 py-0 border text-center">Luan</td>
              <td class="border">
                <div class="flex items-center">
                  <div class="overflow-x-auto">
                    <table class="w-auto text-xs">
                      <thead>
                        <tr>
                          <th class="px-1 p-1 text-xs border text-center">QUANT.</th>
                          <th class="px-1 p-1 text-xs border text-left">Item/Descrição</th>
                          <th class="px-1 p-1 text-xs border text-center">Valor Uni.</th>
                          <th class="px-1 p-1 text-xs border text-center">Desc.</th>
                          <th class="px-1 p-1 text-xs border text-center">Valor Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="px-1 p-1 text-xs text-center">x1</td>
                          <td class="px-1 p-1 text-xs text-left">192838948994 Cafe com leite</td>
                          <td class="px-1 p-1 text-xs text-center">4,50</td>
                          <td class="px-1 p-1 text-xs text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-xs text-center">4,50</td>
                        </tr>
                        <tr>
                          <td class="px-1 p-1 text-center">x2</td>
                          <td class="px-1 p-1 text-left">182139285494 Pastel de Carn.</td>
                          <td class="px-1 p-1 text-center">7,50</td>
                          <td class="px-1 p-1 text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-center">15,00</td>
                        </tr>
                        <tr>
                          <td class="px-1 p-1 text-center">x1</td>
                          <td class="px-1 p-1 text-left">225849385968 Bolo de Laranja</td>
                          <td class="px-1 p-1 text-center">17,00</td>
                          <td class="px-1 p-1 text-center">R$ 0,00 %</td>
                          <td class="px-1 p-1 text-center">17,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
              <td class="px-5 py-0 border text-center">João Guilherme</td>
              <td class="px-5 py-0 border text-center">R$41,50</td>
              <td class="px-5 py-0 border text-center"><button @click="showCode = !showCode">
                  . . .</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>
