<template>
    <Transition enter-active-class="transition duration-300" enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-300"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4">
        <div v-if="show" class="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
            {{ label }}
        </div>
    </Transition>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    show: boolean
}>()
</script>
