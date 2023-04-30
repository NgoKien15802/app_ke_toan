<template>
    <div
        class="ms-component con-ms-popup ms-popup-is-right popup-is-show"
        style=""
    >
        <div class="ms-popup--background"></div>
        <div
            class="ms-popup ms-popup-content ms-popup-is-right"
            style="min-width: 800px; max-width: 800px; width: 800px"
        >
            <span
                class="popup-shortkey"
                shortkey="Close|Save|SaveAndAdd|Help|Print|DeleteCacheAdvance"
            ></span>
            <header class="ms-popup--header">
                <div class="ms-popup--title ms-popup-title-right">
                    <div class="header-popup flex">
                        <MHeading
                            :text="$t('TooltipCustomizeInterface')"
                        ></MHeading>
                    </div>
                </div>
                <div class="ms-popup-close">
                    <div class="form__header-question wrap-icon tooltip">
                        <div class="form__header-icon-question">
                            <MTooltip
                                kind="help"
                                :subtext="$t('TooltipHelp')"
                                style="top: 163%"
                            ></MTooltip>
                        </div>
                    </div>

                    <div
                        class="wrap-icon confirm__close-popup"
                        @click="closePopupSetting"
                    >
                        <div class="icon-close tooltip">
                            <MTooltip
                                kind="close"
                                :subtext="$t('TooltipClose')"
                                style="top: 163%"
                            ></MTooltip>
                        </div>
                    </div>
                </div>
            </header>
            <div class="ms-popup--header">
                <div class="flex popup-util" style="">
                    <div class="content__main-filter">
                        <div class="input__wrapper">
                            <button class="input__icon search">
                                <div class="input__icon-search"></div>
                            </button>
                            <input
                                type="text"
                                class="input__type input__search"
                                :placeholder="$t('TxtSearch')"
                                v-model.lazy="keyWordSearch"
                            />
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div class="show-layout-info text-right">
                            {{ $t("FixColumn") }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="ms-popup--content ms-popup-content-right">
                <div style="">
                    <div class="popup-data">
                        <div class="grid flex-grow">
                            <div
                                class="gridComponent content-height-100-percent"
                            >
                                <div class="content-height-100-percent">
                                    <div class="input-focus-container">
                                        <input
                                            class="input-focus before"
                                            fdprocessedid="hgwp3"
                                        />
                                    </div>
                                    <div
                                        class="ms-component ms-grid-editable-con content-height-100-percent"
                                    >
                                        <header
                                            class="header-table ms-table--header"
                                        ></header>
                                        <div
                                            class="con-tablex content-height-100-percent"
                                        >
                                            <div
                                                class="border-color content-height-100-percent"
                                            >
                                                <div
                                                    class="table-scroll dynamic-table"
                                                    style="
                                                        min-height: 0px;
                                                        max-height: none;
                                                        overflow: unset;
                                                    "
                                                >
                                                    <table
                                                        class="ms-table"
                                                        style="
                                                            min-width: calc(
                                                                100% + 0px
                                                            );
                                                        "
                                                    >
                                                        <thead
                                                            class="ms-table--thead"
                                                        >
                                                            <tr>
                                                                <th
                                                                    class="check-multiple-columns drag-col drag-col-th"
                                                                    style="
                                                                        top: 0px;
                                                                    "
                                                                ></th>

                                                                <th
                                                                    ms-field="visible"
                                                                    colspan="1"
                                                                    rowspan="1"
                                                                    title="Hiển thị"
                                                                    class="dynamic-header col-0 col p-0"
                                                                    style="
                                                                        min-width: 38px;
                                                                        width: 38px;
                                                                        top: 0px;
                                                                    "
                                                                >
                                                                    <MCheckbox
                                                                        v-model="
                                                                            selectedAll
                                                                        "
                                                                        @handleCheckbox="
                                                                            handleCheckboxAll
                                                                        "
                                                                        :initValue="
                                                                            selectedAll
                                                                        "
                                                                    ></MCheckbox>
                                                                </th>
                                                                <th
                                                                    ms-field="definition"
                                                                    colspan="1"
                                                                    rowspan="1"
                                                                    title="Tên cột dữ liệu"
                                                                    class="dynamic-header col-0 col p-0"
                                                                    style="
                                                                        min-width: 200px;
                                                                        top: 0px;
                                                                    "
                                                                >
                                                                    {{
                                                                        $t(
                                                                            "DataColumnName"
                                                                        )
                                                                    }}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody
                                                            class="dis-contents"
                                                        >
                                                            <tr
                                                                class="tr-values vs-table--tr tr-table-state-null selected"
                                                                v-for="(
                                                                    column,
                                                                    index
                                                                ) in columns"
                                                                :key="index"
                                                            >
                                                                <td
                                                                    class="td ms-table--td draggable drag-col drag-col-td"
                                                                >
                                                                    <div
                                                                        class="mi mi-16 block-center"
                                                                    >
                                                                        <div
                                                                            class="mi-drag-grid"
                                                                        ></div>
                                                                    </div>
                                                                </td>

                                                                <td
                                                                    class="td ms-table--td dynamic-column border-left-none"
                                                                >
                                                                    <MCheckbox
                                                                        v-model="
                                                                            column.isSelected
                                                                        "
                                                                        :initValue="
                                                                            column.isSelected
                                                                        "
                                                                        @handleCheckbox="
                                                                            handleCheckbox(
                                                                                $event,
                                                                                column.nameColumn
                                                                            )
                                                                        "
                                                                        ref="checkbox"
                                                                    ></MCheckbox>
                                                                </td>
                                                                <td
                                                                    class="td ms-table--td dynamic-column border-left-none"
                                                                >
                                                                    {{
                                                                        $t(
                                                                            column.nameColumn
                                                                        )
                                                                    }}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-focus-container">
                                        <input class="input-focus after" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="layout-setting-btn">
                            <div class="show-more">
                                <span class="show-more-btn">{{
                                    $t("ShowMore")
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="popup__form-footer"
                style="border-top: 4px solid #f4f5f8"
            >
                <div class="popup__form-footer-left">
                    <MButton
                        class="btn btn-default close__add-employee"
                        tabindex="19"
                        :text="$t('BtnDestroy')"
                        :click="closePopupSetting"
                        ref="btnDestroy"
                    >
                    </MButton>
                </div>
                <div class="popup__form-footer-right">
                    <div>
                        <MButton
                            class="btn btn-default close__add-employee"
                            tabindex="19"
                            :text="$t('ImplicitSampling')"
                            :click="destroyPopup"
                            ref="btnImplicitSampling"
                        >
                        </MButton>
                    </div>
                    <div>
                        <MButton
                            class="btn btn-primary close__add-employee tooltip"
                            tabindex="18"
                            :text="$t('BtnSave')"
                            :click="btnSave"
                            ref="btnSave"
                        >
                        </MButton>
                    </div>
                </div>
            </div>
            <div class="resize flex is-full-screen-false">
                <div class="mi mi-16 mi-chevron-left"></div>
            </div>
            <div class="ms-popup--extend-part"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheSettingUI",
    props: {
        selectedArrRecv: {
            type: Array,
        },
    },
    data() {
        return {
            selectedAll: false,
            selectedArr: [],
            columns: [
                {
                    isSelected: false,
                    nameColumn: "EmployeeCode",
                },
                {
                    isSelected: false,
                    nameColumn: "FullName",
                },
                {
                    isSelected: false,
                    nameColumn: "Gender",
                },
                {
                    isSelected: false,
                    nameColumn: "DateOfBirth",
                },
                {
                    isSelected: false,
                    nameColumn: "IdentityNumber",
                },
                {
                    isSelected: false,
                    nameColumn: "PositionName",
                },
                {
                    isSelected: false,
                    nameColumn: "DepartmentName",
                },

                {
                    isSelected: false,
                    nameColumn: "BankAccount",
                },
                {
                    isSelected: false,
                    nameColumn: "BankName",
                },
                {
                    isSelected: false,
                    nameColumn: "BankBranch",
                },
            ],
        };
    },
    mounted() {
        window.addEventListener("keydown", this.handlePressKeyShort);
    },
    beforeUnmount() {
        window.removeEventListener("keydown", this.handlePressKeyShort);
    },
    created() {
        this.selectedArr = this.selectedArrRecv;
        if (this.selectedArr && this.selectedArr.length > 0) {
            this.columns.forEach((el) => {
                for (let index = 0; index < this.selectedArr.length; index++) {
                    const oldElement = this.selectedArr[index];
                    if (
                        el.nameColumn === oldElement &&
                        el.isSelected === false
                    ) {
                        el.isSelected = true;
                        break;
                    }
                }
            });
        }

        if (
            this.columns.length > 0 &&
            this.columns.every((el) => el.isSelected === true)
        ) {
            this.selectedAll = true;
        } else {
            this.selectedAll = false;
        }
    },
    methods: {
        /**
         *  handle khi nhấn phím tắt
         * Author: KienNT (30/04/2023)
         * @param (event): là event
         */
        handlePressKeyShort(event) {
            // khi nhấn phím esc thì đóng form
            if (event.key === "Escape" || event.keyCode === 27) {
                this.$emit("closePopupSetting");
            }
        },

        /**
         *  handle ẩn popup setting
         * Author: KienNT (30/04/2023)
         */
        closePopupSetting() {
            this.$emit("closePopupSetting");
        },

        /**
         * Xử lý khi click vào select item
         * Author: KienNT (30/04/2023)
         *   @param (event): là event
         */
        handleCheckbox(event, nameColumn) {
            const index =
                this.selectedArr && this.selectedArr.indexOf(nameColumn);
            if (!event.target.checked) {
                this.selectedAll = event.target.checked;
                if (index !== -1) {
                    this.selectedArr.splice(index, 1);
                }
            } else {
                if (index === -1) {
                    this.selectedArr.push(nameColumn);
                }
            }
            this.$emit("handleSavaSelected", this.selectedArr);
            const filterSelected =
                this.selectedArr &&
                this.columns.filter((item) =>
                    this.selectedArr.includes(item.nameColumn)
                );
            if (
                filterSelected &&
                filterSelected.length >= this.columns.length
            ) {
                this.selectedAll = true;
            } else {
                this.selectedAll = false;
            }
        },

        /**
         * Xử lý khi click vào select all
         * Author: KienNT (30/04/2023)
         *  @param (event): là event
         */
        handleCheckboxAll(event) {
            try {
                if (event.target.checked) {
                    this.columns.forEach((el) => {
                        const index = this.selectedArr.indexOf(el.nameColumn);
                        if (index === -1) {
                            this.selectedArr.push(el.nameColumn);
                        }
                    });
                } else {
                    const filterSelected = this.columns.filter(
                        (el) => el.isSelected === true
                    );
                    const cloneFilterSelected = filterSelected.map(
                        (el) => el.nameColumn
                    );
                    this.selectedArr = this.selectedArr.filter(
                        (item) => !cloneFilterSelected.includes(item)
                    );
                }
                this.$emit("handleSavaSelected", this.selectedArr);
                this.columns = this.columns.map((x) => {
                    x.isSelected = event.target.checked;
                    return x;
                });
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Xử lý khi click vào btn cất
         * Author: KienNT (30/04/2023)
         */
        btnSave() {
            this.$emit("handleClickSavaSelected", this.selectedArr);
        },
    },
};
</script>

<style scoped>
@import url(../../css/layout/settingUI.css);
</style>
