<template>
    <table id="tbEmployeeList" class="employee" ref="gridTable">
        <thead>
            <draggable tag="tr" v-model="headers" class="table__field">
                <th
                    v-for="header in headers"
                    :key="header"
                    :scope="header === 'Selected' ? 'col' : null"
                    :class="[
                        header !== 'posted_date' &&
                        header !== 'Feature' &&
                        header !== 'ref_date' &&
                        header !== 'total_amount'
                            ? 'text-align-left'
                            : '',
                        header === 'total_amount' ? 'text-align-right' : '',
                        header === 'posted_date' ? 'min-w160' : '',
                        header === 'ref_date' ? 'min-w160' : '',
                        header === 'refno_finance' ? 'min-w160' : '',
                        header === 'journal_memo' ? 'min-w320' : '',
                        header === 'total_amount' ? 'min-w160' : '',
                        header === 'supplier_code' ? 'min-w230' : '',
                        header === 'payment_supplier_name' ? 'min-w160' : '',
                        header === 'payment_supplier_address' ? 'min-w300' : '',
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

                    <template
                        v-else-if="
                            header === 'posted_date' || header === 'ref_date'
                        "
                    >
                        <span style="display: flex">
                            <span
                                style="margin: 0 auto"
                                class="text-align-center"
                                >{{ $t(header) }}</span
                            >
                            <div
                                class="mi-16 icon-head mi-header-option"
                                @click="
                                    handleShowConditionFilter($event, header)
                                "
                                ref="iconConditionFilter"
                            ></div>
                        </span>
                    </template>

                    <template v-else-if="header === 'total_amount'">
                        <span style="display: flex">
                            <span class="text-align-right">{{
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
                    <template v-else-if="header === 'Feature'">
                        <span class="text-align-center">{{ $t(header) }} </span>
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
                :dataList="paymentList"
                :columnCount="headers"
            ></MSkeletonTable>

            <tr
                v-else
                v-for="(payment, index) in paymentList"
                :key="index"
                @dblclick="($event) => handleClickShow($event, payment)"
                :class="payment?.Selected ? 'tr-hover' : ''"
                @click="handleActiveRow($event, payment)"
                ref="trElementRef"
            >
                <template v-for="header in headers" :key="header">
                    <td
                        v-if="header === 'Selected'"
                        class="text-align-center min-w40"
                        :class="payment?.Selected ? 'tr-hover' : ''"
                    >
                        <MCheckbox
                            v-model="payment.Selected"
                            :initValue="payment.Selected"
                            @handleCheckbox="
                                handleCheckbox(
                                    $event,
                                    payment.refid,
                                    payment.refno_finance
                                )
                            "
                            ref="checkbox"
                        ></MCheckbox>
                    </td>
                    <td
                        v-else-if="header === 'Feature'"
                        class="dropdown-fun text-align-center min-w120"
                        :class="payment?.Selected ? 'tr-hover' : ''"
                    >
                        <MButton
                            kind="link"
                            className="link-btn btn-link"
                            :text="$t('Show')"
                            :click="
                                ($event) => handleClickShow($event, payment)
                            "
                        ></MButton>
                        <div
                            class="input__icon-box ml-8"
                            @click="handleClickOptionMenu($event, payment)"
                            ref="iconContextMenu"
                        >
                            <div class="icon-dropdown" ref="ContextMenu"></div>
                        </div>
                    </td>

                    <MTooltip
                        v-else-if="header === 'posted_date'"
                        kind="data"
                        :class="
                            payment?.Selected
                                ? 'tr-hover text-align-center min-w160'
                                : 'text-align-center min-w160'
                        "
                        :text="formatDate(payment?.posted_date) || ''"
                        :subtext="formatDate(payment?.posted_date) || ''"
                    ></MTooltip>

                    <MTooltip
                        v-else-if="header === 'ref_date'"
                        kind="data"
                        :class="
                            payment?.Selected
                                ? 'tr-hover text-align-center min-w160'
                                : 'text-align-center min-w160'
                        "
                        :text="formatDate(payment?.ref_date) || ''"
                        :subtext="formatDate(payment?.ref_date) || ''"
                    ></MTooltip>

                    <MTooltip
                        v-else-if="header === 'total_amount'"
                        kind="data"
                        :class="
                            payment?.Selected
                                ? 'tr-hover text-align-right min-w160'
                                : 'text-align-right min-w160'
                        "
                        :text="
                            payment[header]
                                ? numberWithCommas(Math.round(payment[header]))
                                : 0
                        "
                        :subtext="
                            payment[header]
                                ? numberWithCommas(Math.round(payment[header]))
                                : 0
                        "
                    ></MTooltip>

                    <MTooltip
                        v-else
                        kind="data"
                        :className="[
                            payment?.Selected ? 'tr-hover' : '',
                            header === 'refno_finance'
                                ? 'min-w160 drilldown'
                                : '',
                            header === 'journal_memo' ? 'min-w320' : '',
                            header === 'supplier_code' ? 'min-w230' : '',
                            header === 'payment_supplier_name'
                                ? 'min-w160'
                                : '',
                            header === 'payment_supplier_address'
                                ? 'min-w300'
                                : '',
                        ]"
                        :text="payment[header] || ''"
                        :subtext="payment[header] || ''"
                    ></MTooltip>
                </template>
            </tr>
        </tbody>

        <tfoot>
            <tr class="table__payment-field">
                <th
                    v-for="header in headers"
                    :key="header"
                    :scope="header === 'Selected' ? 'col' : null"
                    :class="[
                        header !== 'posted_date' &&
                        header !== 'Feature' &&
                        header !== 'ref_date' &&
                        header !== 'total_amount'
                            ? 'text-align-left'
                            : '',
                        header === 'total_amount' ? 'text-align-right' : '',
                        header === 'posted_date' ? 'min-w160' : '',
                        header === 'ref_date' ? 'min-w160' : '',
                        header === 'refno_finance' ? 'min-w160' : '',
                        header === 'journal_memo' ? 'min-w320' : '',
                        header === 'total_amount' ? 'min-w160' : '',
                        header === 'supplier_code' ? 'min-w230' : '',
                        header === 'payment_supplier_name' ? 'min-w160' : '',
                        header === 'payment_supplier_address' ? 'min-w300' : '',
                        header === 'Feature' ? 'min-w120' : '',
                        header === 'Selected' ? 'min-w40' : '',
                    ]"
                    ref="thElement"
                >
                    <template v-if="header === 'Selected'"> </template>

                    <template v-else-if="header === 'posted_date'">
                        <span>
                            <span class="text-align-center">{{
                                !isShowSkeleton ? $t("Total") : ""
                            }}</span>
                        </span>
                    </template>

                    <template v-else-if="header === 'total_amount'">
                        <span>
                            <span class="text-align-right">
                                {{
                                    !isShowSkeleton
                                        ? numberWithCommas(totalMoney)
                                        : ""
                                }}
                            </span>
                        </span>
                    </template>
                    <template v-else-if="header === 'Feature'"> </template>
                    <template v-else>
                        <span> </span>
                    </template>
                </th>
            </tr>
        </tfoot>
    </table>

    <MNotData v-if="paymentList.length <= 0 && !isShowSkeleton"></MNotData>
    <MContextmenu
        v-if="isContextMenu"
        kind="contextMenuPayment"
        :left="leftContextMenu"
        :top="topContextMenu"
        @hideContextMenu="hideContextMenu"
        :refElement="this.$refs.iconContextMenu"
        :paymentSelected="paymentSelected"
        @handleEdit="handleEdit"
        @handleDeleteRow="handleDeleteRow"
        @handleDuplicatePayment="handleDuplicatePayment"
    ></MContextmenu>

    <MDialog
        v-if="isDialogWarning || isDialogDeleteMul"
        iconClass="dialog__icon-warning"
        :title="$t('DialogWarning')"
        :message="
            isDialogWarning
                ? $t('MessageWarningPayment') +
                  ' <' +
                  paymentCodeSelected +
                  '> ' +
                  $t('TxtNo') +
                  '?'
                : $t('MessageWarningMulPayment') + ' ' + $t('TxtNo') + '?'
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
import MISAResouce from "@/js/resource";
import MISAEnum from "@/js/enum";
import axios from "axios";
import moment from "moment";
import { VueDraggableNext } from "vue-draggable-next";
export default {
    name: "TheTablePayment",
    components: {
        draggable: VueDraggableNext,
    },
    props: {
        pageSizeNumber: {
            type: String,
        },
        pageCurrent: {
            type: String,
        },
        selectedpaymentIds: {
            type: Array,
        },
        keyWordSearch: {
            type: String,
        },
        isReload: {
            type: String,
        },
        selectedCheckbox: {
            type: Array,
        },
        isDeleteOne: {
            type: Boolean,
        },
        isDialogDeleteMultiple: {
            type: Boolean,
        },
        filterConditonArr: {
            type: Array,
        },
        selectedArrToSetting: {
            type: Array,
        },
        columnEditable: {
            type: Array,
        },
    },
    data() {
        return {
            paymentList: [],
            MISAResouce,
            MISAEnum,
            pageSize: 20,
            pageNumber: 1,
            selectedAll: false,
            isContextMenu: false,
            leftContextMenu: "",
            topContextMenu: "",
            totalRecord: 0,
            keyWord: "",
            isDialogDeleteMul: false,
            isDialogWarning: false,
            headers: [
                "Selected",
                "posted_date",
                "ref_date",
                "refno_finance",
                "journal_memo",
                "total_amount",
                "supplier_code",
                "payment_supplier_name",
                "payment_supplier_address",
                "Feature",
            ],
            isShowSkeleton: false,
            conditionFilters: "",
            totalMoney: 0,
            header: "",
            oldCheckedArr: [],
            paymentSelected: "",
            isConditionFilter: false,
            filterConditon: "",
            topConditionFilter: 0,
            leftConditionFilter: 0,
            paymentCodeSelected: "",
            cloneHeader: [],
            conditionFilterArr: [],
            selectedArrToSettingUI: [],
            columnWidth: [],
        };
    },
    watch: {
        /**
         * Theo dõi sự thay đổi isDialogDeleteMultiple. khi click vào xóa nhiều
         * Author: KienNT (10/06/2023)
         */
        isDialogDeleteMultiple: function () {
            this.isDialogDeleteMul = this.isDialogDeleteMultiple;
        },
        /**
         * Theo dõi sự thay đổi pageSizeNumber. nếu pagesize thay đổi
         * Author: KienNT (04/06/2023)
         */
        pageSizeNumber: function () {
            this.pageSize = this.pageSizeNumber;
            if (this.pageNumber == 1) {
                this.loadData();
            }
        },

        /**
         * Theo dõi sự thay đổi pageCurrent. khi click vào btn next
         * Author: KienNT (04/06/2023)
         */

        pageCurrent: function () {
            this.pageNumber = this.pageCurrent;
            this.loadData();
        },

        /**
         * Theo dõi sự thay đổi selectedCheckbox. nếu mảng rỗng thì cho các checkbox = false,...
         * Author: KienNT (15/03/2023)
         */
        selectedCheckbox: function () {
            if (this.selectedCheckbox.length <= 0) {
                this.paymentList = this.paymentList.map((x) => {
                    x.Selected = false;
                    return x;
                });
                this.oldCheckedArr = [];
                this.selectedAll = false;
            }
        },

        /**
         * Theo dõi sự thay đổi keyWordSearch. tìm kiếm thay đổi
         * Author: KienNT (04/06/2023)
         */
        keyWordSearch: function () {
            this.keyWord = this.keyWordSearch;
            this.pageNumber = 1;
            this.loadData();
        },

        isDeleteOne: function () {
            if (this.isDeleteOne === true) {
                this.paymentSelected = this.selectedCheckbox[0];
                this.handleDeleteRow();
            }
        },

        /**
         * Theo dõi sự thay đổi isReload: nếu thay đổi là true thì reload lại trang
         * Author: KienNT (08/06/2023)
         */
        isReload: function (newValue) {
            if (newValue) {
                this.loadData();
                this.$emit("setIsReLoad");
            }
        },

        conditionFilterArr: {
            handler(newValue) {
                let filterObject = newValue.reduce((acc, el) => {
                    return { ...acc, ...el[Object.keys(el)[0]] };
                }, {});

                for (const [key, value] of Object.entries(filterObject)) {
                    if (key === "total_amount") {
                        filterObject[key] = this.currencyToNumber(value);
                    }
                }

                filterObject = `'${JSON.stringify(filterObject)}'`;
                this.conditionFilters = filterObject || "";

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
                    const clonePaymentList = this.paymentList;
                    this.paymentList = new Array(10).fill(0);
                    setTimeout(() => {
                        this.paymentList = clonePaymentList;
                        this.headers = filteredHeaders;
                        this.isShowSkeleton = false;
                        console.log(this.columnWidth);
                    }, 2000);
                }
            },
            deep: true,
        },

        headers: {
            handler(newValue) {
                this.$emit("handleChangeHeader", newValue);
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
    },
    /**
     * Thực hiện lấy dữ liệu khi chuẩn bị mounted vào DOM
     * Author: KienNT (04/06/2023)
     */
    created() {
        try {
            this.paymentList = new Array(3).fill(0);
            this.cloneHeader = this.headers;
            this.$emit("changeSelectedArrToSetting");
            this.loadData();
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        /**
         * Call API get data
         * Author: KienNT (04/06/2023)
         */
        loadData() {
            try {
                axios
                    .get(
                        `https://localhost:7153/api/v1/Payments/Filter?keyword=${this.keyWord}&pageSize=${this.pageSize}&conditionFilters=${this.conditionFilters}&pageNumber=${this.pageNumber}`
                    )
                    .then((this.isShowSkeleton = true))
                    .then((response) => {
                        this.paymentList = response?.data?.Data.Data;
                        this.totalRecord = response?.data?.Data.TotalRecord;
                        this.totalMoney =
                            Math.round(response?.data?.Data.TotalRecordPrice) ||
                            0;
                        this.$emit("getTotalRecord", this.totalRecord);
                        this.paymentList = this.paymentList.map((x) => {
                            x.Selected = false;
                            return x;
                        });
                        this.$emit(
                            "handleClickPayment",
                            this.paymentList[0] || ""
                        );
                        if (this.oldCheckedArr.length > 0) {
                            this.paymentList.forEach((el) => {
                                for (
                                    let index = 0;
                                    index < this.oldCheckedArr.length;
                                    index++
                                ) {
                                    const oldElement =
                                        this.oldCheckedArr[index];
                                    if (
                                        el.refid === oldElement &&
                                        el.Selected === false
                                    ) {
                                        el.Selected = true;
                                        break;
                                    }
                                }
                            });
                        }

                        if (
                            this.paymentList.length > 0 &&
                            this.paymentList.every((el) => el.Selected === true)
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
         * Xử lý khi click vào select all
         * Author: KienNT (06/03/2023)
         *  @param (event): là event
         */
        handleCheckboxAll(event) {
            try {
                if (event.target.checked) {
                    this.paymentList.forEach((el) => {
                        const index = this.oldCheckedArr.indexOf(el.refid);
                        if (index === -1) {
                            this.oldCheckedArr.push(el.refid);
                        }
                    });
                } else {
                    const filterSelected = this.paymentList.filter(
                        (el) => el.Selected === true
                    );
                    const cloneFilterSelected = filterSelected.map(
                        (el) => el.refid
                    );
                    this.oldCheckedArr = this.oldCheckedArr.filter(
                        (item) => !cloneFilterSelected.includes(item)
                    );
                }
                this.$emit("handleSelectChechbox", this.oldCheckedArr);
                this.paymentList = this.paymentList.map((x) => {
                    x.Selected = event.target.checked;
                    return x;
                });
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Xử lý khi click vào select item
         * Author: KienNT (06/03/2023)
         *   @param (event): là event
         */
        handleCheckbox(event, refid, refno_finance = "") {
            this.paymentCodeSelected = refno_finance;
            const index = this.oldCheckedArr.indexOf(refid);
            if (!event.target.checked) {
                this.selectedAll = event.target.checked;
                if (index !== -1) {
                    this.oldCheckedArr.splice(index, 1);
                }
            } else {
                if (index === -1) {
                    this.oldCheckedArr.push(refid);
                }
            }
            this.$emit("handleSelectChechbox", this.oldCheckedArr);
            const filterSelected = this.paymentList.filter((item) =>
                this.oldCheckedArr.includes(item.refid)
            );
            if (filterSelected.length >= this.paymentList.length) {
                this.selectedAll = true;
            } else {
                this.selectedAll = false;
            }
        },

        /**
         * Xử lý khi click vào hàng
         * Author: KienNT (27/03/2023)

         */
        handleActiveRow(event, payment) {
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
            const checkboxs = this.$refs["checkbox"];
            for (let index = 0; index < checkboxs.length; index++) {
                if (
                    !event.target.isEqualNode(checkboxs[index].$el.firstChild)
                ) {
                    this.$emit("handleClickPayment", payment);
                }
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
                            `https://localhost:7153/api/v1/Payments/${this.paymentSelected}`
                        )
                        .then(this.hideShowLoading(true))
                        .then((res) => {
                            console.log(res);
                            this.isDialogWarning = false;
                            const index = this.oldCheckedArr.indexOf(
                                this.paymentSelected
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
                            "https://localhost:7153/api/v1/Payments/DeleteMultiple",
                            {
                                data: this.selectedpaymentIds,
                            }
                        )
                        .then(this.hideShowLoading(true))
                        .then((res) => {
                            console.log(res);
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
         * xử lý hiển thị Condition filter
         * Author: KienNT (11/06/2023)
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
         * Author: KienNT (11/06/2023)
         */
        handleHideConditionFilter() {
            this.isConditionFilter = false;
        },

        /**
         * Xử lý loading gửi emit lên cha
         * Author: KienNT (09/06/2023)
         * @param (isLoading): tham số là giá trị boolean loading có hay không
         */
        hideShowLoading(isLoading) {
            this.$emit("hideShowLoading", isLoading);
        },

        /**
         * Hàm lấy toại độ sau đó set tọa độ cho contextmenu để hiển thị
         * Author: KienNT (04/06/2023)
         *  @param (event,employee): tham số 1 là event, tham số 2 là thông tin của 1 nhân viên
         */
        handleClickOptionMenu(event, payment) {
            try {
                this.paymentSelected = payment.refid;
                this.paymentCodeSelected = payment.refno_finance;
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
         * Hàm xóa dilog đi nếu ko muốn xóa chứng từ
         * Author: KienNT (09/06/2023)
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
         * Xử lý gửi mảng filter condition lên cha
         * Author: KienNT (09/06/2023)
         * @param (filterConditonArr): tham số là mảng text condition filter
         */
        handleClickFilter(filterConditonArr) {
            this.conditionFilterArr = filterConditonArr;
            this.$emit("handleClickFilter", filterConditonArr);
        },

        /**
         * Hàm ẩn cclick btn xem
         * Author: KienNT (09/06/2023)
         */
        handleClickShow(event, payment) {
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
                    // this.$emit("handleClickShow", payment);
                    this.$router.push(
                        `/cash/cashDetail/show/BackToTable/${payment.refid}`
                    );
                }
            }
        },

        /**
         * Hàm chuyển tiền sang số
         * Author: KienNT (12/06/2023)
         */
        currencyToNumber(currency) {
            var number = currency.replace(/\./g, "");
            return parseFloat(number);
        },

        /**
         * Hàm ẩn contextmenu khi click ra ngoài element
         * Author: KienNT (04/06/2023)
         */
        hideContextMenu() {
            this.isContextMenu = !this.isContextMenu;
        },
        /**
         * format cho số lớn
         * Author: KienNT (04/06/2023)
         */
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },

        /**
         * handle click btn edit
         * Author: KienNT (09/06/2023)
         */
        handleEdit(paymentSelected) {
            try {
                if (paymentSelected) {
                    this.$router.push(
                        `/cash/cashDetail/edit/BackToTable/${this.paymentSelected}`
                    );
                    // this.isContextMenu = !this.isContextMenu;
                    // this.$emit(
                    //     "showPopupEdit",
                    //     MISAEnum.formMode.Edit,
                    //     paymentSelected
                    // );
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm hiển thị dialog có muốn xóa chứng từ không?
         * Author: KienNT (07/03/2023)
         */
        handleDeleteRow() {
            try {
                if (this.paymentSelected) {
                    this.isDialogWarning = true;
                    this.$emit("setIsDeleteOne");
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm lấy được id của payment chọn để nhân bản
         * Author: KienNT (09/06/2023)
         */
        handleDuplicatePayment(paymentSelected) {
            try {
                if (paymentSelected) {
                    this.paymentSelected = paymentSelected;
                    this.$router.push(
                        `/cash/cashDetail/duplicate/BackToTable/${this.paymentSelected}`
                    );
                }
            } catch (error) {
                console.log(error);
            }
        },
    },

    computed: {
        /**
         * Hàm thực hiện format date
         * Author: KienNT (04/06/2023)
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
};
</script>

<style scoped>
@import url(@/css/components/tablePayment.css);

.employee thead tr th:first-child,
.employee tbody tr td:first-child,
.employee tfoot tr th:first-child {
    position: sticky;
    bottom: 0;
    z-index: 2;
    border-right: 0;
}

.employee thead tr th:first-child,
.employee tfoot tr th:first-child,
.employee tbody tr td:first-child {
    left: 0;
}

.employee tbody tr td:first-child::after {
    content: "";
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 4;
    border-right: 1px dotted #babec5;
}
</style>
