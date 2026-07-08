<template>
    <div>
        <div v-if="trainerStore.trainers.length === 0" class="text-center">
            No hay entrenadores aun...
        </div >
        <div v-else>
            <TrainerComp v-for="trainer in trainerStore.trainers" :key="trainer.email" :trainer="trainer" />
            <p>Total: {{ totalTrainers }}</p>
        </div>

    </div>
</template>

<script setup lang="ts">
import TrainerComp from './trainer.vue'
import { useTrainerStore } from '../stores/useTrainersStore.ts'
import { computed } from 'vue'

const trainerStore = useTrainerStore()
const totalTrainers = computed(function () {
    return trainerStore.trainers.length
})
</script>