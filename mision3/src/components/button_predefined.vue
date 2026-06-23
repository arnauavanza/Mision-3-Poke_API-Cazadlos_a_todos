<template>
    <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded m-2" :type="type"
        @click="emit('click')">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from '../interfaces/types';

defineProps<ButtonProps>();

const emit = defineEmits<{
    click: [];
}>();
</script>