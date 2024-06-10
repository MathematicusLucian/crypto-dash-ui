<script setup lang="ts">
const props = defineProps<{ coinDetail: any }>();
import { numberWithCommas } from "@/helpers/index";
import StatisticRow from "@/components/Details/StatisticRow.vue";
let items = [{
    name: "Market Cap Rank",
    detail: props.coinDetail.market_cap_rank
},{
    name: props.coinDetail.name + "Current price",
    detail: "$"+props.coinDetail.market_data.current_price.usd
},{
    name: "24hLow/24hHigh",
    detail: "$"+props.coinDetail.market_data.low_24h.usd/props.coinDetail.market_data.high_24h.usd
},{
    name: "Market Cap",
    detail: numberWithCommas(props.coinDetail.market_data.market_cap.usd)
}];
</script>
<template>
    <v-card-title>{{coinDetail.name}} Price Stats</v-card-title>
    <v-card-text>
        <statistic-row
            v-for="(item, i) in items"
            :name="item.name"
            :detail="item.detail"
        ></statistic-row>
    </v-card-text>
</template>