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
            <div class="view-fitler-text" v-if="header === 'Gender'">
                <div class="column-filter">
                    {{ $t("Filter") }} {{ filterConditon }}
                </div>

                <div class="filter-value">
                    <div
                        class="paging__record block__lang"
                        @click="handleOpenDropdown"
                        ref="dropdown"
                        style="width: 100%"
                    >
                        <div
                            class="input__wrapper input__wrapprt-lang dropdown"
                        >
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
                                v-model="keyWordSearch"
                                fdprocessedid="epqss"
                            />

                            <div
                                v-if="isOpenDropdown"
                                class="option__wrapper-lang"
                            >
                                <ul class="option__list scrollbar_customize">
                                    <MOptionItem
                                        v-for="(item, index) in optionItem"
                                        :key="index"
                                        :text="$t(item.text)"
                                        :isActive="item.isActive"
                                        @handleClickItem="handleClickItem"
                                        :isDropdownLang="true"
                                    ></MOptionItem>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="view-fitler-text" v-else-if="header === 'DateOfBirth' || header === 'posted_date' || header === 'ref_date' || header === 'total_amount'">
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
                            :contextArray="contextArrayDOB"
                            @handleClickItemCondition="handleClickItemCondition"
                            ref="TxtContextMenu"
                        ></MContextmenu>
                    </MButton>
                    <div class="icon__arrow"></div>
                </div>

                <div class="filter-value">
                    <input
                        :type="header!=='total_amount' ? 'date':'text'"
                        class="input__type input__condition"
                        :class="header==='total_amount' ? 'kindNumber':''"
                        v-model="keyWordSearch"
                        @input="()=>header==='total_amount' && filterNonNumeric()"
                        @keyup="()=> header==='total_amount' && handleKeyUp()"
                        ref="minput"
                        :disabled="
                            $t(textBtnLink) === $t('Empty') ||
                            $t(textBtnLink) === $t('NotEmpty')
                        "
                    />
                </div>
            </div>

            <div class="view-fitler-text" v-else>
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
                <div
                    class="btn btn-default"
                    @click="handleDestroyConditionFilter"
                >
                    {{ $t("Unfiltered") }}
                </div>
            </div>
            <div>
                <MButton
                    :text="$t('Filter')"
                    kind="primary"
                    className="btn-primary"
                    @click="() => handleFilter(textBtnLink, keyWordSearch)"
                ></MButton>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import MISAEnum from "@/js/enum";
export default {
    name: "MconditionFilter",
    components: {},
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

        // ref của element
        refElement: {
            type: Node,
        },

        // mảng lọc
        filterConditonArrs: {
            type: Array,
        },
    },

    data() {
        return {
            isContextMenu: false,
            textBtnLink: "Contain",
            keyWordSearch: "",
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
                    text: "StartWith",
                },

                {
                    text: "EndWith",
                },
            ],
            contextArrayDOB: [
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
                    text: "LessThan",
                },
                {
                    text: "LessThanOrEqual",
                },

                {
                    text: "GreaterThan",
                },

                {
                    text: "GreaterThanOrEqual",
                },
            ],
            filterConditonArr: [],
            isOpenDropdown: false,
            optionItem: [
                {
                    text: "LabelMale",
                    isActive: false,
                },
                {
                    text: "LabelFemale",
                    isActive: false,
                },
                {
                    text: "LabelOther",
                    isActive: false,
                },
            ],
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
        if (this.header === "DateOfBirth" || this.header === 'posted_date' || this.header === 'ref_date' || this.header === 'total_amount') {
            this.textBtnLink = "Equal";
        }
        if (this.filterConditonArrs.length > 0) {
            this.filterConditonArr = [...this.filterConditonArrs];

            this.filterConditonArr.forEach((el) => {
                if (this.header === "Gender") {
                    if (Object.keys(el)[0] === this.header) {
                        this.keyWordSearch =
                            el[Object.keys(el)[0]][Object.keys(el)[0]] ===
                                MISAEnum.Gender.Male
                                ? this.$t("LabelMale")
                                : el[Object.keys(el)[0]][Object.keys(el)[0]] ===
                                    MISAEnum.Gender.Female
                                    ? this.$t("LabelFemale")
                                    : el[Object.keys(el)[0]][Object.keys(el)[0]] ===
                                        MISAEnum.Gender.Other
                                        ? this.$t("LabelOther")
                                        : el[Object.keys(el)[0]][Object.keys(el)[0]];
                        this.textBtnLink =
                            el[Object.keys(el)[0]][
                            `${Object.keys(el)[0]}Option`
                            ];
                    }
                } else if (this.header === "DateOfBirth" || this.header === 'posted_date' || this.header === 'ref_date') {
                    if (Object.keys(el)[0] === this.header) {
                        this.keyWordSearch =
                            el[Object.keys(el)[0]][Object.keys(el)[0]];
                        this.textBtnLink =
                            el[Object.keys(el)[0]][
                            `${Object.keys(el)[0]}Option`
                            ];
                    }
                    let date = new Date(this.keyWordSearch);
                    this.keyWordSearch = moment(date).format("YYYY-DD-MM");
                } else if (this.header === 'total_amount') {
                     if (Object.keys(el)[0] === this.header) {
                        this.keyWordSearch =
                            el[Object.keys(el)[0]][Object.keys(el)[0]];
                        this.textBtnLink =
                            el[Object.keys(el)[0]][
                            `${Object.keys(el)[0]}Option`
                            ];
                    }
                    this.keyWordSearch = this.numberWithCommas(this.keyWordSearch);
                } else {
                    if (Object.keys(el)[0] === this.header) {
                        this.keyWordSearch =
                            el[Object.keys(el)[0]][Object.keys(el)[0]];
                        this.textBtnLink =
                            el[Object.keys(el)[0]][
                                `${Object.keys(el)[0]}Option`
                            ];
                    }
                }
            });
        }
    },

    mounted() {
        window.addEventListener("click", this.handleClickOutConditionFilter);
        this.optionItem.forEach((option) => {
            if (this.keyWordSearch.indexOf(this.$t(option.text)) !== -1) {
                option.isActive = true;
            } else {
                option.isActive = false;
            }
        });
    },

    watch: {
        textBtnLink: function (newValue) {
            if (
                this.$t(newValue) === this.$t("Empty") ||
                this.$t(newValue) === this.$t("NotEmpty")
            ) {
                this.keyWordSearch = "";
            }
        },
    },

    methods: {
        /**
         * Bắt sự kiện click vào lọc
         * Author: KienNT (03/05/2023)
         *  @param {textBtnLink,keyWordSearch}: tham số 1: Btn link, keyWordSearch: tìm kiếm theo điều kiện
         */
        handleFilter(textBtnLink, keyWordSearch) {
            this.handleHideConditionFilter();
            const index =
                this.filterConditonArr.length > 0
                    ? this.filterConditonArr.findIndex((item) =>
                          Object.prototype.hasOwnProperty.call(
                              item,
                              this.header
                          )
                      )
                    : -1;
            if (this.header === "Gender") {
                if (index === -1) {
                    this.filterConditonArr.push({
                        [this.header]: {
                            [`${this.header}Option`]: textBtnLink,
                            [this.header]:
                                keyWordSearch === this.$t("LabelMale")
                                    ? MISAEnum.Gender.Male
                                    : keyWordSearch === this.$t("LabelFemale")
                                    ? MISAEnum.Gender.Female
                                    : keyWordSearch === this.$t("LabelOther")
                                    ? MISAEnum.Gender.Other
                                    : keyWordSearch || "",
                        },
                    });
                } else {
                    this.filterConditonArr[index][this.header][
                        `${this.header}Option`
                    ] = textBtnLink;
                    this.filterConditonArr[index][this.header][this.header] =
                        keyWordSearch === this.$t("LabelMale")
                            ? MISAEnum.Gender.Male
                            : keyWordSearch === this.$t("LabelFemale")
                            ? MISAEnum.Gender.Female
                            : keyWordSearch === this.$t("LabelOther")
                            ? MISAEnum.Gender.Other
                            : keyWordSearch || "";
                }
            } else if (this.header === "DateOfBirth" || this.header === 'posted_date' || this.header === 'ref_date') {
                if (index === -1) {
                    this.filterConditonArr.push({
                        [this.header]: {
                            [`${this.header}Option`]: textBtnLink,
                            [this.header]: this.keyWordSearch
                                ? moment(this.keyWordSearch).format(
                                      "DD/MM/YYYY"
                                  )
                                : "",
                        },
                    });
                } else {
                    this.filterConditonArr[index][this.header][
                        `${this.header}Option`
                    ] = textBtnLink;
                    this.filterConditonArr[index][this.header][this.header] =
                        this.keyWordSearch
                            ? moment(this.keyWordSearch).format("DD/MM/YYYY")
                            : "";
                }
            } else if (this.header === 'total_amount') {
                 if (index === -1) {
                    this.filterConditonArr.push({
                        [this.header]: {
                            [`${this.header}Option`]: textBtnLink,
                            [this.header]: this.keyWordSearch
                                ? this.keyWordSearch
                                : "",
                        },
                    });
                } else {
                    this.filterConditonArr[index][this.header][
                        `${this.header}Option`
                    ] = textBtnLink;
                    this.filterConditonArr[index][this.header][this.header] =
                        this.keyWordSearch
                            ? this.keyWordSearch
                            : "";
                }
            } else {
                if (index === -1) {
                    this.filterConditonArr.push({
                        [this.header]: {
                            [`${this.header}Option`]: textBtnLink,
                            [this.header]: keyWordSearch || "",
                        },
                    });
                } else {
                    this.filterConditonArr[index][this.header][
                        `${this.header}Option`
                    ] = textBtnLink;
                    this.filterConditonArr[index][this.header][this.header] =
                        keyWordSearch || "";
                }
            }

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
         * đóng và xóa condition filter
         * Author: KienNT (04/05/2023)
         */
        handleDestroyConditionFilter() {
            this.handleHideConditionFilter();
            const index =
                this.filterConditonArr.length > 0
                    ? this.filterConditonArr.findIndex((item) =>
                          Object.prototype.hasOwnProperty.call(
                              item,
                              this.header
                          )
                      )
                    : -1;
            if (index !== -1) {
                this.filterConditonArr.splice(index, 1);
            }
            this.$emit("handleClickFilter", this.filterConditonArr);
        },

        /**
         * format từ tiền sang số
         * Author: KienNT (12/06/2023)
         */
        currencyToNumber(currency) {
            var number = currency.replace(/\./g, '');
            return parseFloat(number);
        },

        /**
         * format cho số lớn
         * Author: KienNT (12/06/2023)
         */
        handleKeyUp() {
             this.keyWordSearch = this.numberWithCommas(this.keyWordSearch);
        },

        /**
         * format cho số lớn
         * Author: KienNT (12/06/2023)
         */
         numberWithCommas(x) {
            return  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") ;
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
                const dropdown = this.$refs["dropdown"];
                let check = true;
                if (this.refElement.length > 0) {
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
                    iconContextMenu &&
                    !iconContextMenu.contains(event.target)
                ) {
                    this.isContextMenu = false;
                }

                if (dropdown && !dropdown.contains(event.target)) {
                    check = false;
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

        /**
         * Hiển thị dropdown option item
         * Author: KienNT (05/05/2023)
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
         *  handle ngăn chặn nhập chữ
         * Author: KienNT (12/06/2023)
         */
        filterNonNumeric() {
            this.keyWordSearch =
                this.keyWordSearch.replace(/[^0-9]/g, "");
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
                    if (
                        event.target.textContent.indexOf(
                            this.$t(option.text)
                        ) !== -1
                    ) {
                        option.isActive = true;
                        this.keyWordSearch = event.target.textContent;
                    } else {
                        option.isActive = false;
                    }
                });

                this.optionItem.forEach((el) => {
                    if (this.keyWordSearch.includes(this.$t(el.text))) {
                        this.keyWordSearch = this.$t(el.text);
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
@import url(../../css/components/mconditionFilter.css);
</style>
