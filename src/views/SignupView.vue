<script setup>
import { reactive } from 'vue';
import { fitnessService } from '@/service/HealthFitnessApi';
import FitnessButton from '@/components/button/FitnessButton.vue';
import router from '@/router';

const form = reactive({
    name: '',
    email: '',
    password: '',
    error: ''
})


async function signup(form) {
    try {
        const res = await fitnessService.signup(form.name, form.email, form.password)
        console.log(res)
        if (res.status == 200) {
            router.push({ name: 'login' });
        } else {
            throw Error("Unable to signup")
        }
    } catch (err) {
        console.log(err)
        form.error = "Unable to Signup"
    }
}


</script>


<template>
    <div class="container">
        <div class="field">
            <label>Name</label>
            <input v-model="form.name" type="string" id="name" name="name" placeholder="Enter your Name" required>
        </div>

        <div class="field">
            <label for="email">Email</label>
            <input v-model="form.email" type="email" id="email" name="email" placeholder="Enter your email" required>
        </div>

        <div class="field">
            <label for="password">Password</label>
            <input v-model="form.password" type="password" id="password" name="password"
                placeholder="Enter your password" required>
        </div>

        <div class="error">
            <p v-if="form.error != ''">Something went wrong</p>
            <p v-else style="visibility: hidden;">Something went wrong</p>
        </div>

        <FitnessButton text="Signup" :onclick="() => signup(form)" />
    </div>


</template>

<style scoped>
.error {
    margin: auto;
}

.container {
    width: max-content;
    padding: 28px;
    background-color: black;
    border: 1px rgb(44, 44, 44) solid;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: auto;
}

.field {
    padding: 5px;
    display: flex;
    align-items: center;
    flex: 1;
    gap: 20px;
}

.field input {
    padding: 16px;
    justify-self: flex-end;
    margin-left: auto;
}
</style>