<template>
    <div class="sidebar">
        <div class="sidebar__header">
            <div class="sidebar__header-menu icon-normal-dark wrap-icon">
                <div class="sidebar__header-menu-img"></div>
            </div>
            <router-link to="/">
                <img
                    src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
                    alt=""
                    class="sidebar__header-logo"
                />
            </router-link>
        </div>

        <div class="sidebar__list scrollbar_customize">
            <MmenuItem
                v-for="(menuItem, index) in menuItems"
                :key="index"
                :className="menuItem.icon"
                :text="menuItem.text"
                :to="menuItem.to"
            ></MmenuItem>
        </div>
    </div>
</template>

<script>
import MmenuItem from "../base/MmenuItem.vue";
import MISAresource from "../../js/resource";
export default {
    name: "TheSidebar",
    components: {
        MmenuItem,
    },
    data() {
        return {
            MISAresource,
            menuItems: [
                {
                    icon: "icon-overview-default",
                    text: this.$t("Overview"),
                    to: "/overview",
                },

                {
                    icon: "icon-cash-default",
                    text: this.$t("Cash"),
                    to: "/cash",
                },
                {
                    icon: "icon-cashBank-default",
                    text: this.$t("Banking"),
                    to: "/banking",
                },
                {
                    icon: "icon-buy-default",
                    text: this.$t("Buy"),
                    to: "/buy",
                },
                {
                    icon: "icon-sell-default",
                    text: this.$t("Sales"),
                    to: "/sales",
                },
                {
                    icon: "icon-invoice-managemnet-default",
                    text: this.$t("InvoiceManaging"),
                    to: "/invoiceManaging",
                },
                {
                    icon: "icon-store-default",
                    text: this.$t("Store"),
                    to: "/store",
                },
                {
                    icon: " icon-tool-default",
                    text: this.$t("Equipments"),
                    to: "/equipments",
                },
                {
                    icon: " icon-assets-default",
                    text: this.$t("FixedAssets"),
                    to: "/fixedAssets",
                },
                {
                    icon: "icon-tax-default",
                    text: this.$t("Tax"),
                    to: "/tax",
                },
                {
                    icon: " icon-cost-default",
                    text: this.$t("CostOfProduction"),
                    to: "/costOfProduction",
                },

                {
                    icon: " icon-general-default",
                    text: this.$t("General"),
                    to: "/general",
                },
                {
                    icon: "icon-budget-default",
                    text: this.$t("Budget"),
                    to: "/budget",
                },
                {
                    icon: "icon-report-default",
                    text: this.$t("Report"),
                    to: "/Report",
                },
                {
                    icon: " icon-financial-default",
                    text: this.$t("FinancialAnalysis"),
                    to: "/financialAnalysis",
                },
            ],
        };
    },
};
/* 

*/
</script>
<style scoped>
@import url(../../css/layout/sidebar.css);
</style>
