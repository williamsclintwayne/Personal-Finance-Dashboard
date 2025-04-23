<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';
import { useTransactionStore } from '@/stores/transactions';

Chart.register(...registerables);
const store = useTransactionStore();
const chartEl = ref<HTMLCanvasElement>();

onMounted(() => {
  new Chart(chartEl.value!, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar'],
      datasets: [{
        label: 'Monthly Expenses',
        data: store.expenses.map(e => e.amount),
        borderColor: '#3b82f6'
      }]
    }
  });
});
</script>

<template>
  <div class="p-4 bg-white rounded-lg shadow">
    <canvas ref="chartEl"></canvas>
  </div>
</template>
