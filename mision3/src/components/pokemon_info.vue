<template>
  <div v-if="pokemon">
    <div class="flex justify-center">
      <img :src="pokemon.imageUrl" :alt="pokemon.name"
        class="h-64 w-64 rounded-xl bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105" />
    </div>

    <div>
      <p><strong>Nombre:</strong> {{ pokemon.name }}</p>
      <p><strong>Tipos:</strong> {{ pokemon.types.join(', ') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces/types';

defineProps<{
  pokemon: Pokemon
}>()

</script>
