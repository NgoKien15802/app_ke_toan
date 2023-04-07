<template>
    <div class="toast__list">
        <div class="toast">
            <div class="toast__left m-flex">
                <div class="wrap-icon">
                    <img
                        :class="classIcon"
                        src="../../assets/img/success.png"
                        alt=""
                    />
                </div>
                <p class="toast__text">
                    <span class="toast__title" :class="classTitle"
                        >{{ kind }}!</span
                    >
                    {{ text }}
                </p>
            </div>
            <div class="toast__right m-flex">
                <a class="toast__action" href=""></a>
                <div class="wrap-icon ml-16">
                    <div class="icon-close"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MToast",
    props: {
        // Loại toast(success, error,...)
        kind: {
            type: String,
            default: "",
        },
        // text thông báo
        text: {
            type: String,
            default: "",
            required: true,
        },
        // class của icon
        classIcon: {
            type: String,
            default: "",
        },
        // class của title toast
        classTitle: {
            type: String,
            default: "",
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/toast.css);
</style>
