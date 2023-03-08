<template>
    <div class="content__main-paging">
        <p class="content__main-paging-left">
            {{ MISAResouce.vi.Total }}: <strong>1035</strong>
            {{ MISAResouce.vi.Record }}
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
            <div class="navbar">
                <a href="#" class="navbar__item">
                    {{ MISAResouce.vi.Previous }}
                </a>
                <a href="#" class="navbar__item active">1</a>
                <a href="#" class="navbar__item">2</a>
                <a href="#" class="navbar__item">3</a>
                <a href="#" class="navbar__item">...</a>
                <a href="#" class="navbar__item">52</a>
                <a href="#" class="navbar__item">
                    {{ MISAResouce.vi.Next }}
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "../../js/resource";
import TheOptionItem from "./TheOptionItem.vue";
export default {
    name: "ThePaging",
    data() {
        return {
            MISAResouce,
            isOpenDropdown: false,
            valueInput: `10 ${MISAResouce.vi.RecordInPage}`,
            optionItem: [
                {
                    text: 10,
                    isActive: true,
                },
                {
                    text: 20,
                    isActive: false,
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
        };
    },
    components: {
        TheOptionItem,
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
            this.$refs["iconDropdown"].classList.toggle("rorate-180");
            this.isOpenDropdown = !this.isOpenDropdown;
        },

        /**
         * handle khi click option item
         * Author: KienNT (06/03/2023)
         */
        handleClickItem(event) {
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
        },
    },
};
</script>
<style scoped>
@import url(../../css/components/paging.css);
</style>
