<script setup></script>

<template>
  <div class="flex justify-between items-center bg-black p-3 rounded-lg">
    <div class="flex items-center">
      <svg
        class="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
      <h1 class="text-2xl font-bold text-white ml-2">LayUP</h1>
    </div>
    <div class="flex items-center">
      <input
        type="text"
        class="border border-gray-700 rounded-md px-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="SEARCH FOR..."
      />
      <svg
        class="w-6 h-6 ml-2 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
      <button class="ml-4 flex items-center rounded-md bg-gray-700 px-4 py-2 text-white">
        <svg
          class="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
        Pedro
        <span class="ml-2 text-xs">123456789</span>
      </button>
    </div>
  </div>
  
</template>
<script setup>
</script>
