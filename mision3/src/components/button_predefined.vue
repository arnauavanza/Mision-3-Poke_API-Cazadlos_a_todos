<template>
    <button :class="[classColor, 'px-6 py-3 rounded-xl border-4 border-black font-bold text-white uppercase tracking-wider', 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]', 'transition-all duration-150','hover:scale-105 hover:-translate-y-1','active:translate-y-1 active:shadow-none']" :type="type" @click="emit('click')">
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