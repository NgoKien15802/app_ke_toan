<template>
    <label
        class="input__checkbox-wrapper margin-0"
        @click="this.$emit('handleCheckbox', $event)"
        :style="styleElement"
        :tabindex="tabindex"
        ref="labelCheckbox"
    >
        <input
            :id="id"
            type="checkbox"
            class="input__checkbox"
            v-model="valueCheckbox"
            ref="minput"
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
            type: Number,
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
        const labelCheckbox = this.$refs.labelCheckbox;
        if (labelCheckbox) {
            if (labelCheckbox.focus()) {
                alert("d");
            }
        }
    },

    data() {
        return {
            valueCheckbox: false,
        };
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
};
</script>
<style scoped>
@import url(../../css/components/checkbox.css);
</style>
