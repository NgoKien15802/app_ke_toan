<template>
    <div class="sidebar">
        <div class="sidebar__header">
            <div class="sidebar__header-menu icon-normal-dark wrap-icon">
                <div class="sidebar__header-menu-img"></div>
            </div>
            <img
                src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
                alt=""
                class="sidebar__header-logo"
            />
        </div>

        <div class="sidebar__list scrollbar_customize">
            <MmenuItem
                v-for="(menuItem, index) in menuItems"
                :key="index"
                :className="menuItem.icon"
                :text="menuItem.text"
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
                    text: MISAresource.vi.Overview,
                },

                {
                    icon: "icon-cash-default",
                    text: MISAresource.vi.Cash,
                },
                {
                    icon: "icon-cashBank-default",
                    text: MISAresource.vi.Banking,
                },
                {
                    icon: "icon-buy-default",
                    text: MISAresource.vi.Buy,
                },
                {
                    icon: "icon-sell-default",
                    text: MISAresource.vi.Sales,
                },
                {
                    icon: "icon-invoice-managemnet-default",
                    text: MISAresource.vi.InvoiceManaging,
                },
                {
                    icon: "icon-store-default",
                    text: MISAresource.vi.Store,
                },
                {
                    icon: " icon-tool-default",
                    text: MISAresource.vi.Equipments,
                },
                {
                    icon: " icon-assets-default",
                    text: MISAresource.vi.FixedAssets,
                },
                {
                    icon: "icon-tax-default",
                    text: MISAresource.vi.Tax,
                },
                {
                    icon: " icon-cost-default",
                    text: MISAresource.vi.CostOfProduction,
                },

                {
                    icon: " icon-general-default",
                    text: MISAresource.vi.General,
                },
                {
                    icon: "icon-budget-default",
                    text: MISAresource.vi.Budget,
                },
                {
                    icon: "icon-report-default",
                    text: MISAresource.vi.Report,
                },
                {
                    icon: " icon-financial-default",
                    text: MISAresource.vi.FinancialAnalysis,
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
