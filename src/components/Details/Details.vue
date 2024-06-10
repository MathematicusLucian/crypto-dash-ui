<template>
    <v-container v-if="chartOptions?.series" fluid>
      <v-row v-if="coinDetail">
        <v-col cols="12">
          <div class="d-flex align-center">
            <v-btn icon="mdi-arrow-left" to="/" class="mr-3"></v-btn>
            <img :src="coinDetail.image.thumb" class="pr-2" />
            <span class="font-weight-bold text-subtitle-1">
              {{ coinDetail.name }} Price chart ({{ coinDetail.symbol }})
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <tabs-toggle :tabs="tabs" :options="options"></tabs-toggle>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <highcharts class="rounded-lg" :options="chartOptions"></highcharts>
          <div class="mt-4" v-if="coinDetail">
            <range-table :coinDetail="coinDetail"></range-table>
          </div>
        </v-col>
        <v-col cols="12" md="4" v-if="coinDetail">
          <v-card color="#212121" rounded="lg">
            <statistics-table :coinDetail="coinDetail"></statistics-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script lang="ts" setup>
  // import { apis } from "@/endpoints/apis";
  import bitcoin from "@/../tests/data/bitcoin";
  import mantle from "@/../tests/data/mantle";
  import TabsToggle from "@/components/Details/TabsToggle.vue";
  import RangeTable from "@/components/Details/RangeTable.vue";
  import StatisticsTable from "@/components/Details/StatisticsTable.vue";
  import { getChartOptions } from "@/helpers/highchartOptions";
  import { ref, onMounted, watch, reactive, computed } from "vue";
  import { useRoute } from "vue-router";
  import useAxios from "@/composables/useAxios";

//  const { get } = useAxios();
  const route = useRoute();
  const tabs = [
    {name: "Price", value: "prices"},
    {name: "Market Caps", value: "market_caps"},
    {name: "Volumes", value: "total_volumes"}
  ];
  const coinID: any = ref("");
  const options: any = reactive({ mode: "prices", days: 1 });
  const loading: any = ref(false);
  const detail: any = ref(null);
  const chartOptions: any = ref(null);
  const coinDetail: any = ref(null);
  onMounted(async () => {
    loading.value = true;
    coinID.value = route.params.coinID;
    getChart(coinID.value);
    getCoinDetail(coinID.value);
    loading.value = false;
  });

  async function getChart(coinID: string, { selectedCurrency = "usd" } = {}) {
    // detail.value = await apis.getChart({ coinID, days: options.days, selectedCurrency });
    detail.value = bitcoin;
    console.log(detail)
    chartOptions.value = getChartOptions(detail.value, options.mode);
  }

  async function getCoinDetail(coinID: string, { selectedCurrency = "usd" } = {}) {
    // coinDetail.value = await apis.getCoinDetail(coinID);
    coinDetail.value = mantle;
  }

  watch(options, (newValue, oldValue) => {
    chartOptions.value = getChartOptions(detail.value, newValue.mode);
  });
  </script>