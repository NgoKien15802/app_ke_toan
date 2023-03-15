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
                        v-if="isCheckedAll"
                        kind="link"
                        className="link-btn btn-link-selectAll"
                        :text="MISAResouce.vi.SelectAllPage"
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
                            />
                        </div>
                    </div>

                    <div class="content__main-refresh wrap-icon">
                        <div
                            class="content__main-refresh-icon icon-normal-light icon-normal-light-hover"
                        ></div>
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
                    ></TheTable>
                </div>

                <!--  paging -->
                <ThePaging></ThePaging>

                <!--  popup -->
                <ThePopup
                    v-if="isShowPopup"
                    @onClosePopup="closePopup"
                    @hideShowLoading="hideShowLoading"
                    :employeeIdSelected="employeeIdSelected"
                    :textTitlePopup="textTitlePopup"
                    @hideShowToast="hideShowToast"
                ></ThePopup>

                <!-- loading -->
                <Mloading v-if="isLoading"></Mloading>

                <!-- Toast -->
                <MToast
                    v-if="
                        isShowToastAdd || isShowToastEdit || isShowToastDelete
                    "
                    classIcon="toast__icon-success"
                    :kind="MISAResouce.vi.ToastTitleSuccess"
                    :text="
                        (isShowToastAdd && MISAResouce.vi.ToastAddSuccess) ||
                        (isShowToastEdit && MISAResouce.vi.ToastEditSuccess) ||
                        (isShowToastDelete && MISAResouce.vi.ToastDeleteSuccess)
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
            employeeIdSelected: null,
            textTitlePopup: "",
            selectedCheckbox: [],
            isCheckedAll: false,
        };
    },
    components: {
        TheTable,
        ThePaging,
        ThePopup,
        Mloading,
    },
    methods: {
        /**
         * Hàm gán giá trị mảng các checkbox được check, isChecked all là true thì hiển thị chọn tất cả các trang
         * Author: KienNT (15/03/2023)
         *  @param (selectedCheckbox,isCheckedAll): tham số 1 là mảng checkbox được chọn, tham số 2 là true nếu được check hết
         */
        handleSelectChechbox(selectedCheckbox, isCheckedAll) {
            this.selectedCheckbox = selectedCheckbox;
            this.isCheckedAll = isCheckedAll;
        },

        /**
         * Hàm thực hiện cho các checkbox bỏ chọn
         * Author: KienNT (15/03/2023)
         */
        handleUndoSeleted() {
            this.selectedCheckbox = [];
        },

        /**
         * Hàm thực hiện xóa tất cả những checkbox được check
         * Author: KienNT (15/03/2023)
         */
        handleDeleteAll() {
            console.log(this.selectedCheckbox);
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
