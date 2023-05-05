<template>
    <div class="content">
        <div class="content__header">
            <div class="content__header-title">
                <MHeading :text="$t('Employee')"></MHeading>
            </div>
        </div>

        <div class="content__main">
            <!-- header main -->
            <div class="content__main-header">
                <div class="content__main-left">
                    <div
                        v-if="selectedCheckbox.length >= 1"
                        class="content__main-left"
                    >
                        <p>
                            {{ MISAResouce.vi.SelectedCheckbox }}
                            <strong>{{ selectedCheckbox.length }}</strong>
                        </p>
                        <MButton
                            kind="link"
                            className="link-btn btn-link-delete"
                            :click="handleUndoSeleted"
                            :text="MISAResouce.vi.UndoSelected"
                        ></MButton>
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
                            @handleRemove="handleDeleteAll"
                            :refElement="this.$refs.iconContextMenu"
                        ></MContextmenu>
                    </button>

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
                                      (filterCondition[
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
                                          : "")
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
                        :text="$t('AddNewEmployee')"
                        id="addEmployee"
                        :click="showPopup"
                    ></MButton>
                </div>
            </div>

            <div class="content__main-body scrollbar_customize">
                <div class="content__main-table">
                    <!--  table -->
                    <TheTable
                        @hideShowLoading="hideShowLoading"
                        @onDoubleClick="onDoubleClick"
                        @hideShowToast="hideShowToast"
                        @handleSelectChechbox="handleSelectChechbox"
                        :selectedCheckbox="selectedCheckbox"
                        @getTotalRecord="getTotalRecord"
                        :pageSizeNumber="pageSize"
                        :pageCurrent="pageNumber"
                        :keyWordSearch="keyWordSearch"
                        :isReload="isReload"
                        @setIsReLoad="setIsReLoad"
                        @handleReLoadData="handleReLoadData"
                        :isDialogDeleteMultiple="isDialogDeleteMultiple"
                        :selectedEmployeeIds="selectedEmployeeIds"
                        @setIsDialogDeleteMul="setIsDialogDeleteMul"
                        @setIsDialogDeleteMuliple="
                            () => (isDialogDeleteMultiple = false)
                        "
                        @showPopupDuplicate="showPopupDuplicate"
                        :isDeleteOne="isDeleteOne"
                        @setIsDeleteOne="setIsDeleteOne"
                        @handleClickFilter="handleClickFilter"
                        :selectedArrToSetting="selectedArrToSetting"
                        @changeSelectedArrToSetting="changeSelectedArrToSetting"
                        :filterConditonArr="filterConditonArr"
                    ></TheTable>
                </div>

                <!--  paging -->
                <ThePaging
                    :totalRecord="totalRecord"
                    @handleClickOptionItem="handleClickOptionItem"
                    @handleClickPrev="handleClickPrev"
                    @handleClickNext="handleClickNext"
                    :pageCurrent="pageNumber"
                    :isDisabledClickPrev="isDisabledClickPrev"
                    @setIsDisabledClickPrev="setIsDisabledClickPrev"
                    @handleClickPageIndex="handleClickPageIndex"
                ></ThePaging>

                <!--  popup -->
                <ThePopup
                    v-if="isShowPopup"
                    @onClosePopup="closePopup"
                    @hideShowLoading="hideShowLoading"
                    :employeeIdSelected="employeeIdSelected"
                    :textTitlePopup="textTitlePopup"
                    @hideShowToast="hideShowToast"
                    @handleReLoadData="handleReLoadData"
                    :formMode="formMode"
                    @handleSetModeForm="() => (formMode = null)"
                ></ThePopup>

                <!-- loading -->
                <Mloading v-if="isLoading"></Mloading>

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
                        (isShowToastAdd && $t('ToastAddSuccess')) ||
                        (isShowToastEdit && $t('ToastEditSuccess')) ||
                        (isShowToastDelete && $t('ToastDeleteSuccess')) ||
                        (isShowToastDuplicate && $t('ToastDuplicateSuccess'))
                    "
                    classTitle="toast__title-success"
                ></MToast>

                <TheSettingUI
                    v-if="isSettingUI"
                    @closePopupSetting="closePopupSetting"
                    @handleSavaSelected="handleSavaSelected"
                    :selectedArrRecv="selectedArrRecv"
                    @handleClickSavaSelected="handleClickSavaSelected"
                ></TheSettingUI>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import axios from "axios";
import TheTable from "@/components/layout/TheTable.vue";
import ThePaging from "@/components/layout/ThePaging.vue";
import Mloading from "@/components/base/Mloading.vue";
import TheSettingUI from "@/components/layout/TheSettingUI.vue";

import ThePopup from "@/components/layout/ThePopup.vue";
import MISAEnum from "@/js/enum";
export default {
    name: "EmployeeList",
    data() {
        return {
            MISAEnum,
            MISAResouce,
            isShowPopup: false,
            isContextMenu: false,
            isLoading: false,
            isShowToastAdd: false,
            isShowToastEdit: false,
            isShowToastDelete: false,
            isShowToastDuplicate: false,
            employeeIdSelected: null,
            formMode: "",
            textTitlePopup: "",
            selectedCheckbox: [],
            totalRecord: 0,
            pageSize: 0,
            pageNumber: 1,
            keyWordSearch: "",
            isReload: false,
            isDialogDeleteMultiple: false,
            selectedEmployeeIds: [],
            isDisabledClickPrev: true,
            isDeleteOne: false,
            leftContextMenu: "",
            topContextMenu: "",
            filterConditonArr: [],
            isSettingUI: false,
            selectedArrRecv: [],
            selectedArrToSetting: [],
        };
    },
    components: {
        TheTable,
        ThePaging,
        ThePopup,
        Mloading,
        TheSettingUI,
    },

    watch: {
        /**
         * Hàm khi thay đổi keyword thì quay lại trang đầu nếu là rỗng
         * Author: KienNT (17/03/2023)
         */
        keyWordSearch: function () {
            this.pageNumber = 1;
            this.isDisabledClickPrev = true;
            if (this.keyWordSearch.includes("/")) {
                const arrKeyword = this.keyWordSearch.split("/");
                var search = "";
                if (arrKeyword.length >= 2) {
                    for (let index = 0; index < arrKeyword.length; index++) {
                        const element = arrKeyword[index];
                        search += element;
                    }
                }
                this.keyWordSearch = search;
            }
        },
    },

    methods: {
        /**
         * Hàm thực hiện hành động hàng loạt
         * Author: KienNT 27/04/2023
         */
        handleBatchExecution() {
            this.isContextMenu = true;
        },

        handleShowSettingUI() {
            this.isSettingUI = true;
        },

        /**
         * Nhận mảng filter condition text
         * Author: KienNT (28/04/2023)
         * @param (filterConditonArr): tham số là mảng text condition filter
         */
        handleClickFilter(filterConditonArr) {
            this.filterConditonArr = filterConditonArr;
        },

        /**
         * Hàm xoá 1 điều kiện lọc
         * Author: KienNT (02/05/2023)
         */
        handleDeleteFilter(filterCondition) {
            const index = this.filterConditonArr.indexOf(filterCondition);
            if (index !== -1) {
                this.filterConditonArr.splice(index, 1);
            }
        },

        /**
         * Hàm xoá tất cả điều kiện lọc
         * Author: KienNT (02/05/2023)
         */
        handleDeleteAllFilter() {
            this.filterConditonArr = [];
        },

        /**
         * Hàm ẩn contextmenu khi click ra ngoài element
         * Author: KienNT (04/03/2023)
         */
        hideContextMenu() {
            this.isContextMenu = !this.isContextMenu;
        },
        /**
         * Hàm thực hiện reload lại trang
         * Author: KienNT (18/03/2023)
         */
        handleReLoadData() {
            this.isReload = true;
            // this.isDisabledClickPrev = true;
        },
        /**
         * Hàm gán giá trị mảng các checkbox được check
         * Author: KienNT (15/03/2023)
         *  @param (selectedCheckbox): tham số 1 là mảng checkbox được chọn
         */
        handleSelectChechbox(selectedCheckbox) {
            this.selectedCheckbox = selectedCheckbox;
        },

        /**
         * Hàm gán giá trị mảng các checkbox được check bên tùy chỉnh UI
         * Author: KienNT (30/04/2023)
         *  @param (selectedCheckbox): tham số 1 là mảng checkbox được chọn
         */
        handleSavaSelected(selectedArrRecv) {
            this.selectedArrRecv = selectedArrRecv;
        },

        /**
         * Hàm gán giá trị mảng các checkbox được check bên tùy chỉnh UI khi click btn cất
         * Author: KienNT (01/05/2023)
         *  @param (selectedArrToSetting): tham số 1 là mảng checkbox được chọn
         */
        handleClickSavaSelected(selectedArrToSetting) {
            this.isSettingUI = false;
            this.selectedArrToSetting = selectedArrToSetting.slice();
        },

        changeSelectedArrToSetting() {
            this.selectedArrRecv = [];
        },

        /**
         * Hàm click icon Next trang
         * Author: KienNT (17/03/2023)
         */
        handleClickNext() {
            this.pageNumber += 1;
            if (this.pageNumber > 1) {
                this.isDisabledClickPrev = false;
            }
        },

        /**
         * Hàm click vào pageindex
         * Author: KienNT (17/03/2023)
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

        /**
         * Hàm hiển thị popup và truyền formMode cho Popup, EmployeeId được chọn
         * Author: KienNT (28/03/2023)
         */
        showPopupDuplicate(formMode, employeeIdSelected) {
            this.isShowPopup = true;
            this.formMode = formMode;
            this.textTitlePopup = this.$t("DuplicateEmployeeInfo");
            this.employeeIdSelected = employeeIdSelected;
        },

        /**
         * Hàm click icon previous trang
         * Author: KienNT (17/03/2023)
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
         * Hàm click option, lấy pageSize
         * Author: KienNT (17/03/2023)
         *  @param (pageSize): tham số 1 là số bản ghi trên 1 trang
         */
        handleClickOptionItem(pageSize) {
            this.pageSize = pageSize;
            this.pageNumber = 1;
        },

        /**
         * Hàm thực hiện disabled div prev khi click vào chọn bản ghi trên 1 trang từ con emit lên
         * Author: KienNT (20/03/2023)
         */
        setIsDisabledClickPrev() {
            this.isDisabledClickPrev = true;
        },

        /**
         * Hàm set lại isDeleteOne của component con gửi lên
         * Author: KienNT (12/04/2023)
         */
        setIsDeleteOne() {
            this.isDeleteOne = false;
        },

        /**
         * Hàm thực hiện CALL API Export cho 2 TH. TH1: Có selected và TH2: Không có selected
         * Author: KienNT (30/03/2023)
         */
        handleExport() {
            try {
                if (this.selectedCheckbox.length >= 1) {
                    const queryParameters = this.selectedCheckbox.map(
                        (recordId) => `listRecordId=${recordId}`
                    );
                    this.apiExport(
                        `https://localhost:7153/api/v1/Employees/ExportToExcelSelected?${queryParameters.join(
                            "&"
                        )}`
                    );
                } else {
                    this.apiExport(
                        `https://localhost:7153/api/v1/Employees/ExportToExcel?keyword=${this.keyWordSearch}`
                    );
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm thực hiện CALL API Export
         * Author: KienNT (30/03/2023)
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
                        `Danh_sach_nhan_vien_${Date.now()}.xlsx`
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
         * Hàm emit từ con để set lại reload lần sau
         * Author: KienNT (18/03/2023)
         */
        setIsReLoad() {
            this.isReload = false;
        },

        /**
         * Hàm gán số bản ghi từ con emit lên
         * Author: KienNT (17/03/2023)
         *  @param (totalRecord): tham số 1 là số bản ghi
         */
        getTotalRecord(totalRecord) {
            this.totalRecord = totalRecord;
        },

        /**
         * Hàm thực hiện cho các checkbox bỏ chọn
         * Author: KienNT (15/03/2023)
         */
        handleUndoSeleted() {
            this.selectedCheckbox = [];
        },

        /**
         * Hàm thực hiện xóa tất cả những checkbox được check, xóa bên table khi có dialog delete multiple
         * Author: KienNT (20/03/2023)
         */
        handleDeleteAll() {
            if (this.selectedCheckbox.length > 1) {
                this.isDeleteOne = false;
                const selectDeleteMultiple = [...this.selectedCheckbox];
                this.selectedEmployeeIds = selectDeleteMultiple;
                this.isDialogDeleteMultiple = true;
            } else {
                this.isDeleteOne = true;
                const selectDeleteMultiple = [...this.selectedCheckbox];
                this.selectedEmployeeIds = selectDeleteMultiple;
            }
        },

        /**
         * Hàm ẩn dialog đi khi xóa nhiều bản ghi emit từ con
         * Author: KienNT (20/03/2023)
         */
        setIsDialogDeleteMul() {
            this.isDialogDeleteMultiple = false;
        },

        /**
         * Hàm hiển thị popup khi click vào thêm mới nhân viên và lấy mã từ Call API
         * Author: KienNT (01/03/2023)
         */
        showPopup() {
            try {
                this.employeeIdSelected = "";
                this.textTitlePopup = this.$t("EmployeeInfo");
                this.isShowPopup = true;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm handle khi double click và lấy id employee
         * Author: KienNT (04/03/2023)
         *  @param (employee): tham số 1 là danh object chứa các thông tin nhân viên
         */
        onDoubleClick(employee) {
            try {
                this.employeeIdSelected = employee.EmployeeId;
                this.textTitlePopup = this.$t("EditEmployeeInfo");
                this.isShowPopup = true;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm đóng popup khi click vào icon close từ con
         * Author: KienNT (01/03/2023)
         */
        closePopup() {
            try {
                this.isShowPopup = false;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm hiện thị và ẩn loading khi load dữ liệu
         * Author: KienNT (02/03/2023)
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
         * Hàm hiện thị toast khi thực hiện thêm, sửa, xóa thành công
         * Author: KienNT (11/03/2023)
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

        /**
         * Hàm ẩn setting UI
         * Author: KienNT (11/03/2023)
         */
        // popup setting:
        closePopupSetting() {
            this.isSettingUI = false;
        },
    },
};
</script>
<style scoped>
@import url(../../css/layout/content.css);
</style>
