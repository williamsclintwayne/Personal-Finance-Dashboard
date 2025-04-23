<script setup lang="ts">
import { GridLayout, GridItem } from 'vue-grid-layout';
import { ref } from 'vue';

const widgets = ref([
  { x:0, y:0, w:4, h:3, i:'0', type: 'expense-chart' },
  { x:4, y:0, w:4, h:3, i:'1', type: 'budget-tracker' }
]);
</script>

<template>
  <GridLayout 
    :layout="widgets"
    :col-num="12"
    :row-height="100"
    :is-draggable="true"
  >
    <GridItem v-for="widget in widgets" :key="widget.i">
      <ExpenseChart v-if="widget.type === 'expense-chart'" />
      <BudgetTracker v-if="widget.type === 'budget-tracker'" />
    </GridItem>
  </GridLayout>
</template>
