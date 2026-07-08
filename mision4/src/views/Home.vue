<template>
  <div class="flex flex-col items-center justify-center gap-6 p-8">
    <h1 class="text-3xl font-bold text-white">
      Bienvenido a la Página de Inicio
    </h1>

    <RouterLink
      v-for="link in links"
      :key="link.name"
      :to="{ name: link.name }"
      class="rounded bg-blue-600 px-4 py-2 text-white"
    >
      {{ link.label }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
const links = [
  { 
    name: 'Trainers',
    label: 'Poke Trainers'  
  }
]
</script>