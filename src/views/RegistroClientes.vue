<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
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
              <span class="inline-block px-0">REGISTRO DE CLIENTES</span>
              <span class="float-right inline-block">+</span>
            </label>
            <ul :class="{ 'h-[120px] translate-y-[-3px]': isMenuOpen, 'h-0': !isMenuOpen }"
              class="bg-white absolute w-full overflow-hidden text-center transition-all duration-400 ease-in-out list-none">
              <li class="py-2">
                <router-link to="/RegistroEstoque" class="text-black">REGISTRO DE ESTOQUE</router-link>
              </li>
              <li class="py-2">
                <router-link to="/" class="text-black">REGISTRO DE VENDAS</router-link>
              </li>
              <li class="py-2">
                <router-link to="/RegistroConsumo" class="text-black">REGISTRO DE CONSUMO</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <input type="text" placeholder="Search Register..."
        class="mx-auto w-full max-w-xs bg-white border-none rounded-lg p-3 text-black text-lg" />
      <div class="container mx-auto">
        <div class="grid grid-cols-2 gap-10">
          <div class="bg-color4 rounded-lg p-5">
            <h2 class="text-4xl font-bold text-center mb-1">Clientes:</h2>
            <table class="table-auto w-full text-center">
              <thead>
                <tr>
                  <th class="px-4 py-2">
                    <span class="text-xs">Ordernar por:</span>
                    <button class="bg-gray-50 hover:bg-gray-200 text-[10px] py-1 px-1 text-black rounded">
                      Maior contribuição
                    </button>
                  </th>
                  <th class="px-4 py-2">Hora</th>
                  <th class="px-4 py-2">Código Produto</th>
                  <th class="px-4 py-2">Produto</th>
                  <th class="px-4 py-2">Quantidade</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border">
                  <td class="border px-4 py-2">16/02/2024</td>
                  <td class="border px-4 py-2">11:21</td>
                  <td class="border px-4 py-2">188293858348</td>
                  <td class="border px-4 py-2">Coxinha</td>
                  <td class="border px-4 py-2">10</td>
                </tr>
                <tr class="border">
                  <td class="border px-4 py-2">16/02/2024</td>
                  <td class="border px-4 py-2">11:23</td>
                  <td class="border px-4 py-2">188293858348</td>
                  <td class="border px-4 py-2">Bolo Cenoura</td>
                  <td class="border px-4 py-2">4</td>
                </tr>
                <tr class="border">
                  <td class="border px-4 py-2">16/02/2024</td>
                  <td class="border px-4 py-2">11:25</td>
                  <td class="border px-4 py-2">188293858348</td>
                  <td class="border px-4 py-2">Pastel de Carne</td>
                  <td class="border px-4 py-2">8</td>
                </tr>
                <tr class="border">
                  <td class="border px-4 py-2">16/02/2024</td>
                  <td class="border px-4 py-2">11:33</td>
                  <td class="border px-4 py-2">188293858348</td>
                  <td class="border px-4 py-2">Torta de Morango</td>
                  <td class="border px-4 py-2">8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-8">
            <h2 class="text-4xl font-bold text-center mb-1">Gerenciar clientes:</h2>
            <div class="grid grid-cols-2 gap-6 mt-20">
              <button class="bg-white hover:bg-neutral-200 text-neutral-400 font-bold py-3 rounded-md">
                Cadastrar Cliente
              </button>
              <button class="bg-white hover:bg-neutral-200 text-neutral-400 font-bold py-3 rounded-md">
                Visualizar Cadastros
              </button>
              <button class="bg-white hover:bg-neutral-200 text-neutral-400 font-bold py-3 rounded-md">
                Editar Cadastro
              </button>
              <button class="bg-white hover:bg-neutral-200 text-neutral-400 font-bold py-3 rounded-md">
                Remover Cadastro
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
