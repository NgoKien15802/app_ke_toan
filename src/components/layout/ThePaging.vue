<template>
    <div class="content__main-paging">
        <p class="content__main-paging-left">
            {{ $t("Total") }}: <strong>{{ totalRecord }}</strong>
        </p>
        <div class="content__main-paging-right">
            <div
                class="paging__record"
                @click="handleOpenDropdown"
                ref="dropdown"
            >
                <div class="input__wrapper dropdown">
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
                        class="input__type dropdown-input paging-input"
                        v-model="valueInput"
                        fdprocessedid="epqss"
                    />

                    <div v-if="isOpenDropdown" class="option__wrapper">
                        <ul class="option__list scrollbar_customize">
                            <TheOptionItem
                                v-for="(item, index) in optionItem"
                                :key="index"
                                :text="item.text"
                                :isActive="item.isActive"
                                @handleClickItem="handleClickItem"
                            ></TheOptionItem>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="paging__record-footer">
                <div>
                    {{ offset + 1 }} - {{ offset + pageIndex }}
                    {{ $t("Record") }}
                </div>
                <div
                    class="wrap-icon btn-icon"
                    @click="handleClickPrev"
                    :class="isDisabledClickPrev ? 'disabled' : ''"
                >
                    <div class="paging__record-footer-iconLeft"></div>
                </div>
                <div
                    class="wrap-icon btn-icon"
                    @click="handleClickNext"
                    :class="offset + pageIndex > totalRecord ? 'disabled' : ''"
                >
                    <div class="paging__record-footer-iconRight"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "../../js/resource";
import TheOptionItem from "./TheOptionItem.vue";
export default {
    name: "ThePaging",

    props: {
        totalRecord: {
            type: String,
        },
        pageCurrent: {
            type: String,
        },
        isDisabledClickPrev: {
            type: Boolean,
        },
    },
    data() {
        return {
            MISAResouce,
            isOpenDropdown: false,
            valueInput: `20 ${this.$t("RecordInPage")}`,
            optionItem: [
                {
                    text: 10,
                    isActive: false,
                },
                {
                    text: 20,
                    isActive: true,
                },
                {
                    text: 30,
                    isActive: false,
                },
                {
                    text: 40,
                    isActive: false,
                },
                {
                    text: 50,
                    isActive: false,
                },
            ],
            pageIndex: 20,
            pageNumber: 1,
            offset: 0,
        };
    },
    components: {
        TheOptionItem,
    },
    watch: {
        pageCurrent: function () {
            this.pageNumber = this.pageCurrent;
            this.offset = (this.pageNumber - 1) * this.pageIndex;
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
                        this.pageIndex = el.text;
                        this.$emit("handleClickOptionItem", this.pageIndex);
                        this.$emit("setIsDisabledClickPrev");
                    }
                });
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * handle khi click vào icon previous
         * Author: KienNT (17/03/2023)
         */
        handleClickPrev() {
            this.$emit("handleClickPrev");
        },

        /**
         * handle khi click vào icon next
         * Author: KienNT (17/03/2023)
         */
        handleClickNext() {
            this.$emit("handleClickNext");
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/paging.css);
</style>
