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
                        :click="showCashDetail"
                    ></MButton>
                </div>
            </div>

            <div class="master-detail-section">
                <div
                    class="content__main-body scrollbar_customize master-section full-size"
                    ref="masterSection"
                >
                    <div class="content__main-table">
                        <TheTablePayment
                            :pageSizeNumber="pageSize"
                            :pageCurrent="pageNumber"
                            @getTotalRecord="getTotalRecord"
                            :selectedCheckbox="selectedCheckbox"
                            @handleSelectChechbox="handleSelectChechbox"
                            @handleClickPayment="handleClickPayment"
                            :keyWordSearch="keyWordSearch"
                            :isReload="isReload"
                            @setIsReLoad="setIsReLoad"
                            @handleClickShow="handleClickShow"
                            @showPopupEdit="showPopupEdit"
                            @hideShowLoading="hideShowLoading"
                            @hideShowToast="hideShowToast"
                        ></TheTablePayment>
                    </div>
                    <!--  paging -->
                    <MPaging
                        :totalRecord="totalRecord"
                        @handleClickOptionItem="handleClickOptionItem"
                        @handleClickPrev="handleClickPrev"
                        @handleClickNext="handleClickNext"
                        @handleClickPageIndex="handleClickPageIndex"
                        :pageCurrent="pageNumber"
                        :isDisabledClickPrev="isDisabledClickPrev"
                        @setIsDisabledClickPrev="setIsDisabledClickPrev"
                    ></MPaging>
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
                            <TheTablePaymentDetail
                                :paymentIdClick="paymentIdClick"
                                @getTotalRecord="getTotalRecordPaymentDetail"
                                :pageSizeNumber="pageSizePaymentDetail"
                                :pageCurrent="pageNumberPaymentDetail"
                            ></TheTablePaymentDetail>

                            <!--  paging -->
                            <MPaging
                                :totalRecord="totalRecordPaymentDetail"
                                :pageCurrent="pageNumberPaymentDetail"
                                :isDisabledClickPrev="isDisabledClickPrevPaymentDetail"
                                @handleClickOptionItem="handleClickOptionItemPaymentDetail"
                                @handleClickPrev="handleClickPrevPaymentDetail"
                                @handleClickNext="handleClickNextPaymentDetail"
                                @handleClickPageIndex="handleClickPageIndexPaymentDetail"
                                @setIsDisabledClickPrev="setIsDisabledClickPrevPaymentDetail"
                            ></MPaging>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </TheCash>
    <!-- loading -->
    <Mloading v-if="isLoading"></Mloading>
    <TheCashDetail
        v-if="isCashDetail"
        @closeCashDetail="closeCashDetail"
        :formMode="formMode"
        @hideShowLoading="hideShowLoading"
        @setFormMode="setFormMode"
        @handleReLoadData="handleReLoadData"
        @hideShowToast="hideShowToast"
        :payment_id_selected="payment_id_selected"
    ></TheCashDetail>

      <!-- Toast -->
                <MToast
                    v-if="
                        isShowToastAdd ||
                        isShowToastEdit ||
                        isShowToastDelete ||
                        isShowToastDuplicate 
                    "
                    classIcon="toast__icon-success"
                    :kind="$t('ToastTitleSuccess')"
                    :text="
                        (isShowToastAdd && $t('ToastAddSuccessPayment')) ||
                        (isShowToastEdit && $t('ToastEditSuccessPayment')) ||
                        (isShowToastDelete && $t('ToastDeleteSuccessPayment')) ||
                        (isShowToastDuplicate && $t('ToastDuplicateSuccessPayment'))
                    "
                    classTitle="toast__title-success"
                ></MToast>

</template>

<script>
import TheCash from "@/components/layout/sidebar/TheCash.vue";
import TheTablePayment from "@/components/layout/TheTablePayment.vue";
import MISAEnum from "@/js/enum";
import MISAResouce from "@/js/resource";
import TheTablePaymentDetail from "@/components/layout/TheTablePaymentDetail.vue";
import TheCashDetail from "./PaymentDetail.vue";
export default {
    name: "CashPayment",
    components: {
        TheCash,
        TheTablePayment,
        TheTablePaymentDetail,
        TheCashDetail,
    },
    data() {
        return {
            isContextMenu: false,
            isLoading: false,
            isCashDetail: false,
            MISAEnum,
            MISAResouce,
            formMode: "",
            textTitlePayment: "",
            selectedCheckbox: [],
            totalRecord: 0,
            totalRecordPaymentDetail:0,
            paymentSelected: "",
            pageSize: 0,
            pageSizePaymentDetail: 0,
            pageNumber: 1,
            pageNumberPaymentDetail:1,
            keyWordSearch: "",
            isReload: false,
            isDisabledClickPrev: true,
            isDisabledClickPrevPaymentDetail:true,
            isDeleteOne: false,
            leftContextMenu: "",
            topContextMenu: "",
            isDetail: false,
            paymentIdClick: "",
            isShowToastAdd: false,
            isShowToastEdit: false,
            isShowToastDelete: false,
            isShowToastDuplicate: false,
            payment_id_selected:null,
        };
    },

    watch: {
        /**
         * Hàm khi thay đổi keyword thì quay lại trang đầu nếu là rỗng
         * Author: KienNT (26/05/2023)
         */
        keyWordSearch: function () {
            this.pageNumber = 1;
            this.isDisabledClickPrev = true;
        },
    },
    methods: {
        /**
         * Hàm gán số bản ghi từ con emit lên
         * Author: KienNT (04/06/2023)
         *  @param (totalRecord): tham số 1 là số bản ghi
         */
        getTotalRecord(totalRecord) {
            this.totalRecord = totalRecord;
        },


         /**
         * Hàm gán số bản ghi từ con emit lên
         * Author: KienNT (07/06/2023)
         *  @param (totalRecord): tham số 1 là số bản ghi
         */
        getTotalRecordPaymentDetail(totalRecord){
            this.totalRecordPaymentDetail = totalRecord;
        },


        closeCashDetail() {
            this.isCashDetail = false;
        },
        /**
         * Hàm show cash deatil khi click btn Chi tiền
         * Author: KienNT (04/06/2023)
         */
        showCashDetail() {
            try {
                this.paymentSelected = "";
                this.isCashDetail = true;
                this.formMode = MISAEnum.formMode.Add;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm click icon previous trang
         * Author: KienNT (04/06/2023)
         */
        handleClickPrev() {
            if (this.pageNumber > 1) {
                this.pageNumber -= 1;
                this.isDisabledClickPrev = false;
            }
            if (this.pageNumber == 1) {
                this.isDisabledClickPrev = true;
            }
        },


        /**
         * Hàm click icon previous trang detail
         * Author: KienNT (07/06/2023)
         */
        handleClickPrevPaymentDetail(){
            if (this.pageNumberPaymentDetail > 1) {
                this.pageNumberPaymentDetail -= 1;
                this.isDisabledClickPrevPaymentDetail = false;
            }
            if (this.pageNumberPaymentDetail == 1) {
                this.isDisabledClickPrevPaymentDetail = true;
            }
        },

         /**
         * Hàm thực hiện reload lại trang
         * Author: KienNT (08/06/2023)
         */
        handleReLoadData() {
            this.isReload = true;
        },

        /**
         * Hàm gán giá trị mảng các checkbox được check
         * Author: KienNT (04/06/2023)
         *  @param (selectedCheckbox): tham số 1 là mảng checkbox được chọn
         */
        handleSelectChechbox(selectedCheckbox) {
            this.selectedCheckbox = selectedCheckbox;
        },

        /**
         * Hàm hiện thị và ẩn loading khi load dữ liệu
         * Author: KienNT (06/06/2023)
         * @param (isLoading): tham số là true, false ẩn hiển
         */
        hideShowLoading(isLoading) {
            try {
                this.isLoading = isLoading;
            } catch (error) {
                console.log(error);
            }
        },

         /**
         * Hàm emit từ con để set lại reload lần sau
         * Author: KienNT (08/06/2023)
         */
        setIsReLoad() {
            this.isReload = false;
        },

         /**
         * Hàm thực hiện set lại cho formMode
         * Author: KienNT (08/06/2023)
         */
        setFormMode(formMode) {
            this.formMode = formMode;
        },

        /**
         * Hàm thực hiện cho các checkbox bỏ chọn
         * Author: KienNT (04/06/2023)
         */
        handleUndoSeleted() {
            this.selectedCheckbox = [];
        },

        handleClickPayment(payment) {
            this.paymentIdClick = payment.refid;
        },

        /**
         * Hàm click vào pageindex
         * Author: KienNT (04/06/2023)
         */
        handleClickPageIndex(index) {
            if (index > 1) {
                this.isDisabledClickPrev = false;
            }
            if (index == 1) {
                this.isDisabledClickPrev = true;
            }
            this.pageNumber = index;
        },


        handleClickPageIndexPaymentDetail(index){
            if (index > 1) {
                this.isDisabledClickPrevPaymentDetail = false;
            }
            if (index == 1) {
                this.isDisabledClickPrevPaymentDetail = true;
            }
            this.pageNumberPaymentDetail = index;
        },

        /**
         * Hàm thực hiện disabled div prev khi click vào chọn bản ghi trên 1 trang từ con emit lên
         * Author: KienNT (04/06/2023)
         */
        setIsDisabledClickPrev() {
            this.isDisabledClickPrev = true;
        },

         /**
         * Hàm thực hiện disabled div prev khi click vào chọn bản ghi trên 1 trang từ con emit lên
         * Author: KienNT (07/06/2023)
         */
        setIsDisabledClickPrevPaymentDetail(){
            this.isDisabledClickPrevPaymentDetail = true;
        },


          /**
         * Hàm ẩn cclick btn xem
         * Author: KienNT (09/06/2023)
         */
        handleClickShow(payment) {
            this.isCashDetail = true;
            this.payment_id_selected = payment.refid;
            this.formMode = MISAEnum.formMode.Show;
        },

          /**
         * Hàm hiển thị popup và truyền formMode cho Popup, payment được chọn
         * Author: KienNT (09/06/2023)
         */
        showPopupEdit(formMode, paymentSelected) {
            this.isCashDetail = true;
            this.formMode = formMode;
            this.payment_id_selected = paymentSelected;
        },

        /**
         * Hàm click option, lấy pageSize
         *  Author: KienNT (04/06/2023)
         *  @param (pageSize): tham số 1 là số bản ghi trên 1 trang
         */
        handleClickOptionItem(pageSize) {
            this.pageSize = pageSize;
            this.pageNumber = 1;
        },

        handleClickOptionItemPaymentDetail(pageSize){
            this.pageSizePaymentDetail = pageSize;
            this.pageNumberPaymentDetail = 1;
        },

        /**
         * Hàm click icon Next trang
         * Author: KienNT (04/06/2023)
         */
        handleClickNext() {
            this.pageNumber += 1;
            if (this.pageNumber > 1) {
                this.isDisabledClickPrev = false;
            }
        },


        /**
         * Hàm click icon Next trang
         * Author: KienNT (07/06/2023)
         */
        handleClickNextPaymentDetail(){
            this.pageNumberPaymentDetail += 1;
            if (this.pageNumberPaymentDetail > 1) {
                this.isDisabledClickPrevPaymentDetail = false;
            }
        },

        /**
         * Hàm show detail
         * Author: KienNT (04/06/2023)
         */
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
         * Author: KienNT (04/06/2023)
         */
        hideContextMenu() {
            this.isContextMenu = !this.isContextMenu;
        },

          /**
         * Hàm hiện thị toast khi thực hiện thêm, sửa, xóa thành công
         * Author: KienNT (09/06/2023)
         * @param (isToast): tham số là true, false ẩn hiển
         */
        hideShowToast(kind) {
            try {
                switch (kind) {
                    case "add":
                        this.isShowToastAdd = true;
                        setTimeout(() => (this.isShowToastAdd = false), 3000);
                        break;
                    case "edit":
                        this.isShowToastEdit = true;
                        setTimeout(() => (this.isShowToastEdit = false), 3000);
                        break;
                    case "delete":
                        this.isShowToastDelete = true;
                        setTimeout(
                            () => (this.isShowToastDelete = false),
                            3000
                        );
                        break;

                    case "duplicate":
                        this.isShowToastDuplicate = true;
                        setTimeout(
                            () => (this.isShowToastDuplicate = false),
                            3000
                        );
                        break;

                    default:
                        break;
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
@import url(@/css/layout/cashPayment.css);
</style>
