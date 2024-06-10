<script setup lang="ts">
const props = defineProps<{ tabs: any, options: any }>();
</script>
<template>
    <v-btn-toggle v-model="options.mode" variant="outlined" divided>
        <v-btn v-for="(tab, i) in tabs" :value="tab.value">{{ tab.name }}</v-btn>
    </v-btn-toggle>
</template>