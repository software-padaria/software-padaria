<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="font-sans bg-color4 text-white flex flex-col min-h-screen">
    <main class="p-5">
      <section class="relative bg-cover bg-center h-72 mb-5 mx-auto max-w-screen-lg">
        <div class="absolute bottom-5 left-5 text-white">
          <h1 class="text-6xl mb-2">All in One</h1>
          <p class="text-2xl">Todos seus relatórios em um lugar só</p>
          <nav class="relative bg-white mt-10 mx-auto w-full max-w-lg">
            <label @click="toggleMenu" class="block py-3 px-5 text-black text-xl font-semibold cursor-pointer">
              <span class="inline-block px-0">REGISTRO DE ESTOQUE</span>
              <span class="float-right inline-block">+</span>
            </label>
            <ul :class="{ 'h-[120px]': isMenuOpen, 'h-0': !isMenuOpen }"
              class="bg-white absolute w-full overflow-hidden text-center transition-all duration-400 ease-in-out list-none">
              <li class="py-2">
                <router-link to="/RegistroVendas" class="text-black">REGISTRO DE VENDAS</router-link>
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
      <div class="container mx-auto mt-10">
        <div class="grid grid-cols-2 gap-10">
          <div class="bg-color4 rounded-lg p-5">
            <h2 class="text-4xl font-bold text-center mb-1">Entrada:</h2>
            <table class="table-auto w-full text-center">
              <thead>
                <tr>
                  <th class="px-4 py-2"><button
                      class="bg-gray-50 hover:bg-gray-200 text-sm text-black py-1 px-1 rounded">Filtrar
                      Data</button></th>
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
          <div class="bg-color4 rounded-lg p-5">
            <h2 class=" text-4xl font-bold text-center mb-1">Saída:</h2>
            <table class="table-auto w-full text-center">
              <thead>
                <tr>
                  <th class="px-4 py-2"><button
                      class="bg-gray-50 hover:bg-gray-200 text-sm text-black py-1 px-1 rounded">Filtrar
                      Data</button></th>
                  <th class="px-4 py-2">Hora</th>
                  <th class="px-4 py-2">Código Produto</th>
                  <th class="px-4 py-2">Produto</th>
                  <th class="px-4 py-2">Quantidade</th>
                </tr>
              </thead>
              <tbody class="bg-neutral-600">
                <tr>
                  <td class="border px-4 py-2">16/02/2024</td>
                  <td class="border px-4 py-2">13:10</td>
                  <td class="border px-4 py-2">188293858348</td>
                  <td class="border px-4 py-2">Coxinha</td>
                  <td class="border px-4 py-2">4</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">16/02/2024</td>
                  <td class="border px-4 py-2">13:24</td>
                  <td class="border px-4 py-2">188293858348</td>
                  <td class="border px-4 py-2">Pastel de Carne</td>
                  <td class="border px-4 py-2">2</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">16/02/2024</td>
                  <td class="border px-4 py-2">13:39</td>
                  <td class="border px-4 py-2">188293858348</td>
                  <td class="border px-4 py-2">Coca-Cola lata</td>
                  <td class="border px-4 py-2">2</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">16/02/2024</td>
                  <td class="border px-4 py-2">13:52</td>
                  <td class="border px-4 py-2">188293858348</td>
                  <td class="border px-4 py-2">Bolo Cenoura</td>
                  <td class="border px-4 py-2">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
