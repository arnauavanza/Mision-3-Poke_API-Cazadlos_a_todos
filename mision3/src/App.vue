<template>
  <div class="flex flex-col gap-5 rounded-md border border-gray-300 p-5 shadow">
    <h1>PokéRandom</h1>
    <Random @click="randomPokemonButton" />
    <Loader v-if="loading" />
    <PokemonInfo v-if="pokemon" :pokemon="pokemon" />
  </div>
</template>

<script setup lang="ts">
import PokemonInfo from './components/pokemon_info.vue'
import Random from './components/random.vue'
import Loader from './components/loader.vue'
import { functions } from './composable/functions';
import { ref, onMounted } from 'vue';
import type { Pokemon } from './interfaces/types';

const pokemon = ref<Pokemon | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const { randomPokemon } = functions()

    pokemon.value = await randomPokemon()
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})

async function randomPokemonButton() {
  const { randomPokemon } = functions()
  loading.value = true

  try {
    pokemon.value = await randomPokemon()
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

</script>