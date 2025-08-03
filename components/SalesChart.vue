<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,
} from 'chart.js'
import { ref, watchEffect } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({ start: String, end: String })

const chartData = ref({
  labels: [],
  datasets: [{
    label: 'Penjualan',
    data: [],
    backgroundColor: '#3b82f6',
  }]
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}

// watchEffect(async () => {
//   // Ganti ini dengan fetch API kamu
//   const response = await fetch(`http://localhost:3000/reports/sales-by-month?start=${props.start}&end=${props.end}`)
//   const data = await response.json()
//   chartData.value.labels = data.map(item => item.month)
//   chartData.value.datasets[0].data = data.map(item => item.total)
// })

watchEffect(() => {
  chartData.value.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
  chartData.value.datasets[0].data = [3200000, 2750000, 2100000, 2950000, 1850000, 1500000, 1700000, 3000000]
})

</script>

<style scoped>
canvas {
  height: 300px !important;
}
</style>
