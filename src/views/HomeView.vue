<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
        <header class="bg-color1 shadow">
                <div class="container py-8 flex items-center">
                        <button class="text-white text-lg  mx-16">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40"
                                        viewBox="0,0,256,256">
                                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                font-weight="none" font-size="none" text-anchor="none"
                                                style="mix-blend-mode: normal">
                                                <g transform="scale(5.12,5.12)">
                                                        <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path>
                                                </g>
                                        </g>
                                </svg>
                        </button>
                        <h1 class="text-4xl font-bold text-white ml-8 mr-0.5 ">Lay</h1>
                        <h1 class="text-4xl font-bold text-color2">UP</h1>
                        <img src="../assets/icons8-layers-48.png" width="43" alt="">
                        <div class="relative flex flex-row w-full">
                                <input type="text" placeholder="SEARCH FOR..." class="bg-white text-color2 font-bold border border-color2 rounded-sm py-2 px-4 ml-20 w-10/12 
                                        focus:outline-none focus:text-black " />
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40"
                                        viewBox="0 0 48 48" class="searchIcon">
                                        <path
                                                d="M 20.5 6 C 12.515556 6 6 12.515562 6 20.5 C 6 28.484438 12.515556 35 20.5 35 C 23.773158 35 26.788919 33.893018 29.220703 32.050781 L 38.585938 41.414062 A 2.0002 2.0002 0 1 0 41.414062 38.585938 L 32.050781 29.220703 C 33.893017 26.788918 35 23.773156 35 20.5 C 35 12.515562 28.484444 6 20.5 6 z M 20.5 10 C 26.322685 10 31 14.677319 31 20.5 C 31 23.295711 29.914065 25.820601 28.148438 27.697266 A 2.0002 2.0002 0 0 0 27.701172 28.144531 C 25.824103 29.912403 23.29771 31 20.5 31 C 14.677315 31 10 26.322681 10 20.5 C 10 14.677319 14.677315 10 20.5 10 z">
                                        </path>
                                </svg>
                        </div>
                        <div class="text-white flex flex-row"><!--perfil-->
                                <img src="../assets/icons8-usuário-60.png" class="bg-white rounded w-13" alt="">
                                <div class="flex flex-col ml-3 text-lg">
                                        <p>Pedro</p>
                                        <p>123456789</p>
                                </div>
                        </div>
                </div>
        </header>

        <body>
                <div class="bg-color3 min-h-screen">

                </div>
        </body>
        <footer></footer>
</template>
<style scoped>
.searchIcon {
        margin-left: -65px;
}
</style>