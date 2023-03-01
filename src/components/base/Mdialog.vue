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
                    <Mbutton
                        class="btn-primary dialog-close flex-end"
                        :text="MISAResouce.vi.BtnClose"
                    >
                    </Mbutton>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import Mbutton from "./Mbutton.vue";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Mdialog",
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
    },
    data() {
        return {
            MISAResouce,
        };
    },
    components: { Mbutton },
};
</script>
<style scoped>
@import url(../../css/components/dialog.css);
</style>
