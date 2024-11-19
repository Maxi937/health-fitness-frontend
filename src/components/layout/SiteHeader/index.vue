<script setup>
import router from '@/router';


const props = defineProps({
  logosrc: {
    type: String,
    required: true,
  },
})

function logout() {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<template>
  <div class="container">
    <div>
      <img class="logo" :src="props.logosrc" alt="logo">
    </div>


    <div class="header-items">
      <v-icon :onclick="() => router.push('/')" scale=3 name="fa-home" />
      <v-icon :onclick="() => logout()" scale=3 name="md-logout" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  align-items: center;
  width: 100%;
}

.header-items {
  display: flex;
  gap: 10px;
  flex: 1;
  text-align: end;
  justify-content: flex-end;
}
</style>
