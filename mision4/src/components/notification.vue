<template>
    <Teleport to="body">
        <div
            class="fixed bottom-5 left-5 z-[9999] min-w-72 max-w-sm rounded-lg bg-white px-5 py-3 text-white shadow-xl">
            <div class="!text-black mb-5">
                {{ label }}
            </div>
            <ButtonPred class-color="bg-red-500" class="align-center" v-if="button_del" label="Eliminar"
                @click="emit('confirm')"></ButtonPred>
            <button v-else @click="emit('close')"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white text-2xl font-bold border-2 border-black hover:bg-red-600 transition">✕</button>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import ButtonPred from './button_predefined.vue';
defineProps<{
    label: string
    button_del: boolean
}>()

const emit = defineEmits<{
    (e: 'confirm'): void
    (i: 'close'): void
}>()
</script>