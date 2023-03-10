<template>
    <div
        class="input__wrapper-combobox combobox dropdown-popup-wrapper"
        :class="{
            'input__wrapper-combobox-focus': isFocus,
            'input-required': isShowTooltip,
        }"
    >
        <button
            class="input__icon btn-combobox popup__combobox-icon"
            ref="btnIconCombobox"
            @click="($event) => handleClickIcon($event)"
        >
            <div class="input__icon-dropdown" ref="iconCombobox"></div>
        </button>
        <input
            :tabindex="tabindex"
            type="text"
            name="DepartmentName"
            id="donvi"
            style="border: none"
            @keydown="handleKeyDown"
            @focus="handleFocusInput"
            @blur="handleBlurInput"
            @input="handleOnInput"
            v-model="department"
            class="input__type combobox-input input--required reset-input"
            autocomplete="off"
            :placeHolder="
                MISAResouce.vi.Enter +
                ' ' +
                MISAResouce.vi.LabelDepartmentName.toLowerCase()
            "
            ref="departmentInput"
        />

        <div
            class="option__wrapper-combobox"
            ref="option__wrapper-combobox"
            @mouseover="handleMountOver"
            @mouseout="handleMountOut"
        >
            <ul class="option__list-combobox scrollbar_customize">
                <li
                    v-for="(department, index) in departments"
                    :key="index"
                    class="option__item-combobox"
                    @click="itemOnClick(department, index)"
                    :class="selectedDepartment === index ? 'active' : ''"
                >
                    <a class="option__link-combobox">{{
                        department.DepartmentName
                    }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import axios from "axios";
export default {
    name: "MCombobox",
    props: {
        // giá trị cần binding ra ngoài khi sử dụng component
        modelValue: [String, Number, Boolean],
        // có show tooltip ko?
        isShowTooltip: {
            type: Boolean,
            default: false,
        },
        // tabindex của input
        tabindex: {
            type: String,
        },
        // tên phòng ban khi truyền từ popup
        departmentName: {
            type: String,
        },
    },
    data() {
        return {
            MISAResouce,
            departments: [],
            oldDepartments: [],
            department: "",
            isFocus: false,
            selectedDepartment: "",
        };
    },

    watch: {
        departmentName: function (newValue) {
            this.department = newValue;
        },
    },

    beforeUpdate() {
        if (this.department) {
            this.$emit("handleCheckEmpty", this.department);
        }
    },

    /**
     * get data
     * Author: KienNT (07/03/2023)
     */
    created() {
        try {
            axios
                .get("https://apidemo.laptrinhweb.edu.vn/api/v1/Departments")
                .then((res) => {
                    this.departments = res.data;
                    this.oldDepartments = this.departments;
                })
                .catch((error) => console.log(error));
        } catch (error) {
            console.log(error);
        }
    },

    methods: {
        /**
         * Set focus khi được mounted và có props isFocus = true
         * Author: KienNT (03/03/2023)
         */
        setFocus() {
            this.$nextTick(function () {
                this.$refs["departmentInput"].focus();
            });
        },
        /**
         * Theo dõi sự thay đổi value của input
         * Author: KienNT (07/03/2023)
         */
        handleOnInput() {
            let dataFilter = [];

            // Sử dụng vòng for để duyệt các phần tử trong data gốc, nếu phù hợp thì push vào mảng dữ liệu mới
            if (this.department === "") {
                this.departments = this.oldDepartments;
                return;
            }
            this.oldDepartments.forEach((el) => {
                if (el.DepartmentName.includes(this.department)) {
                    dataFilter.push(el);
                }
            });

            // Phải xóa sạch các dữ liệu cũ của combobox-data.
            this.departments = [];

            for (let index = 0; index < dataFilter.length; index++) {
                const element = dataFilter[index];
                this.departments.push(element);
            }

            this.$refs["option__wrapper-combobox"].classList.add("d-block");
        },
        /**
         * handle khi click btn icon combobox
         * Author: KienNT (07/03/2023)
         * @param {event}: là sự kiện của element hiện tại
         */
        handleClickIcon(event) {
            if (event.target.firstChild) {
                event.target.firstChild.classList.toggle("rorate-180");
            } else {
                event.target.classList.toggle("rorate-180");
            }
            this.$refs["option__wrapper-combobox"].classList.toggle("d-block");
        },

        /**
         * handle khi nhấn phím
         * Author: KienNT (07/03/2023)
         * @param {event}: là sự kiện của element hiện tại
         */
        handleKeyDown(e) {
            const key = e.keyCode;
            const elComboboxData = e.target.nextElementSibling;
            const optionItem = elComboboxData.firstElementChild.children;

            switch (key) {
                // nhấn phím enter or tab
                case 13:
                case 9:
                    for (let index = 0; index < optionItem.length; index++) {
                        const item = optionItem[index];
                        // lấy ta ptu đc active thì gán cho value
                        if (item.classList.contains("active")) {
                            this.department =
                                item.firstElementChild.textContent;
                            this.departments = this.oldDepartments;
                            this.$refs[
                                "option__wrapper-combobox"
                            ].classList.remove("d-block");
                            this.selectedDepartment = index;
                            this.$emit(
                                "selectedDepartment",
                                this.oldDepartments[index].DepartmentId
                            );
                            break;
                        }
                    }
                    break;

                // phím lên
                case 38:
                    // biến check xem có ptu nào đang active ko.
                    var check = true;
                    for (let index = 0; index < optionItem.length; index++) {
                        const item = optionItem[index];
                        if (item.classList.contains("active")) {
                            check = false;
                            break;
                        }
                    }
                    // ko có ptu nào active
                    if (check) {
                        optionItem[optionItem.length - 1].classList.add(
                            "active"
                        );
                    }
                    //  có ptu  active
                    if (!check) {
                        for (
                            let index = 0;
                            index < optionItem.length;
                            index++
                        ) {
                            const item = optionItem[index];

                            if (item.classList.contains("active")) {
                                if (index > 0) {
                                    optionItem[index - 1].classList.add(
                                        "active"
                                    );
                                    optionItem[index].classList.remove(
                                        "active"
                                    );
                                } else {
                                    optionItem[
                                        optionItem.length - 1
                                    ].classList.add("active");
                                    optionItem[index].classList.remove(
                                        "active"
                                    );
                                }
                                break;
                            }
                        }
                    }

                    break;

                // phím xuống
                case 40:
                    // biến check xem có ptu nào đang active ko.
                    var checkActive = true;
                    for (let index = 0; index < optionItem.length; index++) {
                        const item = optionItem[index];
                        if (item.classList.contains("active")) {
                            checkActive = false;
                            break;
                        }
                    }
                    // ko có ptu nào active
                    if (checkActive) {
                        optionItem[0].classList.add("active");
                    }
                    //  có ptu  active
                    if (!checkActive) {
                        for (
                            let index = 0;
                            index < optionItem.length;
                            index++
                        ) {
                            const item = optionItem[index];

                            if (item.classList.contains("active")) {
                                if (index !== optionItem.length - 1) {
                                    optionItem[index + 1].classList.add(
                                        "active"
                                    );
                                    optionItem[index].classList.remove(
                                        "active"
                                    );
                                } else {
                                    optionItem[0].classList.add("active");
                                    optionItem[index].classList.remove(
                                        "active"
                                    );
                                }
                                break;
                            }
                        }
                    }
                    break;

                default:
                    break;
            }
        },

        /**
         * handle khi click vào item
         * Author: KienNT (08/03/2023)
         * @param {department, index)}: department: đối tượng department, index của department)
         */
        itemOnClick(department, index) {
            this.selectedDepartment = index;
            const refIconCombobox = this.$refs["iconCombobox"];
            this.department = department.DepartmentName;
            this.$refs["option__wrapper-combobox"].classList.remove("d-block");
            refIconCombobox.classList.remove("rorate-180");
            this.$emit("selectedDepartment", department.DepartmentId);
        },

        /**
         * nghe sự kiện window. Nếu click ko phải là combobox
         * Author: KienNT (07/03/2023)
         *  @param {event}: là sự kiện của element hiện tại
         */
        handleClickOutCombobox(event) {
            try {
                const refIconCombobox = this.$refs["iconCombobox"];
                const refBtnIconCombobox = this.$refs["btnIconCombobox"];

                const listOption = this.$refs["option__wrapper-combobox"];
                if (
                    !refIconCombobox.contains(event.target) &&
                    !listOption.contains(event.target) &&
                    !refBtnIconCombobox.contains(event.target)
                ) {
                    listOption.classList.remove("d-block");
                    refIconCombobox.classList.remove("rorate-180");
                }
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Khi input focus thì set isFocus = true
         * Author: KienNT (08/03/2023)
         */
        handleFocusInput() {
            this.isFocus = true;
        },
        /**
         * Khi input blur thì set isFocus = true
         * Author: KienNT (08/03/2023)
         */
        handleBlurInput() {
            this.isFocus = false;
            this.$emit("handleCheckEmpty");
        },

        /**
         * ẩn tooltip khi hover vào các option item của combobox
         * Author: KienNT (10/03/2023)
         *
         */
        handleMountOver() {
            this.$emit("handleMountOver");
        },

        /**
         * hiển thị tooltip khi hover vào các option item của combobox
         * Author: KienNT (10/03/2023)
         *
         */
        handleMountOut() {
            this.$emit("handleMountOut");
        },
    },

    mounted() {
        window.addEventListener("click", this.handleClickOutCombobox);
    },
    beforeUnmount() {
        window.removeEventListener("click", this.handleClickOutCombobox);
    },
};
</script>
<style scoped>
@import url(../../css/components/combobox.css);
</style>
