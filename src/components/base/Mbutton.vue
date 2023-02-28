<template>
    <button :class="kind !== 'link' ? `btn ${className}` : className" :id="id">
        {{ text }}
    </button>
</template>
<script>
export default {
    name: "Mbutton",
    props: {
        text: {
            type: String,
            default: "",
            required: true,
        },
        kind: {
            type: String,
            default: "primary",
            required: true,
        },
        className: {
            type: String,
            default: "btn-primary",
        },
        id: {
            type: String,
        },
    },
};
</script>

<style scoped>
@import url(../../css/components/button.css);
</style>
