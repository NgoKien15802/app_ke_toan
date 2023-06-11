<template>
    <div
        class="input__wrapper-combobox combobox dropdown-popup-wrapper"
        :class="{
            'input__wrapper-combobox-focus': isFocus,
            'input-required': isShowTooltip,
        }"
        :style="style"
    >
        <button
            class="input__icon btn-combobox popup__combobox-icon"
            ref="btnIconCombobox"
            @click="($event) => handleClickIcon($event)"
            :class="isDisabled ? 'disabledDopdown' : ''"
        >
            <div class="input__icon-dropdown" ref="iconCombobox"></div>
        </button>
        <input
            :tabindex="tabindex"
            type="text"
            name="generalAccount"
            id="generalAccount"
            style="border: none"
            @keydown="
                ($event) =>
                    !isLoading && dataTable.length > 0 && handleKeyDown($event)
            "
            @focus="handleFocusInput"
            @blur="handleBlurInput"
            @input="handleOnInput"
            v-model="record"
            class="input__type combobox-input input--required reset-input"
            autocomplete="off"
            ref="departmentInput"
             :class="isDisabled ? 'disabledDopdown' : ''"
        />

        <div
            class="option__wrapper-combobox"
            ref="optionWrapperCombobox"
            @mouseover="handleMountOver"
            @mouseout="handleMountOut"
            :class="
                kind === 'generalAccount'
                    ? 'w-400'
                    : kind === 'supplierCode'
                    ? 'w-1000'
                    : kind === 'employee'
                    ? 'w-711'
                    : ''
            "
            :style="styleTranX"
        >
            <ul class="option__list-combobox">
                <table
                    id="tbEmployeeList"
                    v-if="kind === 'generalAccount'"
                    class="employee"
                    ref="gridTable"
                >
                    <thead>
                        <draggable tag="tr" v-model="headers" class="">
                            <div
                                v-for="header in headers"
                                :key="header"
                                :class="[
                                    header === 'account_number'
                                        ? 'min-w150'
                                        : '',
                                    header === 'account_name' ? 'min-w240' : '',
                                ]"
                                ref="thElement"
                            >
                                <span style="display: flex">
                                    <span class="text-align-left">{{
                                        $t(header)
                                    }}</span>
                                </span>
                            </div>
                        </draggable>
                    </thead>
                    <tbody :style="isLoading ? 'height: 28px;' : ''">
                        <MLoadingCombobox v-if="isLoading"></MLoadingCombobox>
                        <div
                            class="no-data"
                            v-else-if="!isLoading && dataTable.length <= 0"
                        >
                            <span>{{ $t("NoData") }}</span>
                        </div>
                        <div
                            class="scroller scrollbar_customize"
                            ref="scrollElement"
                            v-show="!isLoading && dataTable.length > 0"
                        >
                            <tr
                                v-for="(account, index) in dataTable"
                                v-show="account?.isShow"
                                :key="index"
                                ref="trElementRef"
                                :class="[
                                    account?.is_parent &&
                                    kindOf !== 'debitAccount'
                                        ? 'row-parent'
                                        : '',
                                    account.isActive ? 'active' : '',
                                ]"
                                @click="() => handleClickItem(account, index)"
                            >
                                <template
                                    v-for="header in headers"
                                    :key="header"
                                >
                                    <MTooltip
                                        v-if="header === 'account_number'"
                                        kind="data_parent"
                                        :className="[
                                            header === 'account_number'
                                                ? 'min-w150'
                                                : '',
                                        ]"
                                        :paddingLeft="
                                            kindOf !== 'debitAccount' &&
                                            account.isClassML
                                        "
                                        :grade="account?.grade"
                                        :text="account[header] || ''"
                                        :subtext="account[header] || ''"
                                    >
                                    </MTooltip>

                                    <MTooltip
                                        v-else
                                        kind="data_parent"
                                        :className="[
                                            header === 'account_name'
                                                ? 'min-w240'
                                                : '',
                                        ]"
                                        :text="account[header] || ''"
                                        :subtext="account[header] || ''"
                                    ></MTooltip>
                                </template>
                            </tr>
                        </div>
                    </tbody>
                </table>

                <table
                    v-else-if="kind === 'supplierCode'"
                    ref="gridTable"
                    class="supplierCode employee"
                >
                    <thead>
                        <draggable tag="tr" v-model="headers" class="">
                            <div
                                v-for="header in headers"
                                :key="header"
                                ref="thElement"
                                :class="[
                                    header !== 'supplier_code' &&
                                    header !== 'supplier_name' &&
                                    header !== 'supplier_phone_number'
                                        ? 'min-w200'
                                        : '',
                                    header === 'supplier_name'
                                        ? 'min-w250'
                                        : '',
                                    header === 'supplier_code'
                                        ? 'min-w150'
                                        : '',

                                    header === 'supplier_phone_number'
                                        ? 'min-w190'
                                        : '',
                                ]"
                            >
                                <span class="text-align-left">{{
                                    $t(header)
                                }}</span>
                            </div>
                        </draggable>
                    </thead>
                    <tbody :style="isLoading ? 'height: 28px;' : ''">
                        <MLoadingCombobox v-if="isLoading"></MLoadingCombobox>
                        <div
                            class="no-data"
                            v-else-if="!isLoading && dataTable.length <= 0"
                        >
                            <span>{{ $t("NoData") }}</span>
                        </div>
                        <div
                            class="scroller scrollbar_customize"
                            ref="scrollElement"
                            v-show="!isLoading && dataTable.length > 0"
                        >
                            <tr
                                v-for="(supplier, index) in dataTable"
                                :key="index"
                                ref="trElementRef"
                                @click="() => handleClickItem(supplier, index)"
                                v-show="supplier?.isShow"
                                :class="[supplier.isActive ? 'active' : '']"
                            >
                                <template
                                    v-for="header in headers"
                                    :key="header"
                                >
                                    <MTooltip
                                        kind="data"
                                        kindData="supplierCode"
                                        :class="[
                                            header !== 'supplier_code' &&
                                            header !== 'supplier_name' &&
                                            header !== 'supplier_phone_number'
                                                ? 'min-w200'
                                                : '',
                                            header === 'supplier_name'
                                                ? 'min-w250'
                                                : '',
                                            header === 'supplier_code'
                                                ? 'min-w150'
                                                : '',

                                            header === 'supplier_phone_number'
                                                ? 'min-w190'
                                                : '',
                                        ]"
                                        :text="supplier[header] || ''"
                                        :subtext="supplier[header] || ''"
                                    ></MTooltip>
                                </template>
                            </tr>
                        </div>
                    </tbody>
                </table>

                <table
                    v-else-if="kind === 'employee'"
                    ref="gridTable"
                    class="supplierCode employee employeeList"
                >
                    <thead>
                        <draggable tag="tr" v-model="headers" class="">
                            <div
                                v-for="header in headers"
                                :key="header"
                                ref="thElement"
                                :class="[
                                    header !== 'department_name' &&
                                    header !== 'fullname'
                                        ? 'min-w150'
                                        : '',
                                    header === 'department_name' ||
                                    header === 'fullname'
                                        ? 'min-w200'
                                        : '',
                                ]"
                            >
                                <span class="text-align-left">{{
                                    $t(header)
                                }}</span>
                            </div>
                        </draggable>
                    </thead>
                    <tbody :style="isLoading ? 'height: 28px;' : ''">
                        <MLoadingCombobox v-if="isLoading"></MLoadingCombobox>
                        <div
                            class="no-data"
                            v-else-if="!isLoading && dataTable.length <= 0"
                        >
                            <span>{{ $t("NoData") }}</span>
                        </div>
                        <div
                            class="scroller scrollbar_customize"
                            ref="scrollElementEmployee"
                            v-show="!isLoading && dataTable.length > 0"
                        >
                            <tr
                                v-for="(employee, index) in dataTable"
                                :key="index"
                                ref="trElementRef"
                                @click="() => handleClickItem(employee, index)"
                                v-show="employee?.isShow"
                                :class="[employee.isActive ? 'active' : '']"
                            >
                                <template
                                    v-for="header in headers"
                                    :key="header"
                                >
                                    <MTooltip
                                        kindData="supplierCode"
                                        kind="data"
                                        :class="[
                                            header !== 'department_name' &&
                                            header !== 'fullname'
                                                ? 'min-w150'
                                                : '',
                                            header === 'department_name' ||
                                            header === 'fullname'
                                                ? 'min-w200'
                                                : '',
                                        ]"
                                        :text="employee[header] || ''"
                                        :subtext="employee[header] || ''"
                                    ></MTooltip>
                                </template>
                            </tr>
                        </div>
                    </tbody>
                </table>
            </ul>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import MISAEnum from "@/js/enum";
import axios from "axios";
import { VueDraggableNext } from "vue-draggable-next";
export default {
    name: "MComboboxTable",
    components: { draggable: VueDraggableNext },
    props: {
        // giá trị cần binding ra ngoài khi sử dụng component
        modelValue: [String, Number, Boolean],
        // có show tooltip ko?
        isShowTooltip: {
            type: Boolean,
            default: false,
        },
        // tabindex của input
        tabindex: {
            type: String,
        },
        recordData: {
            type: String,
        },
        data: {
            type: Array,
        },
        kind: {
            type: String,
            default: "",
        },
        btnIconCombobox: {
            type: Object,
            default: null,
        },
        optionWrapperCombobox: {
            type: Object,
            default: null,
        },
        iconCombobox: {
            type: Object,
            default: null,
        },
        scrollElement: {
            type: Object,
            default: null,
        },
        departmentInput: {
            type: Object,
            default: null,
        },
        headersData: {
            type: Array,
        },
        headersColumn: {
            type: Array,
        },
        resetData: {
            type: Boolean,
        },
        kindOf: {
            type: String,
        },
        style: {
            type: String,
        },
        styleTranX: {
            type: String,
        },
        kindAccount:{
            type:String
        },
        isDisabled: {
            type:Boolean,
            default: false,
        }
    },
    data() {
        return {
            MISAResouce,
            MISAEnum,
            dataTable: [],
            oldRecords: [],
            record: "",
            isFocus: false,
            selectedRecord: "",
            isLoading: true,
            cloneAccounts: [],
            headers: [],
            pageSize: 10,
            pageNumber: 1,
            loadPageNumber: 1,
            totalRecordParent: 0,
            totalRecord: 0,
            accountIdSort: "",
            conditionFilters: "{}",
            dataRecords: [],
        };
    },

    watch: {
        recordData: function (newValue) {
            // if (newValue) {
            //     newValue = newValue.trim();
            //     this.accountIdSort = newValue;
            //     this.dataTable = [];
            //     this.loadData();
            //     this.record =
            //         this.dataTable && this.dataTable[0]?.account_number;
            // }
            this.record = newValue;

        },
    },

    beforeUpdate() {
        if (this.record) {
            this.$emit("handleCheckEmpty", this.record, this.dataTable);
        } else {
            this.$emit("handleChangeDepartmentId");
        }
    },

    /**
     * get data
     * Author: KienNT (07/03/2023)
     */
    created() {
        try {
            this.headers = this.headersColumn;
            this.loadData();
        } catch (error) {
            console.log(error);
        }
    },

    methods: {
        loadData() {
            try {
                this.record = !this.isEmpty(this.record)
                    ? this.record.trim()
                    : "";

                if (this.kind === "supplierCode" || this.kind === "employee") {
                    axios
                        .get(
                            `https://localhost:7153/api/v1/${
                                this.kind === "supplierCode"
                                    ? "Supplier"
                                    : "Employees"
                            }/Filter?keyword=${this.record}&pageSize=${
                                this.pageSize
                            }&conditionFilters=${
                                this.conditionFilters
                            }&pageNumber=${this.pageNumber}`
                        )
                        .then(this.hideShowLoading(true))
                        .then((response) => {
                            this.dataRecords = response?.data?.Data?.Data;
                            this.totalRecord =
                                response?.data?.Data?.TotalRecord;

                            this.dataRecords = this.dataRecords.map(
                                (record) => {
                                    record.isShow = true;
                                    record.isActive = false;
                                    return record;
                                }
                            );
                            this.cloneDataRecords = this.dataRecords;
                            if (this.pageNumber == this.loadPageNumber) {
                                this.dataTable = this.cloneDataRecords;
                            } else {
                                this.dataTable.forEach((el) => {
                                    if (el.isActive === true) {
                                        el.isActive = false;
                                    }
                                });
                                this.dataTable[
                                    this.dataTable.length - 1
                                ].isActive = true;
                                this.dataTable.push(...this.dataRecords);
                                this.loadPageNumber = this.pageNumber;
                            }

                            // this.oldRecords = this.dataTable;
                            if (this.dataTable.length <= 0) {
                                this.isLoading = true;
                            } else {
                                const trElement = this.$refs.trElementRef;
                                if (trElement) {
                                    trElement.forEach((el) => {
                                        if (el.classList.contains("active")) {
                                            el.classList.remove("active");
                                        }
                                    });
                                }
                                if (this.record) {
                                    this.dataTable[0].isActive = true;
                                }
                            }
                            setTimeout(() => {
                                this.hideShowLoading(false);
                            }, 500);
                        })
                        .catch((error) => {
                            console.log(error);
                            setTimeout(() => {
                                this.hideShowLoading(false);
                            }, 500);
                        });
                } else {
                    axios
                        .get(
                            this.record === ""
                                ? `https://localhost:7153/api/v1/Accounts/FilterTable?keyword=${
                                      this.record
                                  }&pageSize=${this.pageSize}&pageNumber=${
                                      this.pageNumber
                                  }&isExpand=${true}`
                                : `https://localhost:7153/api/v1/Accounts/AccountSearchPaging?keyword=${this.record}&pageSize=${this.pageSize}&pageNumber=${this.pageNumber}`
                        )
                        .then(this.hideShowLoading(true))
                        .then((response) => {
                            this.accounts = response?.data?.Data?.Data;
                            this.totalRecordParent =
                                response?.data?.Data?.TotalRecordParent;
                            this.accounts = this.accounts.map((account) => {
                                account.isShow = true;
                                account.isActive = false;
                                account.isClassML = account.is_parent
                                    ? MISAEnum.SpaceWithParent.IsParent
                                    : MISAEnum.SpaceWithParent.IsNotParent;
                                account.isExpand = true;
                                return account;
                            });

                            this.cloneAccounts = this.accounts;
                            if (this.pageNumber == this.loadPageNumber) {
                                this.dataTable = this.accounts;
                            } else {
                                this.dataTable.forEach((el) => {
                                    if (el.isActive === true) {
                                        el.isActive = false;
                                    }
                                });
                                this.dataTable[
                                    this.dataTable.length - 1
                                ].isActive = true;

                                this.dataTable.push(...this.accounts);
                                this.loadPageNumber = this.pageNumber;
                            }

                            // this.oldRecords = this.dataTable;
                            if (this.dataTable.length <= 0) {
                                this.isLoading = true;
                            } else {
                                const trElement = this.$refs.trElementRef;
                                if (trElement) {
                                    trElement.forEach((el) => {
                                        if (el.classList.contains("active")) {
                                            el.classList.remove("active");
                                        }
                                    });
                                }
                                if (this.record) {
                                    this.dataTable[0].isActive = true;
                                }
                            }
                            setTimeout(() => {
                                this.hideShowLoading(false);
                            }, 500);
                        })
                        .catch((error) => {
                            console.log(error);
                            setTimeout(() => {
                                this.hideShowLoading(false);
                            }, 500);
                        });
                }
            } catch (error) {
                console.log(error);
                setTimeout(() => {
                    this.hideShowLoading(false);
                }, 500);
            }
        },

        /**
         * Hàm kiểm tra input có rỗng không
         * Author: KienNT (02/03/2023)
         * @param (value): tham số là giá trị chuỗi từ input
         */
        isEmpty(value) {
            try {
                if (value === "" || value === null || value === undefined) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * ẩn hiện loading
         * Author: KienNT (28/05/2023)
         */
        hideShowLoading(isShow) {
            this.isLoading = isShow;
        },
        /**
         * Set focus khi được mounted và có props isFocus = true
         * Author: KienNT (28/05/2023)
         */
        setFocus() {
            this.$nextTick(function () {
                this.$refs["departmentInput"].focus();
            });
        },
        /**
         * Theo dõi sự thay đổi value của input
         * Author: KienNT (29/05/2023)
         */
        handleOnInput() {
            this.pageNumber = 1;
            if (this.record) {
                this.record = this.record.trim();
            }
            if (this.isEmpty(this.record)) {
                this.$emit("setValueInputComboboxTable");
            }
            if (this.resetData) {
                this.pageNumber = 1;
                this.$emit("setResetData");
            }

            setTimeout(() => {
                this.loadData();
            }, 500);
            this.$refs["optionWrapperCombobox"].classList.add("d-block");
        },

        /**
         * Cuộn đến cuối
         * Author: KienNT (29/05/2023)
         */
        scrollToBottom() {
            const scrollElement = this.$refs["scrollElement"];
            const that = this;
            if (scrollElement) {
                scrollElement.addEventListener("scroll", function () {
                    if (
                        scrollElement.scrollTop + scrollElement.clientHeight >=
                        scrollElement.scrollHeight
                    ) {
                        that.pageNumber += 1;
                        if (that.kind === "generalAccount") {
                            if (that.pageNumber < that.totalRecordParent) {
                                that.loadData();
                            }
                        } else if (that.kind === "employee") {
                            if (
                                that.pageNumber <
                                Math.ceil(that.totalRecord / that.pageSize)
                            ) {
                                that.loadData();
                            }
                        } else if (that.kind === "supplierCode") {
                            if (
                                that.pageNumber <
                                Math.ceil(that.totalRecord / that.pageSize)
                            ) {
                                that.loadData();
                            }
                        }
                    }
                });
            }
        },

        scrollToBottomEmployee() {
            const that = this;
            // Lấy element scroller
            const scrollElementEmployee = this.$refs.scrollElementEmployee;
            if (scrollElementEmployee) {
                scrollElementEmployee.onscroll = () => {
                    if (
                        scrollElementEmployee.scrollTop +
                            scrollElementEmployee.clientHeight >=
                        scrollElementEmployee.scrollHeight - 2
                    ) {
                        that.pageNumber += 1;
                        if (
                            that.pageNumber <
                            Math.ceil(that.totalRecord / that.pageSize)
                        ) {
                            that.loadData();
                        }
                    }
                };
            }
        },

        /**
         * handle khi click btn icon combobox
         * Author: KienNT (07/03/2023)
         * @param {event}: là sự kiện của element hiện tại
         */
        handleClickIcon(event) {
            // if (this.resetData) {
            //     this.record = "";
            //     this.pageNumber = 1;
            //     this.dataTable = [];
            //     this.loadData();
            //     this.$emit("setResetData");
            //     this.scrollToBottom();
            // }
            if (event.target.firstChild) {
                event.target.firstChild.classList.toggle("rorate-180");
            } else {
                event.target.classList.toggle("rorate-180");
            }
            this.$refs["optionWrapperCombobox"].classList.toggle("d-block");
        },

        /**
         * handle khi nhấn phím
         * Author: KienNT (07/03/2023)
         * @param {event}: là sự kiện của element hiện tại
         */
        handleKeyDown(e) {
            const key = e.keyCode;
            const elComboboxData = e.target.nextElementSibling;
            const optionItem =
                elComboboxData.firstElementChild.firstElementChild.children[1]
                    .firstElementChild.children;
            switch (key) {
                // nhấn phím enter or tab
                case 13:
                case 9:
                    for (let index = 0; index < optionItem.length; index++) {
                        const item = optionItem[index];
                        // lấy ta ptu đc active thì gán cho value
                        if (item.classList.contains("active")) {
                            this.record =
                                item.firstElementChild.firstElementChild.textContent;
                            // this.dataTable = this.oldRecords;
                            this.$refs[
                                "optionWrapperCombobox"
                            ].classList.remove("d-block");
                            this.selectedRecord = index;
                            if (this.kind === "property") {
                                this.$emit(
                                    "selectedRecord",
                                    this.dataTable[index].name
                                );
                            } else if (
                                this.kind === "supplierCode" ||
                                this.kind === "employee"
                            ) {
                                this.$emit(
                                    "selectedRecord",
                                    this.dataTable[index]
                                );
                            } else {
                                this.$emit(
                                    "selectedRecord",
                                    this.dataTable[index].account_id,
                                    this.dataTable[index].grade,
                                    this.dataTable[index].misa_code_id,
                                    this.dataTable[index].account_number
                                );
                            }

                            break;
                        }
                    }
                    break;

                // phím lên
                case 38:
                    // biến check xem có ptu nào đang active ko.
                    var check = true;
                    for (let index = 0; index < optionItem.length; index++) {
                        const item = optionItem[index];
                        if (item.classList.contains("active")) {
                            check = false;
                            break;
                        }
                    }
                    // ko có ptu nào active
                    if (check) {
                        optionItem[optionItem.length - 1].classList.add(
                            "active"
                        );
                    }
                    //  có ptu  active
                    if (!check) {
                        for (
                            let index = 0;
                            index < optionItem.length;
                            index++
                        ) {
                            const item = optionItem[index];

                            if (item.classList.contains("active")) {
                                if (index > 0) {
                                    optionItem[index - 1].classList.add(
                                        "active"
                                    );
                                    optionItem[index].classList.remove(
                                        "active"
                                    );
                                    optionItem[index - 1].scrollIntoView({
                                        block: "nearest",
                                    });
                                } else {
                                    optionItem[
                                        optionItem.length - 1
                                    ].classList.add("active");
                                    optionItem[index].classList.remove(
                                        "active"
                                    );
                                    optionItem[
                                        optionItem.length - 1
                                    ].scrollIntoView({
                                        block: "nearest",
                                    });
                                }

                                break;
                            }
                        }
                    }

                    break;

                // phím xuống
                case 40:
                    // biến check xem có ptu nào đang active ko.
                    var checkActive = true;
                    for (let index = 0; index < optionItem.length; index++) {
                        const item = optionItem[index];
                        if (item.classList.contains("active")) {
                            checkActive = false;
                            break;
                        }
                    }
                    // ko có ptu nào active
                    if (checkActive) {
                        optionItem[0].classList.add("active");
                    }
                    //  có ptu  active
                    if (!checkActive) {
                        for (
                            let index = 0;
                            index < optionItem.length;
                            index++
                        ) {
                            const item = optionItem[index];

                            if (item.classList.contains("active")) {
                                if (index !== optionItem.length - 1) {
                                    optionItem[index + 1].classList.add(
                                        "active"
                                    );
                                    optionItem[index].classList.remove(
                                        "active"
                                    );
                                    if (index && optionItem) {
                                        optionItem[index + 1].scrollIntoView({
                                            block: "nearest",
                                        });
                                    }
                                } else {
                                    this.pageNumber += 1;
                                    if (this.kind === "generalAccount") {
                                        if (
                                            this.pageNumber <
                                            this.totalRecordParent
                                        ) {
                                            this.loadData();
                                        } else {
                                            optionItem[0].classList.add(
                                                "active"
                                            );
                                            optionItem[
                                                optionItem.length - 1
                                            ].classList.remove("active");
                                            if (index && optionItem) {
                                                optionItem[0].scrollIntoView({
                                                    block: "nearest",
                                                });
                                            }
                                        }
                                    } else if (
                                        this.kind === "supplierCode" ||
                                        this.kind === "employee"
                                    ) {
                                        if (
                                            this.pageNumber < this.totalRecord
                                        ) {
                                            this.loadData();
                                        } else {
                                            optionItem[0].classList.add(
                                                "active"
                                            );
                                            optionItem[
                                                optionItem.length - 1
                                            ].classList.remove("active");
                                            if (index && optionItem) {
                                                optionItem[0].scrollIntoView({
                                                    block: "nearest",
                                                });
                                            }
                                        }
                                    }
                                }

                                break;
                            }
                        }
                    }
                    break;

                default:
                    break;
            }
        },

        /**
         * handle khi click vào item
         * Author: KienNT (08/03/2023)
         */
        handleClickItem(account, index) {
            this.selectedRecord = index;
            const trElement = this.$refs.trElementRef;
            if (trElement) {
                trElement.forEach((el) => {
                    if (el.classList.contains("active")) {
                        el.classList.remove("active");
                    }
                });
            }
            this.dataTable.forEach((el) => {
                if (el.isActive === true) {
                    el.isActive = false;
                }
            });
            if (this.kind === "generalAccount") {
                this.dataTable.forEach((el) => {
                    if (el.account_id === account.account_id) {
                        el.isActive = true;
                    } else {
                        el.isActive = false;
                    }
                });
                this.$emit(
                    "selectedRecord",
                    account.account_id,
                    account.grade,
                    account.misa_code_id,
                    account.account_number
                );
                this.record = account.account_number;
            } else if (this.kind === "supplierCode") {
                this.dataTable.forEach((el) => {
                    if (el.supplier_id === account.supplier_id) {
                        el.isActive = true;
                    } else {
                        el.isActive = false;
                    }
                });
                this.$emit("selectedRecord", account);
                this.record = account.supplier_code;
            } else if (this.kind === "employee") {
                this.dataTable.forEach((el) => {
                    if (el.employee_id === account.employee_id) {
                        el.isActive = true;
                    } else {
                        el.isActive = false;
                    }
                });
                this.$emit("selectedRecord", account);
                this.record = account.employee_code;
            }

            const refIconCombobox = this.$refs["iconCombobox"];

            this.$refs["optionWrapperCombobox"].classList.remove("d-block");
            refIconCombobox.classList.remove("rorate-180");
        },

        

        /**
         * nghe sự kiện window. Nếu click ko phải là combobox
         * Author: KienNT (07/03/2023)
         *  @param {event}: là sự kiện của element hiện tại
         */
        handleClickOutCombobox(event) {
            try {
                const refIconCombobox = this.$refs["iconCombobox"];
                const refBtnIconCombobox = this.$refs["btnIconCombobox"];

                const listOption = this.$refs["optionWrapperCombobox"];
                if (
                    !refIconCombobox.contains(event.target) &&
                    !listOption.contains(event.target) &&
                    !refBtnIconCombobox.contains(event.target)
                ) {
                    listOption.classList.remove("d-block");
                    refIconCombobox.classList.remove("rorate-180");
                }
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Khi input focus thì set isFocus = true
         * Author: KienNT (08/03/2023)
         */
        handleFocusInput() {
            this.isFocus = true;
        },
        /**
         * Khi input blur thì set isFocus = true
         * Author: KienNT (08/03/2023)
         */
        handleBlurInput() {
            this.isFocus = false;
            this.$emit("handleCheckEmpty", this.record);
        },

        /**
         * ẩn tooltip khi hover vào các option item của combobox
         * Author: KienNT (10/03/2023)
         *
         */
        handleMountOver() {
            this.$emit("handleMountOver");
        },

        /**
         * hiển thị tooltip khi hover vào các option item của combobox
         * Author: KienNT (10/03/2023)
         *
         */
        handleMountOut() {
            this.$emit("handleMountOut");
        },
    },

    mounted() {
        this.scrollToBottomEmployee();
        window.addEventListener("click", this.handleClickOutCombobox);
        this.scrollToBottom();
        if (this.kind === "supplierCode") {
            this.record = this.recordData;
            this.loadData();
        }
        if(this.kindAccount==="accountPaymentDetail"){
            this.record = this.recordData;
        }
    },
    beforeUnmount() {
        this.scrollToBottomEmployee();
        window.removeEventListener("click", this.handleClickOutCombobox);
        this.scrollToBottom();
    },
};
</script>
<style scoped>
@import url(../../css/components/combobox.css);
@import url(../../css/components/table.css);
@import url(../../css/base.css);
.option__list-combobox {
    width: 100%;
    max-height: calc(200px - 16px);
    overflow-y: hidden;
    overflow-x: hidden;
}

.employee tbody tr td:last-child::after,
.employee thead tr th:last-child::after,
.employee .table__field::after {
    display: none;
}

.employee tr td,
.employee tbody tr td:first-child {
    border: none;
}

.employee tbody tr:hover {
    background-color: #e8e9ec;
    color: var(--dropdown__item--hover-text-color);
}

.employee tbody tr.active td {
    background-color: #2ca01c !important;
    color: white;
}

.employee tbody .scroller {
    height: 154px;
    overflow-y: auto;
    overflow-x: hidden;
}

.supplierCode tbody tr td:last-child {
    position: relative;
    transform: translateX(-4px);
}

.employee thead tr th:last-child,
.employee tbody tr td:last-child {
    position: static;
}

.supplierCode tbody tr td:nth-last-child(2) {
    position: relative;
    transform: translateX(-3px);
}

.supplierCode tbody tr td:nth-last-child(3) {
    position: relative;
    transform: translateX(-2px);
}

.supplierCode tbody tr td:nth-last-child(4) {
    position: relative;
    transform: translateX(-1px);
}

.employee .table__field {
    position: static;
}

.employee tr th {
    border: none;
}

.employee,
.supplierCode {
    width: 100%;
}

.employee thead tr,
.supplierCode thead tr {
    display: flex;
    background: #eceef1;
    padding-right: 10px;
}

.employee thead tr div,
.supplierCode thead tr div {
    padding: 0 10px;
    height: 28px;
}

.employee tr div span,
.supplierCode tr div span {
    color: #212121;
    font-weight: bold;
    font-family: notosansBold;
    line-height: 28px;
}

.supplierCode tbody tr {
    height: 28px;
}

.option__wrapper-combobox {
    border: none;
}

.supplierCode tbody .scroller {
    height: 154px;
    overflow-y: auto;
    overflow-x: hidden;
}

.supplierCode td {
    border: none;
}

.supplierCode tbody tr td:last-child::after,
.supplierCode thead tr th:last-child::after,
.supplierCode .table__field::after {
    display: none;
}

.supplierCode tr td,
.supplierCode tbody tr td:first-child {
    border: none;
}

.supplierCode tbody tr:hover {
    background-color: #e8e9ec;
    color: #2ca01c;
}

.supplierCode tbody tr:hover td {
    background-color: #e8e9ec;
    color: #2ca01c;
}

.option__wrapper-combobox {
    background-color: #fff;
    border: 1px solid #babec5;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 -8px 34px 0 rgba(0, 0, 0, 0.05);
    z-index: 10;
}

.employee tr td:not(:last-child):not(:nth-last-child(2)):not(:first-child) {
    border: none;
}

.paymentList thead tr th:first-child,
.paymentList tbody tr td:first-child {
    position: static;
}

.paymentList tr:hover {
    background-color: #e8e9ec !important;
    color: #2ca01c;
}
</style>
