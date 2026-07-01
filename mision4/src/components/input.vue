<template>
    <input :value="value" @input="emit('update', ($event.target as HTMLInputElement).value)" :placeholder="placeholder"
        class="p-2 rounded border text-white border-black" />
</template>

<script setup lang="ts">
defineProps<{
    value: string
    placeholder: string
}>()

const emit = defineEmits<{
    (e: 'update', value: string): void
}>()
</script>