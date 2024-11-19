<script setup>
import { reactive } from 'vue';
import { fitnessService } from '@/service/HealthFitnessApi';
import FitnessButton from '../button/FitnessButton.vue';

const props = defineProps({
  onAddWeight: {
    type: Function,
    required: false
  }
})

const form = reactive({
  weight: '',
})


async function submit(weight) {
  try {
    const res = await fitnessService.addWeight(weight)
    console.log(res.data.token)
    if (res.status == 200) {
      props.onAddWeight()
    } else {
      throw Error("Unable to add weight")
    }
  } catch (err) {
    console.log(err)
    form.error = "Unable to add weight"
  }
}
</script>


<template>
  <div class="container">

    <div class="field">
      <input v-model="form.weight" type="number" id="weight" name="weight" placeholder="weight" required>
    </div>

    <FitnessButton text="Add" :onclick="() => submit(form.weight)" />
  </div>


</template>

<style scoped>
.error {
  margin: auto;
}

.container {
  width: max-content;
  padding: 28px;
  margin: auto;
  display: flex;
  gap: 20px;
}

.field {

  padding: 5px;
  display: flex;
  align-items: center;
  flex: 1;
  gap: 20px;
}

.field input {
  background-color: transparent;
  border: none;
  color: whitesmoke;
  font-size: 18px;
  font-weight: bold;
  border-style: none;
  padding: 16px;
  justify-self: flex-end;
  margin-left: auto;
}

input:focus {
  outline: none;
  border: none;
}
</style>
