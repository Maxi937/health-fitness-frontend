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
    },
    icon: {
        type: String,
        required: true
    }
})

function naviagate() {
    router.push(props.route)
}


</script>

<template>
    <div>
        <v-icon scale=3 :name=props.icon />
        
        <p :onclick=naviagate>
            {{ label }}
        </p>
    </div>

</template>

<style lang="css" scoped>
p {
    padding: 16px;
}

div {
    background-color: black;
    text-align: center;
    padding: 24px;
    font-size: larger;
    color: whitesmoke;
    user-select: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 1px rgb(44, 44, 44) solid;

}

div:hover {
    border: 1px solid dodgerblue;
    color: dodgerblue;
    cursor: pointer;
    transition: all 0.3s ease
}
</style>