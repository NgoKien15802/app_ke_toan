<template>
    <span v-if="kind === 'title'" class="tooltip">
        {{ text }}
        <span class="tooltiptext">{{ subtext }}</span>
    </span>

    <span v-else class="tooltiptext">{{ subtext }}</span>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Thetooltip",
    props: {
        text: {
            type: String,
            default: "",
            required: true,
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
