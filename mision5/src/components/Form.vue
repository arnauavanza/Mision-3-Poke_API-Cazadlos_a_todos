<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form @submit.prevent="enviarFormulario" class="bg-white p-8 rounded-lg shadow-md w-96 space-y-4">
      <div>
        <label class="block mb-1 font-medium">Nombre</label>
        <input v-model="name" type="text" required
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <div>
        <label class="block mb-1 font-medium">Apellidos</label>
        <input v-model="surname" type="text" required
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <div>
        <label class="block mb-1 font-medium">Email</label>
        <input v-model="email" type="email" required
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <div>
        <label class="block mb-1 font-medium">DNI</label>
        <input v-model="dni" type="text" required
          class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <button :disabled="!no_errors" type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed">
        Enviar
      </button>
    </form>
  </div>
  <Toast label="Formulario validado correctamente" :show="showToast" />
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import Toast from './Toast.vue'

const name = ref('')
const surname = ref('')
const email = ref('')
const dni = ref('')

const name_correct = ref(false)
const surname_correct = ref(false)
const email_correct = ref(false)
const dni_correct = ref(false)

const showToast = ref(false)

function enviarFormulario() {
  if (!no_errors.value) return

  showToast.value = true

  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const no_errors = computed(() => {
  return name_correct.value && surname_correct.value && email_correct.value && dni_correct.value
})

watch(name, (value) => {
  name_correct.value = !/\d/.test(value)
})

watch(surname, (value) => {
  surname_correct.value = !/\d/.test(value)
})

watch(email, (value) => {
  email_correct.value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
})

watch(dni, (value) => {
  dni_correct.value = /^\d{8}[A-Za-z]$/.test(value)
})

</script>
