<template>
  <table class="w-full table-auto border-separate border-spacing-y-2">
    <thead>
      <tr class="text-left text-sm text-gray-500">
        <th class="px-3 py-2">#</th>
        <th class="px-3 py-2">Nama Produk</th>
        <th class="px-3 py-2">Qty</th>
        <th class="px-3 py-2 text-right">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in products" :key="index" class="bg-white shadow-sm rounded-lg">
        <td class="px-3 py-2 font-medium text-gray-700">{{ index + 1 }}</td>
        <td class="px-3 py-2">{{ item.name }}</td>
        <td class="px-3 py-2">{{ item.totalQty }}</td>
        <td class="px-3 py-2 font-semibold text-right text-black-600">
          {{ formatCurrency(item.totalValue) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({ start: String, end: String })
const products = ref([])

// watchEffect(async () => {
//   const res = await fetch(`http://localhost:3000/reports/top-products?start=${props.start}&end=${props.end}`)
//   products.value = await res.json()
// })

watchEffect( async () => {
    products.value = [
    { name: 'Mouse Wireless', totalQty: 20, totalValue: 3000000 },
    { name: 'Keyboard Logitech', totalQty: 15, totalValue: 2250000 },
    { name: 'Flashdisk 64GB', totalQty: 30, totalValue: 1800000 },
    { name: 'Kabel HDMI', totalQty: 25, totalValue: 1250000 },
    { name: 'Powerbank 10.000mAh', totalQty: 12, totalValue: 960000 },
    { name: 'Speaker Bluetooth', totalQty: 8, totalValue: 800000 },
    { name: 'Monitor 24\"', totalQty: 5, totalValue: 750000 },
    { name: 'SSD 256GB', totalQty: 7, totalValue: 700000 },
    { name: 'Router WiFi', totalQty: 9, totalValue: 630000 },
    { name: 'Webcam HD', totalQty: 6, totalValue: 420000 },
  ]
})

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value)
}
</script>
