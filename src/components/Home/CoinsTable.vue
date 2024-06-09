<script setup lang="ts">
import router from "@/router";
defineProps<{ filteredCoins: any }>();
import { numberWithCommas, formatPriceChange, getPriceChangeClass, } from "@/helpers/index";
let tableHeadings = ["#", "Coin","Price","24H","24H(%)","Volume","Market Cap"];
</script>

<template #default>
    <v-table
      theme=""
      class="rounded-lg"
      fixed-header
      hover
      height="calc(100vh - 180px)"
    >
      <thead>
        <tr class="text-h6">
          <th v-for="(tableHeading, i) in tableHeadings" class="text-left">{{tableHeading}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(coin, i) in filteredCoins" :key="coin.id">
          <td>{{ i + 1 }}</td>
          <td
            class="d-flex text-left align-center pointer-click"
            @click="
              router.push(
                {
                  name: 'details',
                  params: { coinID: coin.id }
                })
            "
          >
            <img :src="coin.image" :alt="coin.name" height="24" width="24" />
            <span class="ml-3 mr-3 pt-1" style="white-space:nowrap">
              {{ coin.name }}
            </span>
            <small class="text-uppercase font-weight-bold text-grey">
              {{ coin.symbol }}
            </small>
          </td>
          <td>${{ numberWithCommas(coin.current_price) }}</td>
          <td :class="getPriceChangeClass(coin.price_change_24h)">
            <v-icon>
              {{ coin.price_change_24h < 0 ? "mdi-menu-down" : "mdi-menu-up" }}
            </v-icon>
            <span>
              {{ formatPriceChange(coin.price_change_24h, 3) }}
            </span>
          </td>
          <td :class="getPriceChangeClass(coin.price_change_24h)">
            %{{ formatPriceChange(coin.price_change_percentage_24h, 2) }}
          </td>
          <td>{{ numberWithCommas(coin.total_volume) }}</td>
          <td>${{ numberWithCommas(coin.market_cap) }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>