<template>
    <label class="input_radio_label">
        <input
            type="radio"
            class="input__radio input__type"
            :value="text"
            name="GenderName"
            :id="id"
        />
        <span class="ms__radio">
            <span class="ms__radio-border"></span>

            <span class="ms__radio-circle" tabindex="6"></span>
        </span>
        <label :for="id" class="ms__radio-label">{{ text }} </label>
    </label>
</template>
<script>
export default {
    name: "MRadio",
    props: {
        id: {
            type: String,
            default: "nam",
        },
        text: {
            type: String,
            default: "Nam",
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/radio.css);
</style>
