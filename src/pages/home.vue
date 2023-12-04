<template>
  <h1 class="title">
    {{ message }}
  </h1>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello Vue!');
</script>

<style lang="scss" scoped>
.title {
  color: red;
}
</style>
