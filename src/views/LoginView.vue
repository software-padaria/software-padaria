<script setup></script>

<template>
  <main class="flex flex-row">
    <div class="form w-1/3 h-screen bg-white flex-col">
      <section class="flex flex-col gap-32">
        <div class="flex flex-row p-10">
          <h1 class="text-4xl font-bold text-black">Lay</h1>
          <h1 class="text-4xl font-bold text-gray-400">UP</h1>
          <img src="../assets/icons8-layers-48.png" width="43" alt="" />
        </div>

        <form class="flex flex-col justify-center items-center gap-32 pr-52">
          <input
            type="text"
            placeholder="CPNJ"
            id="cnpj"
            class="border-b-black border-b pl-3 w-96 ml-36"
          />
          <input type="text" placeholder="Email" class="border-b-black border-b pl-3 w-96 ml-36" />
          <input type="text" placeholder="Senha" class="border-b-black border-b pl-3 w-96 ml-36" />
          <div class="flex flex-row">
          <div class="rememberMe">
            <input type="checkbox" id="remember" />
            <label for="remember">Remember Me</label>
          </div>
          <div class="forgotPassword">Forgot Password?</div>
        </div>
        </form>
      </section>
    </div>

    <div class="imagem w-2/3 h-screen"></div>
  </main>
</template>

<style scoped>
.imagem {
  background-image: url(/src/assets/imagens/backgroundLogin.jpg);
  background-size: 100%;
  background-position: -0px -220px;
}
.rememberMe {

}

input:focus {
  outline: none;
}
::placeholder {
}
</style>
