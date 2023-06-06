<template>
    <div class="con-ms-popup cash_detail">
        <div
            class="ms-popup-content ms-popup"
            style="min-width: 100%; max-width: 100%; width: 100%; height: 100%"
        >
            <div class="ms-popup--head cash-detail">
                <div class="ms-popup--content">
                    <div class="header-layout-wrap">
                        <div class="flex">
                            <div class="base-view-detail">
                                <div class="header-layout header__popup-detail">
                                    <div class="top-header">
                                        <div class="flex block-center p-r-10">
                                            <div class="recent-log-btn"></div>
                                        </div>
                                        <div class="title__popup-detail">
                                            {{ $t("PaymentTitle") }} xxx15
                                        </div>
                                        <div class="header-detail-input">
                                            <div
                                                class="paging__record"
                                                @click="handleOpenDropdown"
                                                style="width: 350px"
                                                ref="dropdownPtherExpenses"
                                            >
                                                <div
                                                    class="input__wrapper input__wrapprt-lang dropdown"
                                                >
                                                    <button
                                                        class="input__icon dropdown-icon"
                                                        fdprocessedid="jeq9qa"
                                                    >
                                                        <div
                                                            class="input__icon-dropdown"
                                                            ref="iconDropdownOtherExpenses"
                                                        ></div>
                                                    </button>
                                                    <input
                                                        readonly="true"
                                                        type="text"
                                                        style="border: none"
                                                        class="input__type dropdown-input paging-input input__lang"
                                                        v-model="otherExpenses"
                                                        fdprocessedid="epqss"
                                                    />

                                                    <div
                                                        v-if="
                                                            isOpenOtherExpenses
                                                        "
                                                        class="option__wrapper-lang"
                                                    >
                                                        <ul
                                                            class="option__list scrollbar_customize"
                                                        >
                                                            <MOptionItem
                                                                v-for="(
                                                                    item, index
                                                                ) in optionItem"
                                                                :key="index"
                                                                :text="
                                                                    $t(
                                                                        item.text
                                                                    )
                                                                "
                                                                :isActive="
                                                                    item.isActive
                                                                "
                                                                @handleClickItem="
                                                                    handleClickItem
                                                                "
                                                                :isDropdownLang="
                                                                    true
                                                                "
                                                            ></MOptionItem>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="header-detail-buttons flex">
                                            <div class="guide-tour">
                                                <div class="mi-24 block-center">
                                                    <div class="mi-tour"></div>
                                                </div>
                                                <span
                                                    class="label-guide-tour drilldown"
                                                >
                                                    {{ $t("Tutorial") }}</span
                                                >
                                            </div>

                                            <div class="header-detail-btn">
                                                <div
                                                    class="wrap-icon mi-24"
                                                    @click="handleShowSettingUI"
                                                >
                                                    <div
                                                        class="icon__setting_cash_detail tooltip"
                                                    >
                                                        <MTooltip
                                                            style="top: 163%"
                                                            kind="setting"
                                                            :subtext="
                                                                $t(
                                                                    'TooltipCustomizeInterface'
                                                                )
                                                            "
                                                        ></MTooltip>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="header-detail-btn">
                                                <div
                                                    class="form__header-question wrap-icon tooltip mi-24"
                                                >
                                                    <div
                                                        class="form__header-icon-question"
                                                    >
                                                        <MTooltip
                                                            kind="help"
                                                            :subtext="
                                                                $t(
                                                                    'TooltipHelp'
                                                                )
                                                            "
                                                            style="top: 163%"
                                                        ></MTooltip>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="header-detail-btn">
                                                <div
                                                    class="wrap-icon confirm__close-popup mi-24"
                                                    @click="closeCashDetail"
                                                >
                                                    <div
                                                        class="icon-close tooltip"
                                                    >
                                                        <MTooltip
                                                            kind="close"
                                                            :subtext="
                                                                $t(
                                                                    'TooltipClose'
                                                                )
                                                            "
                                                            style="top: 163%"
                                                        ></MTooltip>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="body-layout body__popup-detail">
                                    <div class="w-full bg left-0">
                                        <div class="body-layout-main">
                                            <div class="flex">
                                                <div class="w-3/4">
                                                    <div class="flex">
                                                        <div
                                                            class="w-4/5 right-separate"
                                                        >
                                                            <div
                                                                class="m-row flex"
                                                            >
                                                                <div
                                                                    class="w-3/7 column-space"
                                                                >
                                                                    <label
                                                                        class="form__label"
                                                                        for="ObjectCode"
                                                                        >{{
                                                                            $t(
                                                                                "Labelsupplier_code"
                                                                            )
                                                                        }}</label
                                                                    >
                                                                    <!-- <MInput
                                                                        tabindex="4"
                                                                        id="ObjectCode"
                                                                        name="MartialStatusName"
                                                                        kind="default"
                                                                        ref="txtObjectCode"
                                                                        v-model="
                                                                            paymentDetail.ObjectCode
                                                                        "
                                                                    /> -->

                                                                    <MComboboxTable
                                                                        :iconCombobox="
                                                                            iconComboboxSupplierCode
                                                                        "
                                                                        :btnIconCombobox="
                                                                            btnIconComboboxSupplierCode
                                                                        "
                                                                        :optionWrapperCombobox="
                                                                            optionWrapperComboboxSupplierCode
                                                                        "
                                                                        tabindex="4"
                                                                        @selectedRecord="
                                                                            selectedRecord
                                                                        "
                                                                        :scrollElement="
                                                                            scrollElementSupplier
                                                                        "
                                                                        kind="supplierCode"
                                                                        :recordData="
                                                                            supplierCode
                                                                        "
                                                                        :headersColumn="[
                                                                            'supplier_code',
                                                                            'supplier_name',
                                                                            'supplier_tax_code',
                                                                            'supplier_address',
                                                                            'supplier_phone_number',
                                                                        ]"
                                                                        @setValueInputComboboxTable="
                                                                            setValueInputComboboxTable
                                                                        "
                                                                    ></MComboboxTable>
                                                                </div>
                                                                <div
                                                                    class="w-4/7"
                                                                >
                                                                    <label
                                                                        class="form__label"
                                                                        for="ObjectName"
                                                                        >{{
                                                                            $t(
                                                                                "LabelObjectName"
                                                                            )
                                                                        }}</label
                                                                    >
                                                                    <MInput
                                                                        tabindex="4"
                                                                        id="ObjectName"
                                                                        name="MartialStatusName"
                                                                        kind="default"
                                                                        ref="txtObjectName"
                                                                        v-model="
                                                                            payment.ObjectName
                                                                        "
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="m-row flex"
                                                            >
                                                                <div
                                                                    class="w-3/7 column-space"
                                                                >
                                                                    <label
                                                                        class="form__label"
                                                                        for="Receiver"
                                                                        >{{
                                                                            $t(
                                                                                "LabelReceiver"
                                                                            )
                                                                        }}</label
                                                                    >
                                                                    <MInput
                                                                        tabindex="4"
                                                                        id="Receiver"
                                                                        kind="default"
                                                                        ref="txtReceiver"
                                                                        v-model="
                                                                            payment.Receiver
                                                                        "
                                                                    />
                                                                </div>
                                                                <div
                                                                    class="w-4/7"
                                                                >
                                                                    <label
                                                                        class="form__label"
                                                                        for="Address"
                                                                        >{{
                                                                            $t(
                                                                                "LabelAddress"
                                                                            )
                                                                        }}</label
                                                                    >
                                                                    <MInput
                                                                        tabindex="4"
                                                                        id="Address"
                                                                        kind="default"
                                                                        ref="txtAddress"
                                                                        v-model="
                                                                            payment.Address
                                                                        "
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div class="m-row">
                                                                <div
                                                                    class="w-full"
                                                                >
                                                                    <label
                                                                        class="form__label"
                                                                        for="PaymentReason"
                                                                        >{{
                                                                            $t(
                                                                                "LabelPaymentReason"
                                                                            )
                                                                        }}</label
                                                                    >
                                                                    <MInput
                                                                        tabindex="4"
                                                                        id="journal_memo"
                                                                        kind="default"
                                                                        ref="txtJournal_memo"
                                                                        v-model="
                                                                            payment.journal_memo
                                                                        "
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="m-row flex"
                                                            >
                                                                <div
                                                                    class="w-3/7 column-space"
                                                                >
                                                                    <label
                                                                        class="form__label"
                                                                        for="Employee"
                                                                        >{{
                                                                            $t(
                                                                                "LabelEmployee"
                                                                            )
                                                                        }}</label
                                                                    >
                                                                    <MComboboxTable
                                                                        :iconCombobox="
                                                                            iconComboboxEmployeeId
                                                                        "
                                                                        :btnIconCombobox="
                                                                            btnIconComboboxEmployeeId
                                                                        "
                                                                        :optionWrapperCombobox="
                                                                            optionWrapperComboboxEmployeeId
                                                                        "
                                                                        tabindex="4"
                                                                        @selectedRecord="
                                                                            selectedRecordEmployee
                                                                        "
                                                                        kind="employee"
                                                                        :recordData="
                                                                            employeeId
                                                                        "
                                                                        :headersColumn="[
                                                                            'employee_code',
                                                                            'fullname',
                                                                            'department_name',
                                                                            'phone_number',
                                                                        ]"
                                                                        @setValueInputComboboxTable="
                                                                            setValueInputComboboxTableEmployee
                                                                        "
                                                                    ></MComboboxTable>
                                                                </div>
                                                                <div
                                                                    class="w-4/7 width-240"
                                                                >
                                                                    <label
                                                                        class="form__label"
                                                                        for="Attach"
                                                                        >{{
                                                                            $t(
                                                                                "LabelAttach"
                                                                            )
                                                                        }}</label
                                                                    >
                                                                    <MInput
                                                                        tabindex="4"
                                                                        id="Attach"
                                                                        name="MartialStatusName"
                                                                        kind="default"
                                                                        ref="txtAttach"
                                                                        v-model="
                                                                            payment.Attach
                                                                        "
                                                                        className="kindNumber"
                                                                        :placeHolder="
                                                                            $t(
                                                                                'Quantity'
                                                                            )
                                                                        "
                                                                    />
                                                                </div>
                                                                <div
                                                                    class="original__vouchers"
                                                                >
                                                                    {{
                                                                        $t(
                                                                            "LabelOriginalVouchers"
                                                                        )
                                                                    }}
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="m-row flex reference"
                                                            >
                                                                <div
                                                                    class="reference-title"
                                                                >
                                                                    {{
                                                                        $t(
                                                                            "LabelReference"
                                                                        )
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="ms-reference"
                                                                >
                                                                    ...
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="w-1/5">
                                                            <div
                                                                class="left-separate m-row-padding"
                                                            >
                                                                <label
                                                                    for="AccountingDate"
                                                                    class="form__label"
                                                                    >{{
                                                                        $t(
                                                                            "Labelposted_date"
                                                                        )
                                                                    }}
                                                                </label>
                                                                <div
                                                                    :class="{
                                                                        'tooltip-error':
                                                                            isTooltip.isTooltipAccountingDate,
                                                                    }"
                                                                >
                                                                    <MInput
                                                                        type="date"
                                                                        tabindex="5"
                                                                        name="AccountingDate"
                                                                        id="AccountingDate"
                                                                        kind="default"
                                                                        ref="txtAccountingDate"
                                                                        v-model="
                                                                            payment.posted_date
                                                                        "
                                                                        :isShowTooltip="
                                                                            isTooltip.isTooltipAccountingDate
                                                                        "
                                                                        @blur="
                                                                            isInValid(
                                                                                payment.AccountingDate,
                                                                                'date'
                                                                            )
                                                                                ? (isTooltip.isTooltipAccountingDate = true)
                                                                                : (isTooltip.isTooltipAccountingDate = false)
                                                                        "
                                                                    />
                                                                    <MTooltip
                                                                        v-if="
                                                                            isTooltip.isTooltipAccountingDate
                                                                        "
                                                                        :subtext="
                                                                            $t(
                                                                                'LabelAccountingDate'
                                                                            ) +
                                                                            $t(
                                                                                'ErrorDate'
                                                                            )
                                                                        "
                                                                        kind="error"
                                                                    ></MTooltip>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="left-separate m-row-padding"
                                                            >
                                                                <label
                                                                    for="PaymentDate"
                                                                    class="form__label"
                                                                    >{{
                                                                        $t(
                                                                            "LabelPaymentDate"
                                                                        )
                                                                    }}
                                                                </label>
                                                                <div
                                                                    :class="{
                                                                        'tooltip-error':
                                                                            isTooltip.isTooltipPaymentDate,
                                                                    }"
                                                                >
                                                                    <MInput
                                                                        type="date"
                                                                        tabindex="5"
                                                                        name="PaymentDate"
                                                                        id="PaymentDate"
                                                                        kind="default"
                                                                        ref="txtPaymentDate"
                                                                        v-model="
                                                                            payment.ref_date
                                                                        "
                                                                        :isShowTooltip="
                                                                            isTooltip.isTooltipPaymentDate
                                                                        "
                                                                        @blur="
                                                                            isInValid(
                                                                                payment.PaymentDate,
                                                                                'date'
                                                                            )
                                                                                ? (isTooltip.isTooltipPaymentDate = true)
                                                                                : (isTooltip.isTooltipPaymentDate = false)
                                                                        "
                                                                    />
                                                                    <MTooltip
                                                                        v-if="
                                                                            isTooltip.isTooltipPaymentDate
                                                                        "
                                                                        :subtext="
                                                                            $t(
                                                                                'LabelPaymentDate'
                                                                            ) +
                                                                            $t(
                                                                                'ErrorDate'
                                                                            )
                                                                        "
                                                                        kind="error"
                                                                    ></MTooltip>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="left-separate m-row-padding"
                                                            >
                                                                <label
                                                                    class="form__label"
                                                                    for="PaymentNumber"
                                                                    >{{
                                                                        $t(
                                                                            "LabelPaymentNumber"
                                                                        )
                                                                    }}</label
                                                                >
                                                                <MInput
                                                                    tabindex="4"
                                                                    id="PaymentNumber"
                                                                    kind="default"
                                                                    ref="txtPaymentNumber"
                                                                    v-model="
                                                                        payment.PaymentNumber
                                                                    "
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="w-1/4">
                                                    <div
                                                        class="summary-info-title"
                                                    >
                                                        {{
                                                            $t(
                                                                "LabelTotalMoney"
                                                            )
                                                        }}
                                                    </div>
                                                    <h1
                                                        class="summary-info-number"
                                                    >
                                                        0
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grid__table">
                                        <div>
                                            <div
                                                class="ms-tabs-position-top tabs"
                                            >
                                                <div class="header__reference">
                                                    <span
                                                        class="text__reference"
                                                        >{{
                                                            $t(
                                                                "LabelAccounting"
                                                            )
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="wrap__table">
                                                <table
                                                    id="tbEmployeeList"
                                                    class="paymentList popup__payment-detail"
                                                >
                                                    <thead>
                                                        <tr
                                                            class="table__field"
                                                        >
                                                            <th
                                                                scope="col"
                                                                class="text-align-left min-w40"
                                                            >
                                                                <span
                                                                    class="block-center"
                                                                    >#</span
                                                                >
                                                            </th>
                                                            <th
                                                                class="text-align-left min-w350"
                                                            >
                                                                <span
                                                                    ><span
                                                                        class="text-align-left"
                                                                        >{{
                                                                            $t(
                                                                                "journal_memo"
                                                                            )
                                                                        }}</span
                                                                    ></span
                                                                >
                                                            </th>
                                                            <th
                                                                class="text-align-left min-w100"
                                                            >
                                                                <span
                                                                    ><span
                                                                        class="text-align-left"
                                                                    >
                                                                        <MTooltip
                                                                            :text="
                                                                                $t(
                                                                                    'debit_account'
                                                                                )
                                                                            "
                                                                            :subtext="
                                                                                $t(
                                                                                    'debit_accountTooltip'
                                                                                )
                                                                            "
                                                                            kind="title"
                                                                        ></MTooltip></span
                                                                ></span>
                                                            </th>
                                                            <th
                                                                class="text-align-left min-w100"
                                                            >
                                                                <span
                                                                    ><span
                                                                        class="text-align-left"
                                                                    >
                                                                        <MTooltip
                                                                            :text="
                                                                                $t(
                                                                                    'credit_account'
                                                                                )
                                                                            "
                                                                            :subtext="
                                                                                $t(
                                                                                    'credit_accountTooltip'
                                                                                )
                                                                            "
                                                                            kind="title"
                                                                        ></MTooltip> </span
                                                                ></span>
                                                            </th>
                                                            <th
                                                                class="text-align-right min-w120"
                                                            >
                                                                <span
                                                                    ><span
                                                                        class="text-align-right"
                                                                        >{{
                                                                            $t(
                                                                                "amount"
                                                                            )
                                                                        }}</span
                                                                    ></span
                                                                >
                                                            </th>
                                                            <th
                                                                class="text-align-left min-w160"
                                                            >
                                                                <span
                                                                    ><span
                                                                        class="text-align-left"
                                                                        >{{
                                                                            $t(
                                                                                "supplier_code"
                                                                            )
                                                                        }}</span
                                                                    ></span
                                                                >
                                                            </th>
                                                            <th
                                                                class="text-align-left min-w350"
                                                            >
                                                                <span
                                                                    ><span
                                                                        class="text-align-left"
                                                                        >{{
                                                                            $t(
                                                                                "ObjectName"
                                                                            )
                                                                        }}</span
                                                                    ></span
                                                                >
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                class="text-align-left min-w40"
                                                            >
                                                                <span
                                                                    class="block-center"
                                                                ></span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            class="popup__payment-detail-row"
                                                            v-for="(
                                                                rowPaymentDetail,
                                                                index
                                                            ) in rowPaymentDetails"
                                                            :key="index"
                                                            @click="
                                                                handleClickEditPaymentDetail(
                                                                    rowPaymentDetail,
                                                                    index
                                                                )
                                                            "
                                                            :class="
                                                                rowPaymentDetail.isEditAble
                                                                    ? 'tr-hover_editable'
                                                                    : ''
                                                            "
                                                        >
                                                            <td
                                                                class="text-align-center min-w40 hover-row"
                                                                :class="
                                                                    rowPaymentDetail.isEditAble
                                                                        ? 'tr-hover_editable'
                                                                        : ''
                                                                "
                                                            >
                                                                <span
                                                                    class="block-center"
                                                                    >{{
                                                                        index +
                                                                        1
                                                                    }}</span
                                                                >
                                                            </td>

                                                            <td
                                                                class="min-w350 td ms-table--td dynamic-column border-left-none"
                                                            >
                                                                <MInput
                                                                    v-if="
                                                                        rowPaymentDetail.isEditAble
                                                                    "
                                                                    tabindex="4"
                                                                    id="journal_memo_detail"
                                                                    kind="default"
                                                                    ref="txtjournal_memo_detail"
                                                                    v-model="
                                                                        rowPaymentDetail.journal_memo_detail
                                                                    "
                                                                />
                                                                <span v-else>{{
                                                                    rowPaymentDetail.journal_memo_detail
                                                                }}</span>
                                                            </td>
                                                            <td
                                                                class="min-w100"
                                                            >
                                                                <MComboboxTable
                                                                    v-if="
                                                                        rowPaymentDetail.isEditAble
                                                                    "
                                                                    :data="
                                                                        dataAccountParent
                                                                    "
                                                                    :iconCombobox="
                                                                        iconComboboxDebitAccount
                                                                    "
                                                                    :btnIconCombobox="
                                                                        btnIconComboboxDebitAccount
                                                                    "
                                                                    :optionWrapperCombobox="
                                                                        optionWrapperComboboxDebitAccount
                                                                    "
                                                                    tabindex="4"
                                                                    @selectedRecord="
                                                                        selectedDebitAccount
                                                                    "
                                                                    style="
                                                                        width: 100px;
                                                                        margin: 0
                                                                            auto;
                                                                    "
                                                                    kind="generalAccount"
                                                                    :recordData="
                                                                        debit_account_id
                                                                    "
                                                                    :headersColumn="[
                                                                        'account_number',
                                                                        'account_name',
                                                                    ]"
                                                                    :headersData="[
                                                                        'account_number',
                                                                        'account_name',
                                                                    ]"
                                                                    @setValueInputComboboxTable="
                                                                        setValueInputComboboxTableDebitAccount
                                                                    "
                                                                    kindOf="debitAccount"
                                                                ></MComboboxTable>
                                                            </td>
                                                            <td
                                                                class="min-w100"
                                                            >
                                                                <MComboboxTable
                                                                    v-if="
                                                                        rowPaymentDetail.isEditAble
                                                                    "
                                                                    :iconCombobox="
                                                                        iconComboboxCreditAccount
                                                                    "
                                                                    :btnIconCombobox="
                                                                        btnIconComboboxCreditAccount
                                                                    "
                                                                    :optionWrapperCombobox="
                                                                        optionWrapperComboboxCreditAccount
                                                                    "
                                                                    style="
                                                                        width: 100px;
                                                                        margin: 0
                                                                            auto;
                                                                    "
                                                                    tabindex="4"
                                                                    @selectedRecord="
                                                                        selectedCreditAccount
                                                                    "
                                                                    kind="generalAccount"
                                                                    :recordData="
                                                                        credit_account_id
                                                                    "
                                                                    :headersColumn="[
                                                                        'account_number',
                                                                        'account_name',
                                                                    ]"
                                                                    :headersData="[
                                                                        'account_number',
                                                                        'account_name',
                                                                    ]"
                                                                    @setValueInputComboboxTable="
                                                                        setValueInputComboboxTableCreditAccount
                                                                    "
                                                                    kindOf="debitAccount"
                                                                ></MComboboxTable>
                                                            </td>
                                                            <td
                                                                class="text-align-right min-w120"
                                                            >
                                                                <MInput
                                                                    v-if="
                                                                        rowPaymentDetail.isEditAble
                                                                    "
                                                                    tabindex="4"
                                                                    id="amount"
                                                                    kind="default"
                                                                    ref="txtamount"
                                                                    style="
                                                                        text-align: end;
                                                                    "
                                                                    v-model="
                                                                        rowPaymentDetail.amount
                                                                    "
                                                                />
                                                                <span v-else>{{
                                                                    rowPaymentDetail.amount
                                                                }}</span>
                                                            </td>
                                                            <td
                                                                class="min-w160"
                                                            >
                                                                <MComboboxTable
                                                                    v-if="
                                                                        rowPaymentDetail.isEditAble
                                                                    "
                                                                    :iconCombobox="
                                                                        iconComboboxSupplierCodeDetail
                                                                    "
                                                                    :btnIconCombobox="
                                                                        btnIconComboboxSupplierCodeDetail
                                                                    "
                                                                    :optionWrapperCombobox="
                                                                        optionWrapperComboboxSupplierCodeDetail
                                                                    "
                                                                    tabindex="4"
                                                                    @selectedRecord="
                                                                        selectedRecordDetail
                                                                    "
                                                                    kind="supplierCode"
                                                                    :recordData="
                                                                        supplierCodeDetail
                                                                    "
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
                                                            <td
                                                                class="min-w350"
                                                            >
                                                                <span
                                                                    class="text-only-line"
                                                                    >{{
                                                                        rowPaymentDetail.supplier_name_detail
                                                                    }}</span
                                                                >
                                                            </td>
                                                            <td
                                                                class="min-w40 hover-row"
                                                                :class="
                                                                    rowPaymentDetail.isEditAble
                                                                        ? 'tr-hover_editable'
                                                                        : ''
                                                                "
                                                            >
                                                                <div
                                                                    style="
                                                                        cursor: pointer;
                                                                        margin: 0
                                                                            auto;
                                                                    "
                                                                    class="trash"
                                                                    @click="
                                                                        handleClickTrash(
                                                                            index
                                                                        )
                                                                    "
                                                                ></div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr
                                                            class="table__payment-field"
                                                        >
                                                            <th
                                                                scope="col"
                                                                class="text-align-left min-w40"
                                                            ></th>
                                                            <th
                                                                class="text-align-left min-w160"
                                                            >
                                                                <span
                                                                    ><span
                                                                        class="text-align-center"
                                                                        >{{
                                                                            $t(
                                                                                "Total"
                                                                            )
                                                                        }}</span
                                                                    ></span
                                                                >
                                                            </th>
                                                            <th
                                                                class="text-align-left min-w100"
                                                            >
                                                                <span></span>
                                                            </th>
                                                            <th
                                                                class="text-align-left min-w100"
                                                            >
                                                                <span></span>
                                                            </th>
                                                            <th
                                                                class="text-align-right min-w120"
                                                            >
                                                                <span
                                                                    ><span
                                                                        class="text-align-right"
                                                                        >{{
                                                                            totalMoney
                                                                        }}</span
                                                                    ></span
                                                                >
                                                            </th>
                                                            <th
                                                                class="text-align-left min-w160"
                                                            >
                                                                <span></span>
                                                            </th>
                                                            <th
                                                                class="text-align-left min-w350"
                                                            >
                                                                <span></span>
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                class="text-align-left min-w40"
                                                            >
                                                                <span
                                                                    class="block-center"
                                                                ></span>
                                                            </th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="grid__control-item flex m-flex-col-gap-8"
                                    >
                                        <MButton
                                            class="btn btn-default close__add-employee tooltip"
                                            tabindex="17"
                                            :text="$t('AddLine')"
                                            :click="() => AddLineAndClose()"
                                            ref="AddLine"
                                        >
                                        </MButton
                                        ><MButton
                                            class="btn btn-default close__add-employee tooltip"
                                            tabindex="17"
                                            :text="$t('DeleteAllLine')"
                                            :click="DeleteAllLineAndClose"
                                            ref="DeleteAllLine"
                                        >
                                        </MButton>
                                    </div>
                                </div>
                                <div class="footer__layout">
                                    <div
                                        class="footer__button-group flex-row-reverse"
                                    >
                                        <div class="footer__group-right flex">
                                            <div class="flex m-flex-col-gap-10">
                                                <div>
                                                    <MButton
                                                        class="btn btn-default close__add-employee tooltip"
                                                        tabindex="17"
                                                        :text="$t('BtnSave')"
                                                        :click="
                                                            () =>
                                                                btnSaveAndClose(
                                                                    true
                                                                )
                                                        "
                                                        ref="btnSave"
                                                    >
                                                        <MTooltip
                                                            kind="AccountSysterm"
                                                            :subtext="
                                                                $t(
                                                                    'TooltipSave'
                                                                )
                                                            "
                                                        ></MTooltip>
                                                    </MButton>
                                                </div>
                                                <div>
                                                    <MButton
                                                        class="btn btn-primary close__add-employee tooltip"
                                                        tabindex="18"
                                                        :text="
                                                            $t('BtnSaveEndAdd')
                                                        "
                                                        :click="
                                                            () =>
                                                                btnSaveAndClose(
                                                                    false
                                                                )
                                                        "
                                                        ref="btnSaveEndAdd"
                                                    >
                                                        <MTooltip
                                                            kind="AccountSysterm"
                                                            :subtext="
                                                                $t(
                                                                    'TooltipSaveAndAdd'
                                                                )
                                                            "
                                                        ></MTooltip>
                                                    </MButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="footer__group-left flex-grow flex"
                                        >
                                            <MButton
                                                class="btn btn-default close__add-employee"
                                                tabindex="19"
                                                :text="$t('BtnDestroy')"
                                                :click="destroyPopup"
                                                ref="btnDestroy"
                                            >
                                            </MButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MDialog
        v-if="isDialogNotify"
        iconClass="dialog__icon-notify"
        :title="$t('DialogNotify')"
        :message="$t('MessageNotify')"
        :btnNoNotify="$t('BtnNo')"
        :textButton="$t('BtnYes')"
        :btnDestroyNotify="$t('BtnDestroy')"
        @onClickBtnDestroy="onClickBtnDestroy"
        @destroyPopup="destroyPopup"
        @onClickBtnYes="onClickBtnYes"
        kind="notify"
    ></MDialog>

    <MDialog
        v-if="isDialogWarning"
        iconClass="dialog__icon-warning"
        :title="$t('DialogWarning')"
        :message="$t('MessageWarningDeleteLine')"
        :BtnWarningNo="$t('BtnDestroyDialog')"
        :textButton="$t('BtnYes')"
        @onBtnWarningNo="onBtnWarningNo"
        @onBtnWarningYes="onBtnWarningYes"
        kind="warning"
    ></MDialog>
</template>

<script>
import moment from "moment";
export default {
    name: "CashDetail",

    data() {
        return {
            payment: {
                journal_memo: this.$t("PaymentFor"),
                posted_date: moment(Date.now()).format("YYYY-MM-DD"),
                ref_date: moment(Date.now()).format("YYYY-MM-DD"),
            },
            otherExpenses: this.$t("OtherExpenses"),
            isOpenOtherExpenses: false,
            supplierCode: "",
            employeeId: "",
            optionItem: [
                {
                    text: "OtherExpenses",
                    isActive: true,
                },
            ],

            totalMoney: 0,
            debit_account_id: "",
            credit_account_id: "",
            supplierCodeDetail: "",
            isTooltip: {
                isTooltipAccountingDate: false,
                isTooltipPaymentDate: false,
            },
            rowPaymentDetails: [
                {
                    isEditAble: false,
                    journal_memo_detail: this.$t("PaymentFor"),
                    amount: 0,
                    supplier_name_detail: "",
                },
            ],
            cloneRowPaymentDetails: [],
            deleteOne: false,
            isDialogNotify: false,
            isDialogWarning: false,
            iconComboboxSupplierCode: null,
            iconComboboxEmployeeId: null,
            btnIconComboboxSupplierCode: null,
            btnIconComboboxEmployeeId: null,
            optionWrapperComboboxSupplierCode: null,
            optionWrapperComboboxEmployeeId: null,
            scrollElementEmployee: null,
            scrollElementSupplier: null,

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
        window.addEventListener("keydown", this.handlePressKeyShort);
        window.addEventListener("click", this.handleOutsideClick);
        this.scrollElementEmployee = this.$refs.scrollElementEmployee;
        this.scrollElementSupplier = this.$refs.scrollElementSupplier;
        this.iconComboboxSupplierCode = this.$refs.iconComboboxSupplierCode;
        this.iconComboboxEmployeeId = this.$refs.iconComboboxEmployeeId;
        this.btnIconComboboxSupplierCode =
            this.$refs.btnIconComboboxSupplierCode;
        this.btnIconComboboxEmployeeId = this.$refs.btnIconComboboxEmployeeId;
        this.optionWrapperComboboxSupplierCode =
            this.$refs.optionWrapperComboboxSupplierCode;

        this.optionWrapperComboboxEmployeeId =
            this.$refs.optionWrapperComboboxEmployeeId;

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
        this.cloneRowPaymentDetails = JSON.stringify(this.rowPaymentDetails[0]);
        this.cloneRowPaymentDetails = JSON.parse(this.cloneRowPaymentDetails);
        this.cloneRowPaymentDetails = {
            ...this.cloneRowPaymentDetails,
            isEditAble: true,
        };
    },
    beforeUnmount() {
        window.removeEventListener("keydown", this.handlePressKeyShort);
        window.addEventListener("click", this.handleOutsideClick);
    },

    methods: {
        selectedRecord(supplier) {
            console.log(supplier);
        },

        selectedRecordEmployee(employee) {
            console.log(employee);
        },

        setValueInputComboboxTableDebitAccount() {
            this.debit_account_id = "";
        },

        setValueInputComboboxTableCreditAccount() {
            this.credit_account_id = "";
        },

        setValueInputComboboxTableDetail() {
            this.supplierCodeDetail = "";
        },

        /**
         * Hàm set focus cho element xác định
         * Author: KienNT (06/06/2023)
         * @param (value): tham số 1: là element cần focus
         */
        setFocusInput(element) {
            try {
                this.$nextTick(function () {
                    this.$refs[element] && this.$refs[element].setFocus();
                });
            } catch (error) {
                console.log(error);
            }
        },

        /**
         *  handle khi thêm dòng
         * Author: KienNT (06/06/2023)
         */
        AddLineAndClose() {
            if (this.rowPaymentDetails.length === 0) {
                this.rowPaymentDetails = [
                    {
                        isEditAble: true,
                        journal_memo_detail: this.$t("PaymentFor"),
                        amount: 0,
                        supplier_name_detail: "",
                    },
                ];
                return;
            }
            this.rowPaymentDetails.forEach((el) => {
                if (el.isEditAble) {
                    el.isEditAble = false;
                }
            });
            const rowPaymentDetail =
                this.rowPaymentDetails[this.rowPaymentDetails.length - 1];
            this.rowPaymentDetails.push({
                ...rowPaymentDetail,
                isEditAble: true,
            });
            this.deleteOne = false;

            this.cloneRowPaymentDetails = JSON.stringify(
                this.rowPaymentDetails[this.rowPaymentDetails.length - 1]
            );
            this.cloneRowPaymentDetails = JSON.parse(
                this.cloneRowPaymentDetails
            );
            this.cloneRowPaymentDetails = {
                ...this.cloneRowPaymentDetails,
                isEditAble: true,
            };
        },

        /**
         *  handle xoá hết các dòng
         * Author: KienNT (06/06/2023)
         */
        onBtnWarningYes() {
            this.rowPaymentDetails = [
                {
                    isEditAble: true,
                    journal_memo_detail: this.$t("PaymentFor"),
                    amount: 0,
                    supplier_name_detail: "",
                },
            ];
            this.isDialogWarning = false;
        },

        /**
         *  handle không xóa hết dòng
         * Author: KienNT (06/06/2023)
         */
        onBtnWarningNo() {
            this.isDialogWarning = false;
        },

        /**
         *  handle khi mở dropdown
         * Author: KienNT (05/06/2023)
         */
        handleOpenDropdown() {
            try {
                this.$refs["iconDropdownOtherExpenses"].classList.toggle(
                    "rorate-180"
                );
                this.isOpenOtherExpenses = !this.isOpenOtherExpenses;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         *  handle khi đóng popup
         * Author: KienNT (05/06/2023)
         */
        closeCashDetail() {
            this.$emit("closeCashDetail");
        },

        /**
         *  handle xóa hết payment detail
         * Author: KienNT (06/06/2023)
         */
        DeleteAllLineAndClose() {
            this.isDialogWarning = true;
        },

        /**
         *  handle khi nhấn phím tắt
         * Author: KienNT (30/04/2023)
         * @param (event): là event
         */
        handlePressKeyShort(event) {
            // khi nhấn phím esc thì đóng form
            if (event.key === "Escape" || event.keyCode === 27) {
                this.$emit("closeCashDetail");
            }
        },

        /**
         * Hàm set lại cho supplier_code khi nó được gửi lên
         * Author: KienNT (05/06/2023)
         */
        setValueInputComboboxTable() {
            this.supplierCode = "";
        },

        /**
         * Hàm set lại edit cho hàng payment detail
         * Author: KienNT (06/06/2023)
         */
        handleClickEditPaymentDetail(rowPaymentDetail, indexOfficial) {
            const oldcloneRowPaymentDetails = JSON.stringify(
                this.cloneRowPaymentDetails
            );
            let loopFor = false;
            this.rowPaymentDetails.forEach((el, index) => {
                const newCloneRowPaymentDetails = JSON.stringify(el);
                if (
                    newCloneRowPaymentDetails === oldcloneRowPaymentDetails &&
                    index !== 0 &&
                    index !== indexOfficial &&
                    !this.deleteOne
                ) {
                    this.rowPaymentDetails.splice(index, 1);
                    this.deleteOne = true;
                } else {
                    this.cloneRowPaymentDetails = [];
                    loopFor = true;
                }
                if (loopFor) {
                    return;
                }
            });
            this.rowPaymentDetails.forEach((el) => {
                el.isEditAble = false;
            });
            rowPaymentDetail.isEditAble = true;
        },

        /**
         * Hàm click trasj row thì xóa
         * Author: KienNT (06/06/2023)
         */
        handleClickTrash(index) {
            this.rowPaymentDetails.splice(index, 1);
        },

        /**
         * Hàm set lại cho supplier_code khi nó được gửi lên
         * Author: KienNT (05/06/2023)
         */
        setValueInputComboboxTableEmployee() {
            this.employeeId = "";
        },

        /**
         * nghe sự kiện window. Nếu click ko phải là dropdown thì ẩn dropdown
         * Author: KienNT (27/05/2023)
         *   @param (event): là event
         */
        handleOutsideClick(event) {
            try {
                if (
                    this.$refs["dropdownPtherExpenses"] &&
                    !this.$refs["dropdownPtherExpenses"].contains(event.target)
                ) {
                    this.isOpenOtherExpenses = false;
                    if (!this.isOpenOtherExpenses) {
                        if (
                            this.$refs[
                                "iconDropdownOtherExpenses"
                            ].classList.contains("rorate-180")
                        ) {
                            this.$refs[
                                "iconDropdownOtherExpenses"
                            ].classList.remove("rorate-180");
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
        /**
         *  Hàm convert sang ngày, tháng, năm để hiển thị lên input date
         *  Author:KienNT(06/06/2023)
         */
        formatDate() {
            return (inputString = "") => {
                try {
                    if (inputString !== null) {
                        let date = new Date(inputString);
                        return moment(date).format("YYYY-MM-DD");
                    }
                } catch (error) {
                    console.log(error);
                }
            };
        },
    },
};
</script>

<style scoped>
@import url(@/css/layout/cashDetail.css);

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
