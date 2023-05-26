<template>
    <div class="content">
        <div class="content__header">
            <div class="content__header-title">
                <MHeading :text="$t('AccountSystem')"></MHeading>
            </div>
        </div>

        <div class="content__main">
            <!-- header main -->
            <div class="content__main-header">
                <div class="content__main-left">
                    <div class="content__main-filter">
                        <div class="input__wrapper">
                            <button class="input__icon search">
                                <div class="input__icon-search"></div>
                            </button>
                            <input
                                type="text"
                                class="input__type input__search"
                                :placeholder="$t('TxtSearchAccount')"
                                v-model.lazy="keyWordSearch"
                            />
                        </div>
                    </div>
                </div>
                <div class="content__main-right">
                    <MButton
                        kind="link"
                        className="link-btn btn-link"
                        :text="isExpand ? $t('Collapse') : $t('Extend')"
                        :click="handleExpandList"
                    ></MButton>
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

                    <MButton
                        mode="btnAdd"
                        :text="$t('AddNewEmployee')"
                        id="addEmployee"
                        :click="showAccountSysterm"
                    ></MButton>
                </div>
            </div>

            <div class="content__main-body scrollbar_customize">
                <div class="content__main-table">
                    <!--  table -->
                    <!-- <TheTableAccount
                        @getTotalRecord="getTotalRecord"
                        @hideShowLoading="hideShowLoading"
                        :keyWordSearch="keyWordSearch"
                        :pageSizeNumber="pageSize"
                        :pageCurrent="pageNumber"
                    ></TheTableAccount> -->

                    <GridAccount
                        @getTotalRecord="getTotalRecord"
                        @hideShowLoading="hideShowLoading"
                        :keyWordSearch="keyWordSearch"
                        :pageSizeNumber="pageSize"
                        :pageCurrent="pageNumber"
                        :isExpandAccount="isExpand"
                        :isReload="isReload"
                        @setIsReLoad="setIsReLoad"
                    ></GridAccount>
                </div>

                <!--  paging -->
                <ThePaging
                    :totalRecord="totalRecord"
                    @handleClickOptionItem="handleClickOptionItem"
                    @handleClickPrev="handleClickPrev"
                    @handleClickNext="handleClickNext"
                    @handleClickPageIndex="handleClickPageIndex"
                    :pageCurrent="pageNumber"
                    :isDisabledClickPrev="isDisabledClickPrev"
                    @setIsDisabledClickPrev="setIsDisabledClickPrev"
                ></ThePaging>

                <!--  AccountSystermDetail -->
                <AccountSystermDetail
                    v-if="isAccountSysterm"
                    :textTitleAccountSysterm="textTitleAccountSysterm"
                    @closeAccountSysterm="closeAccountSysterm"
                    @closeAccountSystermDetail="closeAccountSysterm"
                    :formMode="formMode"
                ></AccountSystermDetail>

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
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import axios from "axios";
// import TheTableAccount from "@/components/layout/TheTableAccount.vue";
import ThePaging from "@/components/base/MPaging.vue";
import Mloading from "@/components/base/Mloading.vue";
import AccountSystermDetail from "./AccountSystermDetail.vue";
import MISAEnum from "@/js/enum";
import GridAccount from "./GridAccount.vue";
export default {
    name: "AccountSysterm",
    data() {
        return {
            MISAResouce,
            isExpand: false,
            isLoading: false,
            isShowToastAdd: false,
            isShowToastEdit: false,
            isShowToastDelete: false,
            isShowToastDuplicate: false,
            employeeIdSelected: null,
            formMode: "",
            textTitleAccountSysterm: "",
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
            isAccountSysterm: false,
        };
    },
    components: {
        GridAccount,
        ThePaging,
        Mloading,
        AccountSystermDetail,
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
         * Author: KienNT (26/05/2023)
         */
        handleReLoadData() {
            this.isReload = true;
            // this.isDisabledClickPrev = true;
        },

        /**
         * Hàm emit từ con để set lại reload lần sau
         * Author: KienNT (26/05/2023)
         */
        setIsReLoad() {
            this.isReload = false;
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
         * Hàm click btn mở rộng
         * Author: KienNT (26/05/2023)
         */
        handleExpandList() {
            this.isExpand = !this.isExpand;
        },

        /**
         * Hàm click vào pageindex
         * Author: KienNT (17/03/2023)
         */
        handleClickPageIndex(index) {
            this.pageNumber = index;
        },

        /**
         * Hàm hiển thị popup và truyền formMode cho Popup, EmployeeId được chọn
         * Author: KienNT (28/03/2023)
         */
        showAccountSystermDuplicate(formMode, employeeIdSelected) {
            this.isAccountSysterm = true;
            this.formMode = formMode;
            this.textTitleAccountSysterm = this.$t("DuplicateEmployeeInfo");
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
         * Hàm ẩn popup account
         * Author: KienNT (06/05/2023)
         */
        closeAccountSysterm() {
            this.isAccountSysterm = false;
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
         * Author: KienNT (06/05/2023)
         */
        showAccountSysterm() {
            try {
                this.employeeIdSelected = "";
                this.isAccountSysterm = true;
                this.textTitleAccountSysterm = this.$t("AddNewAccount");
                this.formMode = MISAEnum.formMode.Add;
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
                this.textTitleAccountSysterm = this.$t("EditEmployeeInfo");
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
.content__main-filter .input__wrapper {
    width: 250px;
}
</style>
