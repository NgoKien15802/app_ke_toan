<template>
    <div class="content">
        <div class="content__header">
            <div class="content__header-title">
                <MHeading :text="MISAResouce.vi.Employee"></MHeading>
            </div>

            <MButton
                :text="MISAResouce.vi.AddNewEmployee"
                id="addEmployee"
                kind="primary"
                className="btn-primary"
                :click="showPopup"
            ></MButton>
        </div>

        <div class="content__main">
            <!-- header main -->
            <div
                class="content__main-header"
                :style="selectedCheckbox.length < 1 && 'justify-content: end'"
            >
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

                    <MButton
                        :class="
                            selectedCheckbox.length > 1
                                ? 'btn btn-delete'
                                : 'btn btn-default'
                        "
                        :text="MISAResouce.vi.BtnDeleteAll"
                        :disabled="selectedCheckbox.length <= 1"
                        :click="handleDeleteAll"
                    >
                    </MButton>
                </div>
                <div class="content__main-right">
                    <div class="content__main-filter">
                        <div class="input__wrapper">
                            <button class="input__icon" fdprocessedid="sd2h6">
                                <div class="input__icon-search"></div>
                            </button>
                            <input
                                type="text"
                                class="input__type input__search"
                                placeholder="Tìm theo mã, tên nhân viên"
                                fdprocessedid="q9kjmf"
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
                                :subtext="MISAResouce.vi.TooltipReload"
                            ></MTooltip>
                        </div>
                    </div>

                    <div
                        class="content__main-refresh wrap-icon"
                        @click="handleExport"
                        :class="totalRecord == 0 ? 'disabled' : ''"
                    >
                        <div class="content__main-exprort-icon tooltip">
                            <MTooltip
                                style="top: 163%"
                                kind="export"
                                :subtext="MISAResouce.vi.TooltipExport"
                            ></MTooltip>
                        </div>
                    </div>
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
                        :deleteMulEmployeeCode="deleteMulEmployeeCode"
                        :selectedEmployeeIds="selectedEmployeeIds"
                        @setIsDialogDeleteMul="setIsDialogDeleteMul"
                        @setIsDialogDeleteMuliple="
                            () => (isDialogDeleteMultiple = false)
                        "
                        @showPopupDuplicate="showPopupDuplicate"
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
                    :kind="MISAResouce.vi.ToastTitleSuccess"
                    :text="
                        (isShowToastAdd && MISAResouce.vi.ToastAddSuccess) ||
                        (isShowToastEdit && MISAResouce.vi.ToastEditSuccess) ||
                        (isShowToastDelete &&
                            MISAResouce.vi.ToastDeleteSuccess) ||
                        (isShowToastDuplicate &&
                            MISAResouce.vi.ToastDuplicateSuccess)
                    "
                    classTitle="toast__title-success"
                ></MToast>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import TheTable from "./TheTable.vue";
import ThePaging from "./ThePaging.vue";
import ThePopup from "./ThePopup.vue";
import Mloading from "../base/Mloading.vue";
import axios from "axios";
export default {
    name: "TheContent",
    data() {
        return {
            MISAResouce,
            isShowPopup: false,
            isLoading: false,
            isShowToastAdd: false,
            isShowToastEdit: false,
            isShowToastDelete: false,
            isShowToastDuplicate: false,
            employeeIdSelected: null,
            formMode: "",
            textTitlePopup: "",
            selectedCheckbox: [],
            deleteMulEmployeeCode: [],
            totalRecord: 0,
            pageSize: 0,
            pageNumber: 1,
            keyWordSearch: "",
            isReload: false,
            isDialogDeleteMultiple: false,
            selectedEmployeeIds: [],
            isDisabledClickPrev: true,
        };
    },
    components: {
        TheTable,
        ThePaging,
        ThePopup,
        Mloading,
    },

    watch: {
        /**
         * Hàm khi thay đổi keyword thì quay lại trang đầu nếu là rỗng
         * Author: KienNT (17/03/2023)
         */
        keyWordSearch: function () {
            this.pageNumber = 1;
            this.isDisabledClickPrev = true;
        },
    },

    methods: {
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
         * Hàm hiển thị popup và truyền formMode cho Popup, EmployeeId được chọn
         * Author: KienNT (28/03/2023)
         */
        showPopupDuplicate(formMode, employeeIdSelected) {
            this.isShowPopup = true;
            this.formMode = formMode;
            this.textTitlePopup = MISAResouce.vi.DuplicateEmployeeInfo;
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
         * Hàm thực hiện CALL API Export
         * Author: KienNT (30/03/2023)
         */
        handleExport() {
            try {
                //Loại dữ liệu trả về từ API, ở đây là blob (binary large object) để tải xuống tệp Excel.
                axios({
                    url: `https://localhost:7153/api/v1/Employees/ExportToExcel?keyword=${this.keyWordSearch}`,
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
            } catch (error) {
                console.log(error);
            }
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
            const selectDeleteMultiple = [...this.selectedCheckbox];
            this.selectedEmployeeIds = selectDeleteMultiple.map(
                (x) => x.EmployeeId
            );
            this.deleteMulEmployeeCode = this.selectedCheckbox.map(
                (x) => x.EmployeeCode
            );
            this.isDialogDeleteMultiple = true;
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
                this.textTitlePopup = MISAResouce.vi.EmployeeInfo;
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
                this.textTitlePopup = MISAResouce.vi.EditEmployeeInfo;
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
    },
};
</script>
<style scoped>
@import url(../../css/layout/content.css);
</style>
