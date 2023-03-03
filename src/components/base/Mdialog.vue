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
            <div class="dialog__footer">
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
    },
    data() {
        return {
            MISAResouce,
        };
    },

    methods: {
        /**
         * Hàm gửi emit đóng dialog
         * Author: KienNT (02/03/2023)
         */
        hideShowDialogError() {
            this.$emit("hideShowDialogError", false);
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/dialog.css);
</style>
