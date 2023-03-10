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
        // text bên trong button
        text: {
            type: String,
            default: "",
            required: true,
        },
        // Loại button: primary, default,...
        kind: {
            type: String,
            default: "primary",
        },
        // class cho button
        className: {
            type: String,
            default: "btn-primary",
        },
        // id cho button
        id: {
            type: String,
        },
        // tabindex nếu có
        tabindex: {
            type: String,
            default: "",
        },
        // handle khi click button
        click: {
            type: Function,
        },
    },
};
</script>

<style scoped>
@import url(../../css/components/button.css);
</style>
