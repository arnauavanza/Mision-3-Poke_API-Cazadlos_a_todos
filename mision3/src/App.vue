<template>
  <div class="flex flex-col gap-5 rounded-md border border-gray-300 p-5 shadow">
    <h1>PokéRandom</h1>
    <Random @click="randomPokemonButton" />
    <PokemonInfo v-if="pokemon" :pokemon="pokemon" />
  </div>
</template>

<script setup lang="ts">
import PokemonInfo from './components/pokemon_info.vue'
import Random from './components/random.vue'
import { functions } from './composable/functions';
import { ref, onMounted } from 'vue';
import type { Pokemon } from './interfaces/types';

const pokemon = ref<Pokemon | null>(null)

onMounted(async () => {
  const { randomPokemon } = functions()
  pokemon.value = await randomPokemon()
})

async function randomPokemonButton() {
  const { randomPokemon } = functions()
  pokemon.value = await randomPokemon()
}
</script>