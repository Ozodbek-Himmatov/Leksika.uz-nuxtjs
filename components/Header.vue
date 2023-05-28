<template>
  <div class="fixed w-screen">
    <header class="bg-[#01756C]">
      <div class="container mx-auto">
        <nav class="flex justify-between items-center">
          <nuxt-link to="/">
            <img src="~/assets/img/Logo.png" class="h-[60px] my-[20px] " alt="[logo] Leksika">
          </nuxt-link>

          <ul class="flex gap-[80px] text-white text-[18px]">
            <li><nuxt-link class="uppercase" to="/">eng <i class='bx bx-transfer-alt'></i> uzb</nuxt-link></li>
            <li><nuxt-link class="uppercase" to="/">rus <i class='bx bx-transfer-alt'></i> uzb</nuxt-link></li>
            <li><nuxt-link class="capitalize" to="/articles">articles</nuxt-link></li>
            <li><nuxt-link class="capitalize" to="/grammar">grammar</nuxt-link></li>
            <li><nuxt-link to="/about us">About us</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>