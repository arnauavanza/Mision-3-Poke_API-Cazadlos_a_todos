  <template>
    <div class="p-4 rounded-xl flex flex-col items-center gap-6">
      <form class="w-80 p-4 flex flex-col gap-3 bg-red-500 border-2 border-black rounded-xl">
        <input v-model="inputName" type="text" name="name" @change="createObject" placeholder="Trainer name"
          class="p-2 rounded border text-white border-black" />
        <input v-model="inputEmail" type="email" name="email" @change="createObject" placeholder="trainer@example.com"
          class="p-2 rounded border text-white border-black" />
        <ButtonPred label="Asignar Pokémon" type="button" classColor="bg-yellow-400" @click="assignPokemon" />
      </form>
      <div v-if="trainer && trainer.pokemon"
        class="relative flex items-center justify-center h-64 w-64 rounded-full border-8 border-black bg-[linear-gradient(to_bottom,#ef4444_0%,#ef4444_50%,#ffffff_50%,#ffffff_100%)] before:absolute before:left-0 before:top-1/2 before:h-4 before:w-full before:-translate-y-1/2 before:bg-black">
        <img :src="trainer.pokemon.imageUrl" class="h-full w-full object-contain brightness-0 select-none"
          draggable="false" />
      </div>
      <div class="w-80">
        <ButtonPred label="Guardar Entrenador" type="submit" classColor="bg-orange-400" @click="saveTrainer" />
      </div>
    </div>
    <Notification v-if="notification_show" :label="'¡¡Debes rellenar el nombre y el email!!'" :button_del=false
      @close=closeNotification></Notification>
  </template>

<script setup lang="ts">
import ButtonPred from './button_predefined.vue'
import { ref } from 'vue';
import type { Trainer } from '../interfaces/types.ts'
import { useRandomPokemon } from '../composable/functions.ts'
import { useTrainerStore } from '../stores/trainer.ts'
import Notification from './notification.vue';

const { randomPokemon } = useRandomPokemon()
const trainerStore = useTrainerStore()
let inputName = ref('')
let inputEmail = ref('')
let trainer = ref<Trainer | null>(null)
let notification_show = ref(false)


async function assignPokemon() {
  if (!createObject()) {
    showNotification()
    return
  }

  try {
    trainer.value!.pokemon = await randomPokemon()
    trainer.value!.pokemon_assigned = true
  } catch (error) {
    console.error(error)
  }
}

function saveTrainer() {
  if (!createObject()) {
    showNotification()
    return
  } else {
    trainerStore.addTrainer(trainer.value!)
    console.log(trainer.value!)
    inputEmail.value = ""
    inputName.value = ""
    trainer.value = null
  }
}


function createObject() {
  if (!inputName.value.trim() || !inputEmail.value.trim()) {
    return false
  }

  if (!trainer.value) {
    trainer.value = {
      name: inputName.value,
      email: inputEmail.value,
      pokemon_assigned: false
    }
  } else {
    trainer.value.name = inputName.value
    trainer.value.email = inputEmail.value
  }


  return true
}

function showNotification() {
  notification_show.value = true
}

function closeNotification() {
  notification_show.value = false
}

</script>