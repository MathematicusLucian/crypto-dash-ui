<script setup lang="ts">
const props = defineProps<{ coinDetail: any }>();
import { formatPriceChange, getPriceChangeClass, } from "@/helpers/index";
let timePeriods = ["1h", "24h", "7d", "14d", "30d", "1yr"];
let tableHeadings = ["Range", "1h", "24h", "7d", "14d", "30d", "1yr"];
const getMarketData = (timePeriod: any) => {
    let k = `price_change_percentage_${timePeriod}_in_currency`;
    if (props.coinDetail.market_data[k] && props.coinDetail.market_data[k]['usd']) {  
        return props.coinDetail.market_data[k]['usd'];
    }
}
</script>
<template>
    <v-table class="text-center rounded-lg">
        <tr class="bg-blue-darken-3">
            <th v-for="(tableHeading, i) in tableHeadings" class="text-left">{{tableHeading}}</th>
        </tr>
        <tr class="bg-blue-darken-5">
            <td class="pa-2">Change</td>
            <td v-for="timePeriod in timePeriods"
            :class="getPriceChangeClass(getMarketData(timePeriod))">
                {{formatPriceChange(getMarketData(timePeriod))}}%
            </td>
        </tr>
    </v-table>
</template>