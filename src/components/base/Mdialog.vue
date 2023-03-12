<template>
    <!-- dialog -->
    <div class="dialog">
        <div class="dialog__wrapper">
            <div class="dialog__header">
                <div class="dialog__header-left">
                    <h2 class="dialog__header-title">
                        {{ title }}
                    </h2>
                </div>
            </div>
            <div class="dialog__body">
                <div :class="iconClass"></div>
                <p class="dialog__text ml-8">{{ message }}</p>
            </div>
            <div v-if="kind === 'error'" class="dialog__footer">
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
                <div class=""></div>
                <div class="dialog__footer-right">
                    <div class="btn btn-default" @click="onBtnWarningNo">
                        {{ BtnWarningNo }}
                    </div>
                    <MButton
                        class="btn-delete dialog-close flex-end"
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
    },
    data() {
        return {
            MISAResouce,
            isDialogError: false,
        };
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
    },
};
</script>
<style scoped>
@import url(../../css/components/dialog.css);
</style>
