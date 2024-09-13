<template>
    <div class="bg-gray-800 text-white rounded-lg p-4">
        <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold">Venda #32</h2>
            <button class="bg-red-500 text-white px-2 py-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div class="mt-4">
            <p>Cliente: Marcos Antonio</p>
            <p>CPF: 141.284.383-12</p>
            <p>Data: 16/02/2024</p>
            <p>Hora: 13:02</p>
            <p>Mesa: MESA01</p>
        </div>
        <div class="mt-8">
            <table class="w-full text-left table-fixed">
                <thead>
                    <tr class="bg-gray-700">
                        <th class="px-4 py-2">ITENS</th>
                        <th class="px-4 py-2">OBSERVAÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-600">
                        <td class="px-4 py-2">
                            <div class="flex items-center">
                                <img src="https://via.placeholder.com/50" alt="Café com Leite" class="w-16 h-16">
                                <span class="ml-4">1x Café com Leite</span>
                            </div>
                        </td>
                        <td class="px-4 py-2"></td>
                    </tr>
                    <tr class="border-b border-gray-600">
                        <td class="px-4 py-2">
                            <div class="flex items-center">
                                <img src="https://via.placeholder.com/50/f44336/ffffff" alt="Donut" class="w-16 h-16">
                                <span class="ml-4">1x Donut</span>
                            </div>
                        </td>
                        <td class="px-4 py-2"></td>
                    </tr>
                    <tr class="border-b border-gray-600">
                        <td class="px-4 py-2">
                            <div class="flex items-center">
                                <img src="https://via.placeholder.com/50/f44336/ffffff" alt="Donut" class="w-16 h-16">
                                <span class="ml-4">1x Donut</span>
                            </div>
                        </td>
                        <td class="px-4 py-2"></td>
                    </tr>
                    <tr class="border-b border-gray-600">
                        <td class="px-4 py-2">
                            <div class="flex items-center">
                                <img src="https://via.placeholder.com/50/f44336/ffffff" alt="Donut" class="w-16 h-16">
                                <span class="ml-4">1x Donut</span>
                            </div>
                        </td>
                        <td class="px-4 py-2"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>