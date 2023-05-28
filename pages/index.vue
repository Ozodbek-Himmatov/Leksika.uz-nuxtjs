<script setup>
let focus = ref(false);
let changeFocus = () => (focus.value = !focus.value);
</script>
<template>
  <div class="flex">
    <form class="flex gap-2 bg-white rounded-full p-1 items-center" :class="focus ? 'shadow-xl' : ''">
      <button
        class="bg-[#01756C] text-white text-[16px] rounded-full uppercase py-[20px] px-[36px]"
      >
        eng <i class="bx bx-transfer-alt"></i> uzb
      </button>
      <img class="ms-5" src="/search.svg" alt="Search" />
      <input
        @focus="changeFocus"
        class="w-[847px] outline-none rounded-full text-[16px]"
        type="text"
        placeholder="Search words here..."
      />
    </form>
    <img src="~/assets/img/search-word.png" alt="">
  </div>
</template>

<style lang="scss" scoped></style>
