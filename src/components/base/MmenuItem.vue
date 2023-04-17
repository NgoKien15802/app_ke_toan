<template>
    <router-link :to="to" class="sidebar__item">
        <div class="sidebar__item-icon wrap-icon">
            <div
                class="sidebar__item-icon-img icon-normal-dark"
                :class="className"
            ></div>
        </div>
        <span class="sidebar__item-text">{{ text }}</span>
    </router-link>
</template>
<script>
export default {
    name: "MmenuItem",
    props: {
        // text của menu
        text: {
            type: String,
            default: "",
            required: true,
        },
        // class của menu
        className: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
    },
};
</script>
<style></style>
