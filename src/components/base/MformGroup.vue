<!-- <template>
    <div
        class="form__group form__group-contact-input"
        :class="{ 'tooltip-error': isTooltip }"
    >
        <label :for="labelFor" class="form__label">
            <MTooltip
                :kind="tooltipKind"
                :text="labelText"
                :subtext="tooltipSubtext"
            />
        </label>
        <MInput
            :id="inputId"
            :name="inputName"
            :kind="inputKind"
            :placeHolder="inputPlaceholder"
            :v-model="value"
            :isShowTooltip="isTooltip"
            @blur="handleBlur"
        />
        <MTooltip v-if="isTooltip" :subtext="tooltipSubtext" kind="error" />
    </div>
</template>

<script>
export default {
    props: {
        labelFor: {
            type: String,
            required: true,
        },
        labelText: {
            type: String,
            required: true,
        },
        tooltipKind: {
            type: String,
            required: true,
        },
        tooltipSubtext: {
            type: String,
            required: true,
        },
        inputId: {
            type: String,
            required: true,
        },
        inputName: {
            type: String,
            required: true,
        },
        inputKind: {
            type: String,
            required: true,
        },
        inputPlaceholder: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isTooltip: false,
        };
    },
    methods: {  
        handleBlur() {
            if (
                isInValid(this.value, "number") ||
                isInValid(this.value, "email")
            ) {
                this.isTooltip = true;
                this.$emit("error");
            } else {
                this.isTooltip = false;
                this.$emit("valid");
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
}


<template>
  <div>
    <MyInputGroup
      labelFor="sodienthoaiCD"
      labelText="{{ MISAResouce.vi.LabelLandlineNumber }}"
      tooltipKind="title"
      tooltipSubtext="{{ MISAResouce.vi.TooltipFixPhoneNumber }}"
      inputId="sodienthoaiCD"
      inputName="LandlineNumber"
      inputKind="default"
      inputPlaceholder="{{ MISAResouce.vi.TooltipFixPhoneNumber.toLowerCase() }}"
      :value="newEmployee.LandlineNumber"
      @valid="handleValidLandlineNumber"
      @error="handleInvalidLandlineNumber"
    />
    <MyInputGroup
      labelFor="email"
      labelText="{{ MISAResouce.vi.LabelEmail }}"
      tooltipKind="error"
      tooltipSubtext="{{ MISAResouce.vi.LabelEmail + MISAResouce.vi.ErrorEmail }}"
      inputId="email"
      inputName="Email"
      inputKind="default"
      inputPlaceholder="{{ MISAResouce.vi.LabelEmail.toLowerCase() }}"
      :value="newEmployee.Email"
      @valid="handleValidEmail"
      @error="handleInvalidEmail"
    />
  -->
