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
                @dblclick="doubleClickRow(employee)"
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
                    ></MButton>

                    <div
                        class="input__icon-box ml-8"
                        @click="handleClickOptionMenu($event)"
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
        :refElement="this.$refs.iconContextMenu"
    ></Mcontextmenu>
</template>
<script>
import axios from "axios";
import MISAResouce from "@/js/resource";
import Thetooltip from "../base/Mtooltip.vue";
import MISAEnum from "@/js/enum";
import Mcontextmenu from "../base/Mcontextmenu.vue";
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
                .then(this.$emit("hideShowLoading", true))
                .then((response) => {
                    this.employees = response.data;
                    this.employees = this.employees.map((x) => {
                        x.Selected = false;
                        return x;
                    });
                    this.$emit("hideShowLoading", false);
                })
                .catch((error) => {
                    console.log(error);
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
                    if (dateTime) {
                        const date = new Date(dateTime);
                        const day =
                            date.getDate() < 10
                                ? `0${date.getDate()}`
                                : date.getDate();
                        const month =
                            date.getMonth() + 1 < 10
                                ? `0${date.getMonth()}`
                                : date.getMonth();
                        const year = date.getFullYear();
                        return `${day}/${month}/${year}`;
                    }
                    return "";
                } catch (error) {
                    console.log(error);
                }
            };
        },
    },

    methods: {
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
            this.employees = this.employees.map((x) => {
                x.Selected = event.target.checked;
                return x;
            });
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
            } else {
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
        handleClickOptionMenu(event) {
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
