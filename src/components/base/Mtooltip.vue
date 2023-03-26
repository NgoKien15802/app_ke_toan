<template>
    <span v-if="kind === 'title'" class="tooltip">
        {{ text }}
        <span class="tooltiptext">{{ subtext }}</span>
    </span>

    <span v-else-if="kind === 'error'" class="tooltiptext-error">{{
        subtext
    }}</span>

    <span v-else class="tooltiptext" :style="style">{{ subtext }}</span>
</template>
<script>
export default {
    name: "MTooltip",
    props: {
        // text ngoài của 1 subtext
        text: {
            type: String,
            default: "",
        },
        // giá trị bên trong tooltip
        subtext: {
            type: String,
            default: "",
            required: true,
        },

        // loại tooltip
        kind: {
            type: String,
            default: "title",
            required: true,
        },

        // Style css
        style: {
            type: String,
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/tooltips.css);
</style>
