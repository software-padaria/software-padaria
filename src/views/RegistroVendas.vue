<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}   


</script>

<template>
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
      <section class="bg-color4 rounded-lg mx-auto max-w-screen-2xl">
        <input type="text" placeholder="Search Register..."
          class="mx-auto mb-2 w-full max-w-xs bg-white border-none rounded-lg p-3 text-black text-lg" />
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
            <tr>
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
            <tr>
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
            </tr>
          </tbody>
          <tbody>
            <tr>
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
            </tr>
          </tbody>
          <tbody>
            <tr>
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
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>


