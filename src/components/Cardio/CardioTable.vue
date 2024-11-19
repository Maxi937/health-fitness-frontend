<script setup>
import { epochToDate, secondsToTime } from '@/utils/format-util';


const props = defineProps({
  cardios: {
    type: Array,
    required: true
  }
})
</script>


<template>
  <div class="container">
    <table v-if="props.cardios && props.cardios.length > 0">
      <thead>
        <tr>
          <th>Distance</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cardio, index) in props.cardios" :key="index">
          <td>{{ cardio.distance }}</td>
          <td>{{ secondsToTime(cardio.time) }}</td>
          <td>{{ epochToDate(cardio.timestamp.epochSeconds) }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No cardio available.</p>
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
