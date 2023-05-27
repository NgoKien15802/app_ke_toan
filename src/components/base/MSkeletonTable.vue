<template>
    <tr class="" v-for="(data, index) in dataList" :key="index">
        <td class="" v-for="(data, index) in columnCount" :key="index">
            <div class="ms-component ms-skeleton">
                <div
                    class="skeleton-text"
                    style="width: 100%; background-color: rgb(235, 237, 240)"
                >
                    <div class="skeleton-box"></div>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "MSkeletonTable",
    props: {
        dataList: {
            type: Array,
        },

        columnCount: {
            type: Array,
        },
    },
};
</script>

<style scoped>
.ms-skeleton .skeleton-text {
    height: 15px;
}

.ms-skeleton .skeleton-text .skeleton-box {
    border-radius: 5px;
}

.ms-skeleton .skeleton-box {
    display: inline-block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    animation: pulse-bg 1s infinite;
}

.ms-skeleton .skeleton-box:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0),
        hsla(0, 0%, 100%, 0.2) 20%,
        hsla(0, 0%, 100%, 0.5) 60%,
        hsla(0, 0%, 100%, 0)
    );
    animation: shimmer-data 0.8s infinite;
    content: "";
}

@keyframes shimmer-data {
    to {
        transform: translateX(100%);
    }
}
.ms-skeleton .skeleton-circle {
    border-radius: 50%;
}
.ms-skeleton .skeleton-rectangle {
    border-radius: 2px;
}
</style>
