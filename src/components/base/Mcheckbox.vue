<template>
    <label
        class="input__checkbox-wrapper"
        @click="this.$emit('handleCheckbox', $event)"
    >
        <input
            :id="id"
            type="checkbox"
            class="input__checkbox"
            v-model="valueCheckbox"
        />
        <span class="ms__checkbox select__all-checkbox">
            <span class="ms__border-checkbox">
                <div class="ms__checbox-icon"></div>
            </span>
        </span>
    </label>
</template>
<script>
export default {
    name: "MCheckbox",
    props: {
        modelValue: [String, Number, Boolean],
        id: {
            type: String,
            default: "",
        },
        initValue: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        /**
         * Theo dõi sự thay đổi value thì hàm sẽ được gọi bên ngoài để update value
         * Author: KienNT (03/03/2023)
         */
        initValue: function (newValue) {
            this.valueCheckbox = newValue;
        },
        valueCheckbox: function (newValue) {
            this.$emit("update:modelValue", newValue);
        },
    },

    data() {
        return {
            valueCheckbox: false,
        };
    },
};
</script>
<style scoped>
@import url(../../css/components/checkbox.css);
</style>
