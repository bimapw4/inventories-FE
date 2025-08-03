<template>
  <div class="bg-white shadow rounded-2xl p-6 hover:shadow-md transition">
    <h2 class="text-xl font-semibold mb-4 text-gray-800">{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup>
defineProps({ title: String })
</script>
