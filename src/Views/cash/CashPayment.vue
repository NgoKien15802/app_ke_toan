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
                              @handleRemove="handleDeleteAll"
                        ></MContextmenu>
                    </button>
                    <div
                        v-if="selectedCheckbox.length >= 1"
                        style="display: flex; align-items: center; column-gap: 8px; margin-left: 8px;"
                    >
                        <p>
                            {{ $t("SelectedCheckbox") }}
                            <strong>{{ selectedCheckbox.length }}</strong>
                        </p>
                        <MButton
                            kind="link"
                            className="link-btn btn-link-delete"
                            :click="handleUndoSeleted"
                            :text="$t('UndoSelected')"
                            style="line-height: 0;"
                        ></MButton>
                    </div>
                    <div
                        class="filter-conditions"
                        v-if="filterConditonArr.length >= 1"
                    >
                        <div
                            class="filter-item"
                            v-for="(
                                filterCondition, index
                            ) in filterConditonArr"
                            :key="index"
                        >
                            {{
                                Object.keys(filterCondition)[index]
                                    ? $t(Object.keys(filterCondition)[index]) +
                                      " " +
                                      $t(
                                          filterCondition[
                                              Object.keys(filterCondition)[
                                                  index
                                              ]
                                          ][
                                              `${
                                                  Object.keys(filterCondition)[
                                                      index
                                                  ]
                                              }Option`
                                          ]
                                      ).toLocaleLowerCase() +
                                      ( 
                                      filterCondition[
                                          Object.keys(filterCondition)[index]
                                      ][Object.keys(filterCondition)[index]] ||
                                      
                                      filterCondition[
                                          Object.keys(filterCondition)[index]
                                      ][Object.keys(filterCondition)[index]] ===
                                          0
                                          ? ` "${
                                                filterCondition[
                                                    Object.keys(
                                                        filterCondition
                                                    )[index]
                                                ][
                                                    Object.keys(
                                                        filterCondition
                                                    )[index]
                                                ] === MISAEnum.Gender.Male
                                                    ? this.$t("LabelMale")
                                                    : filterCondition[
                                                          Object.keys(
                                                              filterCondition
                                                          )[index]
                                                      ][
                                                          Object.keys(
                                                              filterCondition
                                                          )[index]
                                                      ] ===
                                                      MISAEnum.Gender.Female
                                                    ? this.$t("LabelFemale")
                                                    : filterCondition[
                                                          Object.keys(
                                                              filterCondition
                                                          )[index]
                                                      ][
                                                          Object.keys(
                                                              filterCondition
                                                          )[index]
                                                      ] ===
                                                      MISAEnum.Gender.Other
                                                    ? this.$t("LabelOther")
                                                    : filterCondition[
                                                          Object.keys(
                                                              filterCondition
                                                          )[index]
                                                      ][
                                                          Object.keys(
                                                              filterCondition
                                                          )[index]
                                                      ]
                                            }"`
                                          : '')
                                    : $t(Object.keys(filterCondition)[0]) +
                                      " " +
                                      $t(
                                          filterCondition[
                                              Object.keys(filterCondition)[0]
                                          ][
                                              `${
                                                  Object.keys(
                                                      filterCondition
                                                  )[0]
                                              }Option`
                                          ]
                                      ).toLocaleLowerCase() +
                                      (filterCondition[
                                          Object.keys(filterCondition)[0]
                                      ][Object.keys(filterCondition)[0]] ||
                                      filterCondition[
                                          Object.keys(filterCondition)[0]
                                      ][Object.keys(filterCondition)[0]] === 0
                                          ? ` "${
                                                filterCondition[
                                                    Object.keys(
                                                        filterCondition
                                                    )[0]
                                                ][
                                                    Object.keys(
                                                        filterCondition
                                                    )[0]
                                                ] === MISAEnum.Gender.Male
                                                    ? this.$t("LabelMale")
                                                    : filterCondition[
                                                          Object.keys(
                                                              filterCondition
                                                          )[0]
                                                      ][
                                                          Object.keys(
                                                              filterCondition
                                                          )[0]
                                                      ] ===
                                                      MISAEnum.Gender.Female
                                                    ? this.$t("LabelFemale")
                                                    : filterCondition[
                                                          Object.keys(
                                                              filterCondition
                                                          )[0]
                                                      ][
                                                          Object.keys(
                                                              filterCondition
                                                          )[0]
                                                      ] ===
                                                      MISAEnum.Gender.Other
                                                    ? this.$t("LabelOther")
                                                    : filterCondition[
                                                          Object.keys(
                                                              filterCondition
                                                          )[0]
                                                      ][
                                                          Object.keys(
                                                              filterCondition
                                                          )[0]
                                                      ]
                                            }"`
                                          : "")
                            }}
                            <div
                                class="mi-16 delete-filter-icon"
                                @click="
                                    () => handleDeleteFilter(filterCondition)
                                "
                            >
                                <div class="mi-close--small"></div>
                            </div>
                        </div>

                        <div
                            class="delete-all-filter"
                            @click="handleDeleteAllFilter"
                        >
                            {{ $t("DeleteConditionFilter") }}
                        </div>
                    </div>

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
                    class="scrollbar_customize master-section h-60"
                    :style="{ height: masterHeight + '%' }"
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
                            @showPopupDuplicate="showPopupDuplicate"
                            :selectedpaymentIds="selectedpaymentIds"
                            :isDeleteOne="isDeleteOne"
                            @setIsDeleteOne="setIsDeleteOne"
                            @setIsDialogDeleteMul="setIsDialogDeleteMul"
                            :isDialogDeleteMultiple="isDialogDeleteMultiple"
                            @setIsDialogDeleteMuliple="
                                () => (isDialogDeleteMultiple = false)
                            "
                             @handleClickFilter="handleClickFilter"
                            :filterConditonArr="filterConditonArr"
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

                <div class="detail-section" ref="detailSection">
                    <div class="divider-section"  @drag="onDragDivider" draggable="true">
                        <div
                            class="collapse-btn"
                            @click="handleShowDetailSection"
                        >
                            <div class="mi-8 block-center">
                                <div class="mi-arrow-dropdown"></div>
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
                                :style="totalRecordPaymentDetail > 0 ? 'margin-top: 26px;' : ''"
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
        @setPaymentSelected="setPaymentSelected"
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
import axios from "axios";
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
            isDetail: true,
            paymentIdClick: "",
            isShowToastAdd: false,
            isShowToastEdit: false,
            isShowToastDelete: false,
            isShowToastDuplicate: false,
            payment_id_selected: null,
            selectedpaymentIds: [],
            isDialogDeleteMultiple: false,
            masterHeight: 54,
            filterConditonArr:[]
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
         * Nhận mảng filter condition text
         * Author: KienNT (11/06/2023)
         * @param (filterConditonArr): tham số là mảng text condition filter
         */
        handleClickFilter(filterConditonArr) {
            this.filterConditonArr = filterConditonArr;
        },

             /**
         * Hàm xoá 1 điều kiện lọc
         * Author: KienNT (11/06/2023)
         */
        handleDeleteFilter(filterCondition) {
            const index = this.filterConditonArr.indexOf(filterCondition);
            if (index !== -1) {
                this.filterConditonArr.splice(index, 1);
            }
        },

        /**
         * Hàm xoá tất cả điều kiện lọc
         *  Author: KienNT (11/06/2023)
         */
        handleDeleteAllFilter() {
            this.filterConditonArr = [];
        },

        /**
         * Hàm thực hiện xóa tất cả những checkbox được check, xóa bên table khi có dialog delete multiple
         * Author: KienNT (20/03/2023)
         */
        handleDeleteAll() {
            if (this.selectedCheckbox.length > 1) {
                this.isDeleteOne = false;
                const selectDeleteMultiple = [...this.selectedCheckbox];
                this.selectedpaymentIds = selectDeleteMultiple;
                this.isDialogDeleteMultiple = true;
            } else {
                this.isDeleteOne = true;
                const selectDeleteMultiple = [...this.selectedCheckbox];
                this.selectedpaymentIds = selectDeleteMultiple;
            }
        },

         /**
         * Hàm ẩn dialog đi khi xóa nhiều bản ghi emit từ con
         * Author: KienNT (09/06/2023)
         */
        setIsDialogDeleteMul() {
            this.isDialogDeleteMultiple = false;
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
         * Hàm emit từ con để set lại payment_id_selected
         * Author: KienNT (09/06/2023)
         */
        setPaymentSelected() {
            this.payment_id_selected = null;      
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
         * Hàm set lại isDeleteOne của component con gửi lên
         * Author: KienNT (09/06/2023)
         */
        setIsDeleteOne() {
            this.isDeleteOne = false;
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

        // onDragDivider(event) {
        //     const masterSection = this.$refs.masterSection;
        //     const detailSection = this.$refs.detailSection;
        //     // Tính toán sự thay đổi của chiều cao
        //     const heightDiff = event.clientY;
        //     console.log(heightDiff);
        //     // Cập nhật chiều cao của detail section
        //     detailSection.style.height = `calc(100% - ${heightDiff}px)`;
            
        //     // Cập nhật chiều cao của master section
        //     // this.masterHeight = (heightDiff / this.$el.clientHeight) * 100;
        // },

        /**
         * Hàm thực hiện hành động hàng loạt
         * Author: KienNT 10/06/2023
         */
        handleBatchExecution() {
            this.isContextMenu = true;
        },

        /**
         * Hàm thực hiện CALL API Export cho 2 TH. TH1: Có selected và TH2: Không có selected
         * Author: KienNT (10/06/2023)
         */
        handleExport() {
            try {
                if (this.selectedCheckbox.length >= 1) {
                    const queryParameters = this.selectedCheckbox.map(
                        (recordId) => `listRecordId=${recordId}`
                    );
                    this.apiExport(
                        `https://localhost:7153/api/v1/Payments/ExportToExcelSelected?${queryParameters.join(
                            "&"
                        )}`
                    );
                } else {
                    this.apiExport(
                        `https://localhost:7153/api/v1/Payments/ExportToExcel?keyword=${this.keyWordSearch}`
                    );
                }
            } catch (error) {
                console.log(error);
            }
        },

        
        /**
         * Hàm thực hiện CALL API Export
         * Author: KienNT (10/06/2023)
         */
        apiExport(url) {
            //Loại dữ liệu trả về từ API, ở đây là blob (binary large object) để tải xuống tệp Excel.
            axios({
                url: url,
                method: "GET",
                responseType: "blob",
            })
                .then((this.isLoading = true))
                .then((response) => {
                    // Tạo một URL tạm thời để tải xuống tệp Excel.
                    const url = window.URL.createObjectURL(
                        new Blob([response.data])
                    );
                    // Tạo một thẻ <a> ẩn và cấu hình các thuộc tính để tải xuống tệp Excel, bao gồm tên tệp và đường dẫn đến tệp trên URL tạm thời.
                    const link = document.createElement("a");
                    link.href = url;
                    //  Thuộc tính download được thiết lập để chỉ định tên tệp tin sẽ được tải xuống.
                    link.setAttribute(
                        "download",
                        `Thu_chi_tien_mat_${Date.now()}.xlsx`
                    );
                    // chèn thẻ a vào body của trang và kích hoạt sự kiện click của thẻ a để bắt đầu tải xuống tệp tin.
                    document.body.appendChild(link);
                    link.click();
                    this.isLoading = false;
                })
                .catch((res) => {
                    console.log(res);
                    this.isLoading = false;
                });
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
         * Hàm hiển thị popup và truyền formMode cho Popup, payment được chọn
         * Author: KienNT (09/06/2023)
         */
        showPopupDuplicate(formMode, paymentSelected) {
            this.isCashDetail = true;
            this.formMode = formMode;
            this.payment_id_selected = paymentSelected;
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
            if (masterSection.classList.contains('h-60')) {
                this.masterHeight = 60;
            } else {
                this.masterHeight = 100;
            }
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
         * format cho số lớn
         * Author: KienNT (07/06/2023)
         */
        numberWithCommas(x) {
            return  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") ;
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
