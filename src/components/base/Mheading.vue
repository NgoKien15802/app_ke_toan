<template>
    <h2 class="content__header-title-text heading">{{ text }}</h2>
</template>
<script>
export default {
    name: "MHeading",
    props: {
        // text của heading
        text: {
            type: String,
            default: "",
            required: true,
        },
    },
};
</script>
<style scoped>
.heading {
    font-size: 2.4rem;
    font-weight: 700;
    color: #111;
}
</style>
