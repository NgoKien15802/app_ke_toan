<template>
    <div class="ms-pagination" style="bottom: unset; width: 100vw">
        <div class="w-full img-wrap pb-4">
            <img
                src="https://actappg1.misacdn.net/img/bg_report_nodata.76e50bd8.svg"
                class="nodata-img"
            /><br /><span class="nodata-text">{{ $t("NoData") }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "MNotData",
};
</script>

<style scoped>
.ms-pagination {
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    z-index: 5;
    background-color: #fff;
    display: flex;
}
.nodata-img {
    position: -webkit-sticky;
    position: sticky;
    margin: 50px 50px 12px;
    width: 132px;
    height: 74px;
    left: calc(50% - 66px);
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.nodata-text {
    position: -webkit-sticky;
    position: sticky;
    left: calc(50% - 100px);
    width: 200px;
    display: block;
    text-align: center;
}
</style>
