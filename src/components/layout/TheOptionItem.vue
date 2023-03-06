<template>
    <li
        class="option__item"
        :class="isActive ? 'active' : ''"
        @click="this.$emit('handleClickItem', $event)"
    >
        <a href="#" class="option__link"
            >{{ text }}
            {{ MISAResouce.vi.RecordInPage }}
        </a>
    </li>
</template>
<script>
import MISAResouce from "../../js/resource";

export default {
    name: "TheOptionItem",
    props: {
        text: {
            type: String,
            default: "",
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            MISAResouce,
        };
    },
};
</script>
<style scoped></style>
