<template>
    <!-- dialog -->
    <div class="dialog">
        <div class="dialog__wrapper">
            <div class="dialog__body">
                <div class="mi-48"><div :class="iconClass"></div></div>

                <p
                    class="dialog__text"
                    v-if="errorKind === 'errorDelete'"
                    style="display: flex; flex-direction: column; row-gap: 11px"
                >
                    <span style="font-weight: 700; font-family: notosansBold">{{
                        this.$t("DialogNotifyErrorDelete")
                    }}</span>
                    <span>{{ message }}</span>
                </p>
                <p class="dialog__text" v-else>{{ message }}</p>
            </div>
            <div data-v-29af0734="" class="mess-line"></div>
            <div
                v-if="kind === 'error'"
                class="dialog__footer"
                style="justify-content: center"
            >
                <div class=""></div>
                <div class="dialog__footer-right">
                    <div class=""></div>
                    <MButton
                        class="btn-primary dialog-close flex-end"
                        :text="textButton"
                        :click="hideShowDialogError"
                    >
                    </MButton>
                </div>
            </div>
            <div v-if="kind === 'notify'" class="dialog__footer">
                <div class="btn btn-default" @click="onClickBtnDestroy">
                    {{ btnDestroyNotify }}
                </div>
                <div class="dialog__footer-right">
                    <div class="btn btn-default" @click="onClickBtnNo">
                        {{ btnNoNotify }}
                    </div>
                    <MButton
                        class="btn-primary dialog-close flex-end"
                        :text="textButton"
                        :click="onClickBtnYes"
                    >
                    </MButton>
                </div>
            </div>
            <div v-if="kind === 'warning'" class="dialog__footer">
                <div class="btn btn-default" @click="onBtnWarningNo">
                    {{ BtnWarningNo }}
                </div>
                <div class="dialog__footer-right">
                    <div></div>
                    <MButton
                        class="btn-primary dialog-close flex-end"
                        :text="textButton"
                        :click="onBtnWarningYes"
                    >
                    </MButton>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
export default {
    name: "MDialog",
    props: {
        // tiêu đề dialog
        title: {
            type: String,
            default: "",
        },
        // loại dialog là gì
        kind: {
            type: String,
        },
        // //
        // titleNotify: {
        //     type: String,
        // },
        // text body
        message: {
            type: String,
            default: "",
        },
        // icon (warning, error, notify)
        iconClass: {
            type: String,
            default: "",
        },
        // text của btn primary
        textButton: {
            type: String,
            default: "",
        },
        // btn default Không của notify
        btnNoNotify: {
            type: String,
        },

        // btn default hủy của notify
        btnDestroyNotify: {
            type: String,
        },

        // btn default Không của warning
        BtnWarningNo: {
            type: String,
            default: "",
        },
        errorKind: {
            type: String,
        },
    },
    data() {
        return {
            MISAResouce,
            isDialogError: false,
        };
    },

    mounted() {
        window.addEventListener("keydown", this.handlePressKeyShort);
    },
    beforeUnmount() {
        window.removeEventListener("keydown", this.handlePressKeyShort);
    },

    methods: {
        /**
         * Hàm gửi emit đóng dialog error
         * Author: KienNT (02/03/2023)
         */
        hideShowDialogError() {
            this.$emit("hideShowDialogError", false);
        },

        /**
         * Hàm gửi emit đóng dialog notify, giữ lại Form chi tiết
         * Author: KienNT (04/03/2023)
         */
        onClickBtnDestroy() {
            this.$emit("onClickBtnDestroy", false);
        },
        /**
         * Hàm gửi emit đóng dialog notify và popup, không Lưu lại giữ liệu và đóng Form chi tiết.
         * Author: KienNT (04/03/2023)
         */
        onClickBtnNo() {
            this.$emit("onClickBtnDestroy", false);
            this.$emit("destroyPopup");
        },

        /**
         * Hàm gửi emit đóng dialog notify, thêm nhân viên, đóng form
         * Author: KienNT (04/03/2023)
         */
        onClickBtnYes() {
            this.$emit("onClickBtnYes", false);
        },

        /**
         * Hàm gửi emit đóng dialog warning, không xóa nhân viên
         * Author: KienNT (07/03/2023)
         */
        onBtnWarningNo() {
            this.$emit("onBtnWarningNo", false);
        },

        /**
         * Xử lý khi click vào có xóa nhân viên thì gửi emit lên cho cha để xóa
         * Author: KienNT (07/03/2023)
         */
        onBtnWarningYes() {
            this.$emit("onBtnWarningYes");
        },

        /**
         * Xử lý khi click vào icon close thì đóng dialog
         * Author: KienNT (07/03/2023)
         */
        closeDialog() {
            this.kind === "error"
                ? this.hideShowDialogError()
                : this.kind === "notify"
                ? this.onClickBtnDestroy()
                : this.onBtnWarningNo();
        },

        /**
         *  handle khi nhấn phím tắt
         * Author: KienNT (15/03/2023)
         * @param (event): là event
         */
        handlePressKeyShort(event) {
            // khi nhấn phím esc thì đóng form
            if (event.key === "Escape" || event.keyCode === 27) {
                this.closeDialog();
            }
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/dialog.css);
</style>
