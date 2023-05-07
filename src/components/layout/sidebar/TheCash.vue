<template>
    <div class="cash__container">
        <ul class="nav__list">
            <li
                v-for="(navItem, index) in navItems"
                :key="index"
                class="nav__item"
            >
                <router-link
                    :to="navItem.to"
                    class="nav__link"
                    :class="navItem.isActive ? 'active' : ''"
                    @click="() => handleClickItem(index)"
                >
                    {{ navItem.text }}
                </router-link>
            </li>
        </ul>

        <slot></slot>
    </div>
</template>

<script>
import MISAResouce from "@/js/resource";

export default {
    name: "TheCash",
    data() {
        return {
            MISAResouce,
            navItems: [
                {
                    text: this.$t("Process"),
                    isActive: true,
                    to: "/cash/process",
                },
                {
                    text: this.$t("Payment"),
                    isActive: false,
                    to: "/cash/payment",
                },
                {
                    text: this.$t("Stocktaking"),
                    isActive: false,
                    to: "#",
                },
                {
                    text: this.$t("CashFlowForecast"),
                    isActive: false,
                    to: "#",
                },
                {
                    text: this.$t("Export"),
                    isActive: false,
                    to: "#",
                },
            ],
        };
    },
    components: {},

    methods: {
        handleClickItem(index) {
            this.navItems.find((el) => el.isActive == true).isActive = false;
            this.navItems[index].isActive = true;
        },
    },
};
</script>

<style scoped>
@import url(@/css/layout/sidebar/cash.css);
</style>
