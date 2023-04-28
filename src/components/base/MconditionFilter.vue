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
                <div class="column-filter">{{ filterConditon }}</div>
                <div class="filter-op-dropdown">
                    <MButton
                        kind="link"
                        className="link-btn btn-link"
                        :text="$t('Contain')"
                    ></MButton>
                    <div class="icon__arrow"></div>
                </div>
                <div class="filter-value">
                    <input
                        type="text"
                        class="input__type input__condition"
                        :placeholder="$t('TxtConditionFilter')"
                        v-model.lazy="keyWordSearch"
                        ref="minput"
                    />
                </div>
            </div>
        </div>
        <div class="buttons row-flex">
            <div>
                <div class="btn btn-default">
                    {{ $t("Unfiltered") }}
                </div>
            </div>
            <div>
                <MButton
                    :text="$t('Filter')"
                    kind="primary"
                    className="btn-primary"
                    :click="showPopup"
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
        /**
         * nghe sự kiện window. Nếu click ko phải là ConditionFilter
         * Author: KienNT (28/04/2023)
         *  @param {event}: là sự kiện của element hiện tại
         */
        handleClickOutConditionFilter(event) {
            try {
                const RefConditionFilter = this.$refs["RefConditionFilter"];

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
                if (
                    check &&
                    RefConditionFilter &&
                    !RefConditionFilter.contains(event.target)
                ) {
                    this.$emit("handleHideConditionFilter");
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
@import url(../../css/components/mconditionFilter.css);
</style>
