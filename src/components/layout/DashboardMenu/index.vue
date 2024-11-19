<script setup>
import DashboardItem from './DashboardItem.vue';

const menuItems = {
    weight: {
        label: "Weight",
        route: "/weight",
        icon: "fa-weight"
    },
    cardio: {
        label: "Cardio",
        route: "/cardio",
        icon: "fa-running"
    },
    workouts: {
        label: "Workouts",
        route: "/workouts",
        icon: "fa-weight-hanging"
    }
}

</script>

<template>
    <div class="container">
        <DashboardItem :icon="item.icon" :route="item.route" :label="item.label" v-for="item in menuItems" />
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    max-width: 1200px;
    margin: 164px auto;
}
</style>