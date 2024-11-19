<script setup>

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    onClick: {
        type: Function,
        required: false,
    }
})
</script>

<template>
    <button :onclick="props.onClick">{{ text }}</button>
</template>

<style lang="css" scoped>
button {
    min-width: 100px;
    padding: 8px;
    font-size: 1.2rem;
    border: 1px rgb(44, 44, 44) solid;
    cursor: pointer;
    color: whitesmoke;
    background-color: transparent;
}

button:hover {
    transition: all 0.3s ease;
    background-color: dodgerblue;
    border: 1px solid dodgerblue;
    transform: scale(.85)
}
</style>
