<template>
    <ul
        class="contextmenu__fun-list d-block"
        :style="`left: ${left}px ; top: ${top}px`"
        ref="contextmenu"
    >
        <li class="contextmenu__fun-item">
            <a
                href="#"
                class="contextmenu__fun-link"
                @click="handleDuplicateEmployee"
                >{{ $t("Duplicate") }}</a
            >
        </li>

        <li class="contextmenu__fun-item">
            <a
                href="#"
                class="contextmenu__fun-link"
                @click="handleDeleteRow"
                >{{ $t("Delete") }}</a
            >
        </li>
        <li class="contextmenu__fun-item">
            <a href="#" class="contextmenu__fun-link">{{ $t("StopUse") }}</a>
        </li>
    </ul>
</template>
<script>
import MISAResouce from "@/js/resource";
export default {
    name: "MContextmenu",
    props: {
        //vị trí tọa độ y so với trình duyệt
        top: {
            type: String,
            default: "",
            required: true,
        },
        //vị trí tọa độ x so với trình duyệt
        left: {
            type: String,
            default: "",
            required: true,
        },
        // tham chiếu đến 1 element
        refElement: {
            type: Node,
        },
        // id của emploee đã chọn
        employeeIdSelected: {
            type: String,
            default: "",
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

        /**
         * handle click vào text xóa
         * Author: KienNT (06/03/2023)
         */
        handleDeleteRow() {
            if (this.employeeIdSelected) {
                this.$emit("handleDeleteRow");
            }
        },

        /**
         * handle click vào text Nhân bản
         * Author: KienNT (28/03/2023)
         */
        handleDuplicateEmployee() {
            if (this.employeeIdSelected) {
                this.$emit("handleDuplicateEmployee");
            }
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/contextMenu.css);
</style>
