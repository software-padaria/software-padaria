<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['close']);

const handleItemClick = () => {
  emit('close');
};
</script>

<template>
  <div
    :class="['fixed top-0 left-0 w-48 h-full bg-color3 text-black transition-transform duration-300', { '-translate-x-full': !isOpen, 'translate-x-0': isOpen }]">
    <div class="p-5">
      <ul class="flex flex-col items-center ">
        <li class="mb-6 font-bold flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path
              d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z">
            </path>
          </svg>
          <router-link to="/" class="hover:text-color5" @click.native="handleItemClick">HOME</router-link>
        </li>
        <li class="mb-6 font-bold flex flex-col items-center">
          <img src="../assets/open-box.svg" width="90" height="90" alt="">
          <router-link to="/estoque" class="hover:text-color5" @click.native="handleItemClick">ESTOQUE</router-link>
        </li>
        <li class="mb-6 font-bold flex flex-col items-center">
          <img src="../assets/icons8-pago-100.png" width="60" height="60" alt="">
          <router-link to="/vendas" class="hover:text-color5" @click.native="handleItemClick">VENDAS</router-link>
        </li>
        <li class="mb-6 font-bold flex flex-col items-center ">
          <img src="../assets/icons8-colar-100.png" width="60" height="60" alt="">
          <router-link to="/pedidos" class="hover:text-color5" @click.native="handleItemClick">PEDIDOS</router-link>
        </li>
        <li class="mb-6 font-bold flex flex-col items-center">
          <img src="../assets/icons8-usuário-do-bloco-de-notas-100.png" width="60" height="60" alt="">
          <router-link to="/fornecedores" class="hover:text-color5"
            @click.native="handleItemClick">FORNECEDORES</router-link>
        </li>
        <li class="mb-6 font-bold flex flex-col items-center">
          <img src="../assets/icons8-graphic-67 (1).png" alt="" width="60" height="60">
          <router-link to="/relatorios" class="hover:text-color5"
            @click.native="handleItemClick">RELATÓRIOS</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.translate-x-0 {
  transform: translateX(0);
}

.translate-x-full {
  transform: translateX(-100%);
}
</style>