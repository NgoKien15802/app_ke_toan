<template>
    <table id="tbEmployeeList" class="employee">
        <thead>
            <tr class="table__field">
                <th class="text-align-center">
                    <MCheckbox
                        v-model="selectedAll"
                        @handleCheckbox="handleCheckboxAll"
                        :initValue="selectedAll"
                    ></MCheckbox>
                </th>
                <th class="text-align-left">
                    {{ $t("EmployeeCode") }}
                </th>
                <th class="text-align-left">
                    {{ $t("EmployeeName") }}
                </th>
                <th class="text-align-left" style="min-width: 200px">
                    {{ $t("Gender") }}
                </th>
                <th class="text-align-center">
                    {{ $t("DateOfBirth") }}
                </th>
                <th class="text-align-left">
                    <MTooltip
                        kind="title"
                        :text="$t('IdentityNumber')"
                        :subtext="$t('TooltipIdentityNumber')"
                    ></MTooltip>
                </th>
                <th class="text-align-left">
                    {{ $t("JobTitle") }}
                </th>
                <th class="text-align-left">
                    {{ $t("DepartmentName") }}
                </th>
                <th class="text-align-left">
                    {{ $t("AccountNumber") }}
                </th>
                <th class="text-align-left">
                    {{ $t("BankName") }}
                </th>
                <th class="text-align-left">
                    {{ $t("BankAddress") }}
                </th>
                <th class="text-align-center">
                    {{ $t("Freature") }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(employee, index) in employees"
                :key="index"
                @dblclick="($event) => doubleClickRow($event, employee)"
            >
                <td class="text-align-center">
                    <MCheckbox
                        v-model="employee.Selected"
                        :initValue="employee.Selected"
                        @handleCheckbox="
                            handleCheckbox(
                                $event,
                                employee.EmployeeId,
                                employee.EmployeeCode
                            )
                        "
                        ref="checkbox"
                    ></MCheckbox>
                </td>
                <td class="text-align-left">{{ employee?.EmployeeCode }}</td>
                <td class="text-align-left">{{ employee?.FullName }}</td>
                <td class="text-align-left" style="min-width: 200px">
                    {{ formatGender(employee?.Gender) }}
                </td>
                <td class="text-align-center">
                    {{ formatDate(employee?.DateOfBirth) }}
                </td>
                <td class="text-align-left">{{ employee?.IdentityNumber }}</td>
                <td class="text-align-left">{{ employee?.PositionName }}</td>
                <td class="text-align-left">{{ employee?.DepartmentName }}</td>
                <td class="text-align-left">{{ employee?.BankAccount }}</td>
                <td class="text-align-left">{{ employee?.BankName }}</td>
                <td class="text-align-left">{{ employee?.BankBranch }}</td>
                <td class="dropdown-fun text-align-center">
                    <MButton
                        kind="link"
                        className="link-btn btn-link-primary"
                        :text="$t('Fix')"
                        :click="() => doubleClickEditText(employee)"
                    ></MButton>

                    <div
                        class="input__icon-box ml-8"
                        @click="handleClickOptionMenu($event, employee)"
                        ref="iconContextMenu"
                    >
                        <div class="icon-dropdown" ref="ContextMenu"></div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

    <Mcontextmenu
        v-if="isContextMenu"
        :left="leftContextMenu"
        :top="topContextMenu"
        @hideContextMenu="hideContextMenu"
        :employeeIdSelected="employeeIdSelected"
        :refElement="this.$refs.iconContextMenu"
        @hideShowLoading="hideShowLoading"
        @handleDeleteRow="handleDeleteRow"
        @handleDuplicateEmployee="handleDuplicateEmployee"
    ></Mcontextmenu>

    <MDialog
        v-if="isDialogWarning || isDialogDeleteMul"
        iconClass="dialog__icon-warning"
        :title="$t('DialogWarning')"
        :message="
            isDialogWarning
                ? $t('MessageWarning') +
                  employeeCodeSelected +
                  ' ' +
                  $t('TxtNo') +
                  '?'
                : $t('MessageWarningMul') + ' ' + $t('TxtNo') + '?'
        "
        :BtnWarningNo="$t('BtnDestroyDialog')"
        :textButton="$t('BtnDeleteDialog')"
        @onBtnWarningNo="onBtnWarningNo"
        @onBtnWarningYes="
            onBtnWarningYes(
                isDialogWarning ? 'isDialogWarning' : 'isDialogDeleteMul'
            )
        "
        kind="warning"
    ></MDialog>
</template>
<script>
import axios from "axios";
import MISAResouce from "@/js/resource";
import MISAEnum from "@/js/enum";
import Mcontextmenu from "../base/Mcontextmenu.vue";
import moment from "moment";
export default {
    name: "TheTable",

    props: {
        selectedCheckbox: {
            type: Array,
        },
        pageSizeNumber: {
            type: String,
        },
        pageCurrent: {
            type: String,
        },
        keyWordSearch: {
            type: String,
        },
        isReload: {
            type: String,
        },
        isDialogDeleteMultiple: {
            type: Boolean,
        },

        selectedEmployeeIds: {
            type: Array,
        },
        isDeleteOne: {
            type: Boolean,
        },
    },

    data() {
        return {
            employees: [],
            MISAResouce,
            pageSize: 20,
            pageNumber: 1,
            selectedAll: false,
            isContextMenu: false,
            leftContextMenu: "",
            topContextMenu: "",
            employeeIdSelected: "",
            employeeCodeSelected: "",
            isDialogWarning: false,
            oldCheckedArr: [],
            totalRecord: 0,
            keyWord: "",
            isDialogDeleteMul: false,
        };
    },

    components: {
        Mcontextmenu,
    },

    /**
     * Thực hiện lấy dữ liệu khi chuẩn bị mounted vào DOM
     * Author: KienNT (02/03/2023)
     */
    created() {
        try {
            this.loadData();
        } catch (error) {
            console.log(error);
        }
    },

    computed: {
        /**
         * Hàm thực hiện format date
         * Author: KienNT (02/03/2023)
         * @param (value): tham số là chuỗi date cần format
         */
        formatDate() {
            return (dateTime) => {
                try {
                    return dateTime
                        ? moment(dateTime).format("DD/MM/YYYY")
                        : null;
                } catch (error) {
                    console.log(error);
                }
            };
        },
    },

    watch: {
        /**
         * Theo dõi sự thay đổi isDialogDeleteMultiple. khi click vào xóa nhiều
         * Author: KienNT (20/03/2023)
         */
        isDialogDeleteMultiple: function () {
            this.isDialogDeleteMul = this.isDialogDeleteMultiple;
        },
        /**
         * Theo dõi sự thay đổi keyWordSearch. tìm kiếm thay đổi
         * Author: KienNT (17/03/2023)
         */
        keyWordSearch: function () {
            this.keyWord = this.keyWordSearch;
            this.pageNumber = 1;
            this.loadData();
        },
        /**
         * Theo dõi sự thay đổi pageSizeNumber. nếu pagesize thay đổi
         * Author: KienNT (17/03/2023)
         */
        pageSizeNumber: function () {
            this.pageSize = this.pageSizeNumber;
            if (this.pageNumber == 1) {
                this.loadData();
            }
        },

        /**
         * Theo dõi sự thay đổi pageCurrent. khi click vào btn next
         * Author: KienNT (17/03/2023)
         */

        pageCurrent: function () {
            this.pageNumber = this.pageCurrent;
            this.loadData();
        },

        /**
         * Theo dõi sự thay đổi isReload: nếu thay đổi là true thì reload lại trang
         * Author: KienNT (17/03/2023)
         */
        isReload: function (newValue) {
            if (newValue) {
                this.$emit("setIsReLoad");
                this.loadData();
            }
        },

        /**
         * Theo dõi sự thay đổi selectedCheckbox. nếu mảng rỗng thì cho các checkbox = false,...
         * Author: KienNT (15/03/2023)
         */
        selectedCheckbox: function () {
            if (this.selectedCheckbox <= 0) {
                this.employees = this.employees.map((x) => {
                    x.Selected = false;
                    return x;
                });
                this.oldCheckedArr = [];
                this.selectedAll = false;
            }
        },

        isDeleteOne: function () {
            if (this.isDeleteOne === true) {
                this.employeeIdSelected = this.selectedCheckbox[0];
                this.handleDeleteRow();
            }
        },
    },

    methods: {
        /**
         * Call API get data
         * Author: KienNT (17/03/2023)
         */
        loadData() {
            try {
                axios
                    .get(
                        `https://localhost:7153/api/v1/Employees/Filter?keyword=${this.keyWord}&pageSize=${this.pageSize}&pageNumber=${this.pageNumber}`
                    )
                    .then(this.hideShowLoading(true))
                    .then((response) => {
                        this.employees = response?.data?.Data?.Data;
                        this.totalRecord = response?.data?.Data?.TotalRecord;
                        this.$emit("getTotalRecord", this.totalRecord);
                        this.employees = this.employees.map((x) => {
                            x.Selected = false;
                            return x;
                        });
                        if (this.oldCheckedArr.length > 0) {
                            this.employees.forEach((el) => {
                                for (
                                    let index = 0;
                                    index < this.oldCheckedArr.length;
                                    index++
                                ) {
                                    const oldElement =
                                        this.oldCheckedArr[index];
                                    if (
                                        el.EmployeeId === oldElement &&
                                        el.Selected === false
                                    ) {
                                        el.Selected = true;
                                        break;
                                    }
                                }
                            });
                        }

                        if (
                            this.employees.length > 0 &&
                            this.employees.every((el) => el.Selected === true)
                        ) {
                            this.selectedAll = true;
                        } else {
                            this.selectedAll = false;
                        }
                        this.hideShowLoading(false);
                    })
                    .catch((error) => {
                        console.log(error);
                        this.hideShowLoading(false);
                    });
            } catch (error) {
                console.log(error);
                this.hideShowLoading(false);
            }
        },

        /**
         * Xử lý loading gửi emit lên cha
         * Author: KienNT (07/03/2023)
         * @param (isLoading): tham số là giá trị boolean loading có hay không
         */
        hideShowLoading(isLoading) {
            this.$emit("hideShowLoading", isLoading);
        },

        /**
         * Xử lý khi click vào select item
         * Author: KienNT (06/03/2023)
         *   @param (event): là event
         */
        handleCheckbox(event, EmployeeId, EmployeeCode = "") {
            this.employeeCodeSelected = EmployeeCode;
            const index = this.oldCheckedArr.indexOf(EmployeeId);
            if (!event.target.checked) {
                this.selectedAll = event.target.checked;
                if (index !== -1) {
                    this.oldCheckedArr.splice(index, 1);
                }
            } else {
                if (index === -1) {
                    this.oldCheckedArr.push(EmployeeId);
                }
            }
            this.$emit("handleSelectChechbox", this.oldCheckedArr);
            const filterSelected = this.employees.filter((item) =>
                this.oldCheckedArr.includes(item.EmployeeId)
            );
            if (filterSelected.length >= this.employees.length) {
                this.selectedAll = true;
            } else {
                this.selectedAll = false;
            }
        },
        /**
         * Xử lý khi click vào select all
         * Author: KienNT (06/03/2023)
         *  @param (event): là event
         */
        handleCheckboxAll(event) {
            try {
                if (event.target.checked) {
                    this.employees.forEach((el) => {
                        const index = this.oldCheckedArr.indexOf(el.EmployeeId);
                        if (index === -1) {
                            this.oldCheckedArr.push(el.EmployeeId);
                        }
                    });
                } else {
                    const filterSelected = this.employees.filter(
                        (el) => el.Selected === true
                    );
                    const cloneFilterSelected = filterSelected.map(
                        (el) => el.EmployeeId
                    );
                    this.oldCheckedArr = this.oldCheckedArr.filter(
                        (item) => !cloneFilterSelected.includes(item)
                    );
                }
                this.$emit("handleSelectChechbox", this.oldCheckedArr);
                this.employees = this.employees.map((x) => {
                    x.Selected = event.target.checked;
                    return x;
                });
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm hiển thị dialog có muốn xóa nhân viên không?
         * Author: KienNT (07/03/2023)
         */
        handleDeleteRow() {
            try {
                if (this.employeeIdSelected) {
                    this.isDialogWarning = true;
                    this.$emit("setIsDeleteOne");
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm lấy được id của employee chọn
         * Author: KienNT (28/03/2023)
         */
        handleDuplicateEmployee() {
            try {
                if (this.employeeIdSelected) {
                    this.$emit(
                        "showPopupDuplicate",
                        MISAEnum.formMode.Duplicate,
                        this.employeeIdSelected
                    );
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm xóa nhân viên khi click có xóa
         * Author: KienNT (07/03/2023)
         */
        onBtnWarningYes(isDialogValue) {
            try {
                // TH xoá 1 nhân viên
                if (isDialogValue === "isDialogWarning") {
                    axios
                        .delete(
                            `https://localhost:7153/api/v1/Employees/${this.employeeIdSelected}`
                        )
                        .then(this.hideShowLoading(true))
                        .then((res) => {
                            console.log(res);
                            this.isDialogWarning = false;
                            const index = this.oldCheckedArr.indexOf(
                                this.employeeIdSelected
                            );
                            if (index !== -1) {
                                this.oldCheckedArr.splice(index, 1);
                            }
                            this.$emit(
                                "handleSelectChechbox",
                                this.oldCheckedArr
                            );
                            this.hideShowLoading(false);
                            this.$emit("hideShowToast", "delete");
                            this.$emit("handleReLoadData");
                        })
                        .catch((error) => {
                            console.log(error);
                            this.hideShowLoading(false);
                        });
                } else {
                    // Xóa nhiều nhân viên
                    axios
                        .delete(
                            "https://localhost:7153/api/v1/Employees/DeleteMultiple",
                            {
                                data: this.selectedEmployeeIds,
                            }
                        )
                        .then(this.hideShowLoading(true))
                        .then((res) => {
                            console.log(res);
                            this.isDialogDeleteMul = false;
                            this.oldCheckedArr = [];
                            this.$emit(
                                "handleSelectChechbox",
                                this.oldCheckedArr
                            );
                            this.$emit("setIsDialogDeleteMuliple");
                            this.hideShowLoading(false);
                            this.$emit("hideShowToast", "delete");
                            this.$emit("handleReLoadData");
                        })
                        .catch((error) => {
                            console.log(error);
                            this.hideShowLoading(false);
                        });
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm xóa dilog đi nếu ko muốn xóa nhân viên
         * Author: KienNT (07/03/2023)
         */
        onBtnWarningNo() {
            try {
                this.isDialogWarning
                    ? (this.isDialogWarning = false)
                    : this.$emit("setIsDialogDeleteMul");
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm thực hiện format gender
         * Author: KienNT (02/03/2023)
         *  @param (gender): là số cần truyền convert sang text
         */
        formatGender(gender) {
            try {
                if (gender === MISAEnum.Gender.Male) {
                    return this.$t("LabelMale");
                } else if (gender === MISAEnum.Gender.Female) {
                    return this.$t("LabelFemale");
                } else if (gender === MISAEnum.Gender.Other) {
                    return this.$t("LabelOther");
                }
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Hàm gửi emit lên cha để lấy id employee, TH double click
         * Author: KienNT (04/03/2023)
         *  @param (employee): Tham số là object chứa thông tin nhân viên
         */
        doubleClickRow(event, employee) {
            // Bỏ handleClickRow với icon ContextMenu và checkbox khi db click
            const arrIconContextMenu = this.$refs["iconContextMenu"];
            const iconContextMenu = this.$refs["ContextMenu"];
            const checkboxs = this.$refs["checkbox"];
            for (let index = 0; index < arrIconContextMenu.length; index++) {
                if (
                    !event.target.isEqualNode(arrIconContextMenu[index]) &&
                    !event.target.isEqualNode(iconContextMenu[index]) &&
                    !event.target.isEqualNode(checkboxs[index].$el.firstChild)
                ) {
                    this.$emit("onDoubleClick", employee);
                }
            }
        },

        /**
         * Hàm gửi emit lên cha để lấy id employee, TH click btn sửa
         * Author: KienNT (04/03/2023)
         */
        doubleClickEditText(employee) {
            this.$emit("onDoubleClick", employee);
        },

        /**
         * Hàm lấy toại độ sau đó set tọa độ cho contextmenu để hiển thị
         * Author: KienNT (04/03/2023)
         *  @param (event,employee): tham số 1 là event, tham số 2 là thông tin của 1 nhân viên
         */
        handleClickOptionMenu(event, employee) {
            try {
                this.employeeIdSelected = employee.EmployeeId;
                this.employeeCodeSelected = employee.EmployeeCode;
                this.isContextMenu = !this.isContextMenu;
                this.leftContextMenu =
                    event.target.getBoundingClientRect().x -
                    MISAEnum.getbounding.x;
                this.topContextMenu =
                    event.target.getBoundingClientRect().y +
                    MISAEnum.getbounding.y;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm ẩn contextmenu khi click ra ngoài element
         * Author: KienNT (04/03/2023)
         */
        hideContextMenu() {
            this.isContextMenu = !this.isContextMenu;
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/table.css);
</style>
