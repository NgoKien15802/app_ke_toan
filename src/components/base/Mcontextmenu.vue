<template>
    <ul
        class="contextmenu__fun-list d-block"
        :style="`left: ${left}px ; top: ${top}px`"
        ref="contextmenu"
    >
        <li class="contextmenu__fun-item">
            <a href="#" class="contextmenu__fun-link">{{
                MISAResouce.vi.Duplicate
            }}</a>
        </li>

        <li class="contextmenu__fun-item">
            <a
                href="#"
                class="contextmenu__fun-link"
                @click="handleDeleteRow"
                >{{ MISAResouce.vi.Delete }}</a
            >
        </li>
        <li class="contextmenu__fun-item">
            <a href="#" class="contextmenu__fun-link">{{
                MISAResouce.vi.StopUse
            }}</a>
        </li>
    </ul>
</template>
<script>
import MISAResouce from "@/js/resource";
export default {
    name: "MContextmenu",
    props: {
        top: {
            type: String,
            default: "",
            required: true,
        },
        left: {
            type: String,
            default: "",
            required: true,
        },
        refElement: {
            type: Node,
        },
    },
    data() {
        return {
            MISAResouce,
        };
    },
    mounted() {
        window.addEventListener("click", this.handleOutsideContext);
    },
    beforeUnmount() {
        window.removeEventListener("click", this.handleOutsideContext);
    },
    methods: {
        /**
         * nghe sự kiện window. Nếu click ko phải là contextmenu thì ẩn ddi
         * Author: KienNT (06/03/2023)
         */
        handleOutsideContext(event) {
            let check = true;
            for (let index = 0; index < this.refElement.length; index++) {
                const element = this.refElement[index];
                if (element.contains(event.target)) {
                    check = false;
                }
            }
            if (
                check &&
                this.$refs["contextmenu"] &&
                !this.$refs["contextmenu"].contains(event.target)
            ) {
                this.$emit("hideContextMenu");
            }
        },

        handleDeleteRow(event) {
            console.log(event.target.parentNode.parentNode);
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/contextMenu.css);
</style>
