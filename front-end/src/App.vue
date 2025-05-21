<script setup>
import { RouterView } from 'vue-router'

import myHeader from './components/my-header.vue';
import myFooter from './components/my-footer.vue';
</script>

<template>
  <myHeader class="mb-2"></myHeader>

  <main class="container-fluid">
    <RouterView />
  </main>


  <myFooter></myFooter>
</template>


