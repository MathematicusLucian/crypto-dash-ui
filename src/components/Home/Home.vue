<template>
  <v-container class="fill-height flex-column" fluid>
    <v-row class="full-width align-center">
      <filters :search="search"></filters>
    </v-row>
    <v-row class="full-width">
      <v-col cols="12">
        <data-handler :data="filteredCoins" :loading="loading">
          <coins-table :filteredCoins="filteredCoins"></coins-table>
        </data-handler>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
// import { apis } from "@/endpoints/apis";
import Filters from "@/components/Home/Filters.vue";
import CoinsTable from "@/components/Home/CoinsTable.vue";
import coinsList from "@/../tests/data/coins";
import DataHandler from "@/components/Home/DataHandler.vue";
import { ref, reactive, onMounted, watch } from "vue";

onMounted(async () => {
  await getCoinsList();
});
const loading = ref(false);
const coins: any = ref({value: null});
const filteredCoins: any = ref(null);
const search: any = reactive({ name: null, symbol: null });

async function getCoinsList({selectedCurrency = "usd"} = {}) {
  loading.value = true;
  // coins.value = await apis.getCoinsList(selectedCurrency);
  coins.value = coinsList;
  filteredCoins.value = coins.value;
  loading.value = false;
}

async function getCoinsListByNameOrSymbol({} = {}) {
  let byName = [], bySymbol = [];
  loading.value = true;
  if(!search.name && !search.symbol) {
    filteredCoins.value = coins.value;
  } else {
    if(search.name) {
      byName = coins.value.filter((c: any) => c.name.toLowerCase().includes(search.name.toLowerCase()));
    }
    if(search.symbol) {
      bySymbol = coins.value.filter((c: any) => c.symbol.toLowerCase().includes(search.symbol.toLowerCase()));
    }
    filteredCoins.value = [...byName, ...bySymbol];            // combine search results
    filteredCoins.value = [...new Set(filteredCoins.value)];   // removing duplicates
  }
  loading.value = false;
}

watch(search, async () => await getCoinsListByNameOrSymbol());
</script>

<style>
.pointer-click {
  cursor: pointer;
}
.full-width {
  width: 100%;
}
</style>