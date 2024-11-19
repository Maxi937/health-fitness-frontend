<script setup>
import { reactive } from 'vue';
import { fitnessService } from '@/service/HealthFitnessApi';
import FitnessButton from '../button/FitnessButton.vue';

const props = defineProps({
  onAddCardio: {
    type: Function,
    required: false
  }
})

const form = reactive({
  distance: '',
  time: ''
})


async function submit(distance, time) {
  try {
    const [hours, minutes] = time.split(':').map(Number);
    const totalSeconds = (hours * 3600) + (minutes * 60);

    const res = await fitnessService.addCardio(distance, totalSeconds)
    console.log(res.data.token)
    if (res.status == 200) {
      props.onAddCardio()
    } else {
      throw Error("Unable to add weight")
    }
  } catch (err) {
    form.error = "Unable to add weight"
  }
}
</script>


<template>
  <div class="container">

    <div class="field">
      <input v-model="form.distance" type="number" id="distance" name="distance" placeholder="distance" required>Km
    </div>

    <div class="field">
      <input v-model="form.time" type="time" id="weight" name="time" placeholder="time" required>
    </div>

    <FitnessButton text="Add" :onclick="() => submit(form.distance, form.time)" />
  </div>


</template>

<style scoped>
#distance {
  width: 70%;
}

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
