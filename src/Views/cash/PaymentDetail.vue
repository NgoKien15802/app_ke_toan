<template>
    <div class="con-ms-popup cash_detail" @keydown="handlePress">
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
                                                        :class="
                                                            formModePayment ===
                                                            MISAEnum.formMode
                                                                .Show
                                                                ? 'disabledDopdown'
                                                                : ''
                                                        "
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
                                                        :class="
                                                            formModePayment ===
                                                            MISAEnum.formMode
                                                                .Show
                                                                ? 'disabledDopdown'
                                                                : ''
                                                        "
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
                                <div
                                    class="body-layout body__popup-detail scrollbar_customize"
                                >
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
                                                                        tabindex="1"
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
                                                                        @setFocus="
                                                                            setFocus
                                                                        "
                                                                        ref="txtSupplierMaster"
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
                                                                        :isDisabled="
                                                                            formModePayment ===
                                                                            MISAEnum
                                                                                .formMode
                                                                                .Show
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
                                                                    <div
                                                                        :class="{
                                                                            'tooltip-error':
                                                                                isTooltip.isTooltipSupplier_name,
                                                                        }"
                                                                    >
                                                                        <MInput
                                                                            tabindex="2"
                                                                            id="ObjectName"
                                                                            name="MartialStatusName"
                                                                            kind="default"
                                                                            ref="txtObjectName"
                                                                            v-model="
                                                                                payment.payment_supplier_name
                                                                            "
                                                                            :isDisabled="
                                                                                formModePayment ===
                                                                                MISAEnum
                                                                                    .formMode
                                                                                    .Show
                                                                            "
                                                                            :isShowTooltip="
                                                                                isTooltip.isTooltipSupplier_name
                                                                            "
                                                                        />
                                                                        <MTooltip
                                                                            v-if="
                                                                                isTooltip.isTooltipSupplier_name
                                                                            "
                                                                            kind="error"
                                                                            :subtext="
                                                                                errorMessage[2]
                                                                            "
                                                                        ></MTooltip>
                                                                    </div>
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
                                                                    <div
                                                                        :class="{
                                                                            'tooltip-error':
                                                                                isTooltip.isTooltipRecever,
                                                                        }"
                                                                    >
                                                                        <MInput
                                                                            tabindex="3"
                                                                            id="Receiver"
                                                                            kind="default"
                                                                            ref="txtReceiver"
                                                                            v-model="
                                                                                payment.payment_receiver
                                                                            "
                                                                            :isDisabled="
                                                                                formModePayment ===
                                                                                MISAEnum
                                                                                    .formMode
                                                                                    .Show
                                                                            "
                                                                            :isShowTooltip="
                                                                                isTooltip.isTooltipRecever
                                                                            "
                                                                        />
                                                                        <MTooltip
                                                                            v-if="
                                                                                isTooltip.isTooltipRecever
                                                                            "
                                                                            kind="error"
                                                                            :subtext="
                                                                                errorMessage[3]
                                                                            "
                                                                        ></MTooltip>
                                                                    </div>
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
                                                                    <div
                                                                        :class="{
                                                                            'tooltip-error':
                                                                                isTooltip.isTooltipAddress,
                                                                        }"
                                                                    >
                                                                        <MInput
                                                                            tabindex="4"
                                                                            id="Address"
                                                                            kind="default"
                                                                            ref="txtAddress"
                                                                            v-model="
                                                                                payment.payment_supplier_address
                                                                            "
                                                                            :isDisabled="
                                                                                formModePayment ===
                                                                                MISAEnum
                                                                                    .formMode
                                                                                    .Show
                                                                            "
                                                                            :isShowTooltip="
                                                                                isTooltip.isTooltipAddress
                                                                            "
                                                                        />

                                                                        <MTooltip
                                                                            v-if="
                                                                                isTooltip.isTooltipAddress
                                                                            "
                                                                            kind="error"
                                                                            :subtext="
                                                                                errorMessage[4]
                                                                            "
                                                                        ></MTooltip>
                                                                    </div>
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
                                                                    <div
                                                                        :class="{
                                                                            'tooltip-error':
                                                                                isTooltip.isTooltipJournal_memo,
                                                                        }"
                                                                    >
                                                                        <MInput
                                                                            tabindex="5"
                                                                            id="journal_memo"
                                                                            kind="default"
                                                                            ref="txtJournal_memo"
                                                                            v-model="
                                                                                payment.journal_memo
                                                                            "
                                                                            :isDisabled="
                                                                                formModePayment ===
                                                                                MISAEnum
                                                                                    .formMode
                                                                                    .Show
                                                                            "
                                                                            :isShowTooltip="
                                                                                isTooltip.isTooltipJournal_memo
                                                                            "
                                                                        />
                                                                        <MTooltip
                                                                            v-if="
                                                                                isTooltip.isTooltipJournal_memo
                                                                            "
                                                                            kind="error"
                                                                            :subtext="
                                                                                errorMessage[5]
                                                                            "
                                                                        ></MTooltip>
                                                                    </div>
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
                                                                        tabindex="6"
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
                                                                        :isDisabled="
                                                                            formModePayment ===
                                                                            MISAEnum
                                                                                .formMode
                                                                                .Show
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
                                                                    <div
                                                                        :class="{
                                                                            'tooltip-error':
                                                                                isTooltip.isTooltipDocument_included,
                                                                        }"
                                                                    >
                                                                        <MInput
                                                                            tabindex="7"
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
                                                                            :isDisabled="
                                                                                formModePayment ===
                                                                                MISAEnum
                                                                                    .formMode
                                                                                    .Show
                                                                            "
                                                                            @handleKeyUp="
                                                                                handleKeyUpDocumentIncluded
                                                                            "
                                                                            :isShowTooltip="
                                                                                isTooltip.isTooltipDocument_included
                                                                            "
                                                                        />

                                                                        <MTooltip
                                                                            v-if="
                                                                                isTooltip.isTooltipDocument_included
                                                                            "
                                                                            kind="error"
                                                                            :subtext="
                                                                                errorMessage[7]
                                                                            "
                                                                        ></MTooltip>
                                                                    </div>
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

                                                                <MInput
                                                                    type="date"
                                                                    tabindex="8"
                                                                    name="AccountingDate"
                                                                    id="AccountingDate"
                                                                    kind="default"
                                                                    ref="txtAccountingDate"
                                                                    v-model="
                                                                        payment.posted_date
                                                                    "
                                                                    :isDisabled="
                                                                        formModePayment ===
                                                                        MISAEnum
                                                                            .formMode
                                                                            .Show
                                                                    "
                                                                />
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
                                                                        tabindex="9"
                                                                        name="PaymentDate"
                                                                        id="PaymentDate"
                                                                        kind="default"
                                                                        ref="txtPaymentDate"
                                                                        @blur="
                                                                            isInValid(
                                                                                payment.ref_date,
                                                                                payment.posted_date,
                                                                                'date'
                                                                            )
                                                                                ? (isTooltip.isTooltipPaymentDate = true)
                                                                                : (isTooltip.isTooltipPaymentDate = false)
                                                                        "
                                                                        v-model="
                                                                            payment.ref_date
                                                                        "
                                                                        :isShowTooltip="
                                                                            isTooltip.isTooltipPaymentDate
                                                                        "
                                                                        :isDisabled="
                                                                            formModePayment ===
                                                                            MISAEnum
                                                                                .formMode
                                                                                .Show
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
                                                                                'ErrorDatePayment'
                                                                            ) +
                                                                            $t(
                                                                                'Labelposted_date'
                                                                            ).toLocaleLowerCase()
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
                                                                    }}
                                                                    <span
                                                                        class="required"
                                                                        >*</span
                                                                    ></label
                                                                >
                                                                <div
                                                                    :class="{
                                                                        'tooltip-error':
                                                                            isTooltip.isTooltipPaymentNumber,
                                                                    }"
                                                                >
                                                                    <MInput
                                                                        tabindex="10"
                                                                        id="PaymentNumber"
                                                                        kind="default"
                                                                        ref="txtPaymentNumber"
                                                                        @setFocus="
                                                                            setFocus
                                                                        "
                                                                        v-model="
                                                                            payment.refno_finance
                                                                        "
                                                                        :isDisabled="
                                                                            formModePayment ===
                                                                            MISAEnum
                                                                                .formMode
                                                                                .Show
                                                                        "
                                                                        :isShowTooltip="
                                                                            isTooltip.isTooltipPaymentNumber
                                                                        "
                                                                        :required="
                                                                            true
                                                                        "
                                                                        @blur="
                                                                            isEmpty(
                                                                                payment.refno_finance
                                                                            )
                                                                                ? (isTooltip.isTooltipPaymentNumber = true)
                                                                                : (isTooltip.isTooltipPaymentNumber = false)
                                                                        "
                                                                    />
                                                                    <MTooltip
                                                                        v-if="
                                                                            isTooltip.isTooltipPaymentNumber
                                                                        "
                                                                        :subtext="
                                                                            isEmpty(
                                                                                payment.refno_finance
                                                                            )
                                                                                ? $t(
                                                                                      'LabelPaymentNumber'
                                                                                  ) +
                                                                                  $t(
                                                                                      'ErrorEmpty'
                                                                                  )
                                                                                : errorExistId
                                                                                ? errorExistId
                                                                                : message
                                                                        "
                                                                        kind="error"
                                                                    ></MTooltip>
                                                                </div>
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
                                                        {{
                                                            isNaN(totalMoney)
                                                                ? 0
                                                                : numberWithCommas(
                                                                      totalMoney
                                                                  )
                                                        }}
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
                                            <div
                                                class="wrap__table scrollbar_customize"
                                            >
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
                                                            :class="[
                                                                rowPaymentDetail.isEditAble
                                                                    ? 'tr-hover_editable'
                                                                    : '',
                                                                formModePayment ===
                                                                MISAEnum
                                                                    .formMode
                                                                    .Show
                                                                    ? 'disabledDopdown'
                                                                    : '',
                                                            ]"
                                                        >
                                                            <td
                                                                class="text-align-center min-w40 hover-row"
                                                                :class="[
                                                                    rowPaymentDetail.isEditAble
                                                                        ? 'tr-hover_editable'
                                                                        : '',
                                                                    formModePayment ===
                                                                    MISAEnum
                                                                        .formMode
                                                                        .Show
                                                                        ? 'disabledDopdown'
                                                                        : '',
                                                                ]"
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
                                                                <div
                                                                    :class="{
                                                                        'tooltip-error':
                                                                            rowPaymentDetail.isTooltipDescription,
                                                                    }"
                                                                >
                                                                    <MInput
                                                                        v-if="
                                                                            rowPaymentDetail.isEditAble
                                                                        "
                                                                        :tabindex="
                                                                            11 +
                                                                            5 *
                                                                                index
                                                                        "
                                                                        id="description"
                                                                        kind="default"
                                                                        ref="txtdescription"
                                                                        @setFocus="
                                                                            () =>
                                                                                setFocusDescription(
                                                                                    index
                                                                                )
                                                                        "
                                                                        :isFocus="
                                                                            true
                                                                        "
                                                                        v-model="
                                                                            rowPaymentDetail.description
                                                                        "
                                                                        :isShowTooltip="
                                                                            rowPaymentDetail.isTooltipDescription
                                                                        "
                                                                    />
                                                                    <span
                                                                        ref="txtdescription"
                                                                        :tabindex="
                                                                            11 +
                                                                            5 *
                                                                                index
                                                                        "
                                                                        v-else
                                                                        >{{
                                                                            rowPaymentDetail.description
                                                                        }}</span
                                                                    >
                                                                    <MTooltip
                                                                        v-if="
                                                                            rowPaymentDetail.isTooltipDescription
                                                                        "
                                                                        kind="error"
                                                                        :subtext="
                                                                            $t(
                                                                                'description'
                                                                            ) +
                                                                            $t(
                                                                                'ErrorAccountLengthText'
                                                                            )
                                                                        "
                                                                        style="
                                                                            width: 270px;
                                                                        "
                                                                    ></MTooltip>
                                                                </div>
                                                            </td>
                                                            <td
                                                                class="min-w100"
                                                            >
                                                                <MComboboxTable
                                                                    v-if="
                                                                        rowPaymentDetail.isEditAble
                                                                    "
                                                                    :tabindex="
                                                                        12 +
                                                                        5 *
                                                                            index
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
                                                                        setValueInputComboboxTableDebitAccount(
                                                                            index
                                                                        )
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
                                                                    :tabindex="
                                                                        13 +
                                                                        5 *
                                                                            index
                                                                    "
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
                                                                        setValueInputComboboxTableCreditAccount(
                                                                            index
                                                                        )
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
                                                                <div
                                                                    :class="{
                                                                        'tooltip-error':
                                                                            rowPaymentDetail.isTooltipAmount,
                                                                    }"
                                                                >
                                                                    <MInput
                                                                        v-if="
                                                                            rowPaymentDetail.isEditAble
                                                                        "
                                                                        :tabindex="
                                                                            14 +
                                                                            5 *
                                                                                index
                                                                        "
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
                                                                            filterNonNumericAmount(
                                                                                index
                                                                            )
                                                                        "
                                                                        @handleKeyUp="
                                                                            () =>
                                                                                handleKeyUpAmount(
                                                                                    index
                                                                                )
                                                                        "
                                                                        @blur="
                                                                            () =>
                                                                                handleBlurAmount(
                                                                                    index
                                                                                )
                                                                        "
                                                                        :isShowTooltip="
                                                                            rowPaymentDetail.isTooltipAmount
                                                                        "
                                                                    />
                                                                    <span
                                                                        :tabindex="
                                                                            14 +
                                                                            5 *
                                                                                index
                                                                        "
                                                                        ref="txtamount"
                                                                        v-else
                                                                        >{{
                                                                            rowPaymentDetail.amount
                                                                        }}</span
                                                                    >

                                                                    <MTooltip
                                                                        v-if="
                                                                            rowPaymentDetail.isTooltipAmount
                                                                        "
                                                                        kind="error"
                                                                        :subtext="
                                                                            $t(
                                                                                'amount'
                                                                            ) +
                                                                            $t(
                                                                                'ErrorAccountLength18'
                                                                            )
                                                                        "
                                                                        style="
                                                                            width: 270px;
                                                                        "
                                                                    ></MTooltip>
                                                                </div>
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
                                                                    :tabindex="
                                                                        15 +
                                                                        5 *
                                                                            index
                                                                    "
                                                                    @selectedRecord="
                                                                        (
                                                                            supplier
                                                                        ) =>
                                                                            selectedRecordDetail(
                                                                                supplier,
                                                                                index
                                                                            )
                                                                    "
                                                                    kind="supplierCode"
                                                                    ref="txtSupplierCodeDetail"
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
                                                                        setValueInputComboboxTableDetail(
                                                                            index
                                                                        )
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
                                                                :class="[
                                                                    rowPaymentDetail.isEditAble
                                                                        ? 'tr-hover_editable'
                                                                        : '',
                                                                    formModePayment ===
                                                                    MISAEnum
                                                                        .formMode
                                                                        .Show
                                                                        ? 'disabledDopdown'
                                                                        : '',
                                                                ]"
                                                            >
                                                                <div
                                                                    style="
                                                                        cursor: pointer;
                                                                        margin: 0
                                                                            auto;
                                                                    "
                                                                    :class="
                                                                        formModePayment ===
                                                                        MISAEnum
                                                                            .formMode
                                                                            .Show
                                                                            ? 'disabledDopdown'
                                                                            : ''
                                                                    "
                                                                    class="trash"
                                                                    @click="
                                                                        handleClickTrash(
                                                                            index,
                                                                            rowPaymentDetail.ref_detail_id
                                                                        )
                                                                    "
                                                                ></div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot
                                                        style="position: static"
                                                    >
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
                                                                            isNaN(
                                                                                totalMoney
                                                                            )
                                                                                ? 0
                                                                                : numberWithCommas(
                                                                                      totalMoney
                                                                                  )
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
                                            :tabindex="
                                                16 +
                                                (5 * rowPaymentDetails.length -
                                                    1)
                                            "
                                            :text="$t('AddLine')"
                                            :click="() => AddLineAndClose()"
                                            ref="AddLine"
                                            :class="
                                                formModePayment ===
                                                MISAEnum.formMode.Show
                                                    ? 'disabledDopdown'
                                                    : ''
                                            "
                                        >
                                        </MButton
                                        ><MButton
                                            class="btn btn-default close__add-employee tooltip"
                                            :tabindex="
                                                17 +
                                                (5 * rowPaymentDetails.length -
                                                    1)
                                            "
                                            :text="$t('DeleteAllLine')"
                                            :click="DeleteAllLineAndClose"
                                            ref="DeleteAllLine"
                                            :class="
                                                formModePayment ===
                                                MISAEnum.formMode.Show
                                                    ? 'disabledDopdown'
                                                    : ''
                                            "
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
                                                        :tabindex="
                                                            20 +
                                                            (5 *
                                                                rowPaymentDetails.length -
                                                                1)
                                                        "
                                                        :text="
                                                            formModePayment ===
                                                            MISAEnum.formMode
                                                                .Show
                                                                ? $t('Fix')
                                                                : $t('BtnSave')
                                                        "
                                                        :click="clickBtnSave"
                                                        ref="btnSave"
                                                    >
                                                        <MTooltip
                                                            v-if="
                                                                formModePayment !==
                                                                MISAEnum
                                                                    .formMode
                                                                    .Show
                                                            "
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
                                                    <button
                                                        class="btn combox-btn tooltip"
                                                        style="
                                                            border-radius: 3px;
                                                        "
                                                        v-if="
                                                            formModePayment !==
                                                            MISAEnum.formMode
                                                                .Show
                                                        "
                                                    >
                                                        <button
                                                            class="combox-btn-text combox-btn-left"
                                                            :tabindex="
                                                                18 +
                                                                (5 *
                                                                    rowPaymentDetails.length -
                                                                    1)
                                                            "
                                                            ref="btnSaveEndAdd'"
                                                            @click="
                                                                handleClickSaveAndAdd
                                                            "
                                                        >
                                                            {{ textBtn }}
                                                        </button>
                                                        <span
                                                            class="combox-btn-mark"
                                                        ></span>

                                                        <button
                                                            class="wrap-icon-combox wrap-icon-right"
                                                            ref="iconContextMenu"
                                                            :tabindex="
                                                                19 +
                                                                (5 *
                                                                    rowPaymentDetails.length -
                                                                    1)
                                                            "
                                                            @click="
                                                                clickBtnRight(
                                                                    $event
                                                                )
                                                            "
                                                        >
                                                            <div
                                                                class="icon__combox-btn"
                                                            ></div>
                                                        </button>
                                                        <MTooltip
                                                            kind="AccountSysterm"
                                                            :subtext="
                                                                textBtn +
                                                                $t(
                                                                    'TooltipSaveAndAddSK'
                                                                )
                                                            "
                                                        ></MTooltip>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="footer__group-left flex-grow flex"
                                        >
                                            <MButton
                                                class="btn btn-default close__add-employee"
                                                :tabindex="
                                                    21 +
                                                    (5 *
                                                        rowPaymentDetails.length -
                                                        1)
                                                "
                                                :text="$t('BtnDestroy')"
                                                :click="
                                                    () => destroyPopup(true)
                                                "
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
        @destroyPopup="() => destroyPopup(true)"
        @onClickBtnYes="onClickBtnYes"
        kind="notify"
    ></MDialog>

    <MDialog
        v-if="isDialogWarning || isDialogWarningDuplicate"
        iconClass="dialog__icon-warning"
        :title="$t('DialogWarning')"
        :message="
            isDialogWarning
                ? $t('MessageWarningDeleteLine')
                : isDialogWarningDuplicate
                ? errorExistId + $t('MessageWarningDuplicate')
                : ''
        "
        :BtnWarningNo="$t('BtnDestroyDialog')"
        :textButton="$t('BtnYes')"
        @onBtnWarningNo="onBtnWarningNo"
        @onBtnWarningYes="
            () =>
                onBtnWarningYes(
                    isDialogWarning
                        ? 'isDialogWarning'
                        : isDialogWarningDuplicate
                        ? 'isDialogWarningDuplicate'
                        : ''
                )
        "
        kind="warning"
    ></MDialog>

    <MDialog
        v-if="isDialogError"
        iconClass="dialog__icon-error"
        :title="$t('DialogNotifyError')"
        :message="message"
        :textButton="$t('BtnClose')"
        @hideShowDialogError="hideShowDialogError"
        kind="error"
    ></MDialog>

    <!-- loading -->
    <Mloading v-if="isLoading"></Mloading>

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

    <MToast
        v-if="
            isShowToastAdd ||
            isShowToastEdit ||
            isShowToastDelete ||
            isShowToastDuplicate
        "
        classIcon="toast__icon-success"
        :kind="$t('ToastTitleSuccess')"
        :text="
            (isShowToastAdd && $t('ToastAddSuccessPayment')) ||
            (isShowToastEdit && $t('ToastEditSuccessPayment')) ||
            (isShowToastDelete && $t('ToastDeleteSuccessPayment')) ||
            (isShowToastDuplicate && $t('ToastDuplicateSuccessPayment'))
        "
        classTitle="toast__title-success"
    ></MToast>
</template>

<script>
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import MISAEnum from "@/js/enum";
import axios from "axios";
import MToast from "@/components/base/Mtoast.vue";
export default {
    name: "PaymentDetail",
    components: {
        MToast,
    },

    props: {
        formMode: {
            type: String,
        },
        payment_id_selected: {
            type: String,
        },
        kind: {
            type: String,
        },
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
                total_amount: 0,
            },
            otherExpenses: this.$t("OtherExpenses"),
            isOpenOtherExpenses: false,
            supplierCodePayment: "",
            supplier_name_detail_fake: "",
            supplier_id_detail_fake: "",
            isShowToastEdit: false,
            employeeId: "",
            optionItem: [
                {
                    text: "OtherExpenses",
                    isActive: true,
                },
            ],
            invalidPaymentNumber: "",
            totalMoney: 0,

            isTooltip: {
                isTooltipAccountingDate: false,
                isTooltipPaymentDate: false,
                isTooltipPaymentNumber: false,
                isTooltipJournal_memo: false,
                isTooltipDocument_included: false,
                isTooltipSupplier_name: false,
                isTooltipRecever: false,
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
                    supplier_id: null,
                    supplier_name_detail: "",
                    isTooltipDescription: false,
                    isTooltipAmount: false,
                },
            ],
            isDialogWarningDuplicate: false,
            cloneRowPaymentDetails: [],
            clonePaymentDetail: [],
            clonePayment: {},
            cloneDetail: [],
            changePaymentDetail: [],
            errorMessage: [],
            message: "",
            deleteOne: false,
            isShowToastAdd: false,
            isShowToastDelete: false,
            isShowToastDuplicate: false,
            errorExistId: "",
            isContextMenu: false,
            isDialogNotify: false,
            isDialogWarning: false,
            oldPayment: [],
            oldRowPaymentDetails: [],
            formModePayment: "",
            isDialogError: false,
            textBtn: this.$t("BtnSaveEndClose"),
            isLoading: false,
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
            modeBtn: MISAEnum.ModeBtn.SaveAndClose,
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
                    newValue.forEach((el, index) => {
                        if (
                            el.supplierCodeDetail ===
                                this.supplierCodePayment &&
                            this.isEmpty(
                                this.rowPaymentDetails[index]
                                    .supplier_name_detail
                            )
                        ) {
                            this.rowPaymentDetails[index].supplier_name_detail =
                                this.supplier_name_detail_fake;
                            this.rowPaymentDetails[index].supplier_id =
                                this.supplier_id_detail_fake;
                        }
                    });
                    this.totalMoney = newValue.reduce((acc, el) => {
                        return (
                            acc +
                            Math.round(this.currencyToNumber(el?.amount || 0.0))
                        );
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
            if (this.formModePayment === MISAEnum.formMode.Add) {
                if (this.payment.ref_date === oldValue) {
                    this.payment.ref_date = newValue;
                }
            }
        },

        /**
         * Theo dõi mảng errorMessage thay đổi thì check nếu có lỗi thì gán cho message
         * Author: KienNT (10/06/2023)
         */
        errorMessage: {
            handler: function (newValue) {
                console.log(newValue);
                try {
                    const refNames = Object.values(newValue);
                    for (let index = 0; index < refNames.length; index++) {
                        const element = refNames[index];
                        if (element !== "space") {
                            this.message = element;
                            break;
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            deep: true,
        },

        formMode: function (newValue) {
            this.formModePayment = this.formatForm(newValue);
        },
    },

    created() {
        this.formModePayment = this.formatForm(this.formMode);
        this.modeBtn = localStorage.getItem("modeBtn") || this.modeBtn;
        this.textBtn =
            this.modeBtn === MISAEnum.ModeBtn.SaveAndAdd.toString()
                ? this.$t("BtnSaveEndAdd")
                : this.$t("BtnSaveEndClose");
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
                axios
                    .get(
                        "https://localhost:7153/api/v1/Payments/masterdetail",
                        {
                            headers: {
                                refid: this.payment_id_selected,
                            },
                        }
                    )
                    .then((this.isLoading = true))
                    .then((res) => {
                        const master = res.data.Data.Master;
                        const details = res.data.Data.Details;
                        if (formMode === MISAEnum.formMode.Duplicate) {
                            this.getNewPaymentCode();
                        } else if (
                            this.formModePayment === MISAEnum.formMode.Edit
                        ) {
                            this.setFocusInput("txtSupplierMaster");
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
                        this.payment.total_amount = this.numberWithCommas(
                            master?.total_amount
                        );
                        details.forEach((el, index) => {
                            this.rowPaymentDetails[index] = {
                                ref_detail_id: el?.ref_detail_id,
                                ...this.rowPaymentDetails[index],
                                description: el?.description,
                                credit_account_name: el?.credit_account,
                                credit_account_id: el?.credit_account_id,
                                debit_account_name: el?.debit_account,
                                debit_account_id: el?.debit_account_id,
                                amount: this.numberWithCommas(el?.amount),
                                supplier_id: el?.supplier_id,
                                supplierCodeDetail:
                                    el?.payment_detail_supplier_code,
                                supplier_name_detail:
                                    el?.payment_detail_supplier_name,
                            };
                        });

                        this.changePaymentDetail = JSON.stringify(
                            this.rowPaymentDetails
                        );
                        this.changePaymentDetail = JSON.parse(
                            this.changePaymentDetail
                        );
                        this.changePaymentDetail = this.changePaymentDetail.map(
                            (el) => {
                                return {
                                    ref_detail_id: el?.ref_detail_id,
                                    mode: "edit",
                                };
                            }
                        );
                        this.oldPayment = JSON.stringify(
                            this.deleteAttrObject(this.payment)
                        );
                        this.oldRowPaymentDetails = JSON.stringify(
                            this.deleteEmptyAttributes(this.rowPaymentDetails)
                        );
                        this.isLoading = false;
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
        getNewPaymentCode(isSave = false) {
            try {
                axios
                    .get("https://localhost:7153/api/v1/Payments/NewRecordCode")
                    .then((this.isLoading = true))
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

                        this.oldPayment = JSON.stringify(
                            this.deleteAttrObject(this.payment)
                        );

                        this.oldRowPaymentDetails = JSON.stringify(
                            this.deleteEmptyAttributes(this.rowPaymentDetails)
                        );
                        this.isLoading = false;
                        if (isSave) {
                            this.btnSaveAndClose("");
                        } else {
                            this.setFocusInput("txtSupplierMaster");
                        }
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
            this.leftContextMenu = event.target.getBoundingClientRect().x - 70;
            this.topContextMenu = event.target.getBoundingClientRect().y - 60;
        },

        /**
         * Hàm click contextmenu cất và thêm
         * Author: KienNT (08/06/2023)
         */
        handleBtnSaveEndAdd() {
            this.isContextMenu = !this.isContextMenu;
            this.textBtn = this.$t("BtnSaveEndAdd");
            this.modeBtn = MISAEnum.ModeBtn.SaveAndAdd;
            localStorage.setItem("modeBtn", MISAEnum.ModeBtn.SaveAndAdd);
            this.btnSaveAndClose(MISAEnum.ModeBtn.SaveAndAdd);
        },

        /**
         * Hàm set focus input
         * Author: KienNT (14/06/2023)
         */
        setFocusDescription(index) {
            this.$refs["txtdescription"][index].setFocus();
        },

        /**
         * Hàm click contextmenu cất và đóng
         * Author: KienNT (08/06/2023)
         */
        handleBtnSaveEndClose() {
            this.isContextMenu = !this.isContextMenu;
            this.textBtn = this.$t("BtnSaveEndClose");
            this.modeBtn = MISAEnum.ModeBtn.SaveAndClose;
            localStorage.setItem("modeBtn", MISAEnum.ModeBtn.SaveAndClose);
            this.btnSaveAndClose(MISAEnum.ModeBtn.SaveAndClose);
        },

        /**
         * Hàm validate thành công thì cất data và đóng form, cất và thêm thì cất và data reset form
         * Author: KienNT (08/06/2023)
         */
        btnSaveAndClose(modeBtn = "") {
            try {
                let checkState = false;
                if (this.formModePayment === MISAEnum.formMode.Show) {
                    this.formModePayment = MISAEnum.formMode.Edit;
                    checkState = false;
                } else if (
                    this.formModePayment === MISAEnum.formMode.Edit ||
                    this.formModePayment === MISAEnum.formMode.Add ||
                    this.formModePayment === MISAEnum.formMode.Duplicate
                ) {
                    checkState = true;
                }
                if (checkState) {
                    if (
                        this.handleValidate() &&
                        this.rowPaymentDetails.length > 0
                    ) {
                        if (this.formModePayment === MISAEnum.formMode.Add) {
                            // this.postData(MISAEnum.formMode.Add, isCloseForm);

                            this.payment.total_amount = this.totalMoney;
                            this.payment.employee_id =
                                this.payment.employee_id || null;
                            this.payment.refid = uuidv4();
                            this.rowPaymentDetails.forEach((el) => {
                                el.ref_detail_id = uuidv4();
                            });
                            this.clonePaymentDetail = JSON.stringify(
                                this.rowPaymentDetails
                            );
                            this.clonePaymentDetail = JSON.parse(
                                this.clonePaymentDetail
                            );
                            this.clonePaymentDetail =
                                this.clonePaymentDetail.map((el) => {
                                    return {
                                        ref_detail_id: el.ref_detail_id,
                                        debit_account_id:
                                            el.debit_account_id || null,
                                        credit_account_id:
                                            el.credit_account_id || null,
                                        amount: this.currencyToNumber(
                                            el.amount || "0.0"
                                        ),
                                        description: el.description,
                                        supplier_id: el.supplier_id || null,
                                    };
                                });
                            this.postData(MISAEnum.formMode.Add, modeBtn);
                        }
                        // đóng form
                        else if (
                            this.formModePayment === MISAEnum.formMode.Edit &&
                            checkState
                        ) {
                            this.payment.total_amount = this.totalMoney;
                            this.payment.employee_id =
                                this.payment.employee_id || null;
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
                                total_amount,
                            };
                            console.log(cast);
                            this.rowPaymentDetails.forEach((el) => {
                                if (this.isEmpty(el.ref_detail_id)) {
                                    el.ref_detail_id = uuidv4();
                                    this.changePaymentDetail.push({
                                        ref_detail_id: el.ref_detail_id,
                                        mode: "add",
                                    });
                                }
                            });

                            this.clonePaymentDetail = JSON.stringify(
                                this.rowPaymentDetails
                            );
                            this.clonePaymentDetail = JSON.parse(
                                this.clonePaymentDetail
                            );
                            this.clonePaymentDetail =
                                this.clonePaymentDetail.map((el) => {
                                    return {
                                        ref_detail_id: el?.ref_detail_id,
                                        debit_account_id:
                                            el.debit_account_id || null,
                                        credit_account_id:
                                            el.credit_account_id || null,
                                        amount: this.currencyToNumber(
                                            el.amount || "0.0"
                                        ),
                                        description: el.description,
                                        supplier_id: el.supplier_id || null,
                                    };
                                });
                            this.changePaymentDetail.forEach((el) => {
                                for (
                                    let index = 0;
                                    index < this.clonePaymentDetail.length;
                                    index++
                                ) {
                                    const element =
                                        this.clonePaymentDetail[index];
                                    if (
                                        el.ref_detail_id ===
                                        element.ref_detail_id
                                    ) {
                                        element.mode = el.mode;
                                        break;
                                    }
                                }
                            });

                            this.changePaymentDetail.forEach((element) => {
                                const found = this.clonePaymentDetail.some(
                                    (item) =>
                                        item.ref_detail_id ===
                                        element.ref_detail_id
                                );
                                if (!found) {
                                    this.clonePaymentDetail.push({
                                        ref_detail_id: element.ref_detail_id,
                                        mode: "delete",
                                    });
                                }
                            });

                            // Sửa chứng từ theo id
                            const requestData = {
                                Master: this.clonePayment,
                                Details: this.clonePaymentDetail,
                            };

                            axios
                                .put(
                                    `https://localhost:7153/api/v1/Payments/updateMasterDetail`,
                                    requestData
                                )

                                .then((this.isLoading = true))
                                .then((res) => {
                                    console.log(res);
                                    if (this.isEmpty(modeBtn)) {
                                        // chuyển form về mode show
                                        this.isShowToastEdit = true;
                                        setTimeout(() => {
                                            this.isShowToastEdit = false;
                                            if (this.kind === "BackToProcess") {
                                                this.$router.push(
                                                    `/cash/cashDetail/show/BackToProcess/${this.payment_id_selected}`
                                                );
                                            } else if (
                                                this.kind === "BackToTable"
                                            ) {
                                                this.$router.push(
                                                    `/cash/cashDetail/show/BackToTable/${this.payment_id_selected}`
                                                );
                                            }
                                            this.rowPaymentDetails.forEach(
                                                (el) => {
                                                    el.isEditAble = false;
                                                }
                                            );
                                            this.oldPayment = JSON.stringify(
                                                this.deleteAttrObject(
                                                    this.payment
                                                )
                                            );
                                            this.oldRowPaymentDetails =
                                                JSON.stringify(
                                                    this.deleteEmptyAttributes(
                                                        this.rowPaymentDetails
                                                    )
                                                );
                                            this.isLoading = false;
                                        }, 3000);
                                    } else if (
                                        modeBtn ===
                                        MISAEnum.ModeBtn.SaveAndClose
                                    ) {
                                        // reset và đóng form
                                        // reset và đóng form
                                        this.isShowToastEdit = true;
                                        setTimeout(() => {
                                            this.isShowToastEdit = false;
                                            this.destroyPopup(true);
                                            this.oldPayment = JSON.stringify(
                                                this.deleteAttrObject(
                                                    this.payment
                                                )
                                            );
                                            this.oldRowPaymentDetails =
                                                JSON.stringify(
                                                    this.deleteEmptyAttributes(
                                                        this.rowPaymentDetails
                                                    )
                                                );
                                            this.isLoading = false;
                                        }, 3000);
                                    } else if (
                                        modeBtn === MISAEnum.ModeBtn.SaveAndAdd
                                    ) {
                                        // reset nhưng ko đóng form
                                        // reset và đóng form
                                        this.isShowToastEdit = true;
                                        setTimeout(() => {
                                            this.isShowToastEdit = false;
                                            this.destroyPopup(false);
                                            if (this.kind === "BackToProcess") {
                                                this.$router.push(
                                                    "/cash/cashDetail/add/BackToProcess"
                                                );
                                            } else if (
                                                this.kind === "BackToTable"
                                            ) {
                                                this.$router.push(
                                                    "/cash/cashDetail/add/BackToTable"
                                                );
                                            }
                                            // lấy 1 id mới
                                            this.getNewPaymentCode();
                                            this.errorMessage = [];
                                            this.oldPayment = JSON.stringify(
                                                this.deleteAttrObject(
                                                    this.payment
                                                )
                                            );
                                            this.oldRowPaymentDetails =
                                                JSON.stringify(
                                                    this.deleteEmptyAttributes(
                                                        this.rowPaymentDetails
                                                    )
                                                );
                                            this.isLoading = false;
                                        }, 3000);
                                    }

                                    // this.$emit("handleReLoadData");
                                })
                                .catch((error) => {
                                    let response = error.response;
                                    let errorData = response?.data?.Data?.Data;
                                    console.log(errorData);
                                    this.isLoading = false;
                                    this.handleCaseCatch(response, errorData);
                                });
                        } else if (
                            !this.isEmpty(this.payment_id_selected) &&
                            this.formModePayment === MISAEnum.formMode.Duplicate
                        ) {
                            this.payment.total_amount = this.totalMoney;
                            this.payment.employee_id =
                                this.payment.employee_id || null;
                            this.payment.refid = uuidv4();
                            this.rowPaymentDetails.forEach((el) => {
                                el.ref_detail_id = uuidv4();
                            });
                            this.clonePaymentDetail = JSON.stringify(
                                this.rowPaymentDetails
                            );
                            this.clonePaymentDetail = JSON.parse(
                                this.clonePaymentDetail
                            );
                            this.clonePaymentDetail =
                                this.clonePaymentDetail.map((el) => {
                                    return {
                                        ref_detail_id: el.ref_detail_id,
                                        debit_account_id:
                                            el.debit_account_id || null,
                                        credit_account_id:
                                            el.credit_account_id || null,
                                        amount: this.currencyToNumber(
                                            el.amount || "0.0"
                                        ),
                                        description: el.description,
                                        supplier_id: el.supplier_id || null,
                                    };
                                });
                            this.postData(MISAEnum.formMode.Duplicate, modeBtn);
                        }
                    } else {
                        if (this.rowPaymentDetails.length <= 0) {
                            this.message = this.$t("MesssgaeErrorLenthDetail");
                        }
                        this.hideShowDialogError(true);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm ẩn hiện dialog và focus vào ô input lỗi đầu tiên
         * Author: KienNT (11/06/2023)
         * @param (isDialogError): tham số là true, false để hiển thị dialog
         */
        hideShowDialogError(isDialogError) {
            try {
                this.isDialogError = isDialogError;
                this.firstFocus();
            } catch (error) {
                console.log(error);
            }
        },

        handleBlurAmount(index) {
            if (this.isEmpty(this.rowPaymentDetails[index].amount)) {
                this.rowPaymentDetails[index].amount = 0;
            }
        },

        /**
         *  focus vào ô input lỗi đầu tiên
         * Author: KienNT (10/06/2023)
         *
         */
        firstFocus() {
            try {
                // get all input ref sau đó duyệt nếu input nào có lỗi là isShowTooltip = true thì input đó focus và break
                const refNames = Object.keys(this.$refs);
                if (refNames) {
                    for (let index = 0; index < refNames.length; index++) {
                        const elementRef = refNames[index];
                        const element = this.$refs[elementRef];
                        if (element && element.isShowTooltip) {
                            element.setFocus();
                            return true;
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * validate
         * Author: KienNT (10/06/2023)
         *
         */
        handleValidate() {
            // check mã
            this.checkField(
                "isTooltipPaymentNumber",
                this.payment.refno_finance,
                this.$t("LabelPaymentNumber"),
                "txtPaymentNumber"
            );

            // check invalid số chứng từ
            this.checkFieldInvalid(
                "isTooltipPaymentNumber",
                this.payment.refno_finance,
                this.$t("LabelPaymentNumber"),
                "invalid",
                this.$t("ErrorPaymentNumber"),
                "txtPaymentNumber"
            );

            // check invalid maxlength số chứng từ
            if (!this.isTooltip.isTooltipPaymentNumber) {
                this.checkFieldInvalid(
                    "isTooltipPaymentNumber",
                    this.payment.refno_finance,
                    this.$t("LabelPaymentNumber"),
                    "length50",
                    this.$t("ErrorAccountLength50"),
                    "txtPaymentNumber"
                );
            }

            // check invalid maxlength tên đối tượng
            this.checkFieldInvalid(
                "isTooltipSupplier_name",
                this.payment.payment_supplier_name,
                this.$t("LabelObjectName"),
                "length255",
                this.$t("ErrorAccountLengthText"),
                "txtObjectName"
            );

            // check invalid maxlength người nhận
            this.checkFieldInvalid(
                "isTooltipRecever",
                this.payment.payment_receiver,
                this.$t("LabelReceiver"),
                "length255",
                this.$t("ErrorAccountLengthText"),
                "txtReceiver"
            );

            // check invalid maxlength Địa chỉ
            this.checkFieldInvalid(
                "isTooltipAddress",
                this.payment.payment_supplier_address,
                this.$t("LabelAddress"),
                "length255",
                this.$t("ErrorAccountLengthText"),
                "txtAddress"
            );

            // check invalid maxlength lý do chi master
            this.checkFieldInvalid(
                "isTooltipJournal_memo",
                this.payment.journal_memo,
                this.$t("LabelPaymentReason"),
                "length255",
                this.$t("ErrorAccountLengthText"),
                "txtJournal_memo"
            );

            this.checkFieldInvalid(
                "isTooltipDocument_included",
                this.payment.document_included,
                this.$t("LabelAttach"),
                "length18",
                this.$t("ErrorAccountLength18"),
                "txtAttach"
            );

            // check invalid
            // nếu có value thì mới check input date
            this.checkFieldInvalid(
                "isTooltipPaymentDate",
                this.payment.ref_date,
                this.$t("LabelPaymentDate"),
                "date",
                this.$t("ErrorDatePayment") +
                    this.$t("Labelposted_date").toLocaleLowerCase(),
                "txtPaymentDate",
                this.payment.posted_date
            );

            // check maxlength diễn giải detail
            for (
                let index = 0;
                index < this.rowPaymentDetails.length;
                index++
            ) {
                const element = this.rowPaymentDetails[index];
                this.checkFieldInvalidPaymentDetail(
                    element.isTooltipDescription,
                    element.description,
                    this.$t("journal_memo") +
                        this.$t("GradeError") +
                        (index + 1),
                    "length255",
                    this.$t("ErrorAccountLengthText"),
                    this.$refs["txtdescription"][index],
                    index
                );
            }

            // check maxlength diễn giải detail
            for (
                let index = 0;
                index < this.rowPaymentDetails.length;
                index++
            ) {
                const element = this.rowPaymentDetails[index];
                this.checkFieldInvalidPaymentDetailAmount(
                    element.isTooltipAmount,
                    element.amount,
                    this.$t("amount") + this.$t("GradeError") + (index + 1),
                    "length18",
                    this.$t("ErrorAccountLength18"),
                    this.$refs["txtamount"][index],
                    index
                );
            }

            // nếu ko có lỗi thì ẩn popup
            let check = true;

            const refNames = Object.values(this.errorMessage);
            for (let index = 0; index < refNames.length; index++) {
                const element = refNames[index];
                if (
                    element !== "space" &&
                    element !== this.invalidPaymentNumber
                ) {
                    check = false;
                }
            }

            if (check === false) {
                return false;
            } else {
                return true;
            }
        },

        /**
         * Hàm check isEmpty
         * Author: KienNT (11/06/2023)
         *  @param (fieldName,fieldValue,errorLabel): tham số 1: tooltip the label, tham số 2 là giá trị ô input, tham số 3: label lỗi, tham số 4 là ref
         */
        checkField(fieldName, fieldValue, errorLabel, field) {
            try {
                if (this.isEmpty(fieldValue)) {
                    // lỗi valid form thì xóa lỗi cùng mã
                    if (this.errorMessage.includes(this.errorExistId)) {
                        const index = this.errorMessage.indexOf(
                            this.errorExistId
                        );
                        this.errorMessage.splice(index, 1);
                        this.isTooltip.isTooltipPaymentNumber = false;
                    }
                    if (this.errorMessage.includes(this.invalidPaymentNumber)) {
                        const index = this.errorMessage.indexOf(
                            this.invalidPaymentNumber
                        );
                        this.errorMessage.splice(index, 1);
                        this.isTooltip.isTooltipPaymentNumber = false;
                    }

                    this.isTooltip[fieldName] = true;
                    // nếu chưa có lỗi thì thêm ptu lỗi đó vào
                    if (
                        !this.errorMessage.includes(
                            errorLabel + this.$t("ErrorEmpty")
                        )
                    ) {
                        this.errorMessage[this.getTabIndex(field)] =
                            errorLabel + this.$t("ErrorEmpty");
                    }
                } else {
                    if (this.errorMessage.includes(this.errorExistId)) {
                        const index = this.errorMessage.indexOf(
                            this.errorExistId
                        );
                        this.errorMessage.splice(index, 1);
                    }
                    this.isTooltip[fieldName] = false;
                    if (
                        this.errorMessage.includes(
                            errorLabel + this.$t("ErrorEmpty")
                        )
                    ) {
                        this.errorMessage.splice(this.getTabIndex(field), 1);
                        this.errorMessage.splice(
                            this.getTabIndex(field),
                            0,
                            "space"
                        );
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm check invalid
         * Author: KienNT (10/06/2023)
         *  @param (fieldName,fieldValue,errorLabel): tham số 1: true,false tooltip label, tham số 2 là giá trị ô input, tham số 3: label lỗi, tham số 4: loại (email,date,..), tham số 5 loại label lỗi
         */
        checkFieldInvalid(
            fieldName,
            fieldValue,
            errorLabel,
            kind,
            errorText,
            field,
            fieldValue1 = ""
        ) {
            try {
                if (!this.isEmpty(fieldValue)) {
                    // check input phải là số
                    if (this.isInValid(fieldValue, fieldValue1, kind)) {
                        if (
                            this.errorMessage.includes(
                                this.invalidPaymentNumber
                            )
                        ) {
                            const index = this.errorMessage.indexOf(
                                this.invalidPaymentNumber
                            );
                            this.errorMessage.splice(index, 1);
                            this.isTooltip.isTooltipPaymentNumber = false;
                        }

                        this.isTooltip[fieldName] = true;
                        // nếu chưa có lỗi thì thêm ptu lỗi đó vào
                        if (
                            !this.errorMessage.includes(errorLabel + errorText)
                        ) {
                            this.errorMessage[this.getTabIndex(field)] =
                                errorLabel + errorText;
                        }
                    } else {
                        this.isTooltip[fieldName] = false;
                        if (
                            this.errorMessage.includes(errorLabel + errorText)
                        ) {
                            this.errorMessage.splice(
                                this.getTabIndex(field),
                                1
                            );
                            this.errorMessage.splice(
                                this.getTabIndex(field),
                                0,
                                "space"
                            );
                        }
                    }
                } else {
                    this.isTooltip[fieldName] = false;
                    if (this.errorMessage.includes(errorLabel + errorText)) {
                        this.errorMessage.splice(this.getTabIndex(field), 1);
                        this.errorMessage.splice(
                            this.getTabIndex(field),
                            0,
                            "space"
                        );
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm validate diễn giải
         * Author: KienNT (17/06/2023)
         */
        checkFieldInvalidPaymentDetail(
            isTooltip,
            fieldValue,
            errorLabel,
            kind,
            errorText,
            field,
            index,
            fieldValue1 = ""
        ) {
            try {
                if (!this.isEmpty(fieldValue)) {
                    // check input phải là số
                    if (this.isInValid(fieldValue, fieldValue1, kind)) {
                        if (
                            this.errorMessage.includes(
                                this.invalidPaymentNumber
                            )
                        ) {
                            const index = this.errorMessage.indexOf(
                                this.invalidPaymentNumber
                            );
                            this.errorMessage.splice(index, 1);
                            this.isTooltip.isTooltipPaymentNumber = false;
                        }

                        this.rowPaymentDetails[
                            index
                        ].isTooltipDescription = true;
                        // nếu chưa có lỗi thì thêm ptu lỗi đó vào
                        if (
                            !this.errorMessage.includes(errorLabel + errorText)
                        ) {
                            if (field.tagName && field.tagName === "SPAN") {
                                this.errorMessage[field.tabIndex] =
                                    errorLabel + errorText;
                            } else {
                                this.errorMessage[
                                    field.$el.nextElementSibling.tabIndex
                                ] = errorLabel + errorText;
                            }
                        }
                    } else {
                        this.rowPaymentDetails[
                            index
                        ].isTooltipDescription = false;
                        if (
                            this.errorMessage.includes(errorLabel + errorText)
                        ) {
                            if (field.tagName && field.tagName === "SPAN") {
                                this.errorMessage.splice(field.tabIndex, 1);
                            } else {
                                this.errorMessage.splice(
                                    field.$el.nextElementSibling.tabIndex,
                                    1
                                );
                            }
                            if (field.tagName && field.tagName === "SPAN") {
                                this.errorMessage.splice(
                                    field.tabIndex,
                                    0,
                                    "space"
                                );
                            } else {
                                this.errorMessage.splice(
                                    field.$el.nextElementSibling.tabIndex,
                                    0,
                                    "space"
                                );
                            }
                        }
                    }
                } else {
                    this.rowPaymentDetails[index].isTooltipDescription = false;
                    if (this.errorMessage.includes(errorLabel + errorText)) {
                        if (field.tagName && field.tagName === "SPAN") {
                            this.errorMessage.splice(field.tabIndex, 1);
                        } else {
                            this.errorMessage.splice(
                                field.$el.nextElementSibling.tabIndex,
                                1
                            );
                        }

                        if (field.tagName && field.tagName === "SPAN") {
                            this.errorMessage.splice(
                                field.tabIndex,
                                0,
                                "space"
                            );
                        } else {
                            this.errorMessage.splice(
                                field.$el.nextElementSibling.tabIndex,
                                0,
                                "space"
                            );
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm validate số tiền
         * Author: KienNT (17/06/2023)
         */
        checkFieldInvalidPaymentDetailAmount(
            isTooltip,
            fieldValue,
            errorLabel,
            kind,
            errorText,
            field,
            index,
            fieldValue1 = ""
        ) {
            try {
                if (!this.isEmpty(fieldValue)) {
                    // check input phải là số
                    if (this.isInValid(fieldValue, fieldValue1, kind)) {
                        if (
                            this.errorMessage.includes(
                                this.invalidPaymentNumber
                            )
                        ) {
                            const index = this.errorMessage.indexOf(
                                this.invalidPaymentNumber
                            );
                            this.errorMessage.splice(index, 1);
                            this.isTooltip.isTooltipPaymentNumber = false;
                        }

                        this.rowPaymentDetails[index].isTooltipAmount = true;
                        // nếu chưa có lỗi thì thêm ptu lỗi đó vào
                        if (
                            !this.errorMessage.includes(errorLabel + errorText)
                        ) {
                            if (field.tagName && field.tagName === "SPAN") {
                                this.errorMessage[field.tabIndex] =
                                    errorLabel + errorText;
                            } else {
                                this.errorMessage[
                                    field.$el.nextElementSibling.tabIndex
                                ] = errorLabel + errorText;
                            }
                        }
                    } else {
                        this.rowPaymentDetails[index].isTooltipAmount = false;
                        if (
                            this.errorMessage.includes(errorLabel + errorText)
                        ) {
                            if (field.tagName && field.tagName === "SPAN") {
                                this.errorMessage.splice(field.tabIndex, 1);
                            } else {
                                this.errorMessage.splice(
                                    field.$el.nextElementSibling.tabIndex,
                                    1
                                );
                            }
                            if (field.tagName && field.tagName === "SPAN") {
                                this.errorMessage.splice(
                                    field.tabIndex,
                                    0,
                                    "space"
                                );
                            } else {
                                this.errorMessage.splice(
                                    field.$el.nextElementSibling.tabIndex,
                                    0,
                                    "space"
                                );
                            }
                        }
                    }
                } else {
                    this.rowPaymentDetails[index].isTooltipAmount = false;
                    if (this.errorMessage.includes(errorLabel + errorText)) {
                        if (field.tagName && field.tagName === "SPAN") {
                            this.errorMessage.splice(field.tabIndex, 1);
                        } else {
                            this.errorMessage.splice(
                                field.$el.nextElementSibling.tabIndex,
                                1
                            );
                        }

                        if (field.tagName && field.tagName === "SPAN") {
                            this.errorMessage.splice(
                                field.tabIndex,
                                0,
                                "space"
                            );
                        } else {
                            this.errorMessage.splice(
                                field.$el.nextElementSibling.tabIndex,
                                0,
                                "space"
                            );
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm lấy tabindex của ptu đó để gán lỗi vào mảng ở STT đó để set focus vào ô đầu tiên
         * Author: KienNT (11/06/2023)
         * @param (fieldName): field cần lấy tabindex
         */
        getTabIndex(fieldName) {
            try {
                const refNames = Object.keys(this.$refs);
                for (let index = 0; index < refNames.length; index++) {
                    const elementRef = refNames[index];
                    if (elementRef === fieldName) {
                        const element = this.$refs[elementRef];
                        return element.tabindex;
                    }
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
                    .then((this.isLoading = true))
                    .then((res) => {
                        console.log(res);
                        if (this.isEmpty(modeBtn)) {
                            // chuyển form về mode show
                            if (this.kind === "BackToProcess") {
                                this.$router.push(
                                    "/cash/cashDetail/show/BackToProcess"
                                );
                            } else if (this.kind === "BackToTable") {
                                this.$router.push(
                                    "/cash/cashDetail/show/BackToTable"
                                );
                            }

                            this.rowPaymentDetails.forEach((el) => {
                                el.isEditAble = false;
                            });
                            this.changePaymentDetail = JSON.stringify(
                                this.rowPaymentDetails
                            );
                            this.changePaymentDetail = JSON.parse(
                                this.changePaymentDetail
                            );
                            this.changePaymentDetail =
                                this.changePaymentDetail.map((el) => {
                                    return {
                                        ref_detail_id: el?.ref_detail_id,
                                        mode: "edit",
                                    };
                                });

                            if (formMode === MISAEnum.formMode.Duplicate) {
                                this.isShowToastDuplicate = true;
                                setTimeout(() => {
                                    this.isShowToastDuplicate = false;
                                    this.oldPayment = JSON.stringify(
                                        this.deleteAttrObject(this.payment)
                                    );
                                    this.oldRowPaymentDetails = JSON.stringify(
                                        this.deleteEmptyAttributes(
                                            this.rowPaymentDetails
                                        )
                                    );
                                    this.isLoading = false;
                                }, 3000);
                            } else if (formMode === MISAEnum.formMode.Add) {
                                this.isShowToastAdd = true;
                                setTimeout(() => {
                                    this.isShowToastAdd = false;
                                    this.oldPayment = JSON.stringify(
                                        this.deleteAttrObject(this.payment)
                                    );
                                    this.oldRowPaymentDetails = JSON.stringify(
                                        this.deleteEmptyAttributes(
                                            this.rowPaymentDetails
                                        )
                                    );
                                    this.isLoading = false;
                                }, 3000);
                            }
                        } else if (modeBtn === MISAEnum.ModeBtn.SaveAndClose) {
                            // reset và đóng form
                            if (formMode === MISAEnum.formMode.Duplicate) {
                                this.isShowToastDuplicate = true;
                                setTimeout(() => {
                                    this.isShowToastDuplicate = false;
                                    this.destroyPopup(true);
                                    this.oldPayment = JSON.stringify(
                                        this.deleteAttrObject(this.payment)
                                    );
                                    this.oldRowPaymentDetails = JSON.stringify(
                                        this.deleteEmptyAttributes(
                                            this.rowPaymentDetails
                                        )
                                    );
                                    this.isLoading = false;
                                }, 3000);
                            } else if (formMode === MISAEnum.formMode.Add) {
                                this.isShowToastAdd = true;
                                setTimeout(() => {
                                    this.isShowToastAdd = false;
                                    this.destroyPopup(true);
                                    this.oldPayment = JSON.stringify(
                                        this.deleteAttrObject(this.payment)
                                    );
                                    this.oldRowPaymentDetails = JSON.stringify(
                                        this.deleteEmptyAttributes(
                                            this.rowPaymentDetails
                                        )
                                    );
                                    this.isLoading = false;
                                }, 3000);
                            }
                        } else if (modeBtn === MISAEnum.ModeBtn.SaveAndAdd) {
                            // reset nhưng ko đóng form
                            if (formMode === MISAEnum.formMode.Duplicate) {
                                this.isShowToastDuplicate = true;
                                setTimeout(() => {
                                    this.isShowToastDuplicate = false;
                                    this.destroyPopup(false);
                                    if (this.kind === "BackToProcess") {
                                        this.$router.push(
                                            "/cash/cashDetail/add/BackToProcess"
                                        );
                                    } else if (this.kind === "BackToTable") {
                                        this.$router.push(
                                            "/cash/cashDetail/add/BackToTable"
                                        );
                                    }
                                    // lấy 1 id mới
                                    this.getNewPaymentCode();
                                    this.errorMessage = [];
                                    this.oldPayment = JSON.stringify(
                                        this.deleteAttrObject(this.payment)
                                    );
                                    this.oldRowPaymentDetails = JSON.stringify(
                                        this.deleteEmptyAttributes(
                                            this.rowPaymentDetails
                                        )
                                    );
                                    this.isLoading = false;
                                }, 3000);
                            } else if (formMode === MISAEnum.formMode.Add) {
                                this.isShowToastAdd = true;
                                setTimeout(() => {
                                    this.isShowToastAdd = false;
                                    this.destroyPopup(false);
                                    if (this.kind === "BackToProcess") {
                                        this.$router.push(
                                            "/cash/cashDetail/add/BackToProcess"
                                        );
                                    } else if (this.kind === "BackToTable") {
                                        this.$router.push(
                                            "/cash/cashDetail/add/BackToTable"
                                        );
                                    }
                                    // lấy 1 id mới
                                    this.getNewPaymentCode();
                                    this.errorMessage = [];
                                    this.oldPayment = JSON.stringify(
                                        this.deleteAttrObject(this.payment)
                                    );
                                    this.oldRowPaymentDetails = JSON.stringify(
                                        this.deleteEmptyAttributes(
                                            this.rowPaymentDetails
                                        )
                                    );
                                    this.isLoading = false;
                                }, 3000);
                            }
                        }

                        // this.$emit("handleReLoadData");
                    })
                    .catch((error) => {
                        let response = error.response;
                        let errorData = response?.data?.Data?.Data;
                        console.log(errorData);
                        this.isLoading = false;
                        this.handleCaseCatch(response, errorData);
                    });
            } catch (error) {
                console.log(error);
            }
        },

        handleCaseCatch(response, errorData) {
            switch (response.status) {
                case 400:
                    if (errorData != null) {
                        if (this.errorMessage.includes(this.errorExistId)) {
                            const index = this.errorMessage.indexOf(
                                this.errorExistId
                            );
                            this.errorMessage.splice(index, 1);
                        }
                        for (let key in errorData) {
                            switch (key) {
                                case "refno_finance":
                                    this.isTooltip.isTooltipPaymentNumber = true;
                                    if (this.errorExistId) {
                                        this.errorExistId = false;
                                    }
                                    this.invalidPaymentNumber = errorData[key];
                                    break;

                                default:
                                    break;
                            }
                        }
                    }

                    this.isDialogError = true;
                    break;

                case 409:
                case 500:
                    if (this.errorMessage.length > 0) {
                        this.errorMessage = [];
                    }
                    this.errorExistId =
                        response?.data?.Data?.UserMsg ||
                        response?.data?.UserMsg;
                    this.errorMessage[10] = this.errorExistId;
                    if (response?.data?.Data?.UserMsg) {
                        this.isTooltip.isTooltipPaymentNumber = true;
                    }
                    this.isDialogWarningDuplicate = true;
                    break;

                default:
                    break;
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
                    total_amount: 0,
                };
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
                        supplier_id: null,
                        supplier_name_detail: "",
                        isTooltipDescription: false,
                        isTooltipAmount: false,
                    },
                ];
                this.supplierCodePayment = "";
                this.supplier_name_detail_fake = "";
                this.supplier_id_detail_fake = "";
                this.employeeId = "";
                this.totalMoney = 0;
                this.errorMessage = [];
                this.changePaymentDetail = [];
                if (
                    isClose &&
                    !this.isShowToastAdd &&
                    !this.isShowToastEdit &&
                    !this.isShowToastDuplicate &&
                    !this.isShowToastDelete
                ) {
                    if (this.kind === "BackToProcess") {
                        this.$router.push("/cash/process");
                    } else if (this.kind === "BackToTable") {
                        this.$router.push("/cash/payment");
                    }
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
        selectedRecordDetail(supplier, index) {
            this.rowPaymentDetails[index].supplier_name_detail =
                supplier.supplier_name;
            this.rowPaymentDetails[index].supplierCodeDetail =
                supplier.supplier_code;
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
                        supplier_id: null,
                        isTooltipDescription: false,
                        isTooltipAmount: false,
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
                ref_detail_id: "",
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
        onBtnWarningYes(text) {
            if (text === "isDialogWarning") {
                this.rowPaymentDetails = [
                    {
                        isEditAble: true,
                        description: this.payment.journal_memo,
                        debit_account_id: "",
                        credit_account_id: "",
                        amount: "0",
                        debit_account_name: "",
                        credit_account_name: "",
                        supplierCodeDetail: this.supplierCodePayment,
                        supplier_name_detail:
                            this.payment.payment_supplier_name,
                        supplier_id: this.payment.supplier_id,
                        isTooltipDescription: false,
                        isTooltipAmount: false,
                    },
                ];

                this.changePaymentDetail.map((el) => {
                    el.mode = "delete";
                    return el;
                });
                this.totalMoney = 0;
                this.isDialogWarning = false;
            } else {
                this.isDialogWarningDuplicate = false;
                this.getNewPaymentCode(true);
            }
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
            this.isDialogWarning
                ? (this.isDialogWarning = false)
                : (this.isDialogWarningDuplicate = false);
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
        filterNonNumericAmount(index) {
            this.rowPaymentDetails[index].amount = this.rowPaymentDetails[
                index
            ].amount.replace(/[^0-9]/g, "");
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

        handleClickSaveAndAdd() {
            this.btnSaveAndClose(
                this.textBtn === this.$t("BtnSaveEndAdd")
                    ? MISAEnum.ModeBtn.SaveAndAdd
                    : MISAEnum.ModeBtn.SaveAndClose
            );
        },

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
         * Click cất
         * Author: KienNT (10/06/2023)
         */
        clickBtnSave() {
            this.btnSaveAndClose("");
            if (this.formModePayment === MISAEnum.formMode.Edit) {
                if (this.kind === "BackToProcess") {
                    this.$router.push(
                        `/cash/cashDetail/edit/BackToProcess/${this.payment_id_selected}`
                    );
                } else if (this.kind === "BackToTable") {
                    this.$router.push(
                        `/cash/cashDetail/edit/BackToTable/${this.payment_id_selected}`
                    );
                }
            } else if (this.formModePayment === MISAEnum.formMode.Show) {
                if (this.kind === "BackToProcess") {
                    this.$router.push(
                        `/cash/cashDetail/show/BackToProcess/${this.payment_id_selected}`
                    );
                } else if (this.kind === "BackToTable") {
                    this.$router.push(
                        `/cash/cashDetail/show/BackToTable/${this.payment_id_selected}`
                    );
                }
            }
        },

        /**
         *  handle khi đóng popup
         * Author: KienNT (05/06/2023)
         */
        closeCashDetail() {
            if (this.isDialogError === false) {
                // kiểm tra dữ liệu đã thay đổi chưa
                const newPaymentData = JSON.stringify(
                    this.deleteAttrObject(this.payment)
                );
                const newPaymentDetailData = JSON.stringify(
                    this.deleteEmptyAttributes(this.rowPaymentDetails)
                );
                if (
                    this.oldPayment !== newPaymentData ||
                    this.oldRowPaymentDetails !== newPaymentDetailData
                ) {
                    this.isDialogNotify = true;
                    return;
                } else {
                    if (this.kind === "BackToProcess") {
                        this.$router.push("/cash/process");
                    } else if (this.kind === "BackToTable") {
                        this.$router.push("/cash/payment");
                    }
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

            if (event.ctrlKey && event.key === "s") {
                // Ngăn chặn trình duyệt thực hiện hành động mặc định của phím "Ctrl + S" là lưu trang web
                event.preventDefault();
                if (this.formModePayment !== MISAEnum.formMode.Show) {
                    this.btnSaveAndClose("");
                }
            }

            if (event.ctrlKey && event.shiftKey && event.key === "S") {
                event.preventDefault();
                if (this.formModePayment !== MISAEnum.formMode.Show) {
                    this.btnSaveAndClose(
                        this.textBtn === this.$t("BtnSaveEndAdd")
                            ? MISAEnum.ModeBtn.SaveAndAdd
                            : MISAEnum.ModeBtn.SaveAndClose
                    );
                }
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
        handleKeyUpDocumentIncluded() {
            this.payment.document_included = this.numberWithCommas(
                this.payment.document_included
            );
        },

        /**
         * Hàm handle khi nhấn phím tại input số tiền
         * Author: KienNT (07/06/2023)
         */
        handleKeyUpAmount(index) {
            this.rowPaymentDetails[index].amount = this.numberWithCommas(
                this.rowPaymentDetails[index].amount
            );
        },

        /**
         * Hàm click trasj row thì xóa
         * Author: KienNT (06/06/2023)
         */
        handleClickTrash(index, ref_detail_id) {
            this.rowPaymentDetails.splice(index, 1);
            if (this.formModePayment === MISAEnum.formMode.Edit) {
                this.changePaymentDetail.map((x) => {
                    if (x.ref_detail_id === ref_detail_id) {
                        x.mode = "delete";
                    }
                    return x;
                });
            }
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
                    clone[key] === null ||
                    clone[key] === ""
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
                        clone[key] === null ||
                        clone[key] === "" ||
                        clone[key] === true
                    ) {
                        delete clone[key];
                    }
                }
                result.push(clone);
            }

            return result;
        },

        /**
         * Hàm kiểm tra ngày chứng từ <= ngày hạch toán ko?
         * Author: KienNT (02/03/2023)
         * @param (value,kind): tham số 1 là giá trị chuỗi từ input và tham số 2 là loại: date,...
         */
        isInValid(value, value1 = "", kind) {
            try {
                if (!this.isEmpty(value)) {
                    let timenow;
                    let inputDate;
                    let regex;
                    switch (kind) {
                        case "date":
                            timenow = new Date(value1);
                            inputDate = new Date(value);
                            if (timenow < inputDate) {
                                return true;
                            } else {
                                return false;
                            }

                        case "number":
                            if (isNaN(value)) {
                                return true;
                            } else {
                                return false;
                            }
                        case "email":
                            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            // nếu ko đúng địng dạng thì ...
                            if (!regex.test(value)) {
                                return true;
                            } else {
                                return false;
                            }

                        case "character":
                            if (value.length < 3) {
                                return true;
                            } else {
                                return false;
                            }
                        case "characterStartWith":
                            if (value.length >= 3) {
                                if (!this.isEmpty(this.parent_id)) {
                                    if (!value.startsWith(this.parent_id)) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                } else {
                                    return false;
                                }
                            }
                            break;
                        case "invalid":
                            regex = /^xx[0-9]{1,}$/g;
                            if (!regex.test(value)) {
                                return true;
                            } else {
                                return false;
                            }

                        case "length50":
                            if (value.length > 50) {
                                return true;
                            } else {
                                return false;
                            }

                        case "length255":
                            if (value.length > 255) {
                                return true;
                            } else {
                                return false;
                            }

                        case "length18":
                            if (value.length > 18) {
                                return true;
                            } else {
                                return false;
                            }
                        default:
                            break;
                    }
                }
            } catch (error) {
                console.log(error);
            }
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
         *  handle khi nhấn phím ctrl + s
         * Author: KienNT (14/06/2023)
         * @param (event): là event
         */
        handlePress(event) {
            try {
                const btnDestroy = this.$refs["btnDestroy"];
                const InputPaymentNumber = this.$refs["txtPaymentNumber"];
                const txtSupplierCodeDetail =
                    this.$refs["txtSupplierCodeDetail"];
                // const txtdescription = this.$refs["txtdescription"][0];
                if (
                    event.key === "Tab" &&
                    event.target.isEqualNode(btnDestroy.$el)
                ) {
                    // Prevent the default tab behavior
                    event.preventDefault();
                    // focus vào input đầu tiên
                    this.setFocusInput("txtSupplierMaster");
                }

                if (
                    event.key === "Tab" &&
                    event.target.isEqualNode(
                        InputPaymentNumber.$el.nextElementSibling
                    )
                ) {
                    // Prevent the default tab behavior

                    event.preventDefault();
                    // focus vào input đầu tiên
                    this.rowPaymentDetails[0].isEditAble = true;
                    // this.setFocusInput(this.$refs["txtdescription"][0]);
                }

                // nếu phần tử focus là button thì có border
                const btnSaveEndAdd = this.$refs["btnSaveEndAdd"];
                const btnSave = this.$refs["btnSave"];
                const AddLine = this.$refs["AddLine"];
                const DeleteAllLine = this.$refs["DeleteAllLine"];
                if (txtSupplierCodeDetail) {
                    for (
                        let index = 0;
                        index < txtSupplierCodeDetail.length;
                        index++
                    ) {
                        const element = txtSupplierCodeDetail[index];
                        if (
                            element &&
                            event.key === "Tab" &&
                            event.target.isEqualNode(element.$el.children[1])
                        ) {
                            // Prevent the default tab behavior
                            event.preventDefault();
                            // focus vào input đầu tiên
                            this.rowPaymentDetails[index].isEditAble = false;
                        }
                    }
                }

                btnSaveEndAdd &&
                    btnSaveEndAdd.$el.addEventListener("focus", function () {
                        if (btnSaveEndAdd.$el.tagName === "BUTTON") {
                            btnSaveEndAdd.$el.classList.add(
                                "border-focus-white"
                            );
                        }
                    });

                AddLine &&
                    AddLine.$el.addEventListener("focus", function () {
                        if (AddLine.$el.tagName === "BUTTON") {
                            AddLine.$el.classList.add("border-focus-white");
                            this.rowPaymentDetails &&
                                this.rowPaymentDetails.forEach((el) => {
                                    el.isEditAble = false;
                                });
                        }
                    });

                DeleteAllLine &&
                    DeleteAllLine.$el.addEventListener("focus", function () {
                        if (DeleteAllLine.$el.tagName === "BUTTON") {
                            DeleteAllLine.$el.classList.add(
                                "border-focus-white"
                            );
                        }
                    });

                btnSave &&
                    btnSave.$el.addEventListener("focus", function () {
                        if (btnSave.$el.tagName === "BUTTON") {
                            btnSave.$el.classList.add("border-focus");
                        }
                    });

                btnDestroy &&
                    btnDestroy.$el.addEventListener("focus", function () {
                        if (btnDestroy.$el.tagName === "BUTTON") {
                            btnDestroy.$el.classList.add("border-focus");
                        }
                    });

                btnSaveEndAdd &&
                    btnSaveEndAdd.$el.addEventListener("blur", function () {
                        if (btnSaveEndAdd.$el.tagName === "BUTTON") {
                            btnSaveEndAdd.$el.classList.remove(
                                "border-focus-white"
                            );
                        }
                    });

                AddLine &&
                    AddLine.$el.addEventListener("blur", function () {
                        if (AddLine.$el.tagName === "BUTTON") {
                            AddLine.$el.classList.remove("border-focus-white");
                        }
                    });

                DeleteAllLine &&
                    DeleteAllLine.$el.addEventListener("blur", function () {
                        if (DeleteAllLine.$el.tagName === "BUTTON") {
                            DeleteAllLine.$el.classList.remove(
                                "border-focus-white"
                            );
                        }
                    });

                btnSave &&
                    btnSave.$el.addEventListener("blur", function () {
                        if (btnSave.$el.tagName === "BUTTON") {
                            btnSave.$el.classList.remove("border-focus");
                        }
                    });

                btnDestroy &&
                    btnDestroy.$el.addEventListener("blur", function () {
                        if (btnDestroy.$el.tagName === "BUTTON") {
                            btnDestroy.$el.classList.remove("border-focus");
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * format cho số lớn
         * Author: KienNT (07/06/2023)
         */
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },

        /**
         * chuyeenr tiền về số
         * Author: KienNT (07/06/2023)
         */
        currencyToNumber(currency) {
            var number = currency.replace(/\./g, "");
            return parseFloat(number);
        },

        /**
         * chuyển form mode
         * Author: KienNT (07/06/2023)
         */
        formatForm(value) {
            switch (value) {
                case "add":
                    return MISAEnum.formMode.Add;
                case "edit":
                    return MISAEnum.formMode.Edit;
                case "show":
                    return MISAEnum.formMode.Show;
                case "duplicate":
                    return MISAEnum.formMode.Duplicate;

                default:
                    break;
            }
        },
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
    color: white !important;
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

.border-focus-white {
    border: 1px solid #50b83c !important;
    outline: none;
}

.border-focus {
    border: 1px solid #50b83c !important;
    outline: none;
}

.paymentList tr td:nth-child(2) span.tooltiptext-error {
    width: 270px;
}

.paymentList thead tr th:last-child,
.paymentList tbody tr td:last-child {
    position: sticky;
    /* bottom: 0; */
    z-index: 2;
    border-right: 0;
}

.paymentList thead tr th:last-child,
.paymentList tbody tr td:last-child {
    right: 0;
}
</style>
