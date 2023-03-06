<template>
    <label class="input_radio_label">
        <input
            type="radio"
            class="input__radio input__type"
            :value="text"
            name="GenderName"
            :id="id"
            :checked="checked"
            v-model="value"
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
        modelValue: [String, Number, Boolean],
        id: {
            type: String,
            default: "nam",
        },
        text: {
            type: String,
            default: "Nam",
        },
        checked: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        /**
         * Theo dõi sự thay đổi value thì hàm sẽ được gọi bên ngoài để update value
         * Author: KienNT (03/03/2023)
         */
        value: function (newValue) {
            this.$emit("update:modelValue", newValue);
        },
        created() {
            this.value = this.modelValue;
        },
        updated() {
            this.value = this.modelValue;
        },
    },
    data() {
        return {
            value: null,
        };
    },
};
</script>
<style scoped>
@import url(../../css/components/radio.css);
</style>
