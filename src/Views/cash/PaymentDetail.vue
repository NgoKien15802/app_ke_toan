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
                                            {{ $t("PaymentTitle") }}
                                            {{ payment.refno_finance }}
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
                                                          :class="formModePayment===MISAEnum.formMode.Show ? 'disabledDopdown' : ''"
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
                                                          :class="formModePayment===MISAEnum.formMode.Show ? 'disabledDopdown' : ''"
                                                    />

                                                    <!-- <div
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
                                                    </div> -->
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
                                                                            selectedSupplierPayment
                                                                        "
                                                                        :scrollElement="
                                                                            scrollElementSupplier
                                                                        "
                                                                        kind="supplierCode"
                                                                        :recordData="
                                                                            supplierCodePayment
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
                                                                         :isDisabled="formModePayment===MISAEnum.formMode.Show"
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
                                                                            payment.payment_supplier_name
                                                                        "
                                                                        :isDisabled="formModePayment===MISAEnum.formMode.Show"
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
                                                                            payment.payment_receiver
                                                                        "
                                                                         :isDisabled="formModePayment===MISAEnum.formMode.Show"
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
                                                                            payment.payment_supplier_address
                                                                        "
                                                                         :isDisabled="formModePayment===MISAEnum.formMode.Show"
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
                                                                         :isDisabled="formModePayment===MISAEnum.formMode.Show"
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
                                                                         :isDisabled="formModePayment===MISAEnum.formMode.Show"
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
                                                                            payment.document_included
                                                                        "
                                                                        @filterNonNumeric="
                                                                            filterNonNumeric
                                                                        "
                                                                        className="kindNumber"
                                                                        :placeHolder="
                                                                            $t(
                                                                                'Quantity'
                                                                            )
                                                                        "
                                                                         :isDisabled="formModePayment===MISAEnum.formMode.Show"
                                                                        @handleKeyUp="handleKeyUpDocumentIncluded"
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
                                                                        :isDisabled="formModePayment===MISAEnum.formMode.Show"
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
                                                                        :isDisabled="formModePayment===MISAEnum.formMode.Show"
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
                                                                        payment.refno_finance
                                                                    "
                                                                     :isDisabled="formModePayment===MISAEnum.formMode.Show"
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
                                                        {{ isNaN(totalMoney ) ?  0 : numberWithCommas(totalMoney) }}
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
                                            <div class="wrap__table scrollbar_customize">
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
                                                                [rowPaymentDetail.isEditAble
                                                                    ? 'tr-hover_editable'
                                                                    : '',
                                                                formModePayment===MISAEnum.formMode.Show ? 'disabledDopdown' : '']
                                                            "
                                                        >
                                                            <td
                                                                class="text-align-center min-w40 hover-row"
                                                                :class="
                                                                    [rowPaymentDetail.isEditAble
                                                                        ? 'tr-hover_editable'
                                                                        : '',
                                                                    formModePayment===MISAEnum.formMode.Show ? 'disabledDopdown' : ''
                                                                    ]
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
                                                                    id="description"
                                                                    kind="default"
                                                                    ref="txtdescription"
                                                                    v-model="
                                                                        rowPaymentDetail.description
                                                                    "
                                                                />
                                                                <span v-else>{{
                                                                    rowPaymentDetail.description
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
                                                                        (
                                                                            account_id,
                                                                            grade,
                                                                            misa_code_id,
                                                                            account_number
                                                                        ) =>
                                                                            selectedDebitAccount(
                                                                                account_id,
                                                                                grade,
                                                                                misa_code_id,
                                                                                account_number,
                                                                                index
                                                                            )
                                                                    "
                                                                    style="
                                                                        width: 100px;
                                                                        margin: 0
                                                                            auto;
                                                                    "
                                                                    kind="generalAccount"
                                                                    :recordData="
                                                                        rowPaymentDetail.debit_account_name
                                                                    "
                                                                     kindAccount="accountPaymentDetail"
                                                                    :headersColumn="[
                                                                        'account_number',
                                                                        'account_name',
                                                                    ]"
                                                                    :headersData="[
                                                                        'account_number',
                                                                        'account_name',
                                                                    ]"
                                                                    @setValueInputComboboxTable="
                                                                        setValueInputComboboxTableDebitAccount(index)
                                                                    "
                                                                    kindOf="debitAccount"
                                                                ></MComboboxTable>
                                                                <span v-else>{{
                                                                    rowPaymentDetail.debit_account_name
                                                                }}</span>
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
                                                                        (
                                                                            account_id,
                                                                            grade,
                                                                            misa_code_id,
                                                                            account_number
                                                                        ) =>
                                                                            selectedCreditAccount(
                                                                                account_id,
                                                                                grade,
                                                                                misa_code_id,
                                                                                account_number,
                                                                                index
                                                                            )
                                                                    "
                                                                    kind="generalAccount"
                                                                    kindAccount="accountPaymentDetail"
                                                                    :recordData="
                                                                        rowPaymentDetail.credit_account_name
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
                                                                        setValueInputComboboxTableCreditAccount(index)
                                                                    "
                                                                    kindOf="debitAccount"
                                                                ></MComboboxTable>
                                                                <span v-else>{{
                                                                    rowPaymentDetail.credit_account_name
                                                                }}</span>
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
                                                                     @filterNonNumeric="
                                                                            filterNonNumericAmount(index)
                                                                        "
                                                                    @handleKeyUp="()=> handleKeyUpAmount(index)"
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
                                                                        (supplier)=> selectedRecordDetail(supplier,index)
                                                                    "
                                                                    kind="supplierCode"
                                                                    :recordData="
                                                                        rowPaymentDetail.supplierCodeDetail
                                                                    "
                                                                    :headersColumn="[
                                                                        'supplier_code',
                                                                        'supplier_name',
                                                                        'supplier_tax_code',
                                                                        'supplier_address',
                                                                        'supplier_phone_number',
                                                                    ]"
                                                                    kindAccount="accountPaymentDetail"
                                                                    @setValueInputComboboxTable="
                                                                        setValueInputComboboxTableDetail(index)
                                                                    "
                                                                    styleTranX="transform: translateX(-293px)"
                                                                ></MComboboxTable>

                                                                <span v-else>{{
                                                                    rowPaymentDetail.supplierCodeDetail
                                                                }}</span>
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
                                                                    [rowPaymentDetail.isEditAble
                                                                        ? 'tr-hover_editable'
                                                                        : '',
                                                                    formModePayment===MISAEnum.formMode.Show ? 'disabledDopdown' : '']
                                                                "
                                                            >
                                                                <div
                                                                    style="
                                                                        cursor: pointer;
                                                                        margin: 0
                                                                            auto;
                                                                            
                                                                    "
                                                                     :class=" formModePayment===MISAEnum.formMode.Show || formModePayment === MISAEnum.formMode.Edit ? 'disabledDopdown' : ''"
                                                                   
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
                                                    <tfoot >
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
                                                                            isNaN(totalMoney ) ?  0 : numberWithCommas(totalMoney) 
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
                                            :class=" formModePayment===MISAEnum.formMode.Show || formModePayment === MISAEnum.formMode.Edit ? 'disabledDopdown' : ''"
                                        >
                                        </MButton
                                        ><MButton
                                            class="btn btn-default close__add-employee tooltip"
                                            tabindex="17"
                                            :text="$t('DeleteAllLine')"
                                            :click="DeleteAllLineAndClose"
                                            ref="DeleteAllLine"
                                            :class=" formModePayment===MISAEnum.formMode.Show || formModePayment === MISAEnum.formMode.Edit ? 'disabledDopdown' : ''"
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
                                                        :text="formModePayment===MISAEnum.formMode.Show ?$t('Fix') : $t('BtnSave')"
                                                        :click="
                                                            () =>
                                                                btnSaveAndClose('')
                                                        "
                                                        ref="btnSave"
                                                    >
                                                        <MTooltip
                                                            v-if="!formModePayment===MISAEnum.formMode.Show"
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
                                                    <!-- <MButton
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
                                                    </MButton> -->
                                                <button
                                                    class="btn combox-btn"
                                                    :tabindex="tabindex"
                                                    style="border-radius: 3px;"
                                                    v-if="formModePayment!==MISAEnum.formMode.Show"
                                                >
                                                
                                                    <span class="combox-btn-text combox-btn-left"   @click="btnSaveAndClose(textBtn === this.$t('BtnSaveEndAdd') ? MISAEnum.ModeBtn.SaveAndAdd : MISAEnum.ModeBtn.SaveAndClose)">{{ textBtn }}</span>
                                                    <span class="combox-btn-mark"></span>

                                                    <div class="wrap-icon-combox wrap-icon-right" ref="iconContextMenu"  @click="clickBtnRight($event)"><div class="icon__combox-btn"></div></div>
                                                </button>

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
                                                :click="() =>destroyPopup(true)"
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
        @destroyPopup="()=>destroyPopup(true)"
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

      <MContextmenu
        v-if="isContextMenu"
        :left="leftContextMenu"
        :top="topContextMenu"
        kind="btnContextPopup"
        @hideContextMenu="hideContextMenu"
        :refElement="this.$refs.iconContextMenu"
        @handleBtnSaveEndAdd="handleBtnSaveEndAdd"
        @handleBtnSaveEndClose="handleBtnSaveEndClose"
    ></MContextmenu>
</template>

<script>
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
import MISAEnum from "@/js/enum";
import axios from "axios";
export default {
    name: "CashDetail",

    props: {
        formMode: {
            type: String,
        },
        payment_id_selected: {
            type: String,
        }
    },

    data() {
        return {
            MISAEnum,
            payment: {
                journal_memo: this.$t("PaymentFor"),
                posted_date: moment(Date.now()).format("YYYY-MM-DD"),
                ref_date: moment(Date.now()).format("YYYY-MM-DD"),
                payment_supplier_name: "",
                payment_receiver: "",
                payment_supplier_address: "",
                employee_id: "",
                refno_finance: "",
                document_included: "",
                supplier_id: null, 
                total_amount:0
            },
            otherExpenses: this.$t("OtherExpenses"),
            isOpenOtherExpenses: false,
            supplierCodePayment: "",
            supplier_name_detail_fake : "",
            supplier_id_detail_fake : "",
            employeeId: "",
            optionItem: [
                {
                    text: "OtherExpenses",
                    isActive: true,
                },
            ],

            totalMoney: 0,
           
            isTooltip: {
                isTooltipAccountingDate: false,
                isTooltipPaymentDate: false,
            },
            rowPaymentDetails: [
                {
                    isEditAble: false,
                    description: this.$t("PaymentFor"),
                    debit_account_id: "",
                    credit_account_id: "",
                    amount: "0",
                    debit_account_name: "",
                    credit_account_name: "",
                    supplierCodeDetail: "",
                    supplier_id:null,
                    supplier_name_detail:""
                },
            ],
            cloneRowPaymentDetails: [],
            clonePaymentDetail: [],
            clonePayment: {}, 
            errorMessage:[],
            deleteOne: false,
            isContextMenu: false,
            isDialogNotify: false,
            isDialogWarning: false,
            oldPayment: [],
            oldRowPaymentDetails:[],
            formModePayment: "",
            isDialogError:false,
            textBtn: this.$t('BtnSaveEndClose'),
            iconComboboxSupplierCode: null,
            iconComboboxEmployeeId: null,
            btnIconComboboxSupplierCode: null,
            btnIconComboboxEmployeeId: null,
            optionWrapperComboboxSupplierCode: null,
            optionWrapperComboboxEmployeeId: null,
            scrollElementEmployee: null,
            scrollElementSupplier: null,
            leftContextMenu: 0,
            topContextMenu: 0,
            modeBtn:MISAEnum.ModeBtn.SaveAndClose,
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

    watch: {
        "payment.journal_memo": function (newValue, oldValue) {
            this.rowPaymentDetails = this.rowPaymentDetails.map((el) => {

                if (el.description === oldValue) {
                    el.description = newValue;
                }

                return el;
            });
        },

        supplierCodePayment: function (newValue, oldValue) {
            this.rowPaymentDetails = this.rowPaymentDetails.map((el) => {

                if (el.supplierCodeDetail === oldValue) {
                    el.supplierCodeDetail = newValue;
                }
                return el;
            });

        },

        "payment.supplier_id": function (newValue, oldValue) {
            this.rowPaymentDetails = this.rowPaymentDetails.map((el) => {

                if (el.supplier_id === oldValue) {
                    el.supplier_id = newValue;
                }
                return el;
            });
        },
        
       
         rowPaymentDetails: {
            handler: function (newValue) {
                try {
                    newValue.forEach((el,index)=>{
                        if(el.supplierCodeDetail === this.supplierCodePayment && this.isEmpty(this.rowPaymentDetails[index].supplier_name_detail)){
                            this.rowPaymentDetails[index].supplier_name_detail = this.supplier_name_detail_fake;
                            this.rowPaymentDetails[index].supplier_id = this.supplier_id_detail_fake;
                        }
                    })
                    this.totalMoney = newValue.reduce((acc, el) => {
                        return acc + Math.round(this.currencyToNumber(el?.amount));
                    }, 0);
                } catch (error) {
                    console.log(error);
                }
            },
            deep: true,
        },




        "payment.payment_supplier_name": function (newValue, oldValue) {

            if (
                this.payment.journal_memo ===
                this.$t("PaymentFor") + " " + oldValue
            ) {
                this.payment.journal_memo =
                    this.$t("PaymentFor") + " " + newValue;
            }
        },
        "payment.posted_date": function (newValue, oldValue) {

            if (this.formMode === MISAEnum.formMode.Add) {
                if (this.payment.ref_date === oldValue) {
                    this.payment.ref_date = newValue;
                    console.log(this.payment.ref_date, newValue);
                }
            }
        },
    },

    created() {
        this.formModePayment = this.formMode;
        this.modeBtn = localStorage.getItem("modeBtn") || this.modeBtn;
         this.textBtn =  this.modeBtn === MISAEnum.ModeBtn.SaveAndAdd.toString() ? this.$t('BtnSaveEndAdd') : this.$t('BtnSaveEndClose');
        /**
         * Call API lấy ra id bất kỳ khi click btn thêm mới
         * Author: KienNT (06/06/2023)
         */

        if (this.formModePayment === MISAEnum.formMode.Add) {
            // gọi hàm lấy số chứng từ mới
            this.getNewPaymentCode();
        } else if (
            /**
                 * TH nhân bản
                 Author: KienNT (08/06/2023)
                 */
            !this.isEmpty(this.payment_id_selected) &&
            this.formModePayment === MISAEnum.formMode.Duplicate
        ) {
            this.getMasterDetailById(MISAEnum.formMode.Duplicate);
        } else if (this.formModePayment === MISAEnum.formMode.Edit) {
                /**
                 * Call API lấy ra id để sửa
                 Author: KienNT (08/06/2023)
                 */
           
            this.getMasterDetailById();
        } else if (this.formModePayment === MISAEnum.formMode.Show) {
             /**
                 * Call API lấy ra id để xem
                 Author: KienNT (08/06/2023)
                 */
             this.getMasterDetailById();
        }
    },

    methods: {

         /**
         * Hàm lấy ra payment master detail theo id
         * Author: KienNT (09/06/2023)
         */
        getMasterDetailById(formMode = "") {
            try {
                    axios.get('https://localhost:7153/api/v1/Payments/masterdetail', {
                    headers: {
                        'refid': this.payment_id_selected
                    }
                    })
                    .then(this.$emit("hideShowLoading", true))
                    .then((res) => {
                        const master = res.data.Data.Master;
                        const details = res.data.Data.Details;
                        if (formMode === MISAEnum.formMode.Duplicate) {
                            this.getNewPaymentCode();
                        } 
                        this.payment = master;
                        this.employeeId = master?.fullname;
                        this.supplierCodePayment = master?.supplier_code;
                        this.payment.posted_date = this.formatDate(
                            master?.posted_date
                        );
                        this.payment.ref_date = this.formatDate(
                            master?.ref_date
                        );
                        this.payment.total_amount = this.numberWithCommas(master?.total_amount)
                        details.forEach((el, index) => {
                            this.rowPaymentDetails[index] = {
                                ref_detail_id:el?.ref_detail_id,
                                ...this.rowPaymentDetails[index],
                                description: el?.description,
                                credit_account_name: el?.credit_account,
                                credit_account_id: el?.credit_account_id,
                                debit_account_name: el?.debit_account,
                                debit_account_id: el?.debit_account_id,
                                amount: this.numberWithCommas(el?.amount),
                                supplier_id: el?.supplier_id,
                                supplierCodeDetail: el?.payment_detail_supplier_code,
                                supplier_name_detail: el?.payment_detail_supplier_name
                            };
                        });
                        this.oldPayment = JSON.stringify(this.deleteAttrObject(this.payment));
                        this.oldRowPaymentDetails = JSON.stringify(this.deleteEmptyAttributes(this.rowPaymentDetails));
                        this.$emit("hideShowLoading", false);
                    })
                    .catch((res) => {
                        console.log(res);
                    });
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Hàm lấy employee code mới
         * Author: KienNT (01/03/2023)
         */
        getNewPaymentCode() {
            try {
                axios
                    .get("https://localhost:7153/api/v1/Payments/NewRecordCode")
                    .then(this.$emit("hideShowLoading", true))
                    .then((response) => {
                        this.payment.refno_finance = response.data?.Data;
                        // this.newEmployee.Gender = MISAEnum.Gender.Male;
                        // if (this.isEmpty(this.departmentName)) {
                        //     this.newEmployee.DepartmentId = EMPTY_GUID;
                        // }
                        // this.oldEmployee = JSON.stringify(this.newEmployee);
                        /**
                         * Gọi hàm set focus bên input
                         * Author: KienNT (06/06/2023)
                         */
                        // this.setFocusInput("txtEmployeeCode");
                        this.oldPayment = JSON.stringify(this.deleteAttrObject(this.payment));

                        this.oldRowPaymentDetails = JSON.stringify(this.deleteEmptyAttributes(this.rowPaymentDetails));
                        this.$emit("hideShowLoading", false);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        },

         /**
         * Hàm click btn right
         * Author: KienNT (08/06/2023)
         */
        
        clickBtnRight(event) {
            this.isContextMenu = !this.isContextMenu;
            this.leftContextMenu =
                event.target.getBoundingClientRect().x - 70 ;
            this.topContextMenu =
                event.target.getBoundingClientRect().y - 60;
        },

         /**
         * Hàm click contextmenu cất và thêm
         * Author: KienNT (08/06/2023)
         */
        handleBtnSaveEndAdd() {                                                                                                                                             
            this.isContextMenu = !this.isContextMenu;
            this.textBtn = this.$t('BtnSaveEndAdd')
            this.modeBtn = MISAEnum.ModeBtn.SaveAndAdd;
            localStorage.setItem("modeBtn", MISAEnum.ModeBtn.SaveAndAdd);
            this.btnSaveAndClose(MISAEnum.ModeBtn.SaveAndAdd);
        },


          /**
         * Hàm click contextmenu cất và đóng
         * Author: KienNT (08/06/2023)
         */
        handleBtnSaveEndClose() {
            this.isContextMenu = !this.isContextMenu;
            this.textBtn = this.$t('BtnSaveEndClose')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            this.modeBtn = MISAEnum.ModeBtn.SaveAndClose;
            localStorage.setItem("modeBtn", MISAEnum.ModeBtn.SaveAndClose);
            this.btnSaveAndClose(MISAEnum.ModeBtn.SaveAndClose);
        },

         handleValidate() {
            return true;
        },

          /**
         * Hàm validate thành công thì cất data và đóng form, cất và thêm thì cất và data reset form
         * Author: KienNT (08/06/2023)
         *  @param (value): tham số 1: là true, false hiển thị popup
         */
         btnSaveAndClose(modeBtn="") {
             try {
                 let checkState = false;
                 if (this.formModePayment===MISAEnum.formMode.Show) {
                     this.formModePayment = MISAEnum.formMode.Edit;
                     checkState = false;
                 } else if (this.formModePayment === MISAEnum.formMode.Edit) {
                     checkState = true;
                }    
                if (this.handleValidate()) {
                    if (this.formModePayment === MISAEnum.formMode.Add) {
                        // this.postData(MISAEnum.formMode.Add, isCloseForm);

                        this.payment.total_amount = this.totalMoney;
                        this.payment.employee_id = this.payment.employee_id || null;
                        this.payment.refid = uuidv4();
                        this.rowPaymentDetails.forEach((el) => {
                            el.ref_detail_id = uuidv4();
                        })
                        this.clonePaymentDetail = JSON.stringify(this.rowPaymentDetails);
                        this.clonePaymentDetail = JSON.parse(this.clonePaymentDetail);
                        this.clonePaymentDetail = this.clonePaymentDetail.map((el) => {
                            return {
                                ref_detail_id: el.ref_detail_id,
                                debit_account_id: el.debit_account_id || null,
                                credit_account_id: el.credit_account_id || null,
                                amount: this.currencyToNumber(el.amount || '0.0'),
                                description: el.description,
                                supplier_id: el.supplier_id || null,
                            };
                        });
                        this.postData(MISAEnum.formMode.Add, modeBtn);
                    }
                    // đóng form

                    else if (this.formModePayment === MISAEnum.formMode.Edit  && checkState) {
                        this.payment.total_amount = this.totalMoney;
                        this.payment.employee_id = this.payment.employee_id || null;
                        this.clonePayment = JSON.stringify(this.payment);
                        this.clonePayment = JSON.parse(this.clonePayment);
                        const {
                            refid,
                            journal_memo,
                            posted_date,
                            ref_date,
                            payment_supplier_name,
                            payment_receiver,
                            payment_supplier_address,
                            employee_id,
                            refno_finance,
                            document_included,
                            supplier_id,
                            total_amount,
                            ...cast
                        } = this.clonePayment;
                        this.clonePayment = {
                            refid,
                            journal_memo,
                            posted_date,
                            ref_date,
                            payment_supplier_name,
                            payment_receiver,
                            payment_supplier_address,
                            employee_id,
                            refno_finance,
                            document_included,
                            supplier_id,
                            total_amount
                        }
                        console.log(cast);
                        this.clonePaymentDetail = JSON.stringify(this.rowPaymentDetails);
                        this.clonePaymentDetail = JSON.parse(this.clonePaymentDetail);
                        this.clonePaymentDetail = this.clonePaymentDetail.map((el) => {
                            return {
                                ref_detail_id: el?.ref_detail_id,
                                debit_account_id: el.debit_account_id || null,
                                credit_account_id: el.credit_account_id || null,
                                amount: this.currencyToNumber(el.amount || '0.0'),
                                description: el.description,
                                supplier_id: el.supplier_id || null,
                            };
                        });
                        // Sửa nhân viên theo id
                        const requestData = {
                            Master: this.clonePayment,
                            Details: this.clonePaymentDetail,
                        };
                        axios
                            .put(
                                `https://localhost:7153/api/v1/Payments/updateMasterDetail`,
                                requestData
                            )

                            .then(this.$emit("hideShowLoading", true))
                            .then((res) => {
                                console.log(res);
                             if (this.isEmpty(modeBtn)) {
                                // chuyển form về mode show
                                this.formModePayment = MISAEnum.formMode.Show;
                                this.rowPaymentDetails.forEach((el) => {
                                    el.isEditAble = false; 
                                })
                                this.$emit("setFormMode", MISAEnum.formMode.Show);
                            } else  if (modeBtn === MISAEnum.ModeBtn.SaveAndClose) {
                                // reset và đóng form
                                this.destroyPopup(true);
                            } else if (modeBtn === MISAEnum.ModeBtn.SaveAndAdd) {
                                // reset nhưng ko đóng form
                                this.destroyPopup(false);
                                this.formModePayment = MISAEnum.formMode.Add;
                                // lấy 1 id mới
                                this.getNewPaymentCode();
                                this.errorMessage = [];
                            } 
                            this.oldPayment = JSON.stringify(this.deleteAttrObject(this.payment));
                            this.oldRowPaymentDetails = JSON.stringify(this.deleteEmptyAttributes(this.rowPaymentDetails));    
                            this.$emit("hideShowLoading", false);
                            this.$emit("hideShowToast", "edit");
                            this.$emit("handleReLoadData");
                            })
                            .catch((error) => {
                                let response = error.response;
                                let errorData = response?.data?.Data?.Data;
                                console.log(errorData);
                                this.$emit("hideShowLoading", false);
                            });
                     }else if (
                        !this.isEmpty(this.payment_id_selected) &&
                        this.formModePayment === MISAEnum.formMode.Duplicate
                    ) {
                        this.payment.total_amount = this.totalMoney;
                        
                        this.payment.employee_id = this.payment.employee_id || null;
                        this.payment.refid = uuidv4();
                        this.rowPaymentDetails.forEach((el) => {
                            el.ref_detail_id = uuidv4();
                        })
                        this.clonePaymentDetail = JSON.stringify(this.rowPaymentDetails);
                        this.clonePaymentDetail = JSON.parse(this.clonePaymentDetail);
                        this.clonePaymentDetail = this.clonePaymentDetail.map((el) => {
                            return {
                                ref_detail_id: el.ref_detail_id,
                                debit_account_id: el.debit_account_id || null,
                                credit_account_id: el.credit_account_id || null,
                                amount: this.currencyToNumber(el.amount || '0.0'),
                                description: el.description,
                                supplier_id: el.supplier_id || null,
                            };
                        });
                        this.postData(MISAEnum.formMode.Duplicate, modeBtn);
                    } 
                }else {
                    this.hideShowDialogError(true);
                }
            } catch (error) {
                console.log(error);
            }
        },

          /**
         * Hàm post account với từng modeForm: Thêm và nhân bản
         * Author: KienNT (28/05/2023)
         */
        postData(formMode, modeBtn) {
            try {
                const requestData = {
                    Master: this.payment,
                    Details: this.clonePaymentDetail,
                };
                axios
                    .post(
                        "https://localhost:7153/api/v1/Payments/InsertMasterDetail",
                        requestData
                    )
                    .then(this.$emit("hideShowLoading", true),)
                    .then((res) => {
                        console.log(res);
                        if (this.isEmpty(modeBtn)) {
                            // chuyển form về mode show
                            this.formModePayment = MISAEnum.formMode.Show;
                            this.rowPaymentDetails.forEach((el) => {
                                el.isEditAble = false; 
                            })
                            this.$emit("setFormMode", MISAEnum.formMode.Show);
                        } else  if (modeBtn === MISAEnum.ModeBtn.SaveAndClose) {
                            // reset và đóng form
                            this.destroyPopup(true);
                        } else if (modeBtn === MISAEnum.ModeBtn.SaveAndAdd) {
                            // reset nhưng ko đóng form
                            this.destroyPopup(false);
                            this.formModePayment = MISAEnum.formMode.Add;
                            // lấy 1 id mới
                            this.getNewPaymentCode();
                            this.errorMessage = [];
                        }
                        if (formMode === MISAEnum.formMode.Duplicate) {
                            this.$emit("setPaymentSelected")
                            this.$emit("hideShowToast", "duplicate");
                        } else {
                            this.$emit("hideShowToast", "add");
                        }
                        this.oldPayment = JSON.stringify(this.deleteAttrObject(this.payment));
                        this.oldRowPaymentDetails = JSON.stringify(this.deleteEmptyAttributes(this.rowPaymentDetails)); 
                        this.$emit("hideShowLoading", false);
                        this.$emit("handleReLoadData");
                    })
                    .catch((error) => {
                        let response = error.response;
                        let errorData = response?.data?.Data?.Data;
                        console.log(errorData);
                        this.$emit("hideShowLoading", false);
                    });
            } catch (error) {
                console.log(error);
            }
        },


       /**
         * Hàm đóng popup khi click btn hủy
         * Author: KienNT nhân viên(09/06/2023)
         */
        destroyPopup(isClose) {
            try {
                this.payment = {
                    journal_memo: this.$t("PaymentFor"),
                    posted_date: moment(Date.now()).format("YYYY-MM-DD"),
                    ref_date: moment(Date.now()).format("YYYY-MM-DD"),
                    payment_supplier_name: "",
                    payment_receiver: "",
                    payment_supplier_address: "",
                    employee_id: "",
                    refno_finance: "",
                    document_included: "",
                    supplier_id: null, 
                    total_amount:0
                }
                this.rowPaymentDetails = [
                    {
                    isEditAble: false,
                    description: this.$t("PaymentFor"),
                    debit_account_id: "",
                    credit_account_id: "",
                    amount: "0",
                    debit_account_name: "",
                    credit_account_name: "",
                    supplierCodeDetail: "",
                    supplier_id:null,
                    supplier_name_detail:""
                 }
                ]
                this.supplierCodePayment = "";
                this.supplier_name_detail_fake = "";
                this.supplier_id_detail_fake = "";
                this.employeeId = "";
                this.totalMoney = 0;
                this.errorMessage = [];
                this.formModePayment = "";

                if (isClose) {
                   this.$emit("closeCashDetail");
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm handle click combobox item trong employee
         * Author: KienNT (06/06/2023)
         */
        selectedRecordEmployee(employee) {
            this.payment.employee_id = employee.employee_id;
            this.employeeId = employee.fullname;
        },

        setValueInputComboboxTableDebitAccount(index) {
            this.rowPaymentDetails[index].debit_account_name = "";
            this.rowPaymentDetails[index].debit_account_id = "";
        },

        setValueInputComboboxTableCreditAccount(index) {
            this.rowPaymentDetails[index].credit_account_name = "";
            this.rowPaymentDetails[index].credit_account_id = "";
        },

        setValueInputComboboxTableDetail(index) {
            this.rowPaymentDetails[index].supplierCodeDetail = "";
            this.rowPaymentDetails[index].supplier_id = null;
        },

        /**
         * Hàm handle click combobox item trong supplier payment master
         * Author: KienNT (06/06/2023)
         */
        selectedSupplierPayment(supplier) {
            this.payment.payment_supplier_name = supplier.supplier_name;
            this.payment.supplier_id = supplier.supplier_id;
            this.payment.payment_receiver = supplier.supplier_name;
            this.payment.payment_supplier_address = supplier.supplier_address;

          
            this.rowPaymentDetails = this.rowPaymentDetails.map((el) => {
                if (this.isEmpty(el.supplierCodeDetail)) {
                    el.supplierCodeDetail = supplier.supplier_code;
                    el.supplier_id = supplier.supplier_id;
                }
                return el;
            });
            

            this.supplierCodePayment = supplier.supplier_code;

          
            this.supplier_name_detail_fake = supplier.supplier_name;
            this.supplier_id_detail_fake = supplier.supplier_id;

            if (this.payment.journal_memo === this.$t("PaymentFor")) {
                this.payment.journal_memo =
                    this.$t("PaymentFor") + " " + supplier.supplier_name;
            }

            this.rowPaymentDetails = this.rowPaymentDetails.map((el) => {
                if (el.description === this.$t("PaymentFor")) {
                    el.description =
                        this.$t("PaymentFor") + " " + supplier.supplier_name;
                }
                return el;
            });
        },

          /**
         * Hàm ẩn contextmenu khi click ra ngoài element
         * Author: KienNT (08/06/2023)
         */
        hideContextMenu() {
            this.isContextMenu = !this.isContextMenu;
        },

        /**
         * Hàm handle click combobox item trong supplier detail
         * Author: KienNT (06/06/2023)
         */
        selectedRecordDetail(supplier,index) {
            this.rowPaymentDetails[index].supplier_name_detail = supplier.supplier_name;
            this.rowPaymentDetails[index].supplierCodeDetail = supplier.supplier_code;
            this.rowPaymentDetails[index].supplier_id = supplier.supplier_id;
        },

        /**
         * Hàm handle click combobox item trong debit account
         * Author: KienNT (06/06/2023)
         */
        selectedDebitAccount(
            account_id,
            grade,
            misa_code_id,
            account_number,
            index
        ) {
            this.rowPaymentDetails[index].debit_account_name = account_number;
            this.rowPaymentDetails[index].debit_account_id = account_id;
        },

        /**
         * Hàm handle click combobox item trong credit account
         * Author: KienNT (06/06/2023)
         */
        selectedCreditAccount(
            account_id,
            grade,
            misa_code_id,
            account_number,
            index
        ) {
            this.rowPaymentDetails[index].credit_account_name = account_number;
            this.rowPaymentDetails[index].credit_account_id = account_id;
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
                        description: this.$t("PaymentFor"),
                        debit_account_id: "",
                        credit_account_id: "",
                        amount: "0",
                        debit_account_name: "",
                        credit_account_name: "",
                        supplierCodeDetail: "",
                        supplier_name_detail: "",
                        supplier_id:null, 
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
                    description: this.$t("PaymentFor"),
                    debit_account_id: "",
                    credit_account_id: "",
                    amount: "0",
                    debit_account_name: "",
                    credit_account_name: "",
                    supplierCodeDetail: "",
                    supplier_name_detail: "",
                    supplier_id:null, 
                },
            ];
            this.totalMoney = 0;
            this.isDialogWarning = false;
        },

        /**
         * Hàm click vào btn có trong dialog
         * Author: KienNT (10/06/2023)
         */
        onClickBtnYes() {
            try {
                this.btnSaveAndClose("");
                this.isDialogNotify = false;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         *  handle không xóa hết dòng
         * Author: KienNT (06/06/2023)
         */
        onBtnWarningNo() {
            this.isDialogWarning = false;
        },


         /**
         *  handle ngăn chặn nhập chữ
         * Author: KienNT (07/06/2023)
         */
        filterNonNumeric() {
            this.payment.document_included =
                this.payment.document_included.replace(/[^0-9]/g, "");
        },

 /**
         *  handle ngăn chặn nhập chữ
         * Author: KienNT (07/06/2023)
         */
        filterNonNumericAmount(index){
            this.rowPaymentDetails[index].amount =  this.rowPaymentDetails[index].amount.replace(/[^0-9]/g, "");
        },  

        /**
         *  handle khi mở dropdown
         * Author: KienNT (05/06/2023)
         */
        // handleOpenDropdown() {
        //     try {
        //         this.$refs["iconDropdownOtherExpenses"].classList.toggle(
        //             "rorate-180"
        //         );
        //         this.isOpenOtherExpenses = !this.isOpenOtherExpenses;
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },

           /**
         * Hàm ẩn hiện dialog notify
         * Author: KienNT (10/06/2023)
         * @param (isDialogNotify): tham số là true, false để hiển thị dialog notify
         */

        onClickBtnDestroy(isDialogNotify) {
            try {
                this.isDialogNotify = isDialogNotify;
            } catch (error) {
                console.log(error);
            }
        },


        /**
         *  handle khi đóng popup
         * Author: KienNT (05/06/2023)
         */
        closeCashDetail() {
            if (this.isDialogError === false) {
                    // kiểm tra dữ liệu đã thay đổi chưa
                const newPaymentData = JSON.stringify(this.deleteAttrObject(this.payment));
                const newPaymentDetailData = JSON.stringify(this.deleteEmptyAttributes(this.rowPaymentDetails));
                if (this.oldPayment !== newPaymentData || this.oldRowPaymentDetails !== newPaymentDetailData) {
                    this.isDialogNotify = true;
                    return;
                } else {
                     this.$emit("closeCashDetail");
                }
             }
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
                this.closeCashDetail();
            }
        },

        /**
         * Hàm set lại cho supplier_code khi nó được gửi lên
         * Author: KienNT (05/06/2023)
         */
        setValueInputComboboxTable() {
            this.supplierCode = "";
            this.payment.supplier_id = null;
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
         * Hàm handle khi nhấn phím tại input kèm theo
         * Author: KienNT (07/06/2023)
         */
         handleKeyUpDocumentIncluded(){
            this.payment.document_included = this.numberWithCommas(this.payment.document_included);
        },


        /**
         * Hàm handle khi nhấn phím tại input số tiền
         * Author: KienNT (07/06/2023)
         */
        handleKeyUpAmount(index) {
            this.rowPaymentDetails[index].amount = this.numberWithCommas(this.rowPaymentDetails[index].amount)
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
         * Hàm xóa đi tất cả attr = null, false, undefined
         * Author: KienNT (10/06/2023)
         */
        deleteAttrObject(newValue) {
            const clone = { ...newValue };
            for (let key in clone) {
                if (
                    clone[key] === undefined ||
                    clone[key] === false ||
                    clone[key] === null || clone[key]===''
                ) {
                    delete clone[key];
                }
            }
            return clone;
        },

        /**
         * Hàm xóa đi tất cả attr = null, false, undefined trong mảng các đối tượng
         * Author: KienNT (10/06/2023)
         */
        deleteEmptyAttributes(objects) {
            const result = [];

            for (let i = 0; i < objects.length; i++) {
                const clone = { ...objects[i] };
                for (let key in clone) {
                    if (
                        clone[key] === undefined ||
                        clone[key] === false ||
                        clone[key] === null || clone[key]==='' || clone[key] === true
                    ) {
                        delete clone[key];
                    }
                }
                result.push(clone);
            }

            return result;
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
         * Hàm kiểm tra input có rỗng không
         * Author: KienNT (06/06/2023)
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
         * format cho số lớn
         * Author: KienNT (07/06/2023)
         */
         numberWithCommas(x) {
            return  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") ;
        },

        currencyToNumber(currency) {
            
            var number = currency.replace(/\./g, '');
            return parseFloat(number);
            }
    },

    computed: {
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
    }
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

.paymentList tr td span {
    display: inline-block;
    overflow: hidden !important;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.paymentList tr td:nth-child(2) span {
    width: 200px;
}
</style>
