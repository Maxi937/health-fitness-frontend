<script setup>
import { reactive } from 'vue';
import { fitnessService } from '@/service/HealthFitnessApi';
import FitnessButton from './button/FitnessButton.vue';
import router from '@/router';

const form = reactive({
    email: '',
    password: '',
    error: ''
})


async function login(email, password) {
    try {
        const res = await fitnessService.authenticate(email, password)
        if (res.status == 200) {
            console.log(res)
            const token = res.data.token;
            console.log(`dddd${res.data.token}`)
            localStorage.setItem('token', token);
            console.log(`token:${localStorage.getItem('token')}`)
            router.push('/');
        } else {
            throw Error("Unable to login")
        }
    } catch (err) {
      console.log(err)
        form.error = "Unable to login"
    }
}


</script>


<template>
    <div class="container">

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


        <FitnessButton text="Login" :onclick="() => login(form.email, form.password)" />
        <FitnessButton text="Signup" :onclick="() => router.push({ name: 'signup' })" />
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
