<template>
  <div class="flex flex-col gap-5 rounded-md border border-gray-300 p-5 shadow">
    <h1>PokéRandom</h1>
    <Loader v-if="loading" />
    <PokemonInfo v-if="pokemon" :pokemon="pokemon" />
    <div class="flex-col items-center">
      <ButtonPredefined label="Random" classColor="bg-amber-500 hover:bg-amber-600" type="button" @click="randomPokemonButton" /><br />
      <ButtonPredefined :label="textForm" classColor="bg-red-500 hover:bg-red-600" type="button" @click="showFormChange" />
    </div>
    <FormTrainer v-if="showForm" />
  </div>
</template>   

<script setup lang="ts">
import PokemonInfo from './components/pokemon_info.vue'
import Loader from './components/loader.vue'
import FormTrainer from './components/form_trainer.vue'
import { functions } from './composable/functions';
import { ref, onMounted } from 'vue';
import type { Pokemon } from './interfaces/types';
import ButtonPredefined from './components/button_predefined.vue'

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
  await new Promise(resolve => setTimeout(resolve, 500))

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