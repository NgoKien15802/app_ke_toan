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
                @click="handleActiveRow($event)"
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
                            @handleCheckbox="handleCheckbox($event)"
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
                        :text="payment?.total_amount || ''"
                        :subtext="payment?.total_amount || ''"
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
                                $t("Total")
                            }}</span>
                        </span>
                    </template>

                    <template v-else-if="header === 'total_amount'">
                        <span>
                            <span class="text-align-right"> 2.502.302 </span>
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
        };
    },
    /**
     * Thực hiện lấy dữ liệu khi chuẩn bị mounted vào DOM
     * Author: KienNT (02/03/2023)
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
         * Hàm lấy toại độ sau đó set tọa độ cho contextmenu để hiển thị
         * Author: KienNT (14/05/2023)
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
         * Author: KienNT (14/05/2023)
         */
        hideContextMenu() {
            this.isContextMenu = !this.isContextMenu;
        },
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
};
</script>

<style scoped>
@import url(@/css/components/tablePayment.css);
</style>
