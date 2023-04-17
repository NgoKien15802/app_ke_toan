<template>
    <div class="cash__container">
        <ul class="nav__list">
            <li
                v-for="(navItem, index) in navItems"
                :key="index"
                :class="navItem.isActive ? 'active' : ''"
                class="nav__item"
            >
                <a href="#" class="nav__link">
                    {{ navItem.text }}
                </a>
            </li>
        </ul>

        <div class="cash__body">
            <div class="cash__main">
                <div class="cash__process">
                    <div class="cash__process-top">
                        <div class="cash__process-title">
                            {{ $t("CashBusiness") }}
                        </div>

                        <div class="cash__process-main">
                            <MProcessCash></MProcessCash>
                        </div>
                    </div>
                    <div class="cash__process-bottom">
                        <ul class="cash__process-bottom-list">
                            <router-link
                                v-for="(processCash, index) in processCashs"
                                :key="index"
                                :to="processCash.to"
                                class="cash__process-bottom-item"
                            >
                                <div :class="processCash.icon"></div>
                                <p href="" class="cash__process-bottom-text">
                                    {{ processCash.text }}
                                </p>
                            </router-link>
                        </ul>
                    </div>
                </div>
                <div class="cash__report">
                    <div class="cash__report-title">
                        {{ $t("Report") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MISAResouce from "@/js/resource";
import MProcessCash from "@/components/base/MProcessCash.vue";
export default {
    name: "TheCash",
    data() {
        return {
            MISAResouce,
            navItems: [
                {
                    text: this.$t("Process"),
                    isActive: true,
                },
                {
                    text: this.$t("CollectAndSpend"),
                    isActive: false,
                },
                {
                    text: this.$t("Stocktaking"),
                    isActive: false,
                },
                {
                    text: this.$t("CashFlowForecast"),
                    isActive: false,
                },
                {
                    text: this.$t("Export"),
                    isActive: false,
                },
            ],
            processCashs: [
                {
                    text: this.$t("CustomerCash"),
                    icon: "customerCash",
                    to: "/cash/customer",
                },
                {
                    text: this.$t("Provider"),
                    icon: "providerCash",
                    to: "/cash/provider",
                },
                {
                    text: this.$t("Employee"),
                    icon: "employeeCash",
                    to: "/cash/employee",
                },
                {
                    text: this.$t("Option"),
                    icon: "optionCash",
                    to: "/cash/options",
                },
            ],
        };
    },
    components: {
        MProcessCash,
    },
};
</script>

<style scoped>
@import url(@/css/layout/sidebar/cash.css);
</style>
