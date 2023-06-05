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
                        header === 'supplier_name' ? 'min-w160' : '',
                        header === 'supplier_address' ? 'min-w300' : '',
                        header === 'Feature' ? 'min-w120' : '',
                        header === 'Selected' ? 'min-w40' : '',
                    ]"
                    ref="thElement"
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
                        <span>
                            <span
                                style="margin: 0 auto"
                                class="text-align-center"
                                >{{ $t(header) }}</span
                            >
                        </span>
                    </template>

                    <template v-else-if="header === 'total_amount'">
                        <span>
                            <span class="text-align-right">{{
                                $t(header)
                            }}</span>
                        </span>
                    </template>
                    <template v-else-if="header === 'Feature'">
                        <span class="text-align-center">{{ $t(header) }} </span>
                    </template>
                    <template v-else>
                        <span>
                            <span class="text-align-left">{{
                                $t(header)
                            }}</span>
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
                @dblclick="($event) => doubleClickRow($event, payment)"
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
                            :click="() => doubleClickEditText(payment)"
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
                            header === 'supplier_name' ? 'min-w160' : '',
                            header === 'supplier_address' ? 'min-w300' : '',
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
                        header === 'supplier_name' ? 'min-w160' : '',
                        header === 'supplier_address' ? 'min-w300' : '',
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
    ></MContextmenu>
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
        selectedEmployeeIds: {
            type: Array,
        },
        keyWordSearch: {
            type: String,
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
            headers: [
                "Selected",
                "posted_date",
                "ref_date",
                "refno_finance",
                "journal_memo",
                "total_amount",
                "supplier_code",
                "supplier_name",
                "supplier_address",
                "Feature",
            ],
            isShowSkeleton: false,
            conditionFilters: "{}",
            totalMoney: 0,
            oldCheckedArr: [],
        };
    },
    watch: {
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
            if (this.selectedCheckbox <= 0) {
                this.employees = this.employees.map((x) => {
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
    },
    /**
     * Thực hiện lấy dữ liệu khi chuẩn bị mounted vào DOM
     * Author: KienNT (04/06/2023)
     */
    created() {
        try {
            this.paymentList = new Array(this.pageSize).fill(0);
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
                        this.$emit("getTotalRecord", this.totalRecord);
                        this.paymentList = this.paymentList.map((x) => {
                            x.Selected = false;
                            return x;
                        });
                        this.totalMoney = this.paymentList.reduce((acc, el) => {
                            return acc + Math.round(el?.total_amount);
                        }, 0);

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
                    this.oldCheckedArr = [];
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
        handleCheckbox(event, refid) {
            const index = this.oldCheckedArr.indexOf(refid);
            if (!event.target.checked) {
                this.selectedAll = event.target.checked;
                if (index !== -1) {
                    this.oldCheckedArr.splice(index, 1);
                }
            } else {
                if (index === -1) {
                    this.oldCheckedArr.push(refid);
                    this.$emit("handleSelectChechbox", this.oldCheckedArr);
                }
            }
            if (this.oldCheckedArr.length >= this.pageSize) {
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
            this.$emit("handleClickPayment", payment);
        },

        /**
         * Hàm lấy toại độ sau đó set tọa độ cho contextmenu để hiển thị
         * Author: KienNT (04/06/2023)
         *  @param (event,employee): tham số 1 là event, tham số 2 là thông tin của 1 nhân viên
         */
        handleClickOptionMenu(event, payment) {
            try {
                console.log(payment);
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
