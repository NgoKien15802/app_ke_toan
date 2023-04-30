<template>
    <div
        class="condition-container text"
        :style="`left: ${left}px ; top: ${top}px`"
        style="position: fixed"
        ref="RefConditionFilter"
    >
        <div>
            <div class="lock">{{ $t("FixThisColumn") }}</div>
        </div>
        <div class="filter-container">
            <div class="view-fitler-text">
                <div class="column-filter">
                    {{ $t("Filter") }} {{ filterConditon }}
                </div>
                <div
                    class="filter-op-dropdown"
                    ref="iconContextMenu"
                    @click="handleClickOptionCondition"
                >
                    <MButton
                        kind="link"
                        className="link-btn btn-link"
                        :text="$t(textBtnLink)"
                    >
                        <MContextmenu
                            v-show="isContextMenu"
                            kind="conditionFilter"
                            @hideContextMenu="hideContextMenu"
                            :refElement="this.$refs.iconContextMenu"
                            :contextArray="contextArray"
                            @handleClickItemCondition="handleClickItemCondition"
                            ref="TxtContextMenu"
                        ></MContextmenu>
                    </MButton>
                    <div class="icon__arrow"></div>
                </div>
                <div class="filter-value">
                    <input
                        type="text"
                        class="input__type input__condition"
                        :placeholder="$t('TxtConditionFilter')"
                        v-model.lazy="keyWordSearch"
                        ref="minput"
                        :disabled="
                            $t(textBtnLink) === $t('Empty') ||
                            $t(textBtnLink) === $t('NotEmpty')
                        "
                    />
                </div>
            </div>
        </div>
        <div class="buttons row-flex">
            <div>
                <div class="btn btn-default" @click="handleHideConditionFilter">
                    {{ $t("Unfiltered") }}
                </div>
            </div>
            <div>
                <MButton
                    :text="$t('Filter')"
                    kind="primary"
                    className="btn-primary"
                    :click="() => handleFilter(textBtnLink, keyWordSearch)"
                ></MButton>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MconditionFilter",
    props: {
        // text lọc theo điều kiện gì
        filterConditon: {
            type: String,
        },

        // header lọc theo điều kiện gì
        header: {
            type: String,
        },

        //vị trí tọa độ y
        top: {
            type: Number,
        },
        //vị trí tọa độ x
        left: {
            type: Number,
        },

        refElement: {
            type: Node,
        },
    },

    data() {
        return {
            isContextMenu: false,
            textBtnLink: "Contain",
            contextArray: [
                {
                    text: "Empty",
                },
                {
                    text: "NotEmpty",
                },
                {
                    text: "Equal",
                },
                {
                    text: "Other",
                },
                {
                    text: "Contain",
                },
                {
                    text: "NotContain",
                },

                {
                    text: "Startwith",
                },

                {
                    text: "EndWith",
                },
            ],
            filterConditonArr: [],
        };
    },

    updated() {
        this.$nextTick(function () {
            this.$refs["minput"] && this.$refs["minput"].focus();
        });
    },

    created() {
        this.$nextTick(function () {
            this.$refs["minput"] && this.$refs["minput"].focus();
        });
    },

    mounted() {
        window.addEventListener("click", this.handleClickOutConditionFilter);
    },
    beforeUnmount() {
        window.removeEventListener("click", this.handleClickOutConditionFilter);
    },

    methods: {
        handleFilter(textBtnLink, keyWordSearch) {
            this.handleHideConditionFilter();
            // const filter = `${
            //     this.filterConditon.charAt(0).toUpperCase() +
            //     this.filterConditon.slice(1)
            // } ${this.$t(textBtnLink).toLocaleLowerCase()} ${
            //     keyWordSearch ? `"${keyWordSearch}"` : ""
            // } `;

            this.filterConditonArr.push({
                [this.header]: {
                    option: textBtnLink,
                    filterInput: keyWordSearch || "",
                },
            });

            this.$emit("handleClickFilter", this.filterConditonArr);
        },
        /**
         * Bắt sự kiện click vào option của ContextMenu
         * Author: KienNT (28/04/2023)
         *  @param {text}: text để set lại cho condition filter
         */
        handleClickItemCondition(text) {
            this.textBtnLink = text;
        },
        /**
         * nghe sự kiện window. Nếu click ko phải là ConditionFilter
         * Author: KienNT (28/04/2023)
         *  @param {event}: là sự kiện của element hiện tại
         */
        handleClickOutConditionFilter(event) {
            try {
                const RefConditionFilter = this.$refs["RefConditionFilter"];
                const iconContextMenu = this.$refs["iconContextMenu"];
                let check = true;
                if (this.refElement.length) {
                    for (
                        let index = 0;
                        index < this.refElement.length;
                        index++
                    ) {
                        const element = this.refElement[index];
                        if (element.contains(event.target)) {
                            check = false;
                        }
                    }
                } else {
                    if (this.refElement.contains(event.target)) {
                        check = false;
                    }
                }

                if (check && !iconContextMenu.contains(event.target)) {
                    this.isContextMenu = false;
                }

                if (
                    check &&
                    RefConditionFilter &&
                    !RefConditionFilter.contains(event.target)
                ) {
                    this.handleHideConditionFilter();
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm lấy toại độ sau đó set tọa độ cho contextmenu để hiển thị
         * Author: KienNT (28/04/2023)
         *  @param (event): tham số 1 là event
         */
        handleClickOptionCondition() {
            try {
                this.isContextMenu = !this.isContextMenu;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * đóng condition filter
         * Author: KienNT (28/04/2023)
         */
        handleHideConditionFilter() {
            this.$emit("handleHideConditionFilter");
        },

        /**
         * Hàm ẩn contextmenu khi click ra ngoài element
         * Author: KienNT (28/04/2023)
         */
        hideContextMenu() {
            this.isContextMenu = !this.isContextMenu;
        },
    },
};
</script>

<style scoped>
@import url(../../css/components/mconditionFilter.css);
</style>
