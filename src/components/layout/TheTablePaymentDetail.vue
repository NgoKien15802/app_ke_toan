<template>
    <table id="tbEmployeeList" class="paymentList" ref="gridTable">
        <thead>
            <draggable tag="tr" v-model="headers" class="table__field">
                <th
                    v-for="header in headers"
                    :key="header"
                    :scope="header === 'Selected' ? 'col' : null"
                    :class="[
                        header !== 'amount' ? 'text-align-left' : '',
                        header === 'amount' ? 'text-align-right' : '',
                        header === 'Selected' ? 'min-w40' : '',
                        header === 'journal_memo' ? 'min-w160' : '',
                        header === 'debit_account' ? 'min-w160' : '',
                        header === 'credit_account' ? 'min-w160' : '',
                        header === 'amount' ? 'min-w160' : '',
                        header === 'supplier_code' ? 'min-w160' : '',
                        header === 'supplier_name' ? 'min-w630' : '',
                    ]"
                    ref="thElement"
                >
                    <template v-if="header === 'Selected'">
                        <span class="block-center">#</span>
                    </template>

                    <template v-else-if="header === 'amount'">
                        <span>
                            <span class="text-align-right">{{
                                $t(header)
                            }}</span>
                        </span>
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
                v-for="(paymentDetail, index) in paymentDetailList"
                :key="index"
                @dblclick="($event) => doubleClickRow($event, paymentDetail)"
                @click="handleActiveRow($event)"
                ref="trElementRef"
            >
                <template v-for="header in headers" :key="header">
                    <td
                        v-if="header === 'Selected'"
                        class="text-align-center min-w40"
                    >
                        <span class="block-center">{{ index + 1 }}</span>
                    </td>

                    <MTooltip
                        v-else-if="header === 'amount'"
                        kind="data"
                        class="text-align-right min-w160"
                        :text="
                            paymentDetail[header]
                                ? numberWithCommas(
                                      Math.round(paymentDetail[header])
                                  )
                                : 0
                        "
                        :subtext="
                            paymentDetail[header]
                                ? numberWithCommas(
                                      Math.round(paymentDetail[header])
                                  )
                                : 0
                        "
                    ></MTooltip>

                    <MTooltip
                        v-else
                        kind="data"
                        :className="[
                            header === 'journal_memo' ? 'min-w160' : '',
                            header === 'debit_account' ? 'min-w160' : '',
                            header === 'credit_account' ? 'min-w160' : '',
                            header === 'supplier_code' ? 'min-w160' : '',
                            header === 'supplier_name' ? 'min-w630' : '',
                        ]"
                        :text="paymentDetail[header] || ''"
                        :subtext="paymentDetail[header] || ''"
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
                        header !== 'amount' ? 'text-align-left' : '',
                        header === 'amount' ? 'text-align-right' : '',
                        header === 'AccountingDate' ? 'min-w160' : '',
                        header === 'Selected' ? 'min-w40' : '',
                        header === 'journal_memo' ? 'min-w160' : '',
                        header === 'debit_account' ? 'min-w160' : '',
                        header === 'credit_account' ? 'min-w160' : '',
                        header === 'amount' ? 'min-w160' : '',
                        header === 'supplier_code' ? 'min-w160' : '',
                        header === 'supplier_name' ? 'min-w630' : '',
                    ]"
                    ref="thElement"
                >
                    <template v-if="header === 'Selected'"> </template>

                    <template v-else-if="header === 'journal_memo'">
                        <span>
                            <span class="text-align-center">{{
                                !isShowSkeleton ? $t("Total") : ""
                            }}</span>
                        </span>
                    </template>

                    <template v-else-if="header === 'amount'">
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

                    <template v-else>
                        <span> </span>
                    </template>
                </th>
            </tr>
        </tfoot>
    </table>
</template>

<script>
import MISAResouce from "@/js/resource";
import axios from "axios";
import MISAEnum from "@/js/enum";
import moment from "moment";
import { VueDraggableNext } from "vue-draggable-next";
export default {
    name: "TheTablePaymentDetail",
    components: {
        draggable: VueDraggableNext,
    },

    props: {
        paymentIdClick: {
            type: String,
        },
    },

    data() {
        return {
            paymentDetailList: [],
            MISAResouce,
            MISAEnum,
            pageSize: 20,
            pageNumber: 1,
            selectedAll: false,
            isContextMenu: false,
            leftContextMenu: "",
            topContextMenu: "",
            totalRecord: 0,
            refidSelected: "",
            headers: [
                "Selected",
                "journal_memo",
                "debit_account",
                "credit_account",
                "amount",
                "supplier_code",
                "supplier_name",
            ],
            isShowSkeleton: false,
            totalMoney: 0,
        };
    },

    watch: {
        paymentIdClick: function (newValue) {
            this.paymentDetailList = new Array(2).fill(0);
            this.refidSelected = newValue;
            this.loadData();
        },
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
                        `https://localhost:7153/api/v1/PaymentDetails/PaymentDetailPaging?p_refid=${this.refidSelected}&pageSize=${this.pageSize}&pageNumber=${this.pageNumber}`
                    )
                    .then((this.isShowSkeleton = true))
                    .then((response) => {
                        this.paymentDetailList = response?.data?.Data.Data;
                        this.totalRecord = response?.data?.Data.TotalRecord;
                        this.$emit("getTotalRecord", this.totalRecord);

                        if (this.paymentDetailList.length > 0) {
                            this.totalMoney = this.paymentDetailList.reduce(
                                (acc, el) => {
                                    return acc + Math.round(el?.amount);
                                },
                                0
                            );
                        } else {
                            this.totalMoney = 0;
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
@import url(@/css/layout/paymentDetail.css);
</style>
