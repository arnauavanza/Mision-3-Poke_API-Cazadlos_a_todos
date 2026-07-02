  <template>
    <div class="p-4 rounded-xl flex flex-col items-center gap-6">
      <form class="w-80 p-4 flex flex-col gap-3 bg-red-500 border-2 border-black rounded-xl">
        <Input :value="inputName" placeholder="Trainer name" @update="inputName = $event" />
        <Input :value="inputEmail" placeholder="trainer@example.com" @update="inputEmail = $event" />
        <ButtonPred label="Asignar Pokémon" type="button" classColor="bg-yellow-400" @click="assignPokemon" />
      </form>
      <PokeImg v-if="trainer && trainer.pokemon" :img="trainer.pokemon.imageUrl"></PokeImg>
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
import { useRandomPokemon } from '../composable/usePokeRandom.ts'
import { useTrainerStore } from '../stores/trainer.ts'
import Notification from './notification.vue';
import Input from './input.vue'
import PokeImg from './pokemon_img.vue'

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
    trainer.value!.pokemon = await randomPokemon()
    trainer.value!.pokemon_assigned = true
  
}

function saveTrainer() {
  if (!createObject()) {
    showNotification()
    return
  }
  trainerStore.addTrainer(trainer.value!)
  inputEmail.value = ""
  inputName.value = ""
  trainer.value = null

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