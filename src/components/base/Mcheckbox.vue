<template>
    <label
        class="input__checkbox-wrapper margin-0"
        @click="this.$emit('handleCheckbox', $event)"
        :style="styleElement"
    >
        <input
            :id="id"
            type="checkbox"
            class="input__checkbox"
            :tabindex="tabindex"
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
        // giá trị cần binding ra ngoài khi sử dụng component
        modelValue: [String, Number, Boolean],
        // id của checkbox
        id: {
            type: String,
            default: "",
        },
        // giá trị ban đầu
        initValue: {
            type: Boolean,
            default: false,
        },
        isChange: {
            type: Boolean,
        },
        styleElement: {
            type: String,
        },
        tabindex: {
            type: String,
        },
    },

    watch: {
        /**
         * Theo dõi sự thay đổi valueCheckbox thì hàm sẽ được gọi bên ngoài để update value
         * Author: KienNT (03/03/2023)
         */
        valueCheckbox: function (newValue) {
            this.$emit("update:modelValue", newValue);
        },
    },

    created() {
        this.valueCheckbox = this.initValue;
    },
    updated() {
        this.valueCheckbox = this.initValue;
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
