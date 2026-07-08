<template>
    <div class="flex min-h-screen items-center justify-center">
        <div class="w-full max-w-md rounded-xl bg-grey-800 p-8 shadow-lg">
            <h1 class="mb-6 text-center text-3xl font-bold !text-white">Login</h1>
            <form class="space-y-4">
                <div>
                    <label for="email" class="mb-2 block text-sm font-medium text-gray-200">Email:</label>
                    <Input :value="email" placeholder="example@example.com" @update="email = $event" />
                    <Paragrapyh v-if="email && !email_okformat" label="El correo no tiene un formato válido."/>
                </div>
                <div>
                    <label for="password" class="mb-2 block text-sm font-medium text-gray-200">Password:</label>
                    <Input :value="password" placeholder="Password" @update="password = $event" />
                    <Paragrapyh v-if="password && !password_okformat" label="La contraseña debe tener al menos 7 caracteres."/>
                </div>
                <ButtonPredefined label="Login" type="button" classColor="bg-blue-500" @click="login" />
            </form>
            <div class="mt-4">
                <Toast label="Invalid email or password." :show="showToast" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/useAuthStore.ts';
import Toast from '../components/Toast.vue'
import ButtonPredefined from '../components/button_predefined.vue'
import Input from '../components/input.vue';
import Paragrapyh from '../components/Paragrapyh.vue';

const authStore = useAuthStore();

const router = useRouter()

const email = ref('');
const password = ref('');

let email_okformat = ref(false);
let password_okformat = ref(false);

const email_real = ref('example@example.com');
const password_real = ref('password');

let showToast = ref(false);

function login() {
    if (email.value === email_real.value && password.value === password_real.value) {
        authStore.login();
        router.push({ name: 'Home' });
    } else {
        showToast.value = true;

        setTimeout(() => {
            showToast.value = false
        }, 3000)
    }
}

watch(email, (value) => {
    email_okformat.value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
})

watch(password, (value) => {
    password_okformat.value = /^.{7,}$/.test(value)
})
</script>