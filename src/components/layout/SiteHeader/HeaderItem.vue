<script setup>
import router from '@/router';

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    route: {
        type: String,
        required: true
    }
})

function naviagate() {
    console.log("hello")
    router.push(props.route)
}


</script>

<template>
    <p :onclick=naviagate>
        {{ label }}
    </p>
</template>

<style lang="css" scoped>
p {
    padding: 8px;
    font-size: larger;
    color: whitesmoke;
    user-select: none;
}

p:hover {
    background-color: dodgerblue;
    cursor: pointer;
    transition: background-color 0.3s ease

}
</style>