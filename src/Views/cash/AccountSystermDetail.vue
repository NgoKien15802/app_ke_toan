<template>
    <div
        class="ms-component con-ms-popup ms-popup-is-right popup-is-show account__systerm-detail"
    >
        <div class="ms-popup--background"></div>
        <div
            class="ms-popup ms-popup-content ms-popup-is-right"
            style="min-width: 800px; max-width: 800px; width: 800px"
            ref="containerSettingUI"
        >
            <span class="popup-shortkey"></span>
            <header class="ms-popup--header">
                <div class="ms-popup--title ms-popup-title-right">
                    <div class="header-popup flex">
                        <MHeading :text="textTitleAccountSysterm"></MHeading>
                    </div>
                </div>
                <div class="ms-popup-close">
                    <div class="form__header-question wrap-icon tooltip">
                        <div class="form__header-icon-question">
                            <MTooltip
                                kind="help"
                                :subtext="$t('TooltipHelp')"
                                style="top: 163%"
                            ></MTooltip>
                        </div>
                    </div>

                    <div
                        class="wrap-icon confirm__close-popup"
                        @click="closeAccountSysterm"
                    >
                        <div class="icon-close tooltip">
                            <MTooltip
                                kind="close"
                                :subtext="$t('TooltipClose')"
                                style="top: 163%"
                            ></MTooltip>
                        </div>
                    </div>
                </div>
            </header>
            <div
                class="ms-popup--content ms-popup-content-right account__systerm-detail"
            >
                <div class="form__group form__group-first-account row-input">
                    <label for="employeeId" class="form__label"
                        >{{ $t("LabelAccountNumber") }}
                        <span class="required">*</span></label
                    >
                    <div
                        :class="{
                            'tooltip-error': isTooltip.isTooltipAccountNumber,
                        }"
                    >
                        <MInput
                            id="employeeId"
                            name="AccountNumber"
                            tabindex="1"
                            autocomplete="off"
                            v-model="accountList.AccountNumber"
                            kind="default"
                            :isShowTooltip="isTooltip.isTooltipAccountNumber"
                            :required="true"
                            ref="txtAccountNumber"
                            @blur="
                                isEmpty(accountList.AccountNumber)
                                    ? (isTooltip.isTooltipAccountNumber = true)
                                    : (isTooltip.isTooltipAccountNumber = false)
                            "
                        />
                        <MTooltip
                            v-if="isTooltip.isTooltipAccountNumber"
                            :subtext="
                                isEmpty(accountList.AccountNumber)
                                    ? $t('LabelAccountNumber') +
                                      $t('ErrorEmpty')
                                    : errorExistId
                                    ? errorExistId
                                    : invalidEmployeeCode
                            "
                            kind="error"
                        ></MTooltip>
                    </div>
                </div>

                <div class="flex row-input w-full">
                    <div class="w-1/2 p-r-12">
                        <div class="form__group">
                            <label for="employeeId" class="form__label"
                                >{{ $t("LabelAccountName") }}
                                <span class="required">*</span></label
                            >
                            <div
                                :class="{
                                    'tooltip-error':
                                        isTooltip.isTooltipAccountName,
                                }"
                            >
                                <MInput
                                    name="AccountName"
                                    tabindex="1"
                                    autocomplete="off"
                                    v-model="accountList.AccountName"
                                    kind="default"
                                    :isShowTooltip="
                                        isTooltip.isTooltipAccountName
                                    "
                                    :required="true"
                                    ref="txtAccountName"
                                    @blur="
                                        isEmpty(accountList.AccountName)
                                            ? (isTooltip.isTooltipAccountName = true)
                                            : (isTooltip.isTooltipAccountName = false)
                                    "
                                />

                                <MTooltip
                                    v-if="isTooltip.isTooltipAccountName"
                                    :subtext="
                                        $t('LabelAccountName') +
                                        $t('ErrorEmpty')
                                    "
                                    kind="error"
                                ></MTooltip>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div class="form__group">
                            <label class="form__label">{{
                                $t("LabelEnglishName")
                            }}</label>
                            <div
                                :class="{
                                    'tooltip-error':
                                        isTooltip.isTooltipEnglishName,
                                }"
                            >
                                <MInput
                                    name="EnglishName"
                                    tabindex="1"
                                    autocomplete="off"
                                    v-model="accountList.EnglishName"
                                    kind="default"
                                    :isShowTooltip="
                                        isTooltip.isTooltipEnglishName
                                    "
                                    :required="true"
                                    ref="txtEnglishName"
                                    @blur="
                                        isEmpty(accountList.EnglishName)
                                            ? (isTooltip.isTooltipEnglishName = true)
                                            : (isTooltip.isTooltipEnglishName = false)
                                    "
                                />

                                <MTooltip
                                    v-if="isTooltip.isTooltipEnglishName"
                                    :subtext="
                                        $t('LabelEnglishName') +
                                        $t('ErrorEmpty')
                                    "
                                    kind="error"
                                ></MTooltip>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex row-input w-1/2 p-r-12">
                    <div class="w-1/2 p-r-12">
                        <label class="form__label"
                            >{{ $t("LabelGeneralAccount") }}
                        </label>

                        <MCombobox
                            :isShowTooltip="isTooltip.isTooltipGeneralAccount"
                            @handleCheckEmpty="handleCheckEmpty"
                            ref="txtGeneralAccount"
                            tabindex="3"
                            @setFocus="setFocus"
                            @handleMountOver="handleMountOver"
                            @handleMountOut="handleMountOut"
                        ></MCombobox>
                        <MTooltip
                            v-if="isTooltip.isTooltipGeneralAccount"
                            :subtext="
                                $t('LabelGeneralAccount') + $t('ErrorEmpty')
                            "
                            kind="error"
                            ref="tootipCombobox"
                        ></MTooltip>
                    </div>
                    <div class="w-1/2">
                        <label class="form__label"
                            >{{ $t("LabelProperty") }}
                        </label>

                        <MCombobox
                            :isShowTooltip="isTooltip.isTooltipProperty"
                            @handleCheckEmpty="handleCheckEmpty"
                            ref="txtProperty"
                            tabindex="3"
                            @setFocus="setFocus"
                            @handleMountOver="handleMountOver"
                            @handleMountOut="handleMountOut"
                        ></MCombobox>
                        <MTooltip
                            v-if="isTooltip.isTooltipProperty"
                            :subtext="$t('LabelProperty') + $t('ErrorEmpty')"
                            kind="error"
                            ref="tootipCombobox"
                        ></MTooltip>
                    </div>
                </div>

                <div class="row-input w-full">
                    <label class="form__label"
                        >{{ $t("LabelInterpret") }}
                    </label>
                    <textarea maxlength="255" class="ms-textarea"></textarea>
                </div>

                <div class="w-full flex m-flex-row-gap-8">
                    <MCheckbox
                        v-model="isForeignCurrencyPlan"
                        :initValue="isForeignCurrencyPlan"
                        @handleCheckbox="handleCheckbox($event)"
                        ref="checkbox"
                    ></MCheckbox>
                    <span>
                        {{ $t("ForeignCurrencyPlan") }}
                    </span>
                </div>

                <div class="w-full ms-collapse-infomation">
                    <div d class="ms-collapse default">
                        <div class="ms-collapse-item primary-collapse">
                            <a
                                class="ms-collapse-item--header"
                                @click="handleShowFollowDetail"
                                ref="linkShowFollowDetail"
                                ><span
                                    class="icon-header ms-collapse-item--icon-header primary-collapse--icon"
                                    ><div class="mi-16 block-center">
                                        <div
                                            class="mi-arrow-right--black"
                                        ></div></div
                                ></span>
                                <div class="ms-collapse-item--label">
                                    <div>{{ $t("followDetail") }}</div>
                                </div></a
                            >

                            <div
                                class="ms-collapse-item--content"
                                style="max-height: 0px"
                            >
                                <div class="con-content--item">
                                    <div class="w-full">
                                        <div class="w-full row-input flex">
                                            <div class="w-1/2">
                                                <div
                                                    class="w-5/6 m-flex-row-gap-8 flex align-center"
                                                >
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <MCheckbox
                                                            v-model="
                                                                isForeignCurrencyPlan
                                                            "
                                                            :initValue="
                                                                isForeignCurrencyPlan
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckbox(
                                                                    $event
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span>
                                                            {{ $t("Object") }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <MCombobox
                                                            :isShowTooltip="
                                                                isTooltip.isTooltipProperty
                                                            "
                                                            @handleCheckEmpty="
                                                                handleCheckEmpty
                                                            "
                                                            ref="txtProperty"
                                                            tabindex="3"
                                                            @setFocus="setFocus"
                                                            @handleMountOver="
                                                                handleMountOver
                                                            "
                                                            @handleMountOut="
                                                                handleMountOut
                                                            "
                                                        ></MCombobox>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-1/2">
                                                <div
                                                    class="w-5/6 m-flex-row-gap-8 flex align-center"
                                                >
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <MCheckbox
                                                            v-model="
                                                                isForeignCurrencyPlan
                                                            "
                                                            :initValue="
                                                                isForeignCurrencyPlan
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckbox(
                                                                    $event
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span>
                                                            {{ $t("Object") }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <MCombobox
                                                            :isShowTooltip="
                                                                isTooltip.isTooltipProperty
                                                            "
                                                            @handleCheckEmpty="
                                                                handleCheckEmpty
                                                            "
                                                            ref="txtProperty"
                                                            tabindex="3"
                                                            @setFocus="setFocus"
                                                            @handleMountOver="
                                                                handleMountOver
                                                            "
                                                            @handleMountOut="
                                                                handleMountOut
                                                            "
                                                        ></MCombobox>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full row-input flex">
                                            <div class="w-1/2">
                                                <div
                                                    class="w-5/6 m-flex-row-gap-8 flex align-center"
                                                >
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <MCheckbox
                                                            v-model="
                                                                isForeignCurrencyPlan
                                                            "
                                                            :initValue="
                                                                isForeignCurrencyPlan
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckbox(
                                                                    $event
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span>
                                                            {{ $t("Object") }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <MCombobox
                                                            :isShowTooltip="
                                                                isTooltip.isTooltipProperty
                                                            "
                                                            @handleCheckEmpty="
                                                                handleCheckEmpty
                                                            "
                                                            ref="txtProperty"
                                                            tabindex="3"
                                                            @setFocus="setFocus"
                                                            @handleMountOver="
                                                                handleMountOver
                                                            "
                                                            @handleMountOut="
                                                                handleMountOut
                                                            "
                                                        ></MCombobox>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-1/2">
                                                <div
                                                    class="w-5/6 m-flex-row-gap-8 flex align-center"
                                                >
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <MCheckbox
                                                            v-model="
                                                                isForeignCurrencyPlan
                                                            "
                                                            :initValue="
                                                                isForeignCurrencyPlan
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckbox(
                                                                    $event
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span>
                                                            {{ $t("Object") }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <MCombobox
                                                            :isShowTooltip="
                                                                isTooltip.isTooltipProperty
                                                            "
                                                            @handleCheckEmpty="
                                                                handleCheckEmpty
                                                            "
                                                            ref="txtProperty"
                                                            tabindex="3"
                                                            @setFocus="setFocus"
                                                            @handleMountOver="
                                                                handleMountOver
                                                            "
                                                            @handleMountOut="
                                                                handleMountOut
                                                            "
                                                        ></MCombobox>
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
            </div>

            <div
                class="popup__form-footer"
                style="border-top: 4px solid #f4f5f8"
            >
                <div class="popup__form-footer-left">
                    <MButton
                        class="btn btn-default close__add-employee"
                        tabindex="19"
                        :text="$t('BtnDestroy')"
                        :click="closeAccountSystermDetail"
                        ref="btnDestroy"
                    >
                    </MButton>
                </div>
                <div class="popup__form-footer-right">
                    <div>
                        <MButton
                            class="btn btn-default close__add-employee tooltip"
                            tabindex="17"
                            :text="$t('BtnSave')"
                            :click="() => btnSaveAndClose(true)"
                            ref="btnSave"
                        >
                            <MTooltip
                                kind="AccountSysterm"
                                :subtext="$t('TooltipSave')"
                            ></MTooltip>
                        </MButton>
                    </div>
                    <div>
                        <MButton
                            class="btn btn-primary close__add-employee tooltip"
                            tabindex="18"
                            :text="$t('BtnSaveEndAdd')"
                            :click="() => btnSaveAndClose(false)"
                            ref="btnSaveEndAdd"
                        >
                            <MTooltip
                                kind="AccountSysterm"
                                :subtext="$t('TooltipSaveAndAdd')"
                            ></MTooltip>
                        </MButton>
                    </div>
                </div>
            </div>
            <div
                class="resize flex is-full-screen-false"
                @click="handleResizeComponent"
                ref="iconResize"
            >
                <div class="mi mi-16 mi-chevron-left"></div>
            </div>
            <div class="ms-popup--extend-part"></div>
        </div>
    </div>
</template>

<script>
import MISAResouce from "@/js/resource";
import MISAEnum from "@/js/enum";

export default {
    name: "AccountSystermDetail",
    props: {
        textTitleAccountSysterm: {
            type: String,
        },
        formMode: {
            type: String,
        },
    },
    data() {
        return {
            MISAResouce,
            accountList: {},
            formModeAccount: "",
            isTooltip: {
                isTooltipAccountNumber: false,
                isTooltipAccountName: false,
                isTooltipEnglishName: false,
                isTooltipGeneralAccount: false,
                isTooltipProperty: false,
            },
            isDisabledAccountNumber: false,
            isForeignCurrencyPlan: false,
        };
    },
    mounted() {
        window.addEventListener("keydown", this.handlePressKeyShort);
    },
    beforeUnmount() {
        window.removeEventListener("keydown", this.handlePressKeyShort);
    },

    created() {
        this.formModeAccount = this.formMode;

        try {
            /**
             * Call API lấy ra id bất kỳ khi click btn thêm mới
             * Author: KienNT (06/05/2023)
             */
            if (this.formModeAccount === MISAEnum.formMode.Add) {
                this.setFocusInput("txtAccountNumber");
            }
            // else if (
            // /**
            //  * TH nhân bản
            //  *Author: KienNT (06/05/2023)
            //  */
            //     !this.isEmpty(this.dataEmployeeIdSelected) &&
            //     this.formModePopup == MISAEnum.formMode.Duplicate
            // ) {
            //     this.getDataByEmplyeeId(MISAEnum.formMode.Duplicate);
            // } else {
            //     /**
            //      * Call API lấy ra id bất kỳ khi có id để sửa
            //      *Author: KienNT (06/05/2023)
            //      */
            //     this.getDataByEmplyeeId();
            // }
        } catch (error) {
            console.log(error);
        }
    },

    methods: {
        /**
         *  handle ẩn popup Account
         * Author: KienNT (06/05/2023)
         */
        closeAccountSysterm() {
            this.$emit("closeAccountSysterm");
        },

        /**
         *  handle khi click vào text link hiển thị chi tiết theo
         * Author: KienNT (06/05/2023)
         */
        handleShowFollowDetail() {
            const linkElementFollowDteail = this.$refs["linkShowFollowDetail"];
            linkElementFollowDteail.classList.toggle("open-item");
            const nextElement = linkElementFollowDteail.nextElementSibling;

            linkElementFollowDteail.firstChild.firstChild.firstChild.classList.toggle(
                "rorate-90"
            );

            if (linkElementFollowDteail.classList.contains("open-item")) {
                nextElement.style.maxHeight = "none";
            } else {
                nextElement.style.maxHeight = "0";
            }
        },

        /**
         * Xử lý thay đổi width của component
         * Author: KienNT (06/05/2023)
         */
        handleResizeComponent() {
            const iconResize = this.$refs["iconResize"];
            const containerSettingUI = this.$refs["containerSettingUI"];
            if (iconResize) {
                if (iconResize.classList.contains("is-full-screen-false")) {
                    iconResize.classList.remove("is-full-screen-false");
                    iconResize.classList.add("is-full-screen-true");
                } else if (
                    iconResize.classList.contains("is-full-screen-true")
                ) {
                    iconResize.classList.remove("is-full-screen-true");
                    iconResize.classList.add("is-full-screen-false");
                }
            }
            if (containerSettingUI) {
                if (iconResize.classList.contains("is-full-screen-true")) {
                    containerSettingUI.style.minWidth = "calc(100vw - 6px)";
                } else {
                    containerSettingUI.style.minWidth = "800px";
                }
            }
        },

        /**
         *  handle khi nhấn phím tắt
         * Author: KienNT (06/05/2023)
         * @param (event): là event
         */
        handlePressKeyShort(event) {
            // khi nhấn phím esc thì đóng form
            if (event.key === "Escape" || event.keyCode === 27) {
                this.$emit("closeAccountSystermDetail");
            }
        },

        /**
         *  handle ẩn popup account
         * Author: KienNT (06/05/2023)
         */
        closeAccountSystermDetail() {
            this.$emit("closeAccountSystermDetail");
        },

        /**
         * Hàm set focus cho element xác định
         * Author: KienNT (06/05/2023)
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
    },
};
</script>

<style scoped>
@import url(@/css/layout/settingUI.css);
@import url(@/css/layout/accountSystermDetail.css);
</style>
