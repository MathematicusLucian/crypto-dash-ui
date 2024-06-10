<script setup lang="ts">
const props = defineProps<{ name: any, detail: any }>();
</script>
<template>
  <div class="d-flex justify-space-between align-left">
    <span class="align-left name">{{ name }}</span>
    <span class="align-right">{{ detail }}</span>
  </div>
</template>
<style>
.name {
  margin-right: 10px;
}
</style>