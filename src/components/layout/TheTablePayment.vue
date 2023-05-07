<template>
    <table id="tbEmployeeList" class="employee" ref="gridTable">
        <thead>
            <draggable tag="tr" v-model="headers" class="table__field">
                <th
                    v-for="header in headers"
                    :key="header"
                    :scope="header === 'Selected' ? 'col' : null"
                    :class="[
                        header !== 'AccountingDate' &&
                        header !== 'Feature' &&
                        header !== 'DayVouchers' &&
                        header !== 'AmountOfMoney'
                            ? 'text-align-left'
                            : '',
                        header === 'AmountOfMoney' ? 'text-align-right' : '',
                        header === 'AccountingDate' ? 'min-w160' : '',
                        header === 'DayVouchers' ? 'min-w160' : '',
                        header === 'NumberVouchers' ? 'min-w160' : '',
                        header === 'Interpret' ? 'min-w320' : '',
                        header === 'AmountOfMoney' ? 'min-w160' : '',
                        header === 'ObjectCode' ? 'min-w230' : '',
                        header === 'Object' ? 'min-w160' : '',
                        header === 'Address' ? 'min-w300' : '',
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
                            header === 'AccountingDate' ||
                            header === 'DayVouchers'
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

                    <template v-else-if="header === 'AmountOfMoney'">
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
                        v-else-if="header === 'AccountingDate'"
                        kind="data"
                        :class="
                            payment?.Selected
                                ? 'tr-hover text-align-center min-w160'
                                : 'text-align-center min-w160'
                        "
                        :text="formatDate(payment?.AccountingDate) || ''"
                        :subtext="formatDate(payment?.AccountingDate) || ''"
                    ></MTooltip>

                    <MTooltip
                        v-else-if="header === 'DayVouchers'"
                        kind="data"
                        :class="
                            payment?.Selected
                                ? 'tr-hover text-align-center min-w160'
                                : 'text-align-center min-w160'
                        "
                        :text="formatDate(payment?.DayVouchers) || ''"
                        :subtext="formatDate(payment?.DayVouchers) || ''"
                    ></MTooltip>

                    <MTooltip
                        v-else-if="header === 'AmountOfMoney'"
                        kind="data"
                        :class="
                            payment?.Selected
                                ? 'tr-hover text-align-right min-w160'
                                : 'text-align-right min-w160'
                        "
                        :text="payment?.AmountOfMoney || ''"
                        :subtext="payment?.AmountOfMoney || ''"
                    ></MTooltip>

                    <MTooltip
                        v-else
                        kind="data"
                        :className="[
                            payment?.Selected ? 'tr-hover' : '',
                            header === 'NumberVouchers'
                                ? 'min-w160 drilldown'
                                : '',
                            header === 'Interpret' ? 'min-w320' : '',
                            header === 'ObjectCode' ? 'min-w230' : '',
                            header === 'Object' ? 'min-w160' : '',
                            header === 'Address' ? 'min-w300' : '',
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
                        header !== 'AccountingDate' &&
                        header !== 'Feature' &&
                        header !== 'DayVouchers' &&
                        header !== 'AmountOfMoney'
                            ? 'text-align-left'
                            : '',
                        header === 'AmountOfMoney' ? 'text-align-right' : '',
                        header === 'AccountingDate' ? 'min-w160' : '',
                        header === 'DayVouchers' ? 'min-w160' : '',
                        header === 'NumberVouchers' ? 'min-w160' : '',
                        header === 'Interpret' ? 'min-w320' : '',
                        header === 'AmountOfMoney' ? 'min-w160' : '',
                        header === 'ObjectCode' ? 'min-w230' : '',
                        header === 'Object' ? 'min-w160' : '',
                        header === 'Address' ? 'min-w300' : '',
                        header === 'Feature' ? 'min-w120' : '',
                        header === 'Selected' ? 'min-w40' : '',
                    ]"
                    ref="thElement"
                >
                    <template v-if="header === 'Selected'"> </template>

                    <template v-else-if="header === 'AccountingDate'">
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
                    <template v-else-if="header === 'Feature'"> </template>
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
    name: "TheTablePayment",
    components: {
        draggable: VueDraggableNext,
    },
    data() {
        return {
            paymentList: [
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
                },
                {
                    AccountingDate: "02/05/2023",
                    DayVouchers: "02/05/2023",
                    NumberVouchers: "PT0001",
                    Interpret: "Chi tiền cho Nguyễn Văn Mạnh",
                    AmountOfMoney: "1.500.000",
                    ObjectCode: "KH00002",
                    Object: "Nguyễn Văn Mạnh",
                    Address: "139 Nguyễn Tuân - Cầu Giấy - Hà Nội",
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
                "AccountingDate",
                "DayVouchers",
                "NumberVouchers",
                "Interpret",
                "AmountOfMoney",
                "ObjectCode",
                "Object",
                "Address",
                "Feature",
            ],
            isShowSkeleton: false,
        };
    },

    methods: {},

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
