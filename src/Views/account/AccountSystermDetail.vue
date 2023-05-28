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
                            v-model="account.account_number"
                            kind="default"
                            :isShowTooltip="isTooltip.isTooltipAccountNumber"
                            :required="true"
                            ref="txtAccountNumber"
                            @blur="
                                isEmpty(account.AccountNumber)
                                    ? (isTooltip.isTooltipAccountNumber = true)
                                    : (isTooltip.isTooltipAccountNumber = false)
                            "
                        />
                        <MTooltip
                            v-if="isTooltip.isTooltipAccountNumber"
                            :subtext="
                                isEmpty(account.AccountNumber)
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
                                    v-model="account.account_name"
                                    kind="default"
                                    :isShowTooltip="
                                        isTooltip.isTooltipAccountName
                                    "
                                    :required="true"
                                    ref="txtAccountName"
                                    @blur="
                                        isEmpty(account.AccountName)
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
                                    v-model="account.account_name_english"
                                    kind="default"
                                    :isShowTooltip="
                                        isTooltip.isTooltipEnglishName
                                    "
                                    :required="true"
                                    ref="txtEnglishName"
                                    @blur="
                                        isEmpty(account.EnglishName)
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

                        <MComboboxTable
                            :data="dataAccountParent"
                            :iconCombobox="iconComboboxGeneralAccount"
                            :btnIconCombobox="btnIconComboboxGeneralAccount"
                            :optionWrapperCombobox="
                                optionWrapperComboboxGeneralAccount
                            "
                            @selectedDepartment="selectedParent"
                            kind="generalAccount"
                            :departmentName="parent_id"
                            :headersData="['account_number', 'account_name']"
                        ></MComboboxTable>
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
                            <span class="required">*</span>
                        </label>

                        <MCombobox
                            :isShowTooltip="isTooltip.isTooltipProperty"
                            @handleCheckEmpty="handleCheckEmpty"
                            :data="propertyList"
                            :departmentName="account_category_kind"
                            :btnIconCombobox="btnIconComboboxProperty"
                            :optionWrapperCombobox="
                                optionWrapperComboboxProperty
                            "
                            @selectedDepartment="selectedDepartment"
                            kind="property"
                            :iconCombobox="iconComboboxProperty"
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
                    <textarea
                        maxlength="255"
                        v-model="account.description"
                        class="ms-textarea"
                    ></textarea>
                </div>

                <div class="w-full flex m-flex-row-gap-8">
                    <MCheckbox
                        v-model="account.is_postable_in_foreign_currency"
                        :initValue="account.is_postable_in_foreign_currency"
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
                                                                account.account_object_type
                                                            "
                                                            :initValue="
                                                                account.account_object_type
                                                            "
                                                            @handleCheckbox="
                                                                ($event) =>
                                                                    handleCheckboxAccount(
                                                                        event,
                                                                        'account_object_type',
                                                                        'valueInputAccount_object_type',
                                                                        $t(
                                                                            'CustomerCash'
                                                                        )
                                                                    )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span
                                                            @click="
                                                                () =>
                                                                    handleCheckboxAccount(
                                                                        event,
                                                                        'account_object_type',
                                                                        'valueInputAccount_object_type',
                                                                        $t(
                                                                            'CustomerCash'
                                                                        )
                                                                    )
                                                            "
                                                        >
                                                            {{ $t("Object") }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <div
                                                            class="paging__record"
                                                            @click="
                                                                () => {
                                                                    account.account_object_type
                                                                        ? handleAccount_object_type()
                                                                        : '';
                                                                }
                                                            "
                                                            style="
                                                                max-width: 100%;
                                                            "
                                                            ref="dropdownAccount_object_type"
                                                        >
                                                            <div
                                                                class="input__wrapper dropdown"
                                                                :class="
                                                                    !account.account_object_type
                                                                        ? 'disabledDopdown'
                                                                        : ''
                                                                "
                                                            >
                                                                <button
                                                                    class="input__icon dropdown-icon"
                                                                    fdprocessedid="jeq9qa"
                                                                    :class="
                                                                        !account.account_object_type
                                                                            ? 'disabledDopdown'
                                                                            : ''
                                                                    "
                                                                >
                                                                    <div
                                                                        class="input__icon-dropdown"
                                                                        ref="iconAccount_object_type"
                                                                    ></div>
                                                                </button>
                                                                <input
                                                                    readonly="true"
                                                                    type="text"
                                                                    style="
                                                                        border: none;
                                                                    "
                                                                    class="input__type dropdown-input paging-input"
                                                                    v-model="
                                                                        valueInput.valueInputAccount_object_type
                                                                    "
                                                                    :class="
                                                                        !account.account_object_type
                                                                            ? 'disabledDopdown'
                                                                            : ''
                                                                    "
                                                                    fdprocessedid="epqss"
                                                                />

                                                                <div
                                                                    v-if="
                                                                        isOpenAccount_object_type
                                                                    "
                                                                    class="option__wrapper-lang"
                                                                >
                                                                    <ul
                                                                        class="option__list scrollbar_customize"
                                                                    >
                                                                        <MOptionItem
                                                                            v-for="(
                                                                                item,
                                                                                index
                                                                            ) in account_object_type"
                                                                            :key="
                                                                                index
                                                                            "
                                                                            :text="
                                                                                item.text
                                                                            "
                                                                            :isActive="
                                                                                item.isActive
                                                                            "
                                                                            @handleClickItem="
                                                                                handleClickItemAccount_object_type
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
                                                </div>
                                            </div>
                                            <div class="w-1/2">
                                                <div
                                                    class="w-5/6 m-flex-row-gap-8 flex align-center"
                                                    style="
                                                        justify-content: start;
                                                    "
                                                >
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <MCheckbox
                                                            v-model="
                                                                account.detail_by_bank_account
                                                            "
                                                            :initValue="
                                                                account.detail_by_bank_account
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span
                                                            @click="
                                                                () =>
                                                                    handleCheckboxAccount(
                                                                        event,
                                                                        'detail_by_bank_account'
                                                                    )
                                                            "
                                                        >
                                                            {{
                                                                $t(
                                                                    "Detail_by_bank_account"
                                                                )
                                                            }}
                                                        </span>
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
                                                                account.detail_by_job
                                                            "
                                                            :initValue="
                                                                account.detail_by_job
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckboxAccount(
                                                                    event,
                                                                    'detail_by_job'
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span
                                                            @click="
                                                                () =>
                                                                    handleCheckboxAccount(
                                                                        event,
                                                                        'detail_by_job'
                                                                    )
                                                            "
                                                        >
                                                            {{
                                                                $t(
                                                                    "Detail_by_job"
                                                                )
                                                            }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <TheDropdownAccount
                                                            :dropdownRef="
                                                                dropdownDetail_by_job
                                                            "
                                                            :iconDropdownRef="
                                                                iconDropdownDetail_by_job
                                                            "
                                                            :isOpenDropdown="
                                                                isOpen.isOpenDropdownDetail_by_job
                                                            "
                                                            @setIsOpenDropdown="
                                                                (isShow) => {
                                                                    setIsOpenDropdown(
                                                                        isShow,
                                                                        'isOpenDropdownDetail_by_job'
                                                                    );
                                                                }
                                                            "
                                                            @handleReceiveValue="
                                                                (value) =>
                                                                    handleReceiveValueInput(
                                                                        value,
                                                                        'valueInputDetail_by_job'
                                                                    )
                                                            "
                                                            :diabledDropdown="
                                                                account.detail_by_job
                                                            "
                                                        ></TheDropdownAccount>
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
                                                                account.detail_by_project_work
                                                            "
                                                            :initValue="
                                                                account.detail_by_project_work
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckboxAccount(
                                                                    event,
                                                                    'detail_by_project_work'
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span
                                                            @click="
                                                                () =>
                                                                    handleCheckboxAccount(
                                                                        event,
                                                                        'detail_by_project_work'
                                                                    )
                                                            "
                                                        >
                                                            {{
                                                                $t(
                                                                    "Detail_by_project_work"
                                                                )
                                                            }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <TheDropdownAccount
                                                            :dropdownRef="
                                                                dropdownDetail_by_project_work
                                                            "
                                                            :iconDropdownRef="
                                                                iconDropdownDetail_by_project_work
                                                            "
                                                            :isOpenDropdown="
                                                                isOpen.isOpenDropdownDetail_by_project_work
                                                            "
                                                            @setIsOpenDropdown="
                                                                (isShow) => {
                                                                    setIsOpenDropdown(
                                                                        isShow,
                                                                        'isOpenDropdownDetail_by_project_work'
                                                                    );
                                                                }
                                                            "
                                                            @handleReceiveValue="
                                                                (value) =>
                                                                    handleReceiveValueInput(
                                                                        value,
                                                                        'valueInputDetail_by_project_work'
                                                                    )
                                                            "
                                                            :diabledDropdown="
                                                                account.detail_by_project_work
                                                            "
                                                        ></TheDropdownAccount>
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
                                                                account.detail_by_order
                                                            "
                                                            :initValue="
                                                                account.detail_by_order
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckboxAccount(
                                                                    event,
                                                                    'detail_by_order'
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span
                                                            @click="
                                                                () =>
                                                                    handleCheckboxAccount(
                                                                        event,
                                                                        'detail_by_order'
                                                                    )
                                                            "
                                                        >
                                                            {{
                                                                $t(
                                                                    "Detail_by_order"
                                                                )
                                                            }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <TheDropdownAccount
                                                            :dropdownRef="
                                                                dropdownDetail_by_order
                                                            "
                                                            :iconDropdownRef="
                                                                iconDropdownDetail_by_order
                                                            "
                                                            :isOpenDropdown="
                                                                isOpen.isOpenDropdownDetail_by_order
                                                            "
                                                            @setIsOpenDropdown="
                                                                (isShow) => {
                                                                    setIsOpenDropdown(
                                                                        isShow,
                                                                        'isOpenDropdownDetail_by_order'
                                                                    );
                                                                }
                                                            "
                                                            @handleReceiveValue="
                                                                (value) =>
                                                                    handleReceiveValueInput(
                                                                        value,
                                                                        'valueInputDetail_by_order'
                                                                    )
                                                            "
                                                            :diabledDropdown="
                                                                account.detail_by_order
                                                            "
                                                        ></TheDropdownAccount>
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
                                                                account.detail_by_contract
                                                            "
                                                            :initValue="
                                                                account.detail_by_contract
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckboxAccount(
                                                                    event,
                                                                    'detail_by_contract'
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span
                                                            @click="
                                                                () =>
                                                                    handleCheckboxAccount(
                                                                        event,
                                                                        'detail_by_contract'
                                                                    )
                                                            "
                                                        >
                                                            {{
                                                                $t(
                                                                    "Detail_by_contract"
                                                                )
                                                            }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <TheDropdownAccount
                                                            :dropdownRef="
                                                                dropdownDetail_by_contract
                                                            "
                                                            :iconDropdownRef="
                                                                iconDropdownDetail_by_contract
                                                            "
                                                            :isOpenDropdown="
                                                                isOpen.isOpenDropdownDetail_by_contract
                                                            "
                                                            @setIsOpenDropdown="
                                                                (isShow) => {
                                                                    setIsOpenDropdown(
                                                                        isShow,
                                                                        'isOpenDropdownDetail_by_contract'
                                                                    );
                                                                }
                                                            "
                                                            @handleReceiveValue="
                                                                (value) =>
                                                                    handleReceiveValueInput(
                                                                        value,
                                                                        'valueInputDetail_by_contract'
                                                                    )
                                                            "
                                                            :diabledDropdown="
                                                                account.detail_by_contract
                                                            "
                                                        ></TheDropdownAccount>
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
                                                                account.detail_by_pu_contract
                                                            "
                                                            :initValue="
                                                                account.detail_by_pu_contract
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckboxAccount(
                                                                    event,
                                                                    'detail_by_pu_contract'
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span
                                                            @click="
                                                                () =>
                                                                    handleCheckboxAccount(
                                                                        event,
                                                                        'detail_by_pu_contract'
                                                                    )
                                                            "
                                                        >
                                                            {{
                                                                $t(
                                                                    "Detail_by_pu_contract"
                                                                )
                                                            }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <TheDropdownAccount
                                                            :dropdownRef="
                                                                dropdownDetail_by_pu_contract
                                                            "
                                                            :iconDropdownRef="
                                                                iconDropdownDetail_by_pu_contract
                                                            "
                                                            :isOpenDropdown="
                                                                isOpen.isOpenDropdownDetail_by_pu_contract
                                                            "
                                                            @setIsOpenDropdown="
                                                                (isShow) => {
                                                                    setIsOpenDropdown(
                                                                        isShow,
                                                                        'isOpenDropdownDetail_by_pu_contract'
                                                                    );
                                                                }
                                                            "
                                                            @handleReceiveValue="
                                                                (value) =>
                                                                    handleReceiveValueInput(
                                                                        value,
                                                                        'valueInputDetail_by_pu_contract'
                                                                    )
                                                            "
                                                            :diabledDropdown="
                                                                account.detail_by_pu_contract
                                                            "
                                                        ></TheDropdownAccount>
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
                                                                account.detail_by_expense_item
                                                            "
                                                            :initValue="
                                                                account.detail_by_expense_item
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckboxAccount(
                                                                    event,
                                                                    'detail_by_expense_item'
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span
                                                            @click="
                                                                () =>
                                                                    handleCheckboxAccount(
                                                                        event,
                                                                        'detail_by_expense_item'
                                                                    )
                                                            "
                                                        >
                                                            {{
                                                                $t(
                                                                    "Detail_by_expense_item"
                                                                )
                                                            }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <TheDropdownAccount
                                                            :dropdownRef="
                                                                dropdownDetail_by_expense_item
                                                            "
                                                            :iconDropdownRef="
                                                                iconDropdownDetail_by_expense_item
                                                            "
                                                            :isOpenDropdown="
                                                                isOpen.isOpenDropdownDetail_by_expense_item
                                                            "
                                                            @setIsOpenDropdown="
                                                                (isShow) => {
                                                                    setIsOpenDropdown(
                                                                        isShow,
                                                                        'isOpenDropdownDetail_by_expense_item'
                                                                    );
                                                                }
                                                            "
                                                            @handleReceiveValue="
                                                                (value) =>
                                                                    handleReceiveValueInput(
                                                                        value,
                                                                        'valueInputDetail_by_expense_item'
                                                                    )
                                                            "
                                                            :diabledDropdown="
                                                                account.detail_by_expense_item
                                                            "
                                                        ></TheDropdownAccount>
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
                                                                account.detail_by_department
                                                            "
                                                            :initValue="
                                                                account.detail_by_department
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckboxAccount(
                                                                    event,
                                                                    'detail_by_department'
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span
                                                            @click="
                                                                () =>
                                                                    handleCheckboxAccount(
                                                                        event,
                                                                        'detail_by_department'
                                                                    )
                                                            "
                                                        >
                                                            {{
                                                                $t(
                                                                    "Detail_by_department"
                                                                )
                                                            }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <TheDropdownAccount
                                                            :dropdownRef="
                                                                dropdownDetail_by_department
                                                            "
                                                            :iconDropdownRef="
                                                                iconDropdownDetail_by_department
                                                            "
                                                            :isOpenDropdown="
                                                                isOpen.isOpenDropdownDetail_by_department
                                                            "
                                                            @setIsOpenDropdown="
                                                                (isShow) => {
                                                                    setIsOpenDropdown(
                                                                        isShow,
                                                                        'isOpenDropdownDetail_by_department'
                                                                    );
                                                                }
                                                            "
                                                            @handleReceiveValue="
                                                                (value) =>
                                                                    handleReceiveValueInput(
                                                                        value,
                                                                        'valueInputDetail_by_department'
                                                                    )
                                                            "
                                                            :diabledDropdown="
                                                                account.detail_by_department
                                                            "
                                                        ></TheDropdownAccount>
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
                                                                account.detail_by_list_item
                                                            "
                                                            :initValue="
                                                                account.detail_by_list_item
                                                            "
                                                            @handleCheckbox="
                                                                handleCheckboxAccount(
                                                                    event,
                                                                    'detail_by_list_item'
                                                                )
                                                            "
                                                            styleElement="margin: none"
                                                            ref="checkbox"
                                                        ></MCheckbox>
                                                        <span
                                                            @click="
                                                                () =>
                                                                    handleCheckboxAccount(
                                                                        event,
                                                                        'detail_by_list_item'
                                                                    )
                                                            "
                                                        >
                                                            {{
                                                                $t(
                                                                    "Detail_by_list_item"
                                                                )
                                                            }}
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="w-1/2 flex m-flex-row-gap-8"
                                                    >
                                                        <TheDropdownAccount
                                                            :dropdownRef="
                                                                dropdownDetail_by_list_item
                                                            "
                                                            :iconDropdownRef="
                                                                iconDropdownDetail_by_list_item
                                                            "
                                                            :isOpenDropdown="
                                                                isOpen.isOpenDropdownDetail_by_list_item
                                                            "
                                                            @setIsOpenDropdown="
                                                                (isShow) => {
                                                                    setIsOpenDropdown(
                                                                        isShow,
                                                                        'isOpenDropdownDetail_by_list_item'
                                                                    );
                                                                }
                                                            "
                                                            @handleReceiveValue="
                                                                (value) =>
                                                                    handleReceiveValueInput(
                                                                        value,
                                                                        'valueInputDetail_by_list_item'
                                                                    )
                                                            "
                                                            :diabledDropdown="
                                                                account.detail_by_list_item
                                                            "
                                                        ></TheDropdownAccount>
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
import TheDropdownAccount from "@/components/layout/TheDropdownAccount.vue";

export default {
    components: { TheDropdownAccount },
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
            account_category_kind: "",
            parent_id: "",
            dataAccountParent: [],
            account: {
                account_object_type: false,
                detail_by_job: false,
                detail_by_project_work: false,
                detail_by_order: false,
                detail_by_contract: false,
                detail_by_pu_contract: false,
                detail_by_expense_item: false,
                detail_by_department: false,
                detail_by_list_item: false,
            },
            valueInput: {
                valueInputAccount_object_type: "",
                valueInputDetail_by_job: "",
                valueInputDetail_by_project_work: "",
                valueInputDetail_by_order: "",
                valueInputDetail_by_contract: "",
                valueInputDetail_by_pu_contract: "",
                valueInputDetail_by_expense_item: "",
                valueInputDetail_by_department: "",
                valueInputDetail_by_list_item: "",
            },

            isOpen: {
                isOpenDropdownDetail_by_job: false,
                isOpenDropdownDetail_by_project_work: false,
                isOpenDropdownDetail_by_order: false,
                isOpenDropdownDetail_by_contract: false,
                isOpenDropdownDetail_by_pu_contract: false,
                isOpenDropdownDetail_by_expense_item: false,
                isOpenDropdownDetail_by_department: false,
                isOpenDropdownDetail_by_list_item: false,
            },

            isOpenAccount_object_type: false,

            dropdownDetail_by_job: null,
            iconDropdownDetail_by_job: null,

            dropdownDetail_by_project_work: null,
            iconDropdownDetail_by_project_work: null,

            dropdownDetail_by_order: null,
            iconDropdownDetail_by_order: null,

            dropdownDetail_by_contract: null,
            iconDropdownDetail_by_contract: null,

            dropdownDetail_by_pu_contract: null,
            iconDropdownDetail_by_pu_contract: null,

            dropdownDetail_by_expense_item: null,
            iconDropdownDetail_by_expense_item: null,

            dropdownDetail_by_department: null,
            iconDropdownDetail_by_department: null,

            dropdownDetail_by_list_item: null,
            iconDropdownDetail_by_list_item: null,

            btnIconComboboxProperty: null,
            optionWrapperComboboxProperty: null,
            iconComboboxProperty: null,
            departmentInputProperty: null,
            iconComboboxGeneralAccount: null,
            btnIconComboboxGeneralAccount: null,
            optionWrapperComboboxGeneralAccount: null,
            account_name: "",
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

            account_object_type: [
                {
                    text: this.$t("Provider"),
                    isActive: false,
                },
                {
                    text: this.$t("CustomerCash"),
                    isActive: true,
                },
                {
                    text: this.$t("Employee"),
                    isActive: false,
                },
            ],

            propertyList: [],
        };
    },
    mounted() {
        window.addEventListener("keydown", this.handlePressKeyShort);
        window.addEventListener("click", this.handleOutsideClick);
        this.dropdownDetail_by_job = this.$refs.dropdownDetail_by_job;
        this.iconDropdownDetail_by_job = this.$refs.iconDropdownDetail_by_job;
        this.dropdownDetail_by_project_work =
            this.$refs.dropdownDetail_by_project_work;
        this.iconDropdownDetail_by_project_work =
            this.$refs.iconDropdownDetail_by_project_work;

        this.dropdownDetail_by_order = this.$refs.dropdownDetail_by_order;
        this.iconDropdownDetail_by_order =
            this.$refs.iconDropdownDetail_by_order;

        this.dropdownDetail_by_contract = this.$refs.dropdownDetail_by_contract;
        this.iconDropdownDetail_by_contract =
            this.$refs.iconDropdownDetail_by_contract;

        this.dropdownDetail_by_pu_contract =
            this.$refs.dropdownDetail_by_pu_contract;
        this.iconDropdownDetail_by_pu_contract =
            this.$refs.iconDropdownDetail_by_pu_contract;

        this.dropdownDetail_by_expense_item =
            this.$refs.dropdownDetail_by_expense_item;
        this.iconDropdownDetail_by_expense_item =
            this.$refs.iconDropdownDetail_by_expense_item;

        this.dropdownDetail_by_department =
            this.$refs.dropdownDetail_by_department;
        this.iconDropdownDetail_by_department =
            this.$refs.iconDropdownDetail_by_department;
        this.dropdownDetail_by_list_item =
            this.$refs.dropdownDetail_by_list_item;
        this.iconDropdownDetail_by_list_item =
            this.$refs.iconDropdownDetail_by_list_item;

        this.btnIconComboboxProperty = this.$refs.btnIconComboboxProperty;
        this.optionWrapperComboboxProperty =
            this.$refs.optionWrapperComboboxProperty;
        this.iconComboboxProperty = this.$refs.iconComboboxProperty;
        this.departmentInputProperty = this.$refs.departmentInputProperty;
        this.iconComboboxGeneralAccount = this.$refs.iconComboboxGeneralAccount;
        this.btnIconComboboxGeneralAccount =
            this.$refs.btnIconComboboxGeneralAccount;
        this.optionWrapperComboboxGeneralAccount =
            this.$refs.optionWrapperComboboxGeneralAccount;
    },
    beforeUnmount() {
        window.removeEventListener("keydown", this.handlePressKeyShort);
        window.addEventListener("click", this.handleOutsideClick);
    },

    created() {
        this.formModeAccount = this.formMode;
        this.account_category_kind = null;
        this.parent_id = null;
        this.propertyList = [
            {
                name: this.$t("Debt"),
            },
            {
                name: this.$t("ExcessYes"),
            },
            {
                name: this.$t("Hermaphrodite"),
            },
            {
                name: this.$t("Nobalance"),
            },
        ];
        try {
            /**
             * Call API lấy ra id bất kỳ khi click btn thêm mới
             * Author: KienNT (27/05/2023)
             */
            if (this.formModeAccount === MISAEnum.formMode.Add) {
                this.setFocusInput("txtAccountNumber");
            }
            // else if (
            // /**
            //  * TH nhân bản
            //  *Author: KienNT (27/05/2023)
            //  */
            //     !this.isEmpty(this.dataEmployeeIdSelected) &&
            //     this.formModePopup == MISAEnum.formMode.Duplicate
            // ) {
            //     this.getDataByEmplyeeId(MISAEnum.formMode.Duplicate);
            // } else {
            //     /**
            //      * Call API lấy ra id bất kỳ khi có id để sửa
            //      *Author: KienNT (27/05/2023)
            //      */
            //     this.getDataByEmplyeeId();
            // }
        } catch (error) {
            console.log(error);
        }
    },

    methods: {
        /**
         * handle thay đổi trạng thái checkbox
         * Author: KienNT (28/05/2023)
         */
        setIsOpenDropdown(isShow, kind) {
            this.isOpen[kind] = isShow;
        },

        /**
         * handle nhận giá trị tử dropdown trả về
         * Author: KienNT (28/05/2023)
         */
        handleReceiveValueInput(value, kind) {
            this.valueInput[kind] = value;
        },

        /**
         * handle khi click option item
         * Author: KienNT (27/05/2023)
         *   @param (event): là event
         */
        handleClickItemAccount_object_type(event) {
            try {
                this.account_object_type.forEach((option) => {
                    if (option.isActive === true) {
                        option.isActive = false;
                    }
                });
                this.account_object_type.forEach((option) => {
                    if (event.target.textContent.indexOf(option.text) !== -1) {
                        option.isActive = true;
                        this.valueInput.valueInputAccount_object_type =
                            event.target.textContent;
                    } else {
                        option.isActive = false;
                    }
                });
                this.account_object_type.forEach((el) => {
                    if (
                        this.valueInput.valueInputAccount_object_type.includes(
                            el.text
                        )
                    ) {
                        alert(el.text);
                    }
                });
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm kiểm tra input có rỗng không
         * Author: KienNT (02/03/2023)
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
         * nghe sự kiện window. Nếu click ko phải là dropdown thì ẩn dropdown
         * Author: KienNT (27/05/2023)
         *   @param (event): là event
         */
        handleOutsideClick(event) {
            try {
                if (
                    this.$refs["dropdownAccount_object_type"] &&
                    !this.$refs["dropdownAccount_object_type"].contains(
                        event.target
                    )
                ) {
                    this.isOpenAccount_object_type = false;
                    if (!this.isOpenAccount_object_type) {
                        if (
                            this.$refs[
                                "iconAccount_object_type"
                            ].classList.contains("rorate-180")
                        ) {
                            this.$refs[
                                "iconAccount_object_type"
                            ].classList.remove("rorate-180");
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm lấy giá trị input bên cb sau đó check isEmpty
         * Author: KienNT (28/05/2023)
         * @param (valueInput): Giá trị của value được emit từ con
         */
        handleCheckEmpty(valueInput, category) {
            try {
                this.account_category_kind = valueInput;
                if (category && category.length > 0) {
                    if (
                        category.filter(
                            (el) => el.name === this.account_category_kind
                        ).length <= 0
                    ) {
                        this.isTooltip.isTooltipProperty = true;
                        this.account.account_category_kind = "";
                    } else {
                        category.forEach((el) => {
                            if (el.name === this.account_category_kind) {
                                this.account.account_category_kind = el.name;
                            }
                        });
                        this.isTooltip.isTooltipProperty = false;
                    }
                }
                if (this.isEmpty(this.account_category_kind)) {
                    this.isTooltip.isTooltipProperty = true;
                } else if (this.account.account_category_kind !== null) {
                    this.isTooltip.isTooltipProperty = false;
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Click checkbox object type
         * Author: KienNT (27/05/2023)
         */
        handleCheckboxAccount(event, kind, valueInput = "", valueDefault = "") {
            this.account[kind] = !this.account[kind];

            if (valueInput && valueDefault) {
                if (this.account[kind]) {
                    this.valueInput[valueInput] = valueDefault;
                } else {
                    this.valueInput[valueInput] = "";
                }
            }
        },

        /**
         * Hàm lấy tính chất từ combobox
         * Author: KienNT (28/05/2023)
         */
        selectedDepartment(name) {
            try {
                this.account.account_category_kind =
                    name === this.$t("Debt")
                        ? MISAEnum.Property.Debt
                        : name === this.$t("ExcessYes")
                        ? MISAEnum.Property.ExcessYes
                        : name === this.$t("Hermaphrodite")
                        ? MISAEnum.Property.Hermaphrodite
                        : name === this.$t("Nobalance")
                        ? MISAEnum.Property.Nobalance
                        : "";
                alert(this.account.account_category_kind);
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm lấy parent_id từ combobox
         * Author: KienNT (28/05/2023)
         */
        selectedParent(account_id) {
            try {
                this.account.parent_id = account_id;
                alert(this.account.parent_id);
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hiển thị dropdown option item
         * Author: KienNT (27/05/2023)
         */
        handleAccount_object_type() {
            try {
                this.$refs["iconAccount_object_type"].classList.toggle(
                    "rorate-180"
                );
                this.isOpenAccount_object_type =
                    !this.isOpenAccount_object_type;
            } catch (error) {
                console.log(error);
            }
        },
        /**
         *  handle ẩn popup Account
         * Author: KienNT (27/05/2023)
         */
        closeAccountSysterm() {
            this.$emit("closeAccountSysterm");
        },

        /**
         *  handle khi click vào text link hiển thị chi tiết theo
         * Author: KienNT (27/05/2023)
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
         * Author: KienNT (27/05/2023)
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
         * Author: KienNT (27/05/2023)
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
         * Author: KienNT (27/05/2023)
         */
        closeAccountSystermDetail() {
            this.$emit("closeAccountSystermDetail");
        },

        /**
         * Hàm set focus cho element xác định
         * Author: KienNT (27/05/2023)
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
