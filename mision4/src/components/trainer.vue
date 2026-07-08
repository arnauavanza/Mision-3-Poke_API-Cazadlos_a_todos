<template>
  <div class="flex items-center justify-between p-4 border rounded-xl">
    <h3 class="text-lg font-bold">{{ trainer.name }}</h3>
    <div class="flex items-center gap-4">
      <p v-if="trainer.pokemon">{{ trainer.pokemon.name }}</p>
      <ButtonPred v-else label="Assignar Pokémon" type="submit" classColor="bg-blue-500"
        @click="trainerStore.updateTrainerPokemon(trainer)" />
      <img v-if="trainer.pokemon?.imageUrl" :src="trainer.pokemon?.imageUrl" class="w-16 h-16 object-contain">
    </div>
    <ButtonPred label="Eliminar entrenador" type="submit" classColor="bg-red-500" @click="confirmDelete" />
    <Notification v-if="delete_trainer" @confirm="handleClick"
      :label="'¿Estás seguro de querer eliminar al entrenador ' + props.trainer.name + '?'" :button_del=true>
    </Notification>
  </div>
</template>

<script setup lang="ts">
import ButtonPred from './button_predefined.vue'
import { useTrainerStore } from '../stores/useTrainersStore.ts'
import type { Trainer } from '../interfaces/types.ts';
import Notification from './notification.vue';
import { ref } from 'vue';

const trainerStore = useTrainerStore()
let delete_trainer = ref(false)

const props = defineProps<{
  trainer: Trainer
}>()

function confirmDelete() {
  delete_trainer.value = true
}

function closeNotification() {
  delete_trainer.value = false
}

function handleClick() {
  closeNotification()
  trainerStore.deleteTrainer(props.trainer)
}
</script>