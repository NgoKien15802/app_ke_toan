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
                ? '  input-default form__group-input ' + className
                : className,
            required ? ' input--required ' : '',
        ]"
        :placeholder="MISAResouce.vi.Enter + ' ' + placeHolder"
    />
</template>
<script>
import MISAResouce from "@/js/resource";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Minput",
    props: {
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
    },
    data() {
        return {
            MISAResouce,
        };
    },
};
</script>
<style scoped>
@import url(../../css/components/input.css);
</style>
