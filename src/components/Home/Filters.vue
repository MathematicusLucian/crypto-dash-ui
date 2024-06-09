<script setup lang="ts">
defineProps<{ search: any }>();
</script>

<template>
    <v-col>
        <span class="text-h6">Filter</span>
    </v-col>
    <v-col>
        <v-text-field
            variant="outlined"
            label="Name"
            v-model.name="search.name"
            hide-details
        ></v-text-field>
    </v-col>
    <v-col>
        <v-text-field
            variant="outlined"
            label="Symbol"
            v-model.name="search.symbol"
            hide-details
        ></v-text-field>
    </v-col>
</template>