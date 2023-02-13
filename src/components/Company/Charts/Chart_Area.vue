<template>
    <div class="">
        <Doughnut :data="data_area" :options="options" />
    </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'


ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'App',
  components: {
    Doughnut
  },
  data() {
    return chartConfig
  }
}
</script>

<style>

</style>