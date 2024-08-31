<script setup>
import { RouterLink } from 'vue-router'
import InicialBox from '@/components/InicialBox.vue'; 
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

  <body>
    <div class="bg-color4 w-full h-screen flex flex-col">
      <div class="w-full h-48 flex flex-col justify-center pl-96">
        <div class="flex">
          <h1 class="text-5xl text-white font-bold">SANTO PÃO - PADARIA</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0,0,256,256"
            class="mt-2 ml-3"
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
              <g transform="scale(2,2)">
                <path
                  d="M64,6c-32,0 -58,26 -58,58c0,32 26,58 58,58c32,0 58,-26 58,-58c0,-32 -26,-58 -58,-58zM64,12c28.7,0 52,23.3 52,52c0,28.7 -23.3,52 -52,52c-28.7,0 -52,-23.3 -52,-52c0,-28.7 23.3,-52 52,-52zM64,30c-4.97056,0 -9,4.02944 -9,9c0,4.97056 4.02944,9 9,9c4.97056,0 9,-4.02944 9,-9c0,-4.97056 -4.02944,-9 -9,-9zM64,59c-5,0 -9,4 -9,9v24c0,5 4,9 9,9c5,0 9,-4 9,-9v-24c0,-5 -4,-9 -9,-9z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
          <p class="font-medium text-white">CNPJ: 123456789</p>
      </div>
      <div class="flex justify-center items-center ">
        <div class="flex ">
          <InicialBox title="VENDAS"></InicialBox>
          <InicialBox title="ESTOQUE"></InicialBox>
          <InicialBox title="PEDIDOS"></InicialBox>
        </div>
      </div>
    
    </div>
  </body>
  <footer></footer>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap');

.searchIcon {
  margin-left: -65px;
}
</style>