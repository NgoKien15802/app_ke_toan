<template>
    <div class="toast__list">
        <div class="toast">
            <div class="toast__left m-flex">
                <div class="wrap-icon">
                    <img
                        src="../../assets/img/warning.png"
                        class="toast__icon-warning"
                        alt=""
                    />
                </div>
                <p class="toast__text">
                    <span class="toast__title toast__title-warning"
                        >Cảnh báo!</span
                    >
                    Dữ liệu của bạn
                </p>
            </div>
            <div class="toast__right m-flex">
                <a class="toast__action" href="">Hoàn tác</a>
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
};
</script>
<style scoped>
@import url(../../css/components/toast.css);
</style>
