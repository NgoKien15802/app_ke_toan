<template>
    <div class="popup" @keydown="handlePress">
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
                        <div class="form__header-question wrap-icon tooltip">
                            <div class="form__header-icon-question">
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
                                <div class="form__group form__group-first">
                                    <label for="employeeId" class="form__label"
                                        >{{ MISAResouce.vi.LabelEmployeeCode }}
                                        <span class="required">*</span></label
                                    >
                                    <div
                                        :class="{
                                            'tooltip-error':
                                                isTooltip.isTooltipEmployeeCode,
                                        }"
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
                                            :isDisabled="isDisabledEmployeeCode"
                                            @blur="
                                                isEmpty(
                                                    newEmployee.EmployeeCode
                                                )
                                                    ? (isTooltip.isTooltipEmployeeCode = true)
                                                    : (isTooltip.isTooltipEmployeeCode = false)
                                            "
                                        />
                                        <MTooltip
                                            v-if="
                                                isTooltip.isTooltipEmployeeCode
                                            "
                                            :subtext="
                                                !isEmpty(
                                                    newEmployee.EmployeeCode
                                                )
                                                    ? message
                                                    : MISAResouce.vi
                                                          .LabelEmployeeCode +
                                                      MISAResouce.vi.ErrorEmpty
                                            "
                                            kind="error"
                                        ></MTooltip>
                                    </div>
                                </div>

                                <div class="form__group form__group-second">
                                    <label for="ten" class="form__label"
                                        >{{ MISAResouce.vi.LabelEmployeeName }}
                                        <span class="required">*</span></label
                                    >

                                    <div
                                        :class="{
                                            'tooltip-error':
                                                isTooltip.isTooltipEmployeeName,
                                        }"
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
                                            @blur="
                                                isEmpty(newEmployee.FullName)
                                                    ? (isTooltip.isTooltipEmployeeName = true)
                                                    : (isTooltip.isTooltipEmployeeName = false)
                                            "
                                        ></MInput>
                                        <MTooltip
                                            v-if="
                                                isTooltip.isTooltipEmployeeName
                                            "
                                            :subtext="
                                                MISAResouce.vi
                                                    .LabelEmployeeName +
                                                MISAResouce.vi.ErrorEmpty
                                            "
                                            kind="error"
                                        ></MTooltip>
                                    </div>
                                </div>
                            </div>

                            <div class="m-row">
                                <label for="donvi" class="form__label"
                                    >{{ MISAResouce.vi.LabelDepartmentName }}
                                    <span class="required">*</span></label
                                >

                                <div
                                    :class="{
                                        'tooltip-error':
                                            isTooltip.isTooltipDepartmentName,
                                    }"
                                >
                                    <Mcombobox
                                        :departmentName="departmentName"
                                        :isShowTooltip="
                                            isTooltip.isTooltipDepartmentName
                                        "
                                        @handleCheckEmpty="handleCheckEmpty"
                                        ref="txtDepartmentName"
                                        tabindex="3"
                                        @setFocus="setFocus"
                                        @selectedDepartment="selectedDepartment"
                                        @handleMountOver="handleMountOver"
                                        @handleMountOut="handleMountOut"
                                    ></Mcombobox>
                                    <MTooltip
                                        v-if="isTooltip.isTooltipDepartmentName"
                                        :subtext="
                                            MISAResouce.vi.LabelDepartmentName +
                                            MISAResouce.vi.ErrorEmpty
                                        "
                                        kind="error"
                                        ref="tootipCombobox"
                                    ></MTooltip>
                                </div>
                            </div>

                            <div class="m-row">
                                <div class="form__group">
                                    <label for="chucdanh" class="form__label">{{
                                        MISAResouce.vi.LabelJobTitle
                                    }}</label>
                                    <MInput
                                        tabindex="4"
                                        id="chucdanh"
                                        name="MartialStatusName"
                                        kind="default"
                                        ref="txtPositionName"
                                        v-model="newEmployee.PositionName"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="popup__form-body-right">
                            <div
                                class="popup__form-body-row m-row popup__form-checkbox"
                            >
                                <div class="form__group form__group-first">
                                    <label for="ngaysinh" class="form__label"
                                        >{{ MISAResouce.vi.LabelDateOfBirth }}
                                    </label>
                                    <div
                                        :class="{
                                            'tooltip-error':
                                                isTooltip.isTooltipDateOfBirth,
                                        }"
                                    >
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
                                            v-if="
                                                isTooltip.isTooltipDateOfBirth
                                            "
                                            :subtext="
                                                MISAResouce.vi
                                                    .LabelDateOfBirth +
                                                MISAResouce.vi.ErrorDate
                                            "
                                            kind="error"
                                        ></MTooltip>
                                    </div>
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
                                                newEmployee.Gender ===
                                                MISAEnum.Gender.Other
                                            "
                                            v-model="newEmployee.Gender"
                                        ></MRadio>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__form-body-row m-row">
                                <div class="form__group form__group-second">
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
                                    <div
                                        :class="{
                                            'tooltip-error':
                                                isTooltip.isTooltipIdentityNumber,
                                        }"
                                    >
                                        <MInput
                                            id="cmnd"
                                            name="IdentityNumber"
                                            tabindex="7"
                                            kind="default"
                                            ref="txtIdentityNumber"
                                            class="check-number"
                                            v-model="newEmployee.IdentityNumber"
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
                                            v-if="
                                                isTooltip.isTooltipIdentityNumber
                                            "
                                            :subtext="
                                                MISAResouce.vi
                                                    .LabelIdentityNumber +
                                                MISAResouce.vi.ErrorNotNumber
                                            "
                                            kind="error"
                                        ></MTooltip>
                                    </div>
                                </div>

                                <div class="form__group form__group-first">
                                    <label for="ngaycap" class="form__label"
                                        >{{ MISAResouce.vi.LabelIdentityDate }}
                                    </label>
                                    <div
                                        :class="{
                                            'tooltip-error':
                                                isTooltip.isTooltipIdentityDate,
                                        }"
                                    >
                                        <MInput
                                            type="date"
                                            name="IdentityDate"
                                            id="ngaycap"
                                            ref="txtIdentityDate"
                                            tabindex="8"
                                            kind="default"
                                            style="
                                                font-family: Arial, sans-serif;
                                            "
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
                                            v-if="
                                                isTooltip.isTooltipIdentityDate
                                            "
                                            :subtext="
                                                MISAResouce.vi
                                                    .LabelIdentityDate +
                                                MISAResouce.vi.ErrorDate
                                            "
                                            kind="error"
                                        ></MTooltip>
                                    </div>
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
                                    v-model="newEmployee.Address"
                                />
                            </div>
                        </div>
                        <div class="m-row form__group-contact-second">
                            <div class="form__group form__group-contact-input">
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
                                    v-model="newEmployee.PhoneNumber"
                                />
                            </div>
                            <div class="form__group form__group-contact-input">
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
                                    v-model="newEmployee.LandlineNumber"
                                />
                            </div>
                            <div class="form__group form__group-contact-input">
                                <label for="email" class="form__label">{{
                                    MISAResouce.vi.LabelEmail
                                }}</label>
                                <div
                                    :class="{
                                        'tooltip-error':
                                            isTooltip.isTooltipEmail,
                                    }"
                                >
                                    <MInput
                                        type="email"
                                        id="email"
                                        tabindex="13"
                                        name="Email"
                                        ref="txtEmail"
                                        kind="default"
                                        v-model="newEmployee.Email"
                                        :isShowTooltip="
                                            isTooltip.isTooltipEmail
                                        "
                                        @blur="
                                            isInValid(
                                                newEmployee.Email,
                                                'email'
                                            )
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
                        </div>
                        <div class="m-row form__group-contact-second">
                            <div class="form__group form__group-contact-input">
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
                                    v-model="newEmployee.BankAccount"
                                />
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
                        ref="btnDestroy"
                    >
                    </MButton>
                </div>
                <div class="popup__form-footer-right">
                    <div>
                        <MButton
                            class="btn btn-default close__add-employee tooltip"
                            tabindex="17"
                            :text="MISAResouce.vi.BtnSave"
                            :click="() => btnSaveAndClose(true)"
                            ref="btnSave"
                        >
                            <MTooltip
                                kind="save"
                                :subtext="MISAResouce.vi.TooltipSave"
                            ></MTooltip>
                        </MButton>
                    </div>
                    <div>
                        <MButton
                            class="btn btn-primary close__add-employee"
                            tabindex="18"
                            :text="MISAResouce.vi.BtnSaveEndAdd"
                            :click="() => btnSaveAndClose(false)"
                            ref="btnSaveEndAdd"
                        >
                        </MButton>
                    </div>
                </div>
            </div>
        </div>

        <!-- begin dialog -->
        <!-- dialog hiển thị lỗi -->
        <MDialog
            v-if="isDialogError"
            iconClass="dialog__icon-error"
            :title="MISAResouce.vi.DialogNotifyError"
            :message="message"
            :textButton="MISAResouce.vi.BtnClose"
            @hideShowDialogError="hideShowDialogError"
            kind="error"
        ></MDialog>
        <!-- dialog thông báo nếu dữ liệu thay đổi -->
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
            @onClickBtnYes="onClickBtnYes"
            kind="notify"
        ></MDialog>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import MISAEnum from "@/js/enum";
import Mcombobox from "../base/Mcombobox.vue";
import axios from "axios";
import moment from "moment";

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
            valueInput: "",
            departmentName: "",
            errorExistId: "",
            isDialogError: false,
            isDialogNotify: false,
            oldEmployee: {},
            isTooltip: {
                isTooltipEmployeeCode: false,
                isTooltipEmployeeName: false,
                isTooltipDateOfBirth: false,
                isTooltipDepartmentName: false,
                isTooltipIdentityNumber: false,
                isTooltipIdentityDate: false,
                isTooltipEmail: false,
            },
            dataEmployeeIdSelected: "",
            errorMessage: [],
            message: "",
            isDisabledEmployeeCode: false,
        };
    },

    components: {
        Mcombobox,
    },

    created() {
        if (this.employeeIdSelected) {
            this.dataEmployeeIdSelected = this.employeeIdSelected;
        }
        try {
            /**
             * Call API lấy ra id bất kỳ khi click btn thêm nhân viên mới
             * Author: KienNT (03/03/2023)
             */
            if (this.isEmpty(this.dataEmployeeIdSelected)) {
                this.departmentName = null;
                this.getNewEmployeeCode();
            } else {
                /**
                 * Call API lấy ra id bất kỳ khi có id để sửa
                 * Author: KienNT (03/03/2023)
                 */
                axios
                    .get(
                        `https://localhost:7153/api/v1/Employees/${this.dataEmployeeIdSelected}`
                    )
                    .then(this.$emit("hideShowLoading", true))
                    .then((res) => {
                        this.newEmployee = res.data;
                        //có API thì sửa department ở đây
                        this.departmentName = this.newEmployee.DepartmentName;
                        this.newEmployee.DateOfBirth = this.formatDate(
                            this.newEmployee.DateOfBirth
                        );
                        this.newEmployee.IdentityDate = this.formatDate(
                            this.newEmployee.IdentityDate
                        );
                        this.oldEmployee = JSON.stringify(this.newEmployee);
                        this.setFocusInput("txtEmployeeCode");
                        this.$emit("hideShowLoading", false);
                        this.isDisabledEmployeeCode = true;
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
         *   @param (newValue): là employee mới
         */
        newEmployee: {
            handler: function (newValue) {
                try {
                    this.newEmployee.EmployeeCode = newValue.EmployeeCode;
                } catch (error) {
                    console.log(error);
                }
            },
            deep: true,
        },

        /**
         * Theo dõi mảng errorMessage thay đổi thì check nếu có lỗi thì gán cho message
         * Author: KienNT (06/03/2023)
         */
        errorMessage: {
            handler: function (newValue) {
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
        message: function () {},
    },

    mounted() {
        window.addEventListener("keydown", this.handlePressKeyShort);
    },
    beforeUnmount() {
        window.removeEventListener("keydown", this.handlePressKeyShort);
    },

    methods: {
        /**
         * Hàm click vào btn có trong dialog
         * Author: KienNT (10/03/2023)
         */
        onClickBtnYes() {
            try {
                this.btnSaveAndClose(true);
                this.isDialogNotify = false;
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Hàm lấy department id từ combobox
         * Author: KienNT (09/03/2023)
         * @param (selectedDepartmentId): tham số là 1 departmentId muốn lấy
         */
        selectedDepartment(selectedDepartmentId) {
            try {
                this.newEmployee.DepartmentId = selectedDepartmentId;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm lấy giá trị input bên cb sau đó check isEmpty
         * Author: KienNT (09/03/2023)
         * @param (valueInput): Giá trị của value được emit từ con
         */
        handleCheckEmpty(valueInput) {
            try {
                this.valueInput = valueInput;
                if (this.isEmpty(this.valueInput)) {
                    this.isTooltip.isTooltipDepartmentName = true;
                } else {
                    this.isTooltip.isTooltipDepartmentName = false;
                }
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Hàm lấy employee code mới
         * Author: KienNT (01/03/2023)
         */
        getNewEmployeeCode() {
            try {
                axios
                    .get(
                        "https://localhost:7153/api/v1/Employees/NewEmployeeCode"
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
                        this.isDisabledEmployeeCode = false;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm set focus cho element xác định
         * Author: KienNT (06/03/2023)
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
                this.departmentName = "";
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
                    console.log(this.newEmployee);
                    // thêm nhân viên nếu ko có employeeIdSelected
                    if (this.isEmpty(this.dataEmployeeIdSelected)) {
                        axios
                            .post(
                                "https://localhost:7153/api/v1/Employees",
                                this.newEmployee
                            )
                            .then(this.$emit("hideShowLoading", true))
                            .then((res) => {
                                console.log(res);
                                console.log(this.newEmployee);
                                if (isCloseForm) {
                                    // reset và đóng form
                                    this.destroyPopup();
                                } else {
                                    // reset nhưng ko đóng form
                                    this.newEmployee = {};
                                    // lấy 1 id mới
                                    this.getNewEmployeeCode();
                                    this.errorMessage = [];
                                    this.departmentName = "";
                                }
                                this.$emit("hideShowLoading", false);
                                this.$emit("hideShowToast", "add");
                                this.$emit("handleReLoadData");
                            })
                            .catch((error) => {
                                let response = error.response;
                                switch (response.status) {
                                    case 400:
                                    case 500:
                                        this.$emit("hideShowLoading", false);
                                        this.errorExistId =
                                            response.data.UserMsg;
                                        this.errorMessage[0] =
                                            this.errorExistId;
                                        if (response.data.UserMsg) {
                                            this.isTooltip.isTooltipEmployeeCode = true;
                                        }
                                        this.isDialogError = true;
                                        break;

                                    default:
                                        break;
                                }
                            });
                    } else {
                        // Sửa nhân viên theo id
                        axios
                            .put(
                                `https://localhost:7153/api/v1/Employees/${this.dataEmployeeIdSelected}`,
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
                                    this.departmentName = "";
                                    this.dataEmployeeIdSelected = null;
                                }
                                this.$emit("hideShowLoading", false);
                                this.$emit("hideShowToast", "edit");
                                this.$emit("handleReLoadData");
                            })
                            .catch((error) => {
                                // bắt lỗi nếu sửa trùng mã của bản ghi khác
                                let response = error.response;
                                switch (response.status) {
                                    case 400:
                                    case 500:
                                        this.$emit("hideShowLoading", false);
                                        this.errorExistId =
                                            response.data.devMsg ||
                                            "Lỗi không đúng định dạng";
                                        this.errorMessage[0] =
                                            this.errorExistId;
                                        if (response.data.devMsg) {
                                            this.isTooltip.isTooltipEmployeeCode = true;
                                        }
                                        this.isDialogError = true;
                                        break;

                                    default:
                                        break;
                                }
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
                    MISAResouce.vi.LabelEmployeeCode,
                    "txtEmployeeCode"
                );

                // check tên
                this.checkField(
                    "isTooltipEmployeeName",
                    this.newEmployee.FullName,
                    MISAResouce.vi.LabelEmployeeName,
                    "txtFullName"
                );

                // check department
                this.checkField(
                    "isTooltipDepartmentName",
                    this.valueInput,
                    MISAResouce.vi.LabelDepartmentName,
                    "txtDepartmentName"
                );

                // check invalid
                // nếu có value thì mới check input date
                this.checkFieldInvalid(
                    "isTooltipDateOfBirth",
                    this.newEmployee.DateOfBirth,
                    MISAResouce.vi.LabelDateOfBirth,
                    "date",
                    MISAResouce.vi.ErrorDate,
                    "txtDateOfBirth"
                );

                // nếu có value thì mới check input number
                this.checkFieldInvalid(
                    "isTooltipIdentityNumber",
                    this.newEmployee.IdentityNumber,
                    MISAResouce.vi.LabelIdentityNumber,
                    "number",
                    MISAResouce.vi.ErrorNotNumber,
                    "txtIdentityNumber"
                );

                // nếu có value thì mới check input date
                this.checkFieldInvalid(
                    "isTooltipIdentityDate",
                    this.newEmployee.IdentityDate,
                    MISAResouce.vi.LabelIdentityDate,
                    "date",
                    MISAResouce.vi.ErrorDate,
                    "txtIdentityDate"
                );

                // nếu có value thì mới check input email
                this.checkFieldInvalid(
                    "isTooltipEmail",
                    this.newEmployee.Email,
                    MISAResouce.vi.LabelEmail,
                    "email",
                    MISAResouce.vi.ErrorEmail,
                    "txtEmail"
                );

                // nếu có value thì mới check input number
                // this.checkFieldInvalid(
                //     "isTooltipBankAccount",
                //     this.newEmployee.BankAccount,
                //     MISAResouce.vi.LabelBankAccount,
                //     "number",
                //     MISAResouce.vi.ErrorNotNumber,
                //     "txtBankAccount"
                // );

                // nếu ko có lỗi thì ẩn popup
                let check = true;

                const refNames = Object.values(this.errorMessage);
                for (let index = 0; index < refNames.length; index++) {
                    const element = refNames[index];
                    if (element !== "space") {
                        check = false;
                    }
                }

                if (check === false) {
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
                    }
                    this.isTooltip[fieldName] = true;
                    // nếu chưa có lỗi thì thêm ptu lỗi đó vào
                    if (
                        !this.errorMessage.includes(
                            errorLabel + MISAResouce.vi.ErrorEmpty
                        )
                    ) {
                        this.errorMessage[this.getTabIndex(field)] =
                            errorLabel + MISAResouce.vi.ErrorEmpty;
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
                            errorLabel + MISAResouce.vi.ErrorEmpty
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
         * Author: KienNT (06/03/2023)
         *  @param (fieldName,fieldValue,errorLabel): tham số 1: true,false tooltip label, tham số 2 là giá trị ô input, tham số 3: label lỗi, tham số 4: loại (email,date,..), tham số 5 loại label lỗi
         */
        checkFieldInvalid(
            fieldName,
            fieldValue,
            errorLabel,
            kind,
            errorText,
            field
        ) {
            try {
                if (!this.isEmpty(fieldValue)) {
                    // check input phải là số
                    if (this.isInValid(fieldValue, kind)) {
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
         * Hàm lấy tabindex của ptu đó để gán lỗi vào mảng ở STT đó để set focus vào ô đầu tiên
         * Author: KienNT (02/03/2023)
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
         * @param (value,kind): tham số 1 là giá trị chuỗi từ input và tham số 2 là loại: date,...
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
         * @param (isTooltip): tham số là true, false để hiển thị tooltip
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
         * @param (isDialogNotify): tham số là true, false để hiển thị dialog notify
         */

        onClickBtnDestroy(isDialogNotify) {
            try {
                this.isDialogNotify = isDialogNotify;
                const isFocus = this.firstFocus();
                if (!isFocus) {
                    this.setFocusInput("txtEmployeeCode");
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm ẩn hiện dialog và focus vào ô input lỗi đầu tiên
         * Author: KienNT (02/03/2023)
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

        /**
         * ẩn tooltip khi hover vào các option item của combobox
         * Author: KienNT (10/03/2023)
         *
         */
        handleMountOver() {
            try {
                this.$refs["tootipCombobox"] &&
                    this.$refs["tootipCombobox"].$el.classList.add("d-none");
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * hiển thị tooltip khi hover vào các option item của combobox
         * Author: KienNT (10/03/2023)
         *
         */
        handleMountOut() {
            try {
                this.$refs["tootipCombobox"] &&
                    this.$refs["tootipCombobox"].$el.classList.remove("d-none");
            } catch (error) {
                console.log(error);
            }
        },

        /**
         *  focus vào ô input lỗi đầu tiên
         * Author: KienNT (06/03/2023)
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
         *  handle khi nhấn phím tắt
         * Author: KienNT (15/03/2023)
         * @param (event): là event
         */
        handlePressKeyShort(event) {
            // khi nhấn phím esc thì đóng form
            if (event.key === "Escape" || event.keyCode === 27) {
                this.closePopup();
            }

            if (event.ctrlKey && event.key === "s") {
                // Ngăn chặn trình duyệt thực hiện hành động mặc định của phím "Ctrl + S" là lưu trang web
                event.preventDefault();
                this.btnSaveAndClose(true);
            }

            if (event.ctrlKey && event.shiftKey && event.key === "s") {
                this.btnSaveAndClose(false);
            }
        },

        /**
         *  handle khi nhấn phím ctrl + s
         * Author: KienNT (09/03/2023)
         * @param (event): là event
         */
        handlePress(event) {
            try {
                const btnDestroy = this.$refs["btnDestroy"];

                if (
                    event.key === "Tab" &&
                    event.target.isEqualNode(btnDestroy.$el)
                ) {
                    // Prevent the default tab behavior
                    event.preventDefault();
                    // focus vào input đầu tiên
                    this.setFocusInput("txtEmployeeCode");
                }

                // nếu phần tử focus là button thì có border
                const btnSaveEndAdd = this.$refs["btnSaveEndAdd"];
                const btnSave = this.$refs["btnSave"];
                btnSaveEndAdd.$el.addEventListener("focus", function () {
                    if (btnSaveEndAdd.$el.tagName === "BUTTON") {
                        btnSaveEndAdd.$el.classList.add("border-focus-white");
                    }
                });

                btnSave.$el.addEventListener("focus", function () {
                    if (btnSave.$el.tagName === "BUTTON") {
                        btnSave.$el.classList.add("border-focus");
                    }
                });

                btnDestroy.$el.addEventListener("focus", function () {
                    if (btnDestroy.$el.tagName === "BUTTON") {
                        btnDestroy.$el.classList.add("border-focus");
                    }
                });

                btnSaveEndAdd.$el.addEventListener("blur", function () {
                    if (btnSaveEndAdd.$el.tagName === "BUTTON") {
                        btnSaveEndAdd.$el.classList.remove(
                            "border-focus-white"
                        );
                    }
                });

                btnSave.$el.addEventListener("blur", function () {
                    if (btnSave.$el.tagName === "BUTTON") {
                        btnSave.$el.classList.remove("border-focus");
                    }
                });

                btnDestroy.$el.addEventListener("blur", function () {
                    if (btnDestroy.$el.tagName === "BUTTON") {
                        btnDestroy.$el.classList.remove("border-focus");
                    }
                });
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
@import url(../../css/components/popup.css);
</style>
