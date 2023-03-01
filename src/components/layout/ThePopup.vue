<template>
    <div class="popup">
        <div class="popup__form">
            <div class="popup__form-wrapper">
                <div class="popup__form-header">
                    <div class="form__header-left">
                        <Mheading
                            :text="MISAResouce.vi.EmployeeInfo"
                        ></Mheading>
                        <div class="form__header-left-check">
                            <Mcheckbox id="infoKH"></Mcheckbox>
                            <label
                                for="infoKH"
                                class="form__header-check-text"
                                >{{ MISAResouce.vi.Customer }}</label
                            >
                        </div>
                        <div class="form__header-left-check">
                            <Mcheckbox id="infoNCC"></Mcheckbox>
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
                                <Mtooltip
                                    kind="help"
                                    :subtext="MISAResouce.vi.TooltipHelp"
                                ></Mtooltip>
                            </div>
                        </div>

                        <div class="wrap-icon confirm__close-popup">
                            <div class="icon-close tooltip">
                                <Mtooltip
                                    kind="close"
                                    :subtext="MISAResouce.vi.TooltipClose"
                                ></Mtooltip>
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
                                    <Minput
                                        id="employeeId"
                                        name="EmployeeCode"
                                        tabindex="1"
                                        autocomplete="off"
                                        kind="default"
                                        :required="true"
                                        :placeHolder="
                                            MISAResouce.vi.LabelEmployeeCode.toLowerCase()
                                        "
                                    ></Minput>
                                </div>

                                <div class="form__group form__group-second">
                                    <label for="ten" class="form__label"
                                        >{{ MISAResouce.vi.LabelEmployeeName }}
                                        <span class="required">*</span></label
                                    >

                                    <Minput
                                        tabindex="2"
                                        name="FullName"
                                        autocomplete="off"
                                        id="ten"
                                        class="input--required"
                                        kind="default"
                                        :required="true"
                                        :placeHolder="
                                            MISAResouce.vi.LabelEmployeeName.toLowerCase()
                                        "
                                    ></Minput>
                                </div>
                            </div>

                            <div class="m-row">
                                <label for="donvi" class="form__label"
                                    >{{ MISAResouce.vi.LabelDepartmentName }}
                                    <span class="required">*</span></label
                                >

                                <mcombobox
                                    api="https://apidemo.laptrinhweb.edu.vn/api/v1/Departments"
                                    modelname="DepartmentName"
                                    class="input__wrapper-combobox combobox dropdown-popup-wrapper"
                                >
                                    <button
                                        class="input__icon btn-combobox popup__combobox-icon"
                                    >
                                        <mdiv
                                            class="input__icon-dropdown"
                                        ></mdiv>
                                    </button>
                                    <Minput
                                        tabindex="3"
                                        autocomplete="off"
                                        name="DepartmentName"
                                        id="donvi"
                                        style="border: none"
                                        :required="true"
                                        className="combobox-input"
                                        kind="combobox"
                                        :placeHolder="
                                            MISAResouce.vi.LabelDepartmentName.toLowerCase()
                                        "
                                    />

                                    <mdiv class="option__wrapper-combobox">
                                        <mul
                                            class="option__list-combobox scrollbar_customize"
                                        >
                                        </mul>
                                    </mdiv>
                                </mcombobox>
                            </div>

                            <div class="m-row">
                                <div class="form__group">
                                    <label for="chucdanh" class="form__label">{{
                                        MISAResouce.vi.LabelJobTitle
                                    }}</label>
                                    <Minput
                                        tabindex="4"
                                        id="chucdanh"
                                        name="PositionName"
                                        kind="default"
                                        :placeHolder="
                                            MISAResouce.vi.LabelJobTitle.toLowerCase()
                                        "
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
                                    <Minput
                                        type="date"
                                        tabindex="5"
                                        name="DateOfBirth"
                                        id="ngaysinh"
                                        kind="default"
                                    />
                                </div>

                                <div
                                    class="form__group form__group-second ml-16"
                                >
                                    <label class="form__label"
                                        >{{ MISAResouce.vi.LabelGender }}
                                    </label>

                                    <div class="input__radio-wrapper">
                                        <Mradio
                                            id="nam"
                                            :text="MISAResouce.vi.LabelMale"
                                        ></Mradio>
                                        <Mradio
                                            id="nu"
                                            :text="MISAResouce.vi.LabelFemale"
                                        ></Mradio>
                                        <Mradio
                                            id="other"
                                            :text="MISAResouce.vi.LabelOther"
                                        ></Mradio>
                                    </div>
                                </div>
                            </div>
                            <div class="popup__form-body-row m-row">
                                <div class="form__group form__group-second">
                                    <label for="cmnd" class="form__label">
                                        <Mtooltip
                                            :text="
                                                MISAResouce.vi.IdentityNumber
                                            "
                                            :subtext="
                                                MISAResouce.vi
                                                    .TooltipIdentityNumber
                                            "
                                            kind="title"
                                        ></Mtooltip>
                                    </label>
                                    <Minput
                                        id="cmnd"
                                        name="IdentityNumber"
                                        tabindex="7"
                                        kind="default"
                                        class="check-number"
                                        :placeHolder="
                                            MISAResouce.vi.TooltipIdentityNumber.toLowerCase()
                                        "
                                    />
                                </div>

                                <div class="form__group form__group-first">
                                    <label for="ngaycap" class="form__label"
                                        >{{ MISAResouce.vi.LabelIdentityDate }}
                                    </label>
                                    <Minput
                                        type="date"
                                        name="IdentityDate"
                                        id="ngaycap"
                                        tabindex="8"
                                        kind="default"
                                    />
                                </div>
                            </div>
                            <div class="m-row">
                                <div class="form__group">
                                    <label for="noicap" class="form__label">{{
                                        MISAResouce.vi.LabelIdentityPlace
                                    }}</label>
                                    <Minput
                                        id="noicap"
                                        tabindex="9"
                                        name="IdentityPlace"
                                        kind="default"
                                        :placeHolder="
                                            MISAResouce.vi.LabelIdentityPlace.toLowerCase()
                                        "
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
                                <Minput
                                    id="diachi"
                                    tabindex="10"
                                    name="Address"
                                    kind="default"
                                    :placeHolder="
                                        MISAResouce.vi.LabelAddress.toLowerCase()
                                    "
                                />
                            </div>
                        </div>
                        <div class="m-row form__group-contact-second">
                            <div class="form__group form__group-contact-input">
                                <label for="sodienthoai" class="form__label">
                                    <Mtooltip
                                        kind="title"
                                        :text="MISAResouce.vi.LabelPhoneNumber"
                                        :subtext="
                                            MISAResouce.vi.TooltipPhoneNumber
                                        "
                                    ></Mtooltip>
                                </label>
                                <Minput
                                    id="sodienthoai"
                                    tabindex="11"
                                    name="PhoneNumber"
                                    class="check-number"
                                    kind="default"
                                    :placeHolder="
                                        MISAResouce.vi.TooltipPhoneNumber.toLowerCase()
                                    "
                                />
                            </div>
                            <div class="form__group form__group-contact-input">
                                <label for="sodienthoaiCD" class="form__label">
                                    <Mtooltip
                                        kind="title"
                                        :text="
                                            MISAResouce.vi.LabelLandlineNumber
                                        "
                                        :subtext="
                                            MISAResouce.vi.TooltipFixPhoneNumber
                                        "
                                    ></Mtooltip>
                                </label>
                                <Minput
                                    tabindex="12"
                                    id="sodienthoaiCD"
                                    name="LandlineNumber"
                                    kind="default"
                                    :placeHolder="
                                        MISAResouce.vi.TooltipFixPhoneNumber.toLowerCase()
                                    "
                                />
                            </div>
                            <div class="form__group form__group-contact-input">
                                <label for="email" class="form__label">{{
                                    MISAResouce.vi.LabelEmail
                                }}</label>
                                <Minput
                                    type="email"
                                    id="email"
                                    tabindex="13"
                                    name="Email"
                                    kind="default"
                                    :placeHolder="
                                        MISAResouce.vi.LabelEmail.toLowerCase()
                                    "
                                />
                            </div>
                        </div>
                        <div class="m-row form__group-contact-second">
                            <div class="form__group form__group-contact-input">
                                <label for="taikhoan" class="form__label">{{
                                    MISAResouce.vi.LabelBankAccount
                                }}</label>
                                <Minput
                                    name="BankAccount"
                                    id="taikhoan"
                                    tabindex="14"
                                    class="check-number"
                                    kind="default"
                                    :placeHolder="
                                        MISAResouce.vi.LabelBankAccount.toLowerCase()
                                    "
                                />
                            </div>
                            <div class="form__group form__group-contact-input">
                                <label for="tennganhang" class="form__label">{{
                                    MISAResouce.vi.LabelBankName
                                }}</label>
                                <Minput
                                    id="tennganhang"
                                    tabindex="15"
                                    name="BankName"
                                    class="check-string"
                                    kind="default"
                                    :placeHolder="
                                        MISAResouce.vi.LabelBankName.toLowerCase()
                                    "
                                />
                            </div>
                            <div class="form__group form__group-contact-input">
                                <label for="chinhanh" class="form__label">{{
                                    MISAResouce.vi.LabelBankBranch
                                }}</label>
                                <Minput
                                    tabindex="16"
                                    id="chinhanh"
                                    name="BankBranch"
                                    kind="default"
                                    :placeHolder="
                                        MISAResouce.vi.LabelBankBranch.toLowerCase()
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- footer popup -->
            <div class="popup__form-footer">
                <div class="popup__form-footer-left">
                    <Mbutton
                        class="btn btn-default close__add-employee"
                        tabindex="19"
                        :text="MISAResouce.vi.Destroy"
                    >
                    </Mbutton>
                </div>
                <div class="popup__form-footer-right">
                    <div>
                        <Mbutton
                            class="btn btn-default close__add-employee"
                            tabindex="17"
                            :text="MISAResouce.vi.Save"
                        >
                        </Mbutton>
                    </div>
                    <div>
                        <Mbutton
                            class="btn btn-primary close__add-employee"
                            tabindex="18"
                            :text="MISAResouce.vi.SaveEndAdd"
                        >
                        </Mbutton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import Mheading from "../base/Mheading.vue";
import Mcheckbox from "../base/Mcheckbox.vue";
import Mtooltip from "../base/Mtooltip.vue";
import Minput from "../base/Minput.vue";
import Mradio from "../base/Mradio.vue";
import Mbutton from "../base/Mbutton.vue";
export default {
    name: "ThePopup",
    data() {
        return {
            MISAResouce,
        };
    },
    components: {
        Mheading,
        Mcheckbox,
        Mtooltip,
        Minput,
        Mradio,
        Mbutton,
    },
};
</script>
<style scoped>
@import url(../../css/components/popup.css);
</style>
