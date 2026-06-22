<template>
  <form action="">
    <button type="button" @click="handleClick"
      class="cursor-pointer border bg-amber-500 p-2.5 text-base text-white">Random</button>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  random: []
}>()

function handleClick() {
  emit('random')
}
</script>