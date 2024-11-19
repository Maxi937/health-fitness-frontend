<script setup>
import WeightTable from '@/components/Weight/WeightTable.vue';
import { fitnessService } from '@/service/HealthFitnessApi';
import AddWeightForm from '@/components/Weight/AddWeightForm.vue';
import { onMounted, ref } from 'vue';
import Spacer from '@/components/layout/Spacer.vue';
import AddCardioForm from '@/components/Cardio/AddCardioForm.vue';
import CardioTable from '@/components/Cardio/CardioTable.vue';

const cardios = ref(null);
const loading = ref(true);
const error = ref(null);

const getCardio = async () => {
  try {
    const res = await fitnessService.getCardio();
    if (!res.status == 200) {
      throw new Error('Failed to fetch data');
    }
    console.log(res.data)
    cardios.value = res.data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => getCardio())
</script>

<template>
  <main>
    <AddCardioForm v-on:add-cardio="() => getCardio()" />
    <Spacer height="34px"></Spacer>
    <CardioTable v-bind:cardios="cardios" />
  </main>
</template>
