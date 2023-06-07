<template>
    <input
        :type="type"
        :id="id"
        :name="name"
        ref="minput"
        :disabled="isDisabled"
        :tabindex="tabindex"
        :autocomplete="autocomplete"
        :placeholder="placeHolder"
        class="input__type reset-input"
        :style="style"
        :class="[
            kind === 'default'
                ? ' input-default form__group-input ' + className
                : className,
            required ? ' input--required ' : '',
            isShowTooltip ? 'input-required' : '',
        ]"
        v-model="value"
        @input="()=> this.$emit('filterNonNumeric')"
    />
    <!-- @input="$emit('update:modelValue', $event.target.value)" -->
</template>
<script>
import MISAResouce from "@/js/resource";
export default {
    name: "MInput",
    props: {
        // giá trị cần binding khi sử dụng component input
        modelValue: [String, Number, Boolean],
        // loại input: date, text,...
        type: {
            type: String,
            default: "text",
        },
        // style css cho input
        style: {
            type: String,
        },
        // id cho input
        id: {
            type: String,
            default: "",
        },

        //set disanled cho input
        isDisabled: {
            type: Boolean,
            default: false,
        },

        // name của input
        name: {
            type: String,
            default: "",
        },
        // tabindex của input
        tabindex: {
            type: String,
            default: "",
        },
        // class của input
        className: {
            type: String,
            default: "",
        },
        // placholder của input
        placeHolder: {
            type: String,
            default: "",
        },

        // loại input
        kind: {
            type: String,
            default: "default",
            required: true,
        },
        // có bắt buộc không?
        required: {
            type: Boolean,
            default: false,
        },
        // tự động hoàn thành
        autocomplete: {
            type: String,
            default: "off",
        },
        // có show tooltip không?
        isShowTooltip: {
            type: Boolean,
        },
        // có được focus không?
        isFocus: {
            type: Boolean,
            required: false,
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
    },

    mounted() {
        if (this.isFocus) {
            this.setFocus();
        }
    },

    methods: {
        /**
         * Set focus khi được mounted và có props isFocus = true
         * Author: KienNT (03/03/2023)
         */
        setFocus() {
            this.$nextTick(function () {
                this.$refs["minput"] && this.$refs["minput"].focus();
            });
        },
    },

    created() {
        this.value = this.modelValue;
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
