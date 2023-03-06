<template>
    <div class="popup">
        <div class="popup__form">
            <div class="popup__form-wrapper">
                <div class="popup__form-header">
                    <div class="form__header-left">
                        <MHeading :text="textTitlePopup"></MHeading>
                        <div class="form__header-left-check">
                            <MCheckbox id="infoKH"></MCheckbox>
                            <label
                                for="infoKH"
                                class="form__header-check-text"
                                >{{ MISAResouce.vi.Customer }}</label
                            >
                        </div>
                        <div class="form__header-left-check">
                            <MCheckbox id="infoNCC"></MCheckbox>
                            <label
                                for="infoNCC"
                                class="form__header-check-text"
                                >{{ MISAResouce.vi.supplier }}</label
                            >
                        </div>
                    </div>
                    <div class="form__header-right">
                        <div class="form__header-question wrap-icon">
                            <div class="form__header-icon-question tooltip">
                                <MTooltip
                                    kind="help"
                                    :subtext="MISAResouce.vi.TooltipHelp"
                                ></MTooltip>
                            </div>
                        </div>

                        <div
                            class="wrap-icon confirm__close-popup"
                            @click="closePopup"
                        >
                            <div class="icon-close tooltip">
                                <MTooltip
                                    kind="close"
                                    :subtext="MISAResouce.vi.TooltipClose"
                                ></MTooltip>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- body popup-->
                <div class="popup__form-body">
                    <div class="popup__form-body-info">
                        <div class="popup__form-body-left">
                            <div class="popup__form-body-row m-row">
                                <div
                                    class="form__group form__group-first"
                                    :class="{
                                        'tooltip-error':
                                            isTooltip.isTooltipEmployeeCode,
                                    }"
                                >
                                    <label for="employeeId" class="form__label"
                                        >{{ MISAResouce.vi.LabelEmployeeCode }}
                                        <span class="required">*</span></label
                                    >
                                    <MInput
                                        id="employeeId"
                                        name="EmployeeCode"
                                        tabindex="1"
                                        autocomplete="off"
                                        v-model="newEmployee.EmployeeCode"
                                        kind="default"
                                        :isShowTooltip="
                                            isTooltip.isTooltipEmployeeCode
                                        "
                                        :required="true"
                                        ref="txtEmployeeCode"
                                        :placeHolder="
                                            MISAResouce.vi.LabelEmployeeCode.toLowerCase()
                                        "
                                        @blur="
                                            isEmpty(newEmployee.EmployeeCode)
                                                ? (isTooltip.isTooltipEmployeeCode = true)
                                                : (isTooltip.isTooltipEmployeeCode = false)
                                        "
                                    />
                                    <MTooltip
                                        v-if="isTooltip.isTooltipEmployeeCode"
                                        :subtext="
                                            MISAResouce.vi.LabelEmployeeCode +
                                            MISAResouce.vi.ErrorEmpty
                                        "
                                        kind="error"
                                    ></MTooltip>
                                </div>

                                <div
                                    class="form__group form__group-second"
                                    :class="{
                                        'tooltip-error':
                                            isTooltip.isTooltipEmployeeName,
                                    }"
                                >
                                    <label for="ten" class="form__label"
                                        >{{ MISAResouce.vi.LabelEmployeeName }}
                                        <span class="required">*</span></label
                                    >

                                    <MInput
                                        tabindex="2"
                                        name="FullName"
                                        autocomplete="off"
                                        id="ten"
                                        kind="default"
                                        v-model="newEmployee.FullName"
                                        :isShowTooltip="
                                            isTooltip.isTooltipEmployeeName
                                        "
                                        ref="txtFullName"
                                        :required="true"
                                        :placeHolder="
                                            MISAResouce.vi.LabelEmployeeName.toLowerCase()
                                        "
                                        @blur="
                                            isEmpty(newEmployee.FullName)
                                                ? (isTooltip.isTooltipEmployeeName = true)
                                                : (isTooltip.isTooltipEmployeeName = false)
                                        "
                                    ></MInput>
                                    <MTooltip
                                        v-if="isTooltip.isTooltipEmployeeName"
                                        :subtext="
                                            MISAResouce.vi.LabelEmployeeName +
                                            MISAResouce.vi.ErrorEmpty
                                        "
                                        kind="error"
                                    ></MTooltip>
                                </div>
                            </div>

                            <div class="m-row">
                                <label for="donvi" class="form__label"
                                    >{{ MISAResouce.vi.LabelDepartmentName }}
                                    <span class="required">*</span></label
                                >

                                <Mcombobox></Mcombobox>
                            </div>

                            <div class="m-row">
                                <div class="form__group">
                                    <label for="chucdanh" class="form__label">{{
                                        MISAResouce.vi.LabelJobTitle
                                    }}</label>
                                    <MInput
                                        tabindex="4"
                                        id="chucdanh"
                                        name="PositionName"
                                        kind="default"
                                        ref="txtPositionName"
                                        :placeHolder="
                                            MISAResouce.vi.LabelJobTitle.toLowerCase()
                                        "
                                        v-model="newEmployee.PositionName"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="popup__form-body-right">
                            <div
                                class="popup__form-body-row m-row popup__form-checkbox"
                            >
                                <div
                                    class="form__group form__group-first"
                                    :class="{
                                        'tooltip-error':
                                            isTooltip.isTooltipDateOfBirth,
                                    }"
                                >
                                    <label for="ngaysinh" class="form__label"
                                        >{{ MISAResouce.vi.LabelDateOfBirth }}
                                    </label>
                                    <MInput
                                        type="date"
                                        tabindex="5"
                                        name="DateOfBirth"
                                        id="ngaysinh"
                                        kind="default"
                                        ref="txtDateOfBirth"
                                        v-model="newEmployee.DateOfBirth"
                                        :isShowTooltip="
                                            isTooltip.isTooltipDateOfBirth
                                        "
                                        @blur="
                                            isInValid(
                                                newEmployee.DateOfBirth,
                                                'date'
                                            )
                                                ? (isTooltip.isTooltipDateOfBirth = true)
                                                : (isTooltip.isTooltipDateOfBirth = false)
                                        "
                                    />
                                    <MTooltip
                                        v-if="isTooltip.isTooltipDateOfBirth"
                                        :subtext="
                                            MISAResouce.vi.LabelDateOfBirth +
                                            MISAResouce.vi.ErrorDate
                                        "
                                        kind="error"
                                    ></MTooltip>
                                </div>

                                <div
                                    class="form__group form__group-second ml-16"
                                >
                                    <label class="form__label"
                                        >{{ MISAResouce.vi.LabelGender }}
                                    </label>

                                    <div class="input__radio-wrapper">
                                        <MRadio
                                            id="nam"
                                            :text="MISAResouce.vi.LabelMale"
                                            :checked="
                                                newEmployee.Gender ===
                                                MISAEnum.Gender.Male
                                            "
                                            v-model="newEmployee.Gender"
                                        ></MRadio>
                                        <MRadio
                                            id="nu"
                                            :text="MISAResouce.vi.LabelFemale"
                                            :checked="
                                                newEmployee.Gender ===
                                                MISAEnum.Gender.Female
                                            "
                                            v-model="newEmployee.Gender"
                                        ></MRadio>
                                        <MRadio
                                            id="other"
                                            :text="MISAResouce.vi.LabelOther"
                                            :checked="
                                                newEmployee.Gender !==
                                                    MISAEnum.Gender.Male &&
                                                newEmployee.Gender !==
                                                    MISAEnum.Gender.Female &&
                                                !isEmpty(newEmployee.Gender)
                                            "
                                            v-model="newEmployee.Gender"
                                        ></MRadio>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__form-body-row m-row">
                                <div
                                    class="form__group form__group-second"
                                    :class="{
                                        'tooltip-error':
                                            isTooltip.isTooltipIdentityNumber,
                                    }"
                                >
                                    <label for="cmnd" class="form__label">
                                        <MTooltip
                                            :text="
                                                MISAResouce.vi.IdentityNumber
                                            "
                                            :subtext="
                                                MISAResouce.vi
                                                    .TooltipIdentityNumber
                                            "
                                            kind="title"
                                        ></MTooltip>
                                    </label>
                                    <MInput
                                        id="cmnd"
                                        name="IdentityNumber"
                                        tabindex="7"
                                        kind="default"
                                        ref="txtIdentityNumber"
                                        class="check-number"
                                        v-model="newEmployee.IdentityNumber"
                                        :placeHolder="
                                            MISAResouce.vi.TooltipIdentityNumber.toLowerCase()
                                        "
                                        :isShowTooltip="
                                            isTooltip.isTooltipIdentityNumber
                                        "
                                        @blur="
                                            isInValid(
                                                newEmployee.IdentityNumber,
                                                'number'
                                            )
                                                ? (isTooltip.isTooltipIdentityNumber = true)
                                                : (isTooltip.isTooltipIdentityNumber = false)
                                        "
                                    />
                                    <MTooltip
                                        v-if="isTooltip.isTooltipIdentityNumber"
                                        :subtext="
                                            MISAResouce.vi.LabelIdentityNumber +
                                            MISAResouce.vi.ErrorNotNumber
                                        "
                                        kind="error"
                                    ></MTooltip>
                                </div>

                                <div
                                    class="form__group form__group-first"
                                    :class="{
                                        'tooltip-error':
                                            isTooltip.isTooltipIdentityDate,
                                    }"
                                >
                                    <label for="ngaycap" class="form__label"
                                        >{{ MISAResouce.vi.LabelIdentityDate }}
                                    </label>
                                    <MInput
                                        type="date"
                                        name="IdentityDate"
                                        id="ngaycap"
                                        ref="txtIdentityDate"
                                        tabindex="8"
                                        kind="default"
                                        v-model="newEmployee.IdentityDate"
                                        :isShowTooltip="
                                            isTooltip.isTooltipIdentityDate
                                        "
                                        @blur="
                                            isInValid(
                                                newEmployee.IdentityDate,
                                                'date'
                                            )
                                                ? (isTooltip.isTooltipIdentityDate = true)
                                                : (isTooltip.isTooltipIdentityDate = false)
                                        "
                                    />
                                    <MTooltip
                                        v-if="isTooltip.isTooltipIdentityDate"
                                        :subtext="
                                            MISAResouce.vi.LabelIdentityDate +
                                            MISAResouce.vi.ErrorDate
                                        "
                                        kind="error"
                                    ></MTooltip>
                                </div>
                            </div>
                            <div class="m-row">
                                <div class="form__group">
                                    <label for="noicap" class="form__label">{{
                                        MISAResouce.vi.LabelIdentityPlace
                                    }}</label>
                                    <MInput
                                        id="noicap"
                                        tabindex="9"
                                        name="IdentityPlace"
                                        kind="default"
                                        ref="txtIdentityPlace"
                                        :placeHolder="
                                            MISAResouce.vi.LabelIdentityPlace.toLowerCase()
                                        "
                                        v-model="newEmployee.IdentityPlace"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="popup__form-body-contact">
                        <div class="m-row">
                            <div class="form__group">
                                <label for="diachi" class="form__label">{{
                                    MISAResouce.vi.LabelAddress
                                }}</label>
                                <MInput
                                    id="diachi"
                                    tabindex="10"
                                    name="Address"
                                    kind="default"
                                    ref="txtAddress"
                                    :placeHolder="
                                        MISAResouce.vi.LabelAddress.toLowerCase()
                                    "
                                    v-model="newEmployee.Address"
                                />
                            </div>
                        </div>
                        <div class="m-row form__group-contact-second">
                            <div
                                class="form__group form__group-contact-input"
                                :class="{
                                    'tooltip-error':
                                        isTooltip.isTooltipPhoneNumber,
                                }"
                            >
                                <label for="sodienthoai" class="form__label">
                                    <MTooltip
                                        kind="title"
                                        :text="MISAResouce.vi.LabelPhoneNumber"
                                        :subtext="
                                            MISAResouce.vi.TooltipPhoneNumber
                                        "
                                    ></MTooltip>
                                </label>
                                <MInput
                                    id="sodienthoai"
                                    tabindex="11"
                                    name="PhoneNumber"
                                    class="check-number"
                                    kind="default"
                                    ref="txtPhoneNumber"
                                    :placeHolder="
                                        MISAResouce.vi.TooltipPhoneNumber.toLowerCase()
                                    "
                                    v-model="newEmployee.PhoneNumber"
                                    :isShowTooltip="
                                        isTooltip.isTooltipPhoneNumber
                                    "
                                    @blur="
                                        isInValid(
                                            newEmployee.PhoneNumber,
                                            'number'
                                        )
                                            ? (isTooltip.isTooltipPhoneNumber = true)
                                            : (isTooltip.isTooltipPhoneNumber = false)
                                    "
                                />
                                <MTooltip
                                    v-if="isTooltip.isTooltipPhoneNumber"
                                    :subtext="
                                        MISAResouce.vi.LabelPhoneNumber +
                                        MISAResouce.vi.ErrorNotNumber
                                    "
                                    kind="error"
                                ></MTooltip>
                            </div>
                            <div
                                class="form__group form__group-contact-input"
                                :class="{
                                    'tooltip-error':
                                        isTooltip.isTooltipLandlineNumber,
                                }"
                            >
                                <label for="sodienthoaiCD" class="form__label">
                                    <MTooltip
                                        kind="title"
                                        :text="
                                            MISAResouce.vi.LabelLandlineNumber
                                        "
                                        :subtext="
                                            MISAResouce.vi.TooltipFixPhoneNumber
                                        "
                                    ></MTooltip>
                                </label>
                                <MInput
                                    tabindex="12"
                                    id="sodienthoaiCD"
                                    name="LandlineNumber"
                                    kind="default"
                                    ref="txtLandlineNumber"
                                    :placeHolder="
                                        MISAResouce.vi.TooltipFixPhoneNumber.toLowerCase()
                                    "
                                    v-model="newEmployee.LandlineNumber"
                                    :isShowTooltip="
                                        isTooltip.isTooltipLandlineNumber
                                    "
                                    @blur="
                                        isInValid(
                                            newEmployee.LandlineNumber,
                                            'number'
                                        )
                                            ? (isTooltip.isTooltipLandlineNumber = true)
                                            : (isTooltip.isTooltipLandlineNumber = false)
                                    "
                                />
                                <MTooltip
                                    v-if="isTooltip.isTooltipLandlineNumber"
                                    :subtext="
                                        MISAResouce.vi.LabelLandlineNumber +
                                        MISAResouce.vi.ErrorNotNumber
                                    "
                                    kind="error"
                                ></MTooltip>
                            </div>
                            <div
                                class="form__group form__group-contact-input"
                                :class="{
                                    'tooltip-error': isTooltip.isTooltipEmail,
                                }"
                            >
                                <label for="email" class="form__label">{{
                                    MISAResouce.vi.LabelEmail
                                }}</label>
                                <MInput
                                    type="email"
                                    id="email"
                                    tabindex="13"
                                    name="Email"
                                    ref="txtEmail"
                                    kind="default"
                                    :placeHolder="
                                        MISAResouce.vi.LabelEmail.toLowerCase()
                                    "
                                    v-model="newEmployee.Email"
                                    :isShowTooltip="isTooltip.isTooltipEmail"
                                    @blur="
                                        isInValid(newEmployee.Email, 'email')
                                            ? (isTooltip.isTooltipEmail = true)
                                            : (isTooltip.isTooltipEmail = false)
                                    "
                                />
                                <MTooltip
                                    v-if="isTooltip.isTooltipEmail"
                                    :subtext="
                                        MISAResouce.vi.LabelEmail +
                                        MISAResouce.vi.ErrorEmail
                                    "
                                    kind="error"
                                ></MTooltip>
                            </div>
                        </div>
                        <div class="m-row form__group-contact-second">
                            <div
                                class="form__group form__group-contact-input"
                                :class="{
                                    'tooltip-error':
                                        isTooltip.isTooltipBankAccount,
                                }"
                            >
                                <label for="taikhoan" class="form__label">{{
                                    MISAResouce.vi.LabelBankAccount
                                }}</label>
                                <MInput
                                    name="BankAccount"
                                    id="taikhoan"
                                    tabindex="14"
                                    class="check-number"
                                    kind="default"
                                    ref="txtBankAccount"
                                    :placeHolder="
                                        MISAResouce.vi.LabelBankAccount.toLowerCase()
                                    "
                                    v-model="newEmployee.BankAccount"
                                    :isShowTooltip="
                                        isTooltip.isTooltipBankAccount
                                    "
                                    @blur="
                                        isInValid(
                                            newEmployee.BankAccount,
                                            'number'
                                        )
                                            ? (isTooltip.isTooltipBankAccount = true)
                                            : (isTooltip.isTooltipBankAccount = false)
                                    "
                                />
                                <MTooltip
                                    v-if="isTooltip.isTooltipBankAccount"
                                    :subtext="
                                        MISAResouce.vi.LabelBankAccount +
                                        MISAResouce.vi.ErrorNotNumber
                                    "
                                    kind="error"
                                ></MTooltip>
                            </div>
                            <div class="form__group form__group-contact-input">
                                <label for="tennganhang" class="form__label">{{
                                    MISAResouce.vi.LabelBankName
                                }}</label>
                                <MInput
                                    id="tennganhang"
                                    tabindex="15"
                                    name="BankName"
                                    ref="txtBankName"
                                    class="check-string"
                                    kind="default"
                                    :placeHolder="
                                        MISAResouce.vi.LabelBankName.toLowerCase()
                                    "
                                    v-model="newEmployee.BankName"
                                />
                            </div>
                            <div class="form__group form__group-contact-input">
                                <label for="chinhanh" class="form__label">{{
                                    MISAResouce.vi.LabelBankBranch
                                }}</label>
                                <MInput
                                    tabindex="16"
                                    id="chinhanh"
                                    name="BankBranch"
                                    ref="txtBankBranch"
                                    kind="default"
                                    :placeHolder="
                                        MISAResouce.vi.LabelBankBranch.toLowerCase()
                                    "
                                    v-model="newEmployee.BankBranch"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- footer popup -->
            <div class="popup__form-footer">
                <div class="popup__form-footer-left">
                    <MButton
                        class="btn btn-default close__add-employee"
                        tabindex="19"
                        :text="MISAResouce.vi.BtnDestroy"
                        :click="destroyPopup"
                    >
                    </MButton>
                </div>
                <div class="popup__form-footer-right">
                    <div>
                        <MButton
                            class="btn btn-default close__add-employee"
                            tabindex="17"
                            :text="MISAResouce.vi.BtnSave"
                            :click="() => btnSaveAndClose(true)"
                        >
                        </MButton>
                    </div>
                    <div>
                        <MButton
                            class="btn btn-primary close__add-employee"
                            tabindex="18"
                            :text="MISAResouce.vi.BtnSaveEndAdd"
                            :click="() => btnSaveAndClose(false)"
                        >
                        </MButton>
                    </div>
                </div>
            </div>
        </div>

        <!-- begin dialog -->
        <MDialog
            v-if="isDialogError"
            iconClass="dialog__icon-error"
            :title="MISAResouce.vi.DialogNotifyError"
            :message="errorMessage[0]"
            :textButton="MISAResouce.vi.BtnClose"
            @hideShowDialogError="hideShowDialogError"
            kind="error"
        ></MDialog>
        <MDialog
            v-if="isDialogNotify"
            iconClass="dialog__icon-notify"
            :title="MISAResouce.vi.DialogNotify"
            :message="MISAResouce.vi.MessageNotify"
            :btnNoNotify="MISAResouce.vi.BtnNo"
            :textButton="MISAResouce.vi.BtnYes"
            :btnDestroyNotify="MISAResouce.vi.BtnDestroy"
            @onClickBtnDestroy="onClickBtnDestroy"
            @destroyPopup="destroyPopup"
            kind="notify"
        ></MDialog>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import MISAEnum from "@/js/enum";
import Mcombobox from "../base/Mcombobox.vue";
import axios from "axios";

export default {
    name: "ThePopup",
    props: {
        employeeIdSelected: {
            type: String,
        },
        textTitlePopup: {
            type: String,
        },
    },
    data() {
        return {
            MISAResouce,
            MISAEnum,
            newEmployee: {},
            errorExistId: "",
            isDialogError: false,
            isDialogNotify: false,
            oldEmployee: {},
            isTooltip: {
                isTooltipEmployeeCode: false,
                isTooltipEmployeeName: false,
                isTooltipDateOfBirth: false,
                isTooltipIdentityNumber: false,
                isTooltipIdentityDate: false,
                isTooltipPhoneNumber: false,
                isTooltipLandlineNumber: false,
                isTooltipEmail: false,
                isTooltipBankAccount: false,
            },
            isFocus: {
                isFocusEmployeeCode: false,
                isFocusEmployeeName: false,
                isFocusDateOfBirth: false,
                isFocusIdentityNumber: false,
                isFocusIdentityDate: false,
                isFocusPhoneNumber: false,
                isFocusLandlineNumber: false,
                isFocusEmail: false,
                isFocusBankAccount: false,
            },
            errorMessage: [],
        };
    },

    components: {
        Mcombobox,
    },

    created() {
        try {
            /**
             * Call API lấy ra id bất kỳ khi click btn thêm nhân viên mới
             * Author: KienNT (03/03/2023)
             */
            if (this.isEmpty(this.employeeIdSelected)) {
                this.getNewEmployeeCode();
            } else {
                axios
                    .get(
                        `https://apidemo.laptrinhweb.edu.vn/api/v1/Employees/${this.employeeIdSelected}`
                    )
                    .then(this.$emit("hideShowLoading", true))
                    .then((res) => {
                        this.newEmployee = res.data;
                        this.newEmployee.DateOfBirth = this.convertDate(
                            this.newEmployee.DateOfBirth
                        );
                        this.newEmployee.IdentityDate = this.convertDate(
                            this.newEmployee.IdentityDate
                        );
                        this.oldEmployee = JSON.stringify(this.newEmployee);
                        this.setFocusInput("txtEmployeeCode");
                        this.$emit("hideShowLoading", false);
                    })
                    .catch((res) => {
                        console.log(res);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    },

    watch: {
        /**
         * Theo dõi đối tượng employee có thay đổi hay không. Nếu thay đổi thì binding bên input luôn
         * Author: KienNT (01/03/2023)
         */
        newEmployee: {
            handler: function (newValue) {
                this.newEmployee.EmployeeCode = newValue.EmployeeCode;
            },
            deep: true,
        },

        errorMessage: function () {
            console.log("sdfsdffd", this.errorMessage);
        },
    },

    methods: {
        /**
         * Hàm lấy employee code mới
         * Author: KienNT (01/03/2023)
         */
        getNewEmployeeCode() {
            axios
                .get(
                    "https://apidemo.laptrinhweb.edu.vn/api/v1/Employees/NewEmployeeCode"
                )
                .then(this.$emit("hideShowLoading", true))
                .then((response) => {
                    this.newEmployee.EmployeeCode = response.data;
                    /**
                     * Gọi hàm set focus bên input
                     * Author: KienNT (04/03/2023)
                     */
                    this.setFocusInput("txtEmployeeCode");
                    this.$emit("hideShowLoading", false);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        /**
         * Hàm set focus cho element xác định
         * Author: KienNT (06/03/2023)
         * @param (value): tham số 1: là element cần focus
         */
        setFocusInput(element) {
            this.$nextTick(function () {
                this.$refs[element].setFocus();
            });
        },

        /**
         * Hàm đóng popup khi click vào icon close
         * Author: KienNT (01/03/2023)
         */
        closePopup() {
            try {
                // kiểm tra dữ liệu đã thay đổi chưa
                const newEmployeeData = JSON.stringify(this.newEmployee);
                if (this.oldEmployee !== newEmployeeData) {
                    this.isDialogNotify = true;
                    return;
                } else {
                    this.$emit("onClosePopup");
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm đóng popup khi click btn hủy
         * Author: KienNT nhân viên(01/03/2023)
         */
        destroyPopup() {
            try {
                this.newEmployee = {};
                this.errorMessage = [];
                this.$emit("onClosePopup");
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm validate thành công thì cất data và đóng form, cất và thêm thì cất và data reset form
         * Author: KienNT (02/03/2023)
         *  @param (value): tham số 1: là true, false hiển thị popup
         */
        btnSaveAndClose(isCloseForm) {
            try {
                if (this.handleValidate()) {
                    // thêm nhân viên nếu là trạng thái thêm nhân viên
                    if (this.isEmpty(this.employeeIdSelected)) {
                        axios
                            .post(
                                "https://apidemo.laptrinhweb.edu.vn/api/v1/Employees",
                                this.newEmployee
                            )
                            .then(this.$emit("hideShowLoading", true))
                            .then((res) => {
                                console.log(res);
                                if (isCloseForm) {
                                    // reset và đóng form
                                    this.destroyPopup();
                                } else {
                                    // reset nhưng ko đóng form
                                    this.newEmployee = {};
                                    // lấy 1 id mới
                                    this.getNewEmployeeCode();
                                    this.errorMessage = [];
                                }
                                console.log("post success");
                            })
                            .then(this.$emit("hideShowLoading", false))
                            .catch((error) => {
                                this.$emit("hideShowLoading", false);
                                this.errorExistId =
                                    error.response.data.data.EmployeeCode;
                                if (
                                    this.errorExistId &&
                                    this.errorExistId.includes("khách hàng")
                                ) {
                                    this.errorMessage[0] =
                                        this.errorExistId.replace(
                                            "khách hàng",
                                            "nhân viên"
                                        );
                                } else {
                                    this.errorMessage[0] = this.errorExistId;
                                }
                                this.isDialogError = true;
                            });
                    }
                    // đóng form
                } else {
                    this.hideShowDialogError(true);
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm validate form
         * Author: KienNT (02/03/2023)
         */
        handleValidate() {
            try {
                // check mã
                this.checkField(
                    "isTooltipEmployeeCode",
                    this.newEmployee.EmployeeCode,
                    MISAResouce.vi.LabelEmployeeCode
                );

                // check tên
                this.checkField(
                    "isTooltipEmployeeName",
                    this.newEmployee.FullName,
                    MISAResouce.vi.LabelEmployeeName
                );

                // nếu có value thì mới check
                if (!this.isEmpty(this.newEmployee.DateOfBirth)) {
                    // check input date
                    if (this.isInValid(this.newEmployee.DateOfBirth, "date")) {
                        this.isTooltip.isTooltipDateOfBirth = true;
                        this.errorMessage.push(
                            MISAResouce.vi.LabelDateOfBirth +
                                MISAResouce.vi.ErrorDate
                        );
                    } else {
                        this.isTooltip.isTooltipDateOfBirth = false;
                        const index = this.errorMessage.indexOf(
                            MISAResouce.vi.LabelDateOfBirth +
                                MISAResouce.vi.ErrorDate
                        );

                        this.errorMessage.splice(index, 1);
                    }
                }

                // nếu có value thì mới check
                if (!this.isEmpty(this.newEmployee.IdentityNumber)) {
                    // check input phải là số
                    if (
                        this.isInValid(
                            this.newEmployee.IdentityNumber,
                            "number"
                        )
                    ) {
                        this.isTooltip.isTooltipIdentityNumber = true;
                        this.errorMessage.push(
                            MISAResouce.vi.LabelIdentityNumber +
                                MISAResouce.vi.ErrorNotNumber
                        );
                    } else {
                        this.isTooltip.isTooltipIdentityNumber = false;
                        const index = this.errorMessage.indexOf(
                            MISAResouce.vi.LabelIdentityNumber +
                                MISAResouce.vi.ErrorNotNumber
                        );

                        this.errorMessage.splice(index, 1);
                    }
                }
                // nếu có value thì mới check
                if (!this.isEmpty(this.newEmployee.IdentityDate)) {
                    // check input date
                    if (this.isInValid(this.newEmployee.IdentityDate, "date")) {
                        this.isTooltip.isTooltipIdentityDate = true;
                        this.errorMessage.push(
                            MISAResouce.vi.LabelIdentityDate +
                                MISAResouce.vi.ErrorDate
                        );
                    } else {
                        this.isTooltip.isTooltipIdentityDate = false;
                        const index = this.errorMessage.indexOf(
                            MISAResouce.vi.LabelIdentityDate +
                                MISAResouce.vi.ErrorDate
                        );

                        this.errorMessage.splice(index, 1);
                    }
                }
                // nếu có value thì mới check
                if (!this.isEmpty(this.newEmployee.PhoneNumber)) {
                    // check input phải là số
                    if (
                        this.isInValid(this.newEmployee.PhoneNumber, "number")
                    ) {
                        this.isTooltip.isTooltipPhoneNumber = true;
                        this.errorMessage.push(
                            MISAResouce.vi.LabelPhoneNumber +
                                MISAResouce.vi.ErrorNotNumber
                        );
                    } else {
                        this.isTooltip.isTooltipPhoneNumber = false;
                        const index = this.errorMessage.indexOf(
                            MISAResouce.vi.LabelPhoneNumber +
                                MISAResouce.vi.ErrorNotNumber
                        );

                        this.errorMessage.splice(index, 1);
                    }
                }
                // nếu có value thì mới check
                if (!this.isEmpty(this.newEmployee.LandlineNumber)) {
                    // check input phải là số
                    if (
                        this.isInValid(
                            this.newEmployee.LandlineNumber,
                            "number"
                        )
                    ) {
                        this.isTooltip.isTooltipLandlineNumber = true;
                        this.errorMessage.push(
                            MISAResouce.vi.LabelLandlineNumber +
                                MISAResouce.vi.ErrorNotNumber
                        );
                    } else {
                        this.isTooltip.isTooltipLandlineNumber = false;
                        const index = this.errorMessage.indexOf(
                            MISAResouce.vi.LabelLandlineNumber +
                                MISAResouce.vi.ErrorNotNumber
                        );

                        this.errorMessage.splice(index, 1);
                    }
                }

                // nếu có value thì mới check
                if (!this.isEmpty(this.newEmployee.Email)) {
                    // check input phải là số
                    if (this.isInValid(this.newEmployee.Email, "email")) {
                        this.isTooltip.isTooltipEmail = true;
                        this.errorMessage.push(
                            MISAResouce.vi.LabelEmail +
                                MISAResouce.vi.ErrorEmail
                        );
                    } else {
                        this.isTooltip.isTooltipEmail = false;
                        const index = this.errorMessage.indexOf(
                            MISAResouce.vi.LabelEmail +
                                MISAResouce.vi.ErrorEmail
                        );

                        this.errorMessage.splice(index, 1);
                    }
                }

                // nếu có value thì mới check
                if (!this.isEmpty(this.newEmployee.BankAccount)) {
                    // check input phải là số
                    if (
                        this.isInValid(this.newEmployee.BankAccount, "number")
                    ) {
                        this.isTooltip.isTooltipBankAccount = true;
                        this.errorMessage.push(
                            MISAResouce.vi.LabelBankAccount +
                                MISAResouce.vi.ErrorNotNumber
                        );
                    } else {
                        this.isTooltip.isTooltipBankAccount = false;
                        const index = this.errorMessage.indexOf(
                            MISAResouce.vi.LabelBankAccount +
                                MISAResouce.vi.ErrorNotNumber
                        );

                        this.errorMessage.splice(index, 1);
                    }
                }
                if (this.errorMessage.length > 0) {
                    return false;
                } else {
                    return true;
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm check isEmpty
         * Author: KienNT (04/03/2023)
         *  @param (fieldName, fieldValue, errorLabel): tham số 1: tooltip the label, tham số 2 là giá trị ô input, tham số 3: label lỗi
         */
        checkField(fieldName, fieldValue, errorLabel) {
            if (this.isEmpty(fieldValue)) {
                // lỗi valid form thì xóa lỗi cùng mã
                if (this.errorExistId) {
                    this.errorMessage.splice(0, 1);
                }
                this.isTooltip[fieldName] = true;
                this.errorMessage.push(errorLabel + MISAResouce.vi.ErrorEmpty);
            } else {
                this.isTooltip[fieldName] = false;
                const index = this.errorMessage.indexOf(
                    errorLabel + MISAResouce.vi.ErrorEmpty
                );

                this.errorMessage.splice(index, 1);
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
         * Hàm kiểm tra input date có đúng là trước ngày hiện tại không
         * Author: KienNT (02/03/2023)
         * @param (value): tham số là giá trị chuỗi từ input và loại nào: date,...
         */
        isInValid(value, kind) {
            try {
                if (!this.isEmpty(value)) {
                    let timenow;
                    let inputDate;
                    let regex;
                    switch (kind) {
                        case "date":
                            timenow = new Date();
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

                        default:
                            break;
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm ẩn hiện tooltip
         * Author: KienNT (02/03/2023)
         * @param (value): tham số là true, false để hiển thị tooltip
         */
        hideShowTooltip(isTooltip) {
            try {
                this.isTooltip = isTooltip;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm ẩn hiện dialog notify
         * Author: KienNT (04/03/2023)
         * @param (value): tham số là true, false để hiển thị dialog notify
         */

        onClickBtnDestroy(isDialogNotify) {
            try {
                this.isDialogNotify = isDialogNotify;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm ẩn hiện dialog
         * Author: KienNT (02/03/2023)
         * @param (value): tham số là true, false để hiển thị dialog
         */
        hideShowDialogError(isDialogError) {
            try {
                this.isDialogError = isDialogError;
            } catch (error) {
                console.log(error);
            }
        },
    },
    computed: {
        /**
         *  Hàm convert sang ngày, tháng, năm để hiển thị lên input date
         *  Author:KienNT(04/03/2023)
         */
        convertDate() {
            return (inputString = "") => {
                try {
                    if (inputString !== null) {
                        let date = new Date(Date.parse(inputString));
                        return date.toISOString().substring(0, 10);

                        // let dateString =
                        //     date.getDate() + 1 < 10
                        //         ? `0${date.getDate() + 1}`
                        //         : date.getDate() + 1;
                        // let monthString =
                        //     date.getMonth() + 1 < 10
                        //         ? `0${date.getMonth() - 1}`
                        //         : date.getMonth() - 1;
                        // let yearString = date.getFullYear();
                        // return `${yearString}-${monthString}-${dateString}`;
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
@import url(../../css/components/popup.css);
</style>
