<template>
    <TheCash>
        <div class="content__main cash_payment">
            <!-- header main -->
            <div class="content__main-header">
                <div class="content__main-left">
                    <div class="check-all-arrow">
                        <div class="mi-24 block-center">
                            <div class="mi-arrow-check-all"></div>
                        </div>
                    </div>
                    <button
                        name="button"
                        class="batchExecution"
                        :class="
                            selectedCheckbox.length < 1 ? 'disabled' : 'active'
                        "
                        @click="handleBatchExecution"
                        ref="iconContextMenu"
                    >
                        <div
                            class="ms-button-text ms-button--text flex align-center"
                        >
                            <span class="pr-4">{{ $t("batchExecution") }}</span>
                            <div
                                icon="expand-more"
                                iconpack="material-icons"
                                class="mi mi-16 mi-arrow-up--black"
                                :class="
                                    selectedCheckbox.length <= 1
                                        ? 'opacity'
                                        : ''
                                "
                            ></div>
                        </div>

                        <MContextmenu
                            v-if="isContextMenu"
                            kind="batchExecution"
                            @hideContextMenu="hideContextMenu"
                            :refElement="this.$refs.iconContextMenu"
                        ></MContextmenu>
                    </button>
                </div>
                <div class="content__main-right">
                    <div class="content__main-filter">
                        <div class="input__wrapper">
                            <button class="input__icon search">
                                <div class="input__icon-search"></div>
                            </button>
                            <input
                                type="text"
                                class="input__type input__search"
                                :placeholder="$t('TxtSearch')"
                                v-model.lazy="keyWordSearch"
                            />
                        </div>
                    </div>

                    <div
                        class="content__main-refresh wrap-icon"
                        @click="handleReLoadData"
                    >
                        <div
                            class="content__main-refresh-icon icon-normal-light icon-normal-light-hover tooltip"
                        >
                            <MTooltip
                                kind="reload"
                                style="top: 163%"
                                :subtext="$t('TooltipReload')"
                            ></MTooltip>
                        </div>
                    </div>

                    <div
                        class="wrap-icon"
                        @click="handleExport"
                        :class="totalRecord == 0 ? 'disabled' : ''"
                    >
                        <div class="content__main-exprort-icon tooltip">
                            <MTooltip
                                style="top: 163%"
                                kind="export"
                                :subtext="$t('TooltipExport')"
                            ></MTooltip>
                        </div>
                    </div>

                    <div class="wrap-icon" @click="handleShowSettingUI">
                        <div class="icon__setting tooltip">
                            <MTooltip
                                style="top: 163%"
                                kind="setting"
                                :subtext="$t('TooltipCustomizeInterface')"
                            ></MTooltip>
                        </div>
                    </div>

                    <MButton
                        mode="btnAdd"
                        :text="$t('Payment')"
                        :click="showPopup"
                    ></MButton>
                </div>
            </div>

            <div class="master-detail-section">
                <div
                    class="content__main-body scrollbar_customize master-section full-size"
                    ref="masterSection"
                >
                    <div class="content__main-table">
                        <TheTablePayment></TheTablePayment>
                    </div>
                    <!--  paging -->
                    <ThePaging
                        :totalRecord="totalRecord"
                        :pageCurrent="pageNumber"
                        :isDisabledClickPrev="isDisabledClickPrev"
                    ></ThePaging>
                </div>

                <div class="detail-section minisize" ref="detailSection">
                    <div class="divider-section">
                        <div
                            class="collapse-btn"
                            @click="handleShowDetailSection"
                        >
                            <div class="mi-8 block-center">
                                <div class="mi-arrow-dropdown rorate-180"></div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-title" v-if="isDetail">
                        <div class="tab-item">{{ $t("Detail") }}</div>
                    </div>
                    <div class="grid-model-control" v-if="isDetail">
                        <div
                            class="grid-list scrollbar_customize"
                            style="
                                overflow: auto;
                                max-height: 100%;
                                min-width: calc(100% + 0px);
                            "
                        >
                            <TheTablePaymentDetail></TheTablePaymentDetail>
                            <!--  paging -->
                            <ThePaging
                                :totalRecord="totalRecord"
                                :pageCurrent="pageNumber"
                                :isDisabledClickPrev="isDisabledClickPrev"
                            ></ThePaging>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </TheCash>
</template>

<script>
import TheCash from "@/components/layout/sidebar/TheCash.vue";
import TheTablePayment from "@/components/layout/TheTablePayment.vue";
import ThePaging from "@/components/layout/ThePaging.vue";
import MISAEnum from "@/js/enum";
import MISAResouce from "@/js/resource";
import TheTablePaymentDetail from "@/components/layout/TheTablePaymentDetail.vue";
export default {
    name: "CashPayment",
    components: { TheCash, TheTablePayment, ThePaging, TheTablePaymentDetail },
    data() {
        return {
            isContextMenu: false,
            isLoading: false,
            MISAEnum,
            MISAResouce,
            formMode: "",
            textTitlePayment: "",
            selectedCheckbox: [],
            totalRecord: 0,
            pageSize: 0,
            pageNumber: 1,
            keyWordSearch: "",
            isReload: false,
            isDisabledClickPrev: true,
            isDeleteOne: false,
            leftContextMenu: "",
            topContextMenu: "",
            isDetail: false,
        };
    },

    methods: {
        handleShowDetailSection() {
            const masterSection = this.$refs["masterSection"];
            const detailSection = this.$refs["detailSection"];
            detailSection.firstElementChild.firstElementChild.firstElementChild.firstElementChild.classList.toggle(
                "rorate-180"
            );
            masterSection.classList.toggle("full-size");
            detailSection.classList.toggle("minisize");
            masterSection.classList.toggle("h-60");
            this.isDetail = !this.isDetail;
        },
        /**
         * Hàm ẩn contextmenu khi click ra ngoài element
         * Author: KienNT (07/05/2023)
         */
        hideContextMenu() {
            this.isContextMenu = !this.isContextMenu;
        },
    },
};
</script>

<style scoped>
@import url(@/css/layout/cashPayment.css);
</style>
