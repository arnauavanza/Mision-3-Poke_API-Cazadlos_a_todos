<template>
    <div class="mx-auto max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
        <h3 class="mb-6 text-center text-2xl font-bold text-gray-800">
            Formulario de Registro de Entrenador Pokémon
        </h3>

        <form class="flex flex-col gap-4">
            <div>
                <label for="trainer-name" class="mb-1 block text-sm font-medium text-gray-700">
                    Nombre
                </label>
                <input type="text" id="trainer-name"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" />
            </div>

            <div>
                <label for="trainer-lastname" class="mb-1 block text-sm font-medium text-gray-700">
                    Apellidos
                </label>
                <input type="text" id="trainer-lastname"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" />
            </div>

            <div>
                <label for="trainer-dni" class="mb-1 block text-sm font-medium text-gray-700">
                    DNI
                </label>
                <input type="text" id="trainer-dni"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" />
            </div>

            <div>
                <label for="trainer-email" class="mb-1 block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input type="email" id="trainer-email"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" />
            </div>

            <div>
                <label for="trainer-password" class="mb-1 block text-sm font-medium text-gray-700">
                    Pokémon asignado
                </label>
                <input type="text" id="trainer-password"
                    class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200" />
            </div>
            <ButtonPredefined label="Registrar Entrenador" color="yellow" type="button" />
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonPredefined from './button_predefined.vue'

export default defineComponent({
  components: {
    ButtonPredefined
  }
})
</script>

