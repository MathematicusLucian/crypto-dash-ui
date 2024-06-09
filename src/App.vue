<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="#" target="_blank">
      <img src="/crypto-trading.svg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <HelloWorld msg="crypto-dash" />
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
