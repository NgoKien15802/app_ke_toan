<template>
    <button
        :tabindex="tabindex"
        :class="kind !== 'link' ? `btn ${className}` : className"
        :id="id"
        @click="click"
    >
        {{ text }}
    </button>
</template>
<script>
export default {
    name: "MButton",
    props: {
        text: {
            type: String,
            default: "",
            required: true,
        },
        kind: {
            type: String,
            default: "primary",
        },
        className: {
            type: String,
            default: "btn-primary",
        },
        id: {
            type: String,
        },
        tabindex: {
            type: String,
            default: "",
        },
        click: {
            type: Function,
        },
    },
};
</script>

<style scoped>
@import url(../../css/components/button.css);
</style>
