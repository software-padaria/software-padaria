<script setup>
defineProps(['title']);
</script>

<template>
    <div class="bg-white h-96 w-72 rounded-2xl mx-14 text-white font-bold ">
        <header class="bg-black relative rounded-t-xl">
            <h1 class=" absolute ml-8 pt-6 text-xl">{{ title }}</h1>
            <div class="container py-6 flex ">
                <img src="../assets/icons8-eye-96 (1).png" class="ml-52" width="30" height="40" alt="">
                <img src="../assets/icons8-menu-2-60.png " class="ml-0" width="30"  alt="">
            </div>
        </header>
    </div>
</template>

<style scoped></style>
