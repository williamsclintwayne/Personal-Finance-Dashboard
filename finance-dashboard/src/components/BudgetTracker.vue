<script setup lang="ts">
import { ref } from 'vue';

const budget = ref(1000); // Example budget value
const expenses = ref(750); // Example expenses value
const remaining = ref(budget.value - expenses.value);
</script>

<template>
  <div class="p-4 bg-white rounded-lg shadow">
    <h3>Budget Tracker</h3>
    <p>Total Budget: {{ budget }}</p>
    <p>Total Expenses: {{ expenses }}</p>
    <p>Remaining: {{ remaining }}</p>
  </div>
</template>

<style scoped>
.p-4 {
  padding: 1rem;
}
.bg-white {
  background-color: white;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>