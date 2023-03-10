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
                <td class="text-align-left"></td>
                <td class="text-align-left"></td>
                <td class="text-align-left"></td>
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
            MISAResouce.vi.MessageWarning + employeeCodeSelected + ' không?'
        "
        :BtnWarningNo="MISAResouce.vi.BtnNo"
        :textButton="MISAResouce.vi.BtnYes"
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

    data() {
        return {
            employees: [],
            MISAResouce,
            pageSize: 20,
            pageIndex: 1,
            selectedAll: false,
            isContextMenu: false,
            leftContextMenu: "",
            topContextMenu: "",
            employeeIdSelected: "",
            employeeCodeSelected: "",
            isDialogWarning: false,
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
            axios
                .get("https://apidemo.laptrinhweb.edu.vn/api/v1/Employees")
                .then(this.hideShowLoading(true))
                .then((response) => {
                    this.employees = response.data;
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
                    return moment(dateTime).format("DD/MM/YYYY");
                } catch (error) {
                    console.log(error);
                }
            };
        },
    },

    methods: {
        /**
         * Xử lý loading gửi emit lên cha
         * Author: KienNT (07/03/2023)
         */
        hideShowLoading(isLoading) {
            this.$emit("hideShowLoading", isLoading);
        },
        /**
         * Xử lý khi click vào select item
         * Author: KienNT (06/03/2023)
         */
        handleCheckbox(event) {
            this.selectedAll = event.target.checked;
        },
        /**
         * Xử lý khi click vào select all
         * Author: KienNT (06/03/2023)
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
                        `https://apidemo.laptrinhweb.edu.vn/api/v1/Employees/${this.employeeIdSelected}`
                    )
                    .then(this.hideShowLoading(true))
                    .then((res) => {
                        console.log(res);
                        alert("sccuess");
                        this.isDialogWarning = false;
                    })
                    .then(this.hideShowLoading(false))
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
         */
        formatGender(gender) {
            if (gender === MISAEnum.Gender.Male) {
                return "Nam";
            } else if (gender === MISAEnum.Gender.Female) {
                return "Nữ";
            } else if (gender === MISAEnum.Gender.Other) {
                return "Khác";
            }
        },
        /**
         * Hàm gửi emit lên cha để lấy id employee
         * Author: KienNT (04/03/2023)
         */
        doubleClickRow(employee) {
            this.$emit("onDoubleClick", employee);
        },

        /**
         * Hàm lấy toại độ sau đó set tọa độ cho contextmenu để hiển thị
         * Author: KienNT (04/03/2023)
         */
        handleClickOptionMenu(event, employee) {
            this.employeeIdSelected = employee.EmployeeId;
            this.employeeCodeSelected = employee.EmployeeCode;
            this.isContextMenu = !this.isContextMenu;
            this.leftContextMenu = event.target.getBoundingClientRect().x - 70;
            this.topContextMenu = event.target.getBoundingClientRect().y + 25;
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
