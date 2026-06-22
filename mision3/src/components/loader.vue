<template>
  <div class="flex justify-center items-center py-8">
    <div
      class="relative h-16 w-16 animate-spin rounded-full border-2 border-black overflow-hidden"
    >
      <div class="absolute top-0 h-1/2 w-full bg-red-500"></div>
      <div class="absolute bottom-0 h-1/2 w-full bg-white"></div>

      <div
        class="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-black"
      ></div>

      <div
        class="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-white"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>