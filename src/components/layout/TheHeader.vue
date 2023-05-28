<template>
    <div class="header">
        <div class="header__left">
            <div class="header__left-icon wrap-icon">
                <div
                    class="header__left-icon-img icon-normal-light icon-normal-light-hover"
                ></div>
            </div>
            <div class="header__left-dropdown">
                <div class="header__left-dropdown-text">
                    {{ $t("MyCompany") }}
                </div>
                <div class="header__left-dropdown-icon wrap-icon">
                    <div
                        class="header__left-dropdown-arrow icon-arrow icon-normal-light icon-normal-light-hover"
                    ></div>
                </div>
            </div>
        </div>

        <div class="header__right">
            <div class="header__right-noti-icon">
                <div
                    class="paging__record block__lang"
                    @click="handleOpenDropdown"
                    ref="dropdown"
                >
                    <div class="input__wrapper input__wrapprt-lang dropdown">
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
                            v-model="valueInput"
                            fdprocessedid="epqss"
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
                <div
                    class="header__right-noti-img icon-normal-light icon-normal-light-hover"
                ></div>
            </div>

            <div class="header__right-info">
                <div class="header__right-info-avt"></div>
                <div class="header__right-info-dropdown">
                    <div class="header__right-info-name">
                        {{ $t("Username") }}
                    </div>
                    <div class="header__right-info-icon wrap-icon">
                        <div
                            class="header__right-info-arrow icon-arrow icon-normal-light icon-normal-light-hover"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
export default {
    name: "TheHeader",
    components: {},
    data() {
        const valueInput = localStorage.getItem("lang") || "vi";
        return {
            valueInput,
            MISAResouce,
            isOpenDropdown: false,
            optionItem: [
                {
                    text: "en",
                    isActive: false,
                },
                {
                    text: "vi",
                    isActive: true,
                },
            ],
        };
    },

    mounted() {
        window.addEventListener("click", this.handleOutsideClick);
        this.optionItem.forEach((option) => {
            if (this.valueInput.indexOf(option.text) !== -1) {
                option.isActive = true;
            } else {
                option.isActive = false;
            }
        });
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
                    this.isOpenDropdown = false;
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
         * Hiển thị dropdown option item
         * Author: KienNT (06/03/2023)
         */
        handleOpenDropdown() {
            try {
                this.$refs["iconDropdown"].classList.toggle("rorate-180");
                this.isOpenDropdown = !this.isOpenDropdown;
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
                        localStorage.setItem("lang", el.text);
                        window.location.reload();
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
@import url(../../css/layout/header.css);
</style>
