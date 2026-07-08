<template>
    <p class="text-sm text-red-500">
        {{ label }}
    </p>
</template>

<script setup lang="ts"> 
const props = defineProps({
    label: {
        type: String,
        required: true
    }
});
</script>