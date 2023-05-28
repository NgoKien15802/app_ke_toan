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
                                            Phiếu chi xxx15
                                        </div>
                                        <div class="header-detail-input">
                                            <div
                                                class="paging__record block__lang"
                                                @click="handleOpenDropdown"
                                                ref="dropdown"
                                                style="width: 350px"
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
                                                            ref="iconDropdown"
                                                        ></div>
                                                    </button>
                                                    <input
                                                        readonly="true"
                                                        type="text"
                                                        style="border: none"
                                                        class="input__type dropdown-input paging-input input__lang"
                                                        v-model="keyWordSearch"
                                                        fdprocessedid="epqss"
                                                    />

                                                    <div
                                                        v-if="isOpenDropdown"
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
                                                                                "LabelObjectCode"
                                                                            )
                                                                        }}</label
                                                                    >
                                                                    <MInput
                                                                        tabindex="4"
                                                                        id="ObjectCode"
                                                                        name="MartialStatusName"
                                                                        kind="default"
                                                                        ref="txtObjectCode"
                                                                        v-model="
                                                                            paymentDetail.ObjectCode
                                                                        "
                                                                    />
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
                                                                            paymentDetail.ObjectName
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
                                                                            paymentDetail.Receiver
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
                                                                            paymentDetail.Address
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
                                                                        id="PaymentReason"
                                                                        kind="default"
                                                                        ref="txtPaymentReason"
                                                                        v-model="
                                                                            paymentDetail.PaymentReason
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
                                                                    <MInput
                                                                        tabindex="4"
                                                                        id="Employee"
                                                                        kind="default"
                                                                        ref="txtEmployee"
                                                                        v-model="
                                                                            paymentDetail.Employee
                                                                        "
                                                                    />
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
                                                                            paymentDetail.Attach
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
                                                                            "LabelAccountingDate"
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
                                                                            paymentDetail.AccountingDate
                                                                        "
                                                                        :isShowTooltip="
                                                                            isTooltip.isTooltipAccountingDate
                                                                        "
                                                                        @blur="
                                                                            isInValid(
                                                                                paymentDetail.AccountingDate,
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
                                                                            paymentDetail.PaymentDate
                                                                        "
                                                                        :isShowTooltip="
                                                                            isTooltip.isTooltipPaymentDate
                                                                        "
                                                                        @blur="
                                                                            isInValid(
                                                                                paymentDetail.PaymentDate,
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
                                                                        paymentDetail.PaymentNumber
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
                                    <div class="ms-con-dropdown grid__table">
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
                                                <TheTablePaymentDetail></TheTablePaymentDetail>
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
                                            :click="() => AddLineAndClose(true)"
                                            ref="AddLine"
                                        >
                                        </MButton
                                        ><MButton
                                            class="btn btn-default close__add-employee tooltip"
                                            tabindex="17"
                                            :text="$t('DeleteAllLine')"
                                            :click="
                                                () =>
                                                    DeleteAllLineAndClose(true)
                                            "
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
</template>

<script>
import TheTablePaymentDetail from "./TheTablePaymentDetail.vue";
export default {
    name: "CashDetail",
    components: {
        TheTablePaymentDetail,
    },
    data() {
        return {
            paymentDetail: {},
            keyWordSearch: "",
            isOpenDropdown: false,
            optionItem: [
                {
                    text: "LabelMale",
                    isActive: false,
                },
                {
                    text: "LabelFemale",
                    isActive: false,
                },
                {
                    text: "LabelOther",
                    isActive: false,
                },
            ],
            isTooltip: {
                isTooltipAccountingDate: false,
                isTooltipPaymentDate: false,
            },
        };
    },

    mounted() {
        window.addEventListener("keydown", this.handlePressKeyShort);
    },
    beforeUnmount() {
        window.removeEventListener("keydown", this.handlePressKeyShort);
    },

    methods: {
        handleOpenDropdown() {
            try {
                this.$refs["iconDropdown"].classList.toggle("rorate-180");
                this.isOpenDropdown = !this.isOpenDropdown;
            } catch (error) {
                console.log(error);
            }
        },
        closeCashDetail() {
            this.$emit("closeCashDetail");
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
    },
};
</script>

<style scoped>
@import url(@/css/layout/cashDetail.css);
</style>
