<script setup>
let focus = ref(false);
let changeFocus = () => (focus.value = !focus.value);
</script>
<template>
  <div class="lg:w-[60%] md:w-[80%] sm:w-[100%] mx-auto flex flex-col items-center gap-32 ">
    <form
      class="flex gap-2 bg-white rounded-full p-1 items-center w-full"
      :class="focus ? 'shadow-xl' : ''"
    >
      <button
        class="bg-[#01756C] text-white text-[16px] rounded-full uppercase py-[20px] px-[36px]"
      >
        eng <i class="bx bx-transfer-alt"></i> uzb
      </button>
      <img class="ms-5" src="/search.svg" alt="Search" />
      <input
        @focus="changeFocus"
        @blur="changeFocus"
        class="w-[847px] outline-none px-1 rounded-full text-[16px]"
        type="search"
        placeholder="Search words here..."
      />
    </form>
    <img class="" src="~/assets/img/search-word.png" alt="" />
  </div>
</template>

<style lang="scss" scoped></style>
