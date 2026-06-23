<template>
    <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded m-2" :type="type" @click="onClick?.()">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from '../interfaces/types';
const { label, type, onClick } = defineProps<ButtonProps>();
</script>