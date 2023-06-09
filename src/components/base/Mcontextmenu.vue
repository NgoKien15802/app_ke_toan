<template>
    <ul
        v-if="kind == 'batchExecution'"
        class="contextmenu__fun-list d-block"
        style="position: absolute; top: 110%; right: 0"
        ref="contextmenu"
    >
        <li class="contextmenu__fun-item">
            <a href="#" class="contextmenu__fun-link" @click="handleRemove">{{
                $t("Delete")
            }}</a>
        </li>
        <li class="contextmenu__fun-item">
            <a href="#" class="contextmenu__fun-link">{{ $t("Merge") }}</a>
        </li>
    </ul>

    <ul
        v-else-if="kind == 'conditionFilter'"
        class="contextmenu__fun-list d-block"
        :style="`right:0 ; top: 100%`"
        style="position: absolute"
        ref="contextmenu"
    >
        <li
            class="contextmenu__fun-item"
            v-for="(elementArray, index) in contextArray"
            :key="index"
            @click="handleClickItemCondition(elementArray.text)"
        >
            <a href="#" class="contextmenu__fun-link">{{
                $t(elementArray.text)
            }}</a>
        </li>
    </ul>

    <ul
        v-else-if="kind === 'contextMenuPayment'"
        class="contextmenu__fun-list d-block"
        :style="`left: ${left}px ; top: ${top}px`"
        ref="contextmenu"
    >
        <li class="contextmenu__fun-item">
            <a href="#" class="contextmenu__fun-link" @click="()=>this.$emit('handleEdit',paymentSelected)">{{
                $t("Fix")
            }}</a>
        </li>

        <li class="contextmenu__fun-item">
            <a
                href="#"
                class="contextmenu__fun-link"
                @click="()=>this.$emit('handleDeleteRow',paymentSelected)"
                >{{ $t("Delete") }}</a
            >
        </li>
        <li class="contextmenu__fun-item">
            <a
                href="#"
                class="contextmenu__fun-link"
                @click="handleDuplicateEmployee"
                >{{ $t("Duplicate") }}</a
            >
        </li>
    </ul>

    <ul
        v-else-if="kind === 'contextAccount'"
        class="contextmenu__fun-list d-block"
        :style="`left: ${left}px ; top: ${top}px`"
        ref="contextmenu"
    >
        <li class="contextmenu__fun-item">
            <a
                href="#"
                class="contextmenu__fun-link"
                @click="handleDuplicateAccount"
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
            <a href="#" class="contextmenu__fun-link">{{
                $t("TransferAccountingAccounts")
            }}</a>
        </li>

        <li class="contextmenu__fun-item">
            <a
                href="#"
                class="contextmenu__fun-link"
                @click="handleUpdateState"
                >{{ state === 0 ? $t("Use") : $t("StopUsing") }}</a
            >
        </li>
    </ul>

     <ul
        v-else-if="kind === 'btnContextPopup'"
        class="contextmenu__fun-list d-block"
        :style="`left: ${left}px ; top: ${top}px`"
        ref="contextmenu"
    >
        <li class="contextmenu__fun-item">
            <a
                href="#"
                class="contextmenu__fun-link"
                @click="this.$emit('handleBtnSaveEndAdd')"
                >{{ $t("BtnSaveEndAdd") }}</a
            >
        </li>
        <li class="contextmenu__fun-item">
            <a
                href="#"
                class="contextmenu__fun-link"
                 @click="this.$emit('handleBtnSaveEndClose')"
                >{{ $t("BtnSaveEndClose") }}</a
            >
        </li>
    </ul>

    <ul
        v-else
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
            <a href="#" class="contextmenu__fun-link">{{ $t("StopUsing") }}</a>
        </li>
    </ul>
</template>
<script>
import MISAEnum from "@/js/enum";
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

        //vị trí ben phair cua cha
        right: {
            type: String,
            default: "",
        },

        //vị trí ben duoi cua cha
        bottom: {
            type: String,
            default: "",
        },

        // loai nao do
        kind: {
            type: String,
            default: "",
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

        contextArray: {
            type: Array,
        },
        iconContextMenu: {
            type: Object,
            default: null,
        },
        state: {
            type: String,
        },

        is_parent: {
            type: Boolean,
        },
        paymentSelected: {
            type:String
        }
    },
    data() {
        return {
            MISAEnum,
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
         * Bắt sự kiện click vào option của ContextMenu
         * Author: KienNT (28/04/2023)
         *  @param {text}: text để set lại cho condition filter
         */
        handleClickItemCondition(text) {
            this.$emit("handleClickItemCondition", text);
        },
        /**
         * nghe sự kiện window. Nếu click ko phải là contextmenu thì ẩn ddi
         * Author: KienNT (06/03/2023)
         */
        handleOutsideContext(event) {
            let check = true;
            if (this.refElement && this.refElement.length) {
                for (let index = 0; index < this.refElement.length; index++) {
                    const element = this.refElement[index];
                    if (element.contains(event.target)) {
                        check = false;
                    }
                }
            } else {
                if (this.refElement.contains(event.target)) {
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
         * handle hàng loạt
         * Author: KienNT (27/03/2023)
         */
        handleRemove() {
            this.$emit("handleRemove");
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

        /**
         * handle click vào text Nhân bản
         * Author: KienNT (30/05/2023)
         */
        handleDuplicateAccount() {
            if (this.employeeIdSelected) {
                this.$emit("handleDuplicateAccount");
            }
        },

        /**
         * handle click vào text Nhân bản
         * Author: KienNT (30/05/2023)
         */
        handleUpdateState() {
            this.$emit("handleUpdateState", this.state, this.is_parent);
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/contextMenu.css);
</style>
