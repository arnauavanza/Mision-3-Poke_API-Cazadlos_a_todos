<template>
  <Navbar v-if="route.path !== '/' && route.name !== 'NotFound'" />
  <router-view />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>