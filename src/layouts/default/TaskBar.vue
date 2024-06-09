<script lang="ts" setup>
//
</script>

<template>
  <v-app-bar flat color="#010409">
    <template v-slot:prepend>
      <a href="#" target="_blank">
        <img src="/crypto-trading.svg" class="logo" alt="crypto-dash logo" />
        <span>crypto-dash</span>
      </a>
    </template>
    <v-app-bar-title>Real-time crypto prices</v-app-bar-title>
    <template v-slot:append>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
</template>