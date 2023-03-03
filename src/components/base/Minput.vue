<template>
    <input
        :type="type"
        :id="id"
        :name="name"
        :tabindex="tabindex"
        :autocomplete="autocomplete"
        class="input__type reset-input"
        :style="style"
        :class="[
            kind === 'default'
                ? ' input-default form__group-input ' + className
                : className,
            required ? ' input--required ' : '',
            isShowTooltip ? 'input-required' : '',
        ]"
        :placeholder="MISAResouce.vi.Enter + ' ' + placeHolder"
        v-model="value"
    />
    <!-- @input="$emit('update:modelValue', $event.target.value)" -->
</template>
<script>
import MISAResouce from "@/js/resource";
export default {
    name: "MInput",
    props: {
        modelValue: [String, Number, Boolean],
        type: {
            type: String,
            default: "text",
        },
        style: {
            type: String,
        },
        id: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        tabindex: {
            type: String,
            default: "",
        },
        className: {
            type: String,
            default: "",
        },
        placeHolder: {
            type: String,
            default: "",
        },
        kind: {
            type: String,
            default: "default",
            required: true,
        },
        required: {
            type: Boolean,
            default: false,
        },
        autocomplete: {
            type: String,
            default: "off",
        },
        isShowTooltip: {
            type: Boolean,
        },
    },
    watch: {
        /**
         * Theo dõi sự thay đổi value thì hàm sẽ được gọi đến thằng ngoài để update value
         * Author: KienNT (03/03/2023)
         */
        value: function (newValue) {
            this.$emit("update:modelValue", newValue);
        },
    },

    updated() {
        this.value = this.modelValue;
    },

    data() {
        return {
            MISAResouce,
            value: null,
        };
    },

    components: {},
};
</script>
<style scoped>
@import url(../../css/components/input.css);
</style>
