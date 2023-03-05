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
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
export default {
    name: "MDialog",
    props: {
        title: {
            type: String,
            default: "",
        },
        kind: {
            type: String,
        },
        titleNotify: {
            type: String,
        },
        message: {
            type: String,
            default: "",
        },
        iconClass: {
            type: String,
            default: "",
        },
        textButton: {
            type: String,
            default: "",
        },
        btnNoNotify: {
            type: String,
        },
        btnDestroyNotify: {
            type: String,
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
            this.$emit("onClickBtnDestroy", false);

            // thêm nhân viên
            // check validate sau đó mới thêm nhân viên
            this.$emit("destroyPopup");
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/dialog.css);
</style>
