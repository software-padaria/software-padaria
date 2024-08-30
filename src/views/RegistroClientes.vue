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
          <h1 class="text-3xl mb-2">All in One</h1>
          <p class="text-lg">Todos seus relatórios em um lugar só</p>
          <nav class="relative bg-gray-300 mt-10 mx-auto w-full max-w-lg">
            <label @click="toggleMenu"
              class="block py-5 px-5 bg-gray-800 text-white text-xl font-semibold cursor-pointer">
              <span class="inline-block px-0">REGISTRO DE CLIENTES</span>
              <span class="float-right inline-block">+</span>
            </label>
            <ul :class="{ 'h-[120px]': isMenuOpen, 'h-0': !isMenuOpen }"
              class="absolute w-full overflow-hidden text-center transition-all duration-400 ease-in-out list-none bg-gray-200">
              <li class="bg-gray-300 py-2">
                <router-link to="/RegistroEstoque" class="text-black">REGISTRO DE ESTOQUE</router-link>
              </li>
              <li class="bg-gray-300 py-2">
                <router-link to="/RegistroConsumo" class="text-black">REGISTRO DE CONSUMO</router-link>
              </li>
              <li class="bg-gray-300 py-2">
                <router-link to="/RegistroVendas" class="text-black">REGISTRO DE VENDAS</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section class="bg-gray-800 p-5 rounded-lg mx-auto max-w-screen-lg">
        <input type="text" placeholder="Search Register..."
          class="block mx-auto mb-5 w-full max-w-xs bg-gray-700 border-none rounded-lg p-3 text-white text-lg" />
        <table class="w-full border-collapse mx-auto">
          <thead>
            <tr>
              <th class="p-2 text-left border-b border-gray-700 bg-gray-700">Data</th>
              <th class="p-2 text-left border-b border-gray-700 bg-gray-700">Hora</th>
              <th class="p-2 text-left border-b border-gray-700 bg-gray-700">Cliente</th>
              <th class="p-2 text-left border-b border-gray-700 bg-gray-700">Produtos</th>
              <th class="p-2 text-left border-b border-gray-700 bg-gray-700">Vendedor</th>
              <th class="p-2 text-left border-b border-gray-700 bg-gray-700">Valor Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border-b border-gray-700">16/02/2024</td>
              <td class="p-2 border-b border-gray-700">16:24</td>
              <td class="p-2 border-b border-gray-700">William</td>
              <td class="p-2 border-b border-gray-700">
                <div class="flex items-center gap-2 mb-1">
                  <div class="overflow-x-auto">
                    <table class="w-auto text-sm">
                      <thead>
                        <tr>
                          <th class="p-2 border-b border-gray-700">QUANT.</th>
                          <th class="p-2 border-b border-gray-700">Item/Descrição</th>
                          <th class="p-2 border-b border-gray-700">Valor Uni.</th>
                          <th class="p-2 border-b border-gray-700">Desc.</th>
                          <th class="p-2 border-b border-gray-700">Valor Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="p-2">x1</td>
                          <td class="p-2">192838948994 Cafe com leite</td>
                          <td class="p-2">4,50</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">4,50</td>
                        </tr>
                        <tr>
                          <td class="p-2">x2</td>
                          <td class="p-2">182139285494 Pastel de Carn.</td>
                          <td class="p-2">7,50</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">15,00</td>
                        </tr>
                        <tr>
                          <td class="p-2">x1</td>
                          <td class="p-2">225849385968 Bolo de Laranja</td>
                          <td class="p-2">17,00</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">17,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
              <td class="p-2 border-b border-gray-700">Lucas</td>
              <td class="p-2 border-b border-gray-700">R$41,50</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="p-2 border-b border-gray-700">16/02/2024</td>
              <td class="p-2 border-b border-gray-700">19:00</td>
              <td class="p-2 border-b border-gray-700">Matheus</td>
              <td class="p-2 border-b border-gray-700">
                <div class="flex items-center gap-2 mb-1">
                  <div class="overflow-x-auto">
                    <table class="w-auto text-sm">
                      <thead>
                        <tr>
                          <th class="p-2 border-b border-gray-700">QUANT.</th>
                          <th class="p-2 border-b border-gray-700">Item/Descrição</th>
                          <th class="p-2 border-b border-gray-700">Valor Uni.</th>
                          <th class="p-2 border-b border-gray-700">Desc.</th>
                          <th class="p-2 border-b border-gray-700">Valor Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="p-2">x1</td>
                          <td class="p-2">192838948994 Cafe com leite</td>
                          <td class="p-2">4,50</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">4,50</td>
                        </tr>
                        <tr>
                          <td class="p-2">x2</td>
                          <td class="p-2">182139285494 Pastel de Carn.</td>
                          <td class="p-2">7,50</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">15,00</td>
                        </tr>
                        <tr>
                          <td class="p-2">x1</td>
                          <td class="p-2">225849385968 Bolo de Laranja</td>
                          <td class="p-2">17,00</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">17,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
              <td class="p-2 border-b border-gray-700">João Guilherme</td>
              <td class="p-2 border-b border-gray-700">R$41,50</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="p-2 border-b border-gray-700">16/02/2024</td>
              <td class="p-2 border-b border-gray-700">19:45</td>
              <td class="p-2 border-b border-gray-700">Leila</td>
              <td class="p-2 border-b border-gray-700">
                <div class="flex items-center gap-2 mb-1">
                  <div class="overflow-x-auto">
                    <table class="w-auto text-sm">
                      <thead>
                        <tr>
                          <th class="p-2 border-b border-gray-700">QUANT.</th>
                          <th class="p-2 border-b border-gray-700">Item/Descrição</th>
                          <th class="p-2 border-b border-gray-700">Valor Uni.</th>
                          <th class="p-2 border-b border-gray-700">Desc.</th>
                          <th class="p-2 border-b border-gray-700">Valor Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="p-2">x1</td>
                          <td class="p-2">192838948994 Cafe com leite</td>
                          <td class="p-2">4,50</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">4,50</td>
                        </tr>
                        <tr>
                          <td class="p-2">x2</td>
                          <td class="p-2">182139285494 Pastel de Carn.</td>
                          <td class="p-2">7,50</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">15,00</td>
                        </tr>
                        <tr>
                          <td class="p-2">x1</td>
                          <td class="p-2">225849385968 Bolo de Laranja</td>
                          <td class="p-2">17,00</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">17,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
              <td class="p-2 border-b border-gray-700">Lucas</td>
              <td class="p-2 border-b border-gray-700">R$41,50</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="p-2 border-b border-gray-700">16/02/2024</td>
              <td class="p-2 border-b border-gray-700">20:06</td>
              <td class="p-2 border-b border-gray-700">Luan</td>
              <td class="p-2 border-b border-gray-700">
                <div class="flex items-center gap-2 mb-1">
                  <div class="overflow-x-auto">
                    <table class="w-auto text-sm">
                      <thead>
                        <tr>
                          <th class="p-2 border-b border-gray-700">QUANT.</th>
                          <th class="p-2 border-b border-gray-700">Item/Descrição</th>
                          <th class="p-2 border-b border-gray-700">Valor Uni.</th>
                          <th class="p-2 border-b border-gray-700">Desc.</th>
                          <th class="p-2 border-b border-gray-700">Valor Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="p-2">x1</td>
                          <td class="p-2">192838948994 Cafe com leite</td>
                          <td class="p-2">4,50</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">4,50</td>
                        </tr>
                        <tr>
                          <td class="p-2">x2</td>
                          <td class="p-2">182139285494 Pastel de Carn.</td>
                          <td class="p-2">7,50</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">15,00</td>
                        </tr>
                        <tr>
                          <td class="p-2">x1</td>
                          <td class="p-2">225849385968 Bolo de Laranja</td>
                          <td class="p-2">17,00</td>
                          <td class="p-2">R$ 0,00 %</td>
                          <td class="p-2">17,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
              <td class="p-2 border-b border-gray-700">João Guilherme</td>
              <td class="p-2 border-b border-gray-700">R$41,50</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>
