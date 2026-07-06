  <template>
    <div class="p-4 rounded-xl flex flex-col items-center gap-6">
      <form class="w-80 p-4 flex flex-col gap-3 bg-red-500 border-2 border-black rounded-xl">
        <Input :value="inputName" placeholder="Trainer name" @update="inputName = $event" />
        <Input :value="inputSurname" placeholder="Trainer surname" @update="inputSurname = $event" />
        <Input :value="inputEmail" placeholder="trainer@example.com" @update="inputEmail = $event" />
        <Input :value="inputDNI" placeholder="12345678A" @update="inputDNI = $event" />
        <ButtonPred label="Asignar Pokémon" type="button" classColor="bg-yellow-400" @click="assignPokemon" />
      </form>
      <PokeImg v-if="trainer && trainer.pokemon" :img="trainer.pokemon.imageUrl"></PokeImg>
      <div class="w-80">
        <ButtonPred label="Guardar Entrenador" type="submit" classColor="bg-orange-400" @click="handleClickButton" />
      </div>
    </div>
    <Notification v-if="notification_show" :label="error_message" :button_del=false
      @close=closeNotification></Notification>
    <Toast label="Formulario validado correctamente" :show="showToast" />
  </template>

<script setup lang="ts">
import ButtonPred from './button_predefined.vue'
import { ref, computed, watch } from 'vue';
import type { Trainer } from '../interfaces/types.ts'
import { useRandomPokemon } from '../composable/usePokeRandom.ts'
import { useTrainerStore } from '../stores/trainer.ts'
import Notification from './notification.vue';
import Input from './input.vue'
import PokeImg from './pokemon_img.vue'
import Toast from './Toast.vue'

const { randomPokemon } = useRandomPokemon()
const trainerStore = useTrainerStore()

let inputName = ref('')
let inputSurname = ref('')
let inputEmail = ref('')
let inputDNI = ref('')

let trainer = ref<Trainer | null>(null)
let notification_show = ref(false)

const name_correct = ref(false)
const surname_correct = ref(false)
const email_correct = ref(false)
const dni_correct = ref(false)

let error_message = computed(() => {
  if (!name_correct.value) {
    return "Nombre incorrecto, no puede contener números"
  }
  else if (!surname_correct.value) {
    return "Apellido incorrecto, no puede contener números"
  }
  else if (!email_correct.value) {
    return "Email incorrecto, debe tener el formato correcto (example@domain.com)"
  }
  else if (!dni_correct.value) {
    return "DNI incorrecto, debe tener el formato correcto (12345678A)"
  } else {
    closeNotification()
    return ""
  }
})

const no_errors = computed(() => {
  return name_correct.value && surname_correct.value && email_correct.value && dni_correct.value
})

const showToast = ref(false)

watch(inputName, (value) => {
  name_correct.value = !/\d/.test(value)
})

watch(inputSurname, (value) => {
  surname_correct.value = !/\d/.test(value)
})

watch(inputEmail, (value) => {
  email_correct.value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
})

watch(inputDNI, (value) => {
  dni_correct.value = /^\d{8}[A-Za-z]$/.test(value)
})

function enviarFormulario() {
  if (!no_errors.value) return

  showToast.value = true

  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

function handleClickButton() {
  saveTrainer()
  enviarFormulario()
}

function resetForm() {
  inputName.value = ""
  inputSurname.value = ""
  inputEmail.value = ""
  inputDNI.value = ""
  trainer.value = null
}

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
  resetForm()
}

function createObject() {
  if (!no_errors.value) {
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