<template>
<div 
        class="relative flex items-center justify-center h-64 w-64 rounded-full border-8 border-black bg-[linear-gradient(to_bottom,#ef4444_0%,#ef4444_50%,#ffffff_50%,#ffffff_100%)] before:absolute before:left-0 before:top-1/2 before:h-4 before:w-full before:-translate-y-1/2 before:bg-black">
        <img :src="props.img" class="h-full w-full object-contain brightness-0 select-none"
          draggable="false" />
      </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    img: string
}>()
</script>