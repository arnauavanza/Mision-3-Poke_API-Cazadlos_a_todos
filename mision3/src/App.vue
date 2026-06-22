<template>
  <div class="flex flex-col gap-5 rounded-md border border-gray-300 p-5 shadow">
    <h1>PokéRandom</h1>
    <Loader v-if="loading" />
    <PokemonInfo v-if="pokemon" :pokemon="pokemon" />
    <Random @click="randomPokemonButton" />
    <form>
      <button type="button" @click="showFormChange" class="rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:translate-y-0" >{{ textForm }}</button>
    </form>
    
    <FormTrainer v-if="showForm" />
  </div>
</template>

<script setup lang="ts">
import PokemonInfo from './components/pokemon_info.vue'
import Random from './components/random.vue'
import Loader from './components/loader.vue'
import FormTrainer from './components/form_trainer.vue'
import { functions } from './composable/functions';
import { ref, onMounted } from 'vue';
import type { Pokemon } from './interfaces/types';


const pokemon = ref<Pokemon | null>(null)
const loading = ref(true)
const showForm = ref(false)
const textForm = ref('➕ Nuevo entrenador')

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

function showFormChange() {
  if (showForm.value) {
    showForm.value = false
    textForm.value = '➕ Nuevo entrenador'
  } else {
    showForm.value = true
    textForm.value = '❌ Cerrar formulario'
  }
}

</script>