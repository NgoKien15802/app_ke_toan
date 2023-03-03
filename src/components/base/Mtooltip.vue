<template>
    <span v-if="kind === 'title'" class="tooltip">
        {{ text }}
        <span class="tooltiptext">{{ subtext }}</span>
    </span>

    <span v-else-if="kind === 'error'" class="tooltiptext-error">{{
        subtext
    }}</span>

    <span v-else class="tooltiptext">{{ subtext }}</span>
</template>
<script>
export default {
    name: "MTooltip",
    props: {
        text: {
            type: String,
            default: "",
        },
        subtext: {
            type: String,
            default: "",
            required: true,
        },

        kind: {
            type: String,
            default: "title",
            required: true,
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/tooltips.css);
</style>
