<template>
    <table id="tbEmployeeList" class="paymentList" ref="gridTable">
        <thead>
            <draggable tag="tr" v-model="headers" class="table__field">
                <th
                    v-for="header in headers"
                    :key="header"
                    :scope="header === 'Selected' ? 'col' : null"
                    :class="[
                        header !== 'AmountOfMoney' ? 'text-align-left' : '',
                        header === 'AmountOfMoney' ? 'text-align-right' : '',
                        header === 'Selected' ? 'min-w40' : '',
                        header === 'Interpret' ? 'min-w160' : '',
                        header === 'DebitAccount' ? 'min-w160' : '',
                        header === 'CreditAccount' ? 'min-w160' : '',
                        header === 'AmountOfMoney' ? 'min-w160' : '',
                        header === 'Object' ? 'min-w160' : '',
                        header === 'ObjectName' ? 'min-w630' : '',
                    ]"
                    ref="thElement"
                >
                    <template v-if="header === 'Selected'">
                        <span class="block-center">#</span>
                    </template>

                    <template v-else-if="header === 'AmountOfMoney'">
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
                        v-else-if="header === 'AmountOfMoney'"
                        kind="data"
                        class="text-align-right min-w160"
                        :text="paymentDetail?.AmountOfMoney || ''"
                        :subtext="paymentDetail?.AmountOfMoney || ''"
                    ></MTooltip>

                    <MTooltip
                        v-else
                        kind="data"
                        :className="[
                            header === 'Interpret' ? 'min-w160' : '',
                            header === 'DebitAccount' ? 'min-w160' : '',
                            header === 'CreditAccount' ? 'min-w160' : '',
                            header === 'Object' ? 'min-w160' : '',
                            header === 'ObjectName' ? 'min-w630' : '',
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
                        header !== 'AmountOfMoney' ? 'text-align-left' : '',
                        header === 'AmountOfMoney' ? 'text-align-right' : '',
                        header === 'AccountingDate' ? 'min-w160' : '',
                        header === 'Selected' ? 'min-w40' : '',
                        header === 'Interpret' ? 'min-w160' : '',
                        header === 'DebitAccount' ? 'min-w160' : '',
                        header === 'CreditAccount' ? 'min-w160' : '',
                        header === 'AmountOfMoney' ? 'min-w160' : '',
                        header === 'Object' ? 'min-w160' : '',
                        header === 'ObjectName' ? 'min-w630' : '',
                    ]"
                    ref="thElement"
                >
                    <template v-if="header === 'Selected'"> </template>

                    <template v-else-if="header === 'Interpret'">
                        <span>
                            <span class="text-align-center">{{
                                $t("Total")
                            }}</span>
                        </span>
                    </template>

                    <template v-else-if="header === 'AmountOfMoney'">
                        <span>
                            <span class="text-align-right"> 2.502.302 </span>
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
import MISAEnum from "@/js/enum";
import moment from "moment";
import { VueDraggableNext } from "vue-draggable-next";
export default {
    name: "TheTablePaymentDetail",
    components: {
        draggable: VueDraggableNext,
    },
    data() {
        return {
            paymentDetailList: [
                {
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    DebitAccount: "111",
                    CreditAccount: "111",
                    AmountOfMoney: "1.500.000",
                    Object: "Nguyễn Văn Mạnh",
                    ObjectName: "Ngo trung kien",
                },
            ],
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
                "Interpret",
                "DebitAccount",
                "CreditAccount",
                "AmountOfMoney",
                "Object",
                "ObjectName",
            ],
            isShowSkeleton: false,
        };
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
