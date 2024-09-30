<script setup>
import { RouterLink } from 'vue-router'
import { ref,onMounted, onUnmounted} from 'vue';
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

</script>

<template>
<div class="flex" ref="appContainer" >
    <SideBar :isOpen="isSidebarOpen" @close="closeSidebar" ref="sidebarRef" />
    <div class="flex-1">
      <header class="bg-color1 shadow fixed w-screen ">
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
      <div class="bg-color4 w-full h-screen flex flex-col rounded-lg p-36">
        <div class="flex justify-end">
          <RouterLink to="/vendas1" class="bg-red-500 absolute hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Cancelar Operação
          </RouterLink>
        </div>
        <div class="flex flex-col items-center justify-center">
            <img
            class="mt-40"
            width="100"
            height="100"
            src="../assets/imagens/icons8-caixa-registradora-100.png"
            alt="cash-register"
          />

          <h2 class="text-2xl font-bold text-green-500 mt-4">ABERTURA DE CAIXA</h2>
          <p class="text-sm text-gray-400 mt-2">Informe os valores para abrir o caixa</p>
        </div>
        <div class="mt-8 w-full flex justify-center flex-col items-center vg">
          <div class="bg-white w-duzz rounded-lg shadow-lg p-4 text-center">
            <p class="text-sm text-gray-700 font-bold">DISPONÍVEL EM CAIXA</p>
            <h3 class="text-3xl font-bold text-green-500 mt-2">R$0,00</h3>

            <RouterLink to="/vendas3"
              class="w-full bg-green-500 hover:bg-green-700 text-white justify-center flex font-bold py-2 px-4 rounded mt-4"
              >ABRIR CAIXA</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>