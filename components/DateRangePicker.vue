<template>
  <div class="flex items-center gap-4">
    <label class="text-sm font-medium">Dari:</label>
    <input type="date" :value="start" @input="e => emit('update:start', e.target.value)" class="border rounded px-2 py-1" />
    <label class="text-sm font-medium">Sampai:</label>
    <input type="date" :value="end" @input="e => emit('update:end', e.target.value)" class="border rounded px-2 py-1" />
  </div>
</template>

<script setup>
const props = defineProps({ start: String, end: String })
const emit = defineEmits(['update:start', 'update:end'])
</script>
