<template>
    <div class="flex min-h-screen flex-col items-center justify-center">
        <h1 class="text-6xl font-bold">404</h1>
        <p class="mt-4 text-xl">Página no encontrada</p>
        <img src="../assets/pikachu-pokemon.gif" class="mt-4 h-auto w-50" />
        <RouterLink :to="{ name: 'Login' }" class="mt-6 rounded bg-blue-500 px-4 py-2 text-white">
            Volver al inicio
        </RouterLink>
    </div>
</template>