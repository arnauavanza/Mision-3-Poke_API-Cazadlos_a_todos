<template>
    <button @click="emit('close')"
        class="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white text-2xl font-bold border-2 border-black hover:bg-red-600 transition">✕</button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (i: 'close'): void
}>()

</script>