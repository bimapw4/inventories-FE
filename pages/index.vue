<template>
  <div class="min-h-screen bg-gray-100 p-8 space-y-8">
    <header class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-800">Inventory Dashboard</h1>
      <DateRangePicker v-model:start="start" v-model:end="end" />
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <DashboardCard title="📈 Penjualan per Bulan">
        <SalesChart :start="start" :end="end" />
      </DashboardCard>

      <DashboardCard title="📊 Penjualan per Kategori">
        <CategoryChart :start="start" :end="end" />
      </DashboardCard>
    </div>

    <div class="grid grid-cols-1">
      <DashboardCard title="🏆 10 Produk Terlaris">
        <TopProductTable :start="start" :end="end" />
      </DashboardCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DashboardCard from '@/components/DashboardCard.vue'
import SalesChart from '@/components/SalesChart.vue'
import CategoryChart from '@/components/CategoryChart.vue'
import TopProductTable from '@/components/TopProductTable.vue'
import DateRangePicker from '@/components/DateRangePicker.vue'

const start = ref('2025-01-01')
const end = ref('2025-08-01')
</script>
