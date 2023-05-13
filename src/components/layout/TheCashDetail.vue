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
                                                            <TheOptionItem
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
                                                            ></TheOptionItem>
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
                                                    @click="closePopup"
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

                                                            <div class="m-row">
                                                                <div
                                                                    class="w-full"
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
                                                            </div>

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
                                                                    class="w-4/7 width-240"
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
                                                        </div>
                                                        <div class="w-1/5">
                                                            <div
                                                                class="left-separate m-row"
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
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="w-1/4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer-layout"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheOptionItem from "@/components/layout/TheOptionItem.vue";
export default {
    name: "CashDetail",
    components: {
        TheOptionItem,
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
            },
        };
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
    },
};
</script>

<style scoped>
@import url(@/css/layout/cashDetail.css);
</style>
