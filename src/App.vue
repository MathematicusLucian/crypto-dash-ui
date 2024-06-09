<script lang="ts" setup>
import Error from "@/components/Error.vue";
</script>

<template>
  <Error />
  <RouterView />
</template>

<style scoped>
.logo {
  height: 2em;
  padding: 0.2em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
