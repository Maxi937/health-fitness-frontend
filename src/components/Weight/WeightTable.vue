<script setup>
import { epochToDate } from '@/utils/format-util';


const props = defineProps({
  weights: {
    type: Array,
    required: true
  }
})
</script>


<template>
  <div class="container">
    <table v-if="props.weights && props.weights.length > 0">
      <thead>
        <tr>
          <th>Weight</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(weight, index) in props.weights" :key="index">
          <td>{{ weight.value }}</td>
          <td>{{ epochToDate(weight.timestamp.epochSeconds) }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No weights available.</p>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  width: 100%;
  margin: auto
}

table {
  border: 1px solid black;
  margin: auto;
  width: 50%;
}

th {
  background: black;
  font-size: 24px;
}

td {
  border-collapse: collapse;
  border: 1px solid black;
  font-size: 18px;
}

</style>
