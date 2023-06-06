<template>
    <table id="tbEmployeeList" class="paymentList popup__payment-detail">
        <thead>
            <tr class="table__field">
                <th scope="col" class="text-align-left min-w40">
                    <span class="block-center">#</span>
                </th>
                <th class="text-align-left min-w350">
                    <span
                        ><span class="text-align-left">{{
                            $t("journal_memo")
                        }}</span></span
                    >
                </th>
                <th class="text-align-left min-w100">
                    <span
                        ><span class="text-align-left">
                            <MTooltip
                                :text="$t('debit_account')"
                                :subtext="$t('debit_accountTooltip')"
                                kind="title"
                            ></MTooltip></span
                    ></span>
                </th>
                <th class="text-align-left min-w100">
                    <span
                        ><span class="text-align-left">
                            <MTooltip
                                :text="$t('credit_account')"
                                :subtext="$t('credit_accountTooltip')"
                                kind="title"
                            ></MTooltip> </span
                    ></span>
                </th>
                <th class="text-align-right min-w120">
                    <span
                        ><span class="text-align-right">{{
                            $t("amount")
                        }}</span></span
                    >
                </th>
                <th class="text-align-left min-w160">
                    <span
                        ><span class="text-align-left">{{
                            $t("supplier_code")
                        }}</span></span
                    >
                </th>
                <th class="text-align-left min-w350">
                    <span
                        ><span class="text-align-left">{{
                            $t("ObjectName")
                        }}</span></span
                    >
                </th>
                <th scope="col" class="text-align-left min-w40">
                    <span class="block-center"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="popup__payment-detail-row">
                <td class="text-align-center min-w40 hover-row">
                    <span class="block-center">1</span>
                </td>

                <td
                    class="min-w350 td ms-table--td dynamic-column border-left-none"
                >
                    <MInput
                        tabindex="4"
                        id="journal_memo_detail"
                        kind="default"
                        ref="txtjournal_memo_detail"
                        v-model="payment_detail.journal_memo_detail"
                    />
                </td>
                <td class="min-w100">
                    <MComboboxTable
                        :data="dataAccountParent"
                        :iconCombobox="iconComboboxDebitAccount"
                        :btnIconCombobox="btnIconComboboxDebitAccount"
                        :optionWrapperCombobox="
                            optionWrapperComboboxDebitAccount
                        "
                        tabindex="4"
                        @selectedRecord="selectedDebitAccount"
                        style="width: 100px; margin: 0 auto"
                        kind="generalAccount"
                        :recordData="debit_account_id"
                        :headersColumn="['account_number', 'account_name']"
                        :headersData="['account_number', 'account_name']"
                        @setValueInputComboboxTable="
                            setValueInputComboboxTableDebitAccount
                        "
                        kindOf="debitAccount"
                    ></MComboboxTable>
                </td>
                <td class="min-w100">
                    <MComboboxTable
                        :iconCombobox="iconComboboxCreditAccount"
                        :btnIconCombobox="btnIconComboboxCreditAccount"
                        :optionWrapperCombobox="
                            optionWrapperComboboxCreditAccount
                        "
                        style="width: 100px; margin: 0 auto"
                        tabindex="4"
                        @selectedRecord="selectedCreditAccount"
                        kind="generalAccount"
                        :recordData="credit_account_id"
                        :headersColumn="['account_number', 'account_name']"
                        :headersData="['account_number', 'account_name']"
                        @setValueInputComboboxTable="
                            setValueInputComboboxTableCreditAccount
                        "
                        kindOf="debitAccount"
                    ></MComboboxTable>
                </td>
                <td class="text-align-right min-w120">
                    <MInput
                        tabindex="4"
                        id="amount"
                        kind="default"
                        ref="txtamount"
                        style="text-align: end"
                        v-model="payment_detail.amount"
                    />
                </td>
                <td class="min-w160">
                    <MComboboxTable
                        :iconCombobox="iconComboboxSupplierCodeDetail"
                        :btnIconCombobox="btnIconComboboxSupplierCodeDetail"
                        :optionWrapperCombobox="
                            optionWrapperComboboxSupplierCodeDetail
                        "
                        tabindex="4"
                        @selectedRecord="selectedRecordDetail"
                        kind="supplierCode"
                        :recordData="supplierCodeDetail"
                        :headersColumn="[
                            'supplier_code',
                            'supplier_name',
                            'supplier_tax_code',
                            'supplier_address',
                            'supplier_phone_number',
                        ]"
                        @setValueInputComboboxTable="
                            setValueInputComboboxTableDetail
                        "
                        styleTranX="transform: translateX(-293px)"
                    ></MComboboxTable>
                </td>
                <td class="min-w350">
                    <span class="text-only-line">{{
                        payment_detail.supplier_name_detail
                    }}</span>
                </td>
                <td class="min-w40 hover-row">
                    <div
                        style="cursor: pointer; margin: 0 auto"
                        class="trash"
                    ></div>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="table__payment-field">
                <th scope="col" class="text-align-left min-w40"></th>
                <th class="text-align-left min-w160">
                    <span><span class="text-align-center">Tổng</span></span>
                </th>
                <th class="text-align-left min-w100">
                    <span></span>
                </th>
                <th class="text-align-left min-w100">
                    <span></span>
                </th>
                <th class="text-align-right min-w120">
                    <span><span class="text-align-right">3.784.462</span></span>
                </th>
                <th class="text-align-left min-w160">
                    <span></span>
                </th>
                <th class="text-align-left min-w350">
                    <span></span>
                </th>
                <th scope="col" class="text-align-left min-w40">
                    <span class="block-center"></span>
                </th>
            </tr>
        </tfoot>
    </table>
</template>

<script>
export default {
    name: "PopupPaymentDetail",

    data() {
        return {
            payment_detail: {
                journal_memo_detail: "",
                amount: 0,
                supplier_name_detail: "",
            },
            debit_account_id: "",
            credit_account_id: "",
            supplierCodeDetail: "",
            iconComboboxDebitAccount: null,
            btnIconComboboxDebitAccount: null,
            optionWrapperComboboxDebitAccount: null,
            iconComboboxCreditAccount: null,
            btnIconComboboxCreditAccount: null,
            optionWrapperComboboxCreditAccount: null,
            iconComboboxSupplierCodeDetail: null,
            btnIconComboboxSupplierCodeDetail: null,
            optionWrapperComboboxSupplierCodeDetail: null,
        };
    },

    mounted() {
        this.iconComboboxDebitAccount = this.$refs.iconComboboxDebitAccount;
        this.btnIconComboboxDebitAccount =
            this.$refs.btnIconComboboxDebitAccount;
        this.optionWrapperComboboxDebitAccount =
            this.$refs.optionWrapperComboboxDebitAccount;

        this.iconComboboxCreditAccount = this.$refs.iconComboboxCreditAccount;
        this.btnIconComboboxCreditAccount =
            this.$refs.btnIconComboboxCreditAccount;
        this.optionWrapperComboboxCreditAccount =
            this.$refs.optionWrapperComboboxCreditAccount;

        this.iconComboboxSupplierCodeDetail =
            this.$refs.iconComboboxSupplierCodeDetail;
        this.btnIconComboboxSupplierCodeDetail =
            this.$refs.btnIconComboboxSupplierCodeDetail;
        this.optionWrapperComboboxSupplierCodeDetail =
            this.$refs.optionWrapperComboboxSupplierCodeDetail;
    },

    methods: {
        setValueInputComboboxTableDebitAccount() {
            this.debit_account_id = "";
        },

        setValueInputComboboxTableCreditAccount() {
            this.credit_account_id = "";
        },

        setValueInputComboboxTableDetail() {
            this.supplierCodeDetail = "";
        },
    },
};
</script>

<style scoped>
@import url(@/css/components/tablePayment.css);
@import url(@/css/layout/paymentDetail.css);
@import url(../../css/layout/settingUI.css);
.paymentList tr td:nth-last-child(2) {
    border-right: 1px dotted var(--boder-primary);
}
.trash {
    background: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -464px -313px;
    width: 15px;
    height: 15px;
}

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

.employee tbody tr td:last-child {
    position: relative;
    transform: translateX(-1px);
}

.employee .table__field {
    position: static;
}

.employee tr th {
    border: none;
}

.supplierCode {
    width: 100%;
}

.supplierCode thead tr {
    display: flex;
    background: #eceef1;
    padding-right: 10px;
}

.supplierCode thead tr div {
    padding: 0 10px;
    height: 28px;
}

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
</style>
