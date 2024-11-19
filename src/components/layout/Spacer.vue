<script setup>
import { computed } from 'vue';

const props = defineProps({
    height: {
        type: String,
        default: '0px'
    },
    width: {
        type: String,
        default: '0px'
    }
});

const spacerStyle = computed(() => ({
    height: props.height,
    width: props.width
}));
</script>

<template>
    <div :style="spacerStyle"></div>
</template>

