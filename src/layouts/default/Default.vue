<script lang="ts" setup>
  import TaskBar from './TaskBar.vue'
  import DefaultView from './DefaultView.vue'
</script>

<template>
    <v-app>
        <!-- <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer> -->
        <task-bar />
        <default-view class="position-fixed top-0 left-0 translate-middle" />
    </v-app>
</template>