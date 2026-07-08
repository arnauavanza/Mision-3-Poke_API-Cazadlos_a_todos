<template>
  <h1>Poke Trainers</h1>
  <div class="flex min-h-screen items-start gap-6 p-6">
    <div class="w-96 flex-shrink-0">
      <Form />
    </div>

    <div class="flex-1">
      <Trainer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Form from '../components/form.vue'
import Trainer from '../components/trainerlist.vue';

</script>