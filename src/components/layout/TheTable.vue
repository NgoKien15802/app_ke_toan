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
                <th class="text-align-center">
                    {{ MISAResouce.vi.EmployeeCode }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.EmployeeName }}
                </th>
                <th class="text-align-center" style="min-width: 200px">
                    {{ MISAResouce.vi.Gender }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.DateOfBirth }}
                </th>
                <th class="text-align-center">
                    <Thetooltip
                        kind="title"
                        :text="MISAResouce.vi.IdentityNumber"
                        :subtext="MISAResouce.vi.TooltipIdentityNumber"
                    ></Thetooltip>
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.JobTitle }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.DepartmentName }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.AccountNumber }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.BankName }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.BankAddress }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.Freature }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(employee, index) in employees"
                :key="index"
                @dblclick="() => doubleClickRow(employee)"
            >
                <td class="text-align-center">
                    <MCheckbox
                        v-model="employee.Selected"
                        :initValue="employee.Selected"
                        @handleCheckbox="handleCheckbox"
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
                        :text="MISAResouce.vi.Fix"
                        :click="() => doubleClickRow(employee)"
                    ></MButton>

                    <div
                        class="input__icon-box ml-8"
                        @click="handleClickOptionMenu($event, employee)"
                        ref="iconContextMenu"
                    >
                        <div class="icon-dropdown"></div>
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
    ></Mcontextmenu>

    <MDialog
        v-if="isDialogWarning"
        iconClass="dialog__icon-warning"
        :title="MISAResouce.vi.DialogWarning"
        :message="
            MISAResouce.vi.MessageWarning +
            employeeCodeSelected +
            ' ' +
            MISAResouce.vi.BtnNo +
            '?'
        "
        :BtnWarningNo="MISAResouce.vi.BtnDestroyDialog"
        :textButton="MISAResouce.vi.BtnDeleteDialog"
        @onBtnWarningNo="onBtnWarningNo"
        @onBtnWarningYes="onBtnWarningYes"
        kind="warning"
    ></MDialog>
</template>
<script>
import axios from "axios";
import MISAResouce from "@/js/resource";
import Thetooltip from "../base/Mtooltip.vue";
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
            isCheckedArr: [],
            totalRecord: 0,
            keyWord: "",
        };
    },

    components: {
        Thetooltip,
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
                this.pageNumber = 1;
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
                this.isCheckedArr = [];
                this.selectedAll = false;
            }
        },

        /**
         * Theo dõi sự thay đổi employees sau đó lọc các checkbox checked
         * Author: KienNT (15/03/2023)
         * @param (newValue): employees mới
         */
        employees: {
            handler: function (newValue) {
                try {
                    this.isCheckedArr = newValue.filter((el) => {
                        return el.Selected === true;
                    });
                    this.$emit("handleSelectChechbox", this.isCheckedArr);
                } catch (error) {
                    console.log(error);
                }
            },
            deep: true,
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
                        this.employees = response?.data?.Data;
                        this.totalRecord = response?.data?.TotalRecord;
                        this.$emit("getTotalRecord", this.totalRecord);
                        this.employees = this.employees.map((x) => {
                            x.Selected = false;
                            return x;
                        });
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
        handleCheckbox(event) {
            if (!event.target.checked) {
                this.selectedAll = event.target.checked;
            }
        },
        /**
         * Xử lý khi click vào select all
         * Author: KienNT (06/03/2023)
         *  @param (event): là event
         */
        handleCheckboxAll(event) {
            try {
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
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm xóa nhân viên khi click có xóa
         * Author: KienNT (07/03/2023)
         */
        onBtnWarningYes() {
            try {
                axios
                    .delete(
                        `https://localhost:7153/api/v1/Employees/${this.employeeIdSelected}`
                    )
                    .then(this.hideShowLoading(true))
                    .then((res) => {
                        console.log(res);
                        this.isDialogWarning = false;
                        this.hideShowLoading(false);
                        this.$emit("hideShowToast", "delete");
                        this.$emit("handleReLoadData");
                    })
                    .catch((error) => {
                        console.log(error);
                        this.hideShowLoading(false);
                    });
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
                this.isDialogWarning = false;
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
                    return "Nam";
                } else if (gender === MISAEnum.Gender.Female) {
                    return "Nữ";
                } else if (gender === MISAEnum.Gender.Other) {
                    return "Khác";
                }
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Hàm gửi emit lên cha để lấy id employee
         * Author: KienNT (04/03/2023)
         *  @param (employee): Tham số là object chứa thông tin nhân viên
         */
        doubleClickRow(employee) {
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
                    event.target.getBoundingClientRect().x - 70;
                this.topContextMenu =
                    event.target.getBoundingClientRect().y + 25;
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
