<template>
    <div
        class="paging__record"
        @click="() => (diabledDropdown ? handleOpenDropdown() : '')"
        style="max-width: 100%"
        ref="dropdown"
    >
        <div class="input__wrapper dropdown">
            <button
                class="input__icon dropdown-icon"
                fdprocessedid="jeq9qa"
                :class="!diabledDropdown ? 'disabledDopdown' : ''"
            >
                <div class="input__icon-dropdown" ref="iconDropdown"></div>
            </button>
            <input
                readonly="true"
                type="text"
                style="border: none"
                class="input__type dropdown-input paging-input"
                v-model="valueInput"
                fdprocessedid="epqss"
                :class="!diabledDropdown ? 'disabledDopdown' : ''"
                :tabindex="tabindex"
            />

            <div v-if="isOpenDropdown" class="option__wrapper-lang">
                <ul class="option__list scrollbar_customize">
                    <MOptionItem
                        v-for="(item, index) in optionItem"
                        :key="index"
                        :text="item.text"
                        :isActive="item.isActive"
                        @handleClickItem="handleClickItem"
                        :isDropdownLang="true"
                    ></MOptionItem>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import MISAEnum from "@/js/enum";
export default {
    name: "TheDropdownAccount",

    data() {
        return {
            MISAEnum,
            valueInput: "",
            optionItem: [
                {
                    text: this.$t("Warning_only"),
                    isActive: true,
                },
                {
                    text: this.$t("Require_type"),
                    isActive: false,
                },
            ],
        };
    },

    props: {
        isOpenDropdown: {
            type: Boolean,
            default: false,
        },
        dropdownRef: {
            type: Object,
            default: null,
        },
        iconDropdownRef: {
            type: Object,
            default: null,
        },
        diabledDropdown: {
            type: Boolean,
            default: false,
        },
        valueFromParent: {
            type: String,
            default: "",
        },
        tabindex: {
            type:Number
        }
    },

    watch: {
        diabledDropdown: function (newValue) {
            if (newValue) {
                if (this.valueFromParent) {
                    this.valueInput = this.formatDropdownAccountDetail(
                        this.valueFromParent
                    );
                    this.optionItem.forEach((el) => {
                        if (el.text === this.valueInput) {
                            el.isActive = true;
                        } else {
                            el.isActive = false;
                        }
                    });
                } else {
                    this.valueInput = this.$t("Warning_only");
                }
            } else {
                this.valueInput = "";
            }
        },

        isOpenDropdown: function (newValue) {
            if (!newValue) {
                if (
                    this.$refs["iconDropdown"] &&
                    this.$refs["iconDropdown"].classList.contains("rorate-180")
                ) {
                    this.$refs["iconDropdown"].classList.remove("rorate-180");
                }
            }
        },
    },

    mounted() {
        window.addEventListener("click", this.handleOutsideClick);
    },
    beforeUnmount() {
        window.removeEventListener("click", this.handleOutsideClick);
    },

    methods: {
        /**
         * nghe sự kiện window. Nếu click ko phải là dropdown thì ẩn dropdown
         * Author: KienNT (06/03/2023)
         *   @param (event): là event
         */
        handleOutsideClick(event) {
            try {
                if (
                    this.$refs["dropdown"] &&
                    !this.$refs["dropdown"].contains(event.target)
                ) {
                    this.$emit("setIsOpenDropdown", false);
                    if (!this.isOpenDropdown) {
                        if (
                            this.$refs["iconDropdown"].classList.contains(
                                "rorate-180"
                            )
                        ) {
                            this.$refs["iconDropdown"].classList.remove(
                                "rorate-180"
                            );
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * handle format lại dropdown account detail
         * Author: KienNT (29/05/2023)
         */
        formatDropdownAccountDetail(kind) {
            try {
                switch (kind) {
                    case MISAEnum.Account_dropdown.Warning_only:
                        return this.$t("Warning_only");
                    case MISAEnum.Account_dropdown.Require_type:
                        return this.$t("Require_type");

                    default:
                        console.log("Unknown kind value:", kind);
                        return kind;
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hiển thị dropdown option item
         * Author: KienNT (06/03/2023)
         */
        handleOpenDropdown() {
            try {
                this.$refs["iconDropdown"].classList.toggle("rorate-180");
                this.$emit("setIsOpenDropdown", !this.isOpenDropdown);
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * handle khi click option item
         * Author: KienNT (06/03/2023)
         *   @param (event): là event
         */
        handleClickItem(event) {
            try {
                this.optionItem.forEach((option) => {
                    if (option.isActive === true) {
                        option.isActive = false;
                    }
                });
                this.optionItem.forEach((option) => {
                    if (event.target.textContent.indexOf(option.text) !== -1) {
                        option.isActive = true;
                        this.valueInput = event.target.textContent;
                    } else {
                        option.isActive = false;
                    }
                });
                this.optionItem.forEach((el) => {
                    if (this.valueInput.includes(el.text)) {
                        this.$emit("handleReceiveValue", el.text);
                    }
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
