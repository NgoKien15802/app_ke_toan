<template>
    <div id="loading-bg">
        <div class="loading-modal"></div>
        <div class="loading" :style="style">
            <div class="effect-1 effects"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MLoading",
    props: {
        style: {
            type: String,
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/loading.css);
</style>
