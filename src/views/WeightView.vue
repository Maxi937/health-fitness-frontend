<script setup>
import WeightTable from '@/components/Weight/WeightTable.vue';
import { fitnessService } from '@/service/HealthFitnessApi';
import AddWeightForm from '@/components/Weight/AddWeightForm.vue';
import { onMounted, ref } from 'vue';
import Spacer from '@/components/layout/Spacer.vue';

const weights = ref(null);
const loading = ref(true);
const error = ref(null);

const getWeights = async () => {
  try {
    const res = await fitnessService.getWeights();
    if (!res.status == 200) {
      throw new Error('Failed to fetch data');
    }
    console.log(res.data)
    weights.value = res.data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => getWeights())
</script>

<template>
  <main>
    <AddWeightForm v-on:add-weight="() => getWeights()" />
      <Spacer height="34px"></Spacer>
    <WeightTable v-bind:weights="weights" />
  </main>
</template>
