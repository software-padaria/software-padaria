<script setup></script>

<template>
  <main class="flex flex-row">
    <div class="form w-1/3 h-screen bg-white flex-col">
      <section class="flex flex-col gap-20">
        <div class="flex flex-row p-10">
          <h1 class="text-4xl font-bold text-black">Lay</h1>
          <h1 class="text-4xl font-bold text-gray-400">UP</h1>
          <img src="../assets/icons8-layers-48.png" width="43" alt="" />
        </div>

        <form class="flex flex-col items-center gap-24">
          <div class="flex flex-row gap-10 items-center pl-2">
            <div class="flex flex-col gap-14">
              <input
                type="text"
                placeholder="Name"
                class="border-b-black border-b w-60 pl-4 pb-2"
              />
              <input
                type="text"
                placeholder="Email"
                class="border-b-black border-b w-60 pl-4 pb-2"
              />
              <input
                type="text"
                placeholder="Password"
                class="border-b-black border-b w-60 pl-4 pb-2"
              />
            </div>
            <div class="flex flex-col gap-14">
              <input
                type="text"
                placeholder="CPNJ"
                class="border-b-black border-b w-60 pl-4 pb-2"
              />
              <input
                type="text"
                placeholder="Number (optional)"
                class="border-b-black border-b w-60 pl-4 pb-2"
              />
              <input
                type="text"
                placeholder="Confirm Password"
                class="border-b-black border-b w-60 pl-4 pb-2"
              />
            </div>
          </div>
          <div class="orLines flex flex-row items-center gap-2">
            <div class="line"></div>
            <div class="text-zinc-400 font-semibold">Or</div>
            <div class="line"></div>
          </div>
          <div class="googleBtn">
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-5 border border-black rounded shadow flex w-96 justify-center items-center text-xl"
            >
              <span class="inline-block mr-2">
                <img
                  src="/src/assets/imagens/icons8-google-logo-48.png"
                  alt="Google Logo"
                  class="w-6 h-6"
                />
              </span>
              Continue with Google
            </button>
          </div>
          <div class="loginBtn flex justify-end w-full mr-60">
            <button class="bg-black hover:bg-zinc-800 text-white font-bold py-3 px-8 rounded">
              Sign Up
            </button>
          </div>
          <span class="text-zinc-400"
            >Already have a register?
            <router-link to="/login" class="text-black font-semibold"
              >Enter your Account</router-link
            ></span
          >
        </form>
      </section>
    </div>

    <div class="imagem w-2/3 h-screen">
      <div class="flex flex-col pt-48 ml-32 gap-2">
        <h1 class="text-8xl font-semibold text-white">Welcome to LayUP</h1>
        <span class="text-3xl text-white ml-6 font-light">Log in to access your account</span>
      </div>
    </div>
  </main>
</template>

<style scoped>
.imagem {
  background-image: url(/src/assets/imagens/backgroundLogin.jpg);
  background-size: 100%;
  background-position: -0px -220px;
}

input:focus {
  outline: none;
}

.options {
  margin-top: -15%;
}

.line {
  width: 180px;
  height: 1px;
  background-color: rgb(170, 170, 170);
}

input[type='checkbox'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 2px;
  position: relative;
}

input[type='checkbox']:checked {
  background-color: black;
}

input[type='checkbox']:checked::after {
  content: '';
  top: 0.5px;
  left: 4.2px;
  position: absolute;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.orLines {
  margin-top: -11%;
}
.googleBtn {
  margin-top: -10%;
}

.loginBtn {
  margin-top: -10%;
}
</style>
