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
    label: 'Penjualan per Kategori',
    data: [],
    backgroundColor: '#10b981', // green
  }]
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}

// watchEffect(async () => {
//   const response = await fetch(`http://localhost:3000/reports/sales-by-category?start=${props.start}&end=${props.end}`)
//   const data = await response.json()
//   chartData.value.labels = data.map(item => item.category)
//   chartData.value.datasets[0].data = data.map(item => item.total)
// })

watchEffect(() => {
  chartData.value.labels = ['Elektronik', 'Makanan', 'Alat Tulis', 'Kebutuhan Rumah']
  chartData.value.datasets[0].data = [4200000, 1100000, 950000, 780000]
})

</script>

<style scoped>
canvas {
  height: 300px !important;
}
</style>
