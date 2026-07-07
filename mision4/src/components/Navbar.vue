<template>
    <nav class="flex justify-between bg-gray-800 p-4 shadow-md">
        <img src="../assets/logo.png" class="h-auto w-25" />
        <ButtonPredefined v-if="authStore.isAuthenticated" label="Cerrar sesión" type="button" classColor="bg-red-500"
            @click="logout" />
    </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import ButtonPredefined from './button_predefined.vue'

const authStore = useAuthStore();
const router = useRouter();

function logout() {
    authStore.isAuthenticated = false;
    router.push('/');
}
</script>