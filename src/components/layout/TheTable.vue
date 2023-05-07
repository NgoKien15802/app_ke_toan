<template>
    <table id="tbEmployeeList" class="employee" ref="gridTable">
        <thead>
            <draggable tag="tr" v-model="headers" class="table__field">
                <th
                    v-for="header in headers"
                    :key="header"
                    :scope="header === 'Selected' ? 'col' : null"
                    :class="[
                        header !== 'DateOfBirth' && header !== 'Feature'
                            ? 'text-align-left'
                            : '',
                        header === 'EmployeeCode' ? 'min-w160' : '',
                        header === 'FullName' ? 'min-w250' : '',
                        header === 'Gender' ? 'min-w100' : '',
                        header === 'DateOfBirth' ? 'min-w160' : '',
                        header === 'IdentityNumber' ? 'min-w200' : '',
                        header === 'PositionName' ? 'min-w160' : '',
                        header === 'DepartmentName' ? 'min-w200' : '',
                        header === 'BankAccount' ? 'min-w160' : '',
                        header === 'BankName' ? 'min-w160' : '',
                        header === 'BankBranch' ? 'min-w350' : '',
                        header === 'Feature' ? 'min-w120' : '',
                        header === 'Selected' ? 'min-w40' : '',
                    ]"
                    ref="thElement"
                    :style="
                        !isShowSkeleton
                            ? {
                                  'min-width':
                                      columnWidth.length > 0
                                          ? columnWidth.filter(
                                                (el) => el.textColumn == header
                                            )[0][header] + 'px'
                                          : '',
                              }
                            : ''
                    "
                >
                    <template v-if="header === 'Selected'">
                        <MCheckbox
                            v-model="selectedAll"
                            @handleCheckbox="handleCheckboxAll"
                            :initValue="selectedAll"
                        ></MCheckbox>
                    </template>

                    <template v-else-if="header === 'DateOfBirth'">
                        <span style="display: flex">
                            <span
                                style="margin: 0 auto"
                                class="text-align-center"
                                >{{ $t("DateOfBirth") }}</span
                            >
                            <div
                                class="mi-16 icon-head mi-header-option"
                                @click="
                                    handleShowConditionFilter($event, header)
                                "
                                ref="iconConditionFilter"
                            ></div
                        ></span>
                    </template>

                    <template v-else-if="header === 'IdentityNumber'">
                        <span class="text-align-left" style="display: flex">
                            <MTooltip
                                kind="title"
                                :text="$t('IdentityNumber')"
                                :subtext="$t('TooltipIdentityNumber')"
                            ></MTooltip>
                            <div
                                class="mi-16 icon-head mi-header-option"
                                @click="
                                    handleShowConditionFilter($event, header)
                                "
                                ref="iconConditionFilter"
                            ></div>
                        </span>
                    </template>
                    <template v-else-if="header === 'Feature'">
                        <span class="text-align-center"
                            >{{ $t("Feature") }}
                        </span>
                    </template>
                    <template v-else>
                        <span style="display: flex">
                            <span class="text-align-left">{{
                                $t(header)
                            }}</span>
                            <div
                                class="mi-16 icon-head mi-header-option"
                                @click="
                                    handleShowConditionFilter($event, header)
                                "
                                ref="iconConditionFilter"
                            ></div>
                        </span>
                    </template>
                </th>
            </draggable>
        </thead>
        <tbody>
            <MSkeletonTable
                v-if="isShowSkeleton"
                :dataList="employees"
            ></MSkeletonTable>

            <tr
                v-else
                v-for="(employee, index) in employees"
                :key="index"
                @dblclick="($event) => doubleClickRow($event, employee)"
                :class="employee?.Selected ? 'tr-hover' : ''"
                @click="handleActiveRow($event)"
                ref="trElementRef"
            >
                <template v-for="header in headers" :key="header">
                    <td
                        v-if="header === 'Selected'"
                        class="text-align-center min-w40"
                        :class="employee?.Selected ? 'tr-hover' : ''"
                    >
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
                    <td
                        v-else-if="header === 'Feature'"
                        class="dropdown-fun text-align-center min-w120"
                        :class="employee?.Selected ? 'tr-hover' : ''"
                    >
                        <MButton
                            kind="link"
                            className="link-btn btn-link"
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

                    <MTooltip
                        v-else-if="header === 'Gender'"
                        kind="data"
                        :class="
                            employee?.Selected
                                ? 'tr-hover text-align-left min-w100'
                                : 'text-align-left min-w100'
                        "
                        :text="formatGender(employee?.Gender) || ''"
                        :subtext="formatGender(employee?.Gender) || ''"
                    ></MTooltip>

                    <MTooltip
                        v-else-if="header === 'DateOfBirth'"
                        kind="data"
                        :class="
                            employee?.Selected
                                ? 'tr-hover text-align-center min-w160'
                                : 'text-align-center min-w160'
                        "
                        :text="formatDate(employee?.DateOfBirth) || ''"
                        :subtext="formatDate(employee?.DateOfBirth) || ''"
                    ></MTooltip>

                    <MTooltip
                        v-else
                        kind="data"
                        :className="[
                            employee?.Selected ? 'tr-hover' : '',
                            header === 'EmployeeCode' ? 'min-w160' : '',
                            header === 'FullName' ? 'min-w160' : '',
                            header === 'IdentityNumber' ? 'min-w200' : '',
                            header === 'PositionName' ? 'min-w160' : '',
                            header === 'DepartmentName' ? 'min-w200' : '',
                            header === 'BankAccount' ? 'min-w160' : '',
                            header === 'BankName' ? 'min-w160' : '',
                            header === 'BankBranch' ? 'min-w350' : '',
                        ]"
                        :text="employee[header] || ''"
                        :subtext="employee[header] || ''"
                    ></MTooltip>
                </template>
            </tr>
        </tbody>
    </table>
    <MNotData v-if="employees.length <= 0 && !isShowSkeleton"></MNotData>
    <MContextmenu
        v-if="isContextMenu"
        :left="leftContextMenu"
        :top="topContextMenu"
        @hideContextMenu="hideContextMenu"
        :employeeIdSelected="employeeIdSelected"
        :refElement="this.$refs.iconContextMenu"
        @hideShowLoading="hideShowLoading"
        @handleDeleteRow="handleDeleteRow"
        @handleDuplicateEmployee="handleDuplicateEmployee"
    ></MContextmenu>

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
        :textButton="$t('BtnYes')"
        @onBtnWarningNo="onBtnWarningNo"
        @onBtnWarningYes="
            onBtnWarningYes(
                isDialogWarning ? 'isDialogWarning' : 'isDialogDeleteMul'
            )
        "
        kind="warning"
    ></MDialog>

    <MconditionFilter
        v-if="isConditionFilter"
        :top="topConditionFilter"
        :left="leftConditionFilter"
        :filterConditon="filterConditon"
        :header="header"
        :refElement="this.$refs.iconConditionFilter"
        @handleHideConditionFilter="handleHideConditionFilter"
        @handleClickFilter="handleClickFilter"
        :filterConditonArrs="filterConditonArr"
    ></MconditionFilter>
</template>
<script>
import axios from "axios";
import MISAResouce from "@/js/resource";
import MISAEnum from "@/js/enum";
import moment from "moment";
import { VueDraggableNext } from "vue-draggable-next";

export default {
    name: "TheTable",
    display: "Table Column",
    components: {
        draggable: VueDraggableNext,
    },
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
        selectedArrToSetting: {
            type: Array,
        },

        columnEditable: {
            type: Array,
        },

        filterConditonArr: {
            type: Array,
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
            headers: [
                "Selected",
                "EmployeeCode",
                "FullName",
                "Gender",
                "DateOfBirth",
                "IdentityNumber",
                "PositionName",
                "DepartmentName",
                "BankAccount",
                "BankName",
                "BankBranch",
                "Feature",
            ],
            columnWidth: [],
            isShowSkeleton: false,
            topConditionFilter: 0,
            leftConditionFilter: 0,
            isConditionFilter: false,
            myInput: null,
            filterConditon: "",
            header: "",
            selectedArrToSettingUI: [],
            cloneHeader: [],
            conditionFilters: "{}",
            conditionFilterArr: [],
        };
    },

    /**
     * Thực hiện lấy dữ liệu khi chuẩn bị mounted vào DOM
     * Author: KienNT (02/03/2023)
     */
    created() {
        try {
            this.employees = new Array(5).fill(0);
            this.cloneHeader = this.headers;
            this.$emit("changeSelectedArrToSetting");
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
                this.loadData();
                this.$emit("setIsReLoad");
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

        selectedArrToSetting: {
            handler(newValue, oldValue) {
                if (newValue.length !== oldValue.length) {
                    this.selectedArrToSettingUI = newValue;
                    // Lấy phần tử từ thứ 2 đến phần tử kế cuối của headers

                    let filteredHeaders = this.cloneHeader
                        .slice(1, -1)
                        .filter((el) => {
                            return this.selectedArrToSettingUI.includes(el);
                        });
                    // Thêm hai phần tử đầu và cuối vào kết quả lọc
                    filteredHeaders = [
                        this.cloneHeader[0],
                        ...filteredHeaders,
                        this.cloneHeader[this.cloneHeader.length - 1],
                    ];
                    this.isShowSkeleton = true;
                    const cloneEmployees = this.employees;
                    this.employees = new Array(10).fill(0);
                    setTimeout(() => {
                        this.employees = cloneEmployees;
                        this.headers = filteredHeaders;
                        this.isShowSkeleton = false;
                        console.log(this.columnWidth);
                    }, 2000);
                }
            },
            deep: true,
        },

        columnEditable: {
            handler(newValue, oldValue) {
                if (newValue.length !== oldValue.length) {
                    this.columnWidth = newValue;
                    this.columnWidth.unshift({
                        Selected: 40,
                        nameCoumn: this.$t("Selected"),
                        textColumn: "Selected",
                    });
                    this.columnWidth.push({
                        Feature: 120,
                        nameCoumn: this.$t("Feature"),
                        textColumn: "Feature",
                    });
                }
            },
            deep: true,
        },

        conditionFilterArr: {
            handler(newValue) {
                let filterObject = newValue.reduce((acc, el) => {
                    return { ...acc, ...el[Object.keys(el)[0]] };
                }, {});
                filterObject = `'${JSON.stringify(filterObject)}'`;
                this.conditionFilters = filterObject || "{}";
                this.loadData();
            },
            deep: true,
        },

        filterConditonArr: {
            handler(newValue) {
                this.conditionFilterArr = newValue;
            },
            deep: true,
        },

        headers: {
            handler() {},
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
                        `https://localhost:7153/api/v1/Employees/Filter?keyword=${this.keyWord}&pageSize=${this.pageSize}&conditionFilters=${this.conditionFilters}&pageNumber=${this.pageNumber}`
                    )
                    .then((this.isShowSkeleton = true))
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
                        this.isShowSkeleton = false;
                    })
                    .catch((error) => {
                        console.log(error);
                        this.isShowSkeleton = false;
                    });
            } catch (error) {
                console.log(error);
                this.isShowSkeleton = false;
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
         * Xử lý gửi mảng filter condition lên cha
         * Author: KienNT (28/04/2023)
         * @param (filterConditonArr): tham số là mảng text condition filter
         */
        handleClickFilter(filterConditonArr) {
            this.conditionFilterArr = filterConditonArr;
            this.$emit("handleClickFilter", filterConditonArr);
        },

        /**
         * xử lý hiển thị Condition filter
         * Author: KienNT (28/04/2023)
         * @param (event): là event
         */
        handleShowConditionFilter(event, header) {
            this.header = header;
            this.filterConditon = this.$t(header).toLocaleLowerCase();
            this.isConditionFilter = !this.isConditionFilter;
            this.leftConditionFilter =
                event.target.getBoundingClientRect().left;
            this.topConditionFilter = event.target.getBoundingClientRect().top;
        },

        /**
         * Bắt sự kiện ẩn condition Filter
         * Author: KienNT (28/04/2023)
         */
        handleHideConditionFilter() {
            this.isConditionFilter = false;
        },

        /**
         * Xử lý khi click vào hàng
         * Author: KienNT (27/03/2023)

         */
        handleActiveRow(event) {
            const trElements = this.$refs["trElementRef"];
            for (let index = 0; index < trElements.length; index++) {
                const element = trElements[index];
                const isChecked =
                    element.firstElementChild.firstElementChild
                        .firstElementChild.checked;
                let children = element.childNodes;
                for (const node of children) {
                    if (node.tagName && node.tagName.toLowerCase() === "td") {
                        if (node.classList.contains("tr-hover") && !isChecked) {
                            node.classList.remove("tr-hover");
                            element.classList.remove("tr-hover");
                        }
                    }
                }
            }
            const trElement = event.target.parentNode;
            if (trElement.hasChildNodes()) {
                let children = trElement.childNodes;

                for (const node of children) {
                    if (node.tagName && node.tagName.toLowerCase() === "td") {
                        node.classList.add("tr-hover");
                    }
                }
            }
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
                            this.loadData();
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
                            this.loadData();
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

th.resizable {
    position: relative;
}

th.resizable::after {
    content: "";
    position: absolute;
    top: 0;
    right: -5px;
    width: 10px;
    height: 100%;
    cursor: col-resize;
    z-index: 999;
}
</style>
