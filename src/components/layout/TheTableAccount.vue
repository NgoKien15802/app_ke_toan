<template>
    <div>
        <DxTreeList
            id="accounts"
            :data-source="accounts"
            :allow-column-resizing="true"
            column-resizing-mode="nextColumn"
            :column-min-width="50"
            :column-auto-width="true"
            :show-row-lines="true"
            :show-borders="true"
            key-expr="account_id"
            parent-id-expr="parent_id"
            :cellHintEnabled="true"
            :errorRowEnabled="false"
        >
            <DxColumn
                data-field="account_number"
                :caption="$t('AccountNumber')"
                :width="180"
            />
            <DxColumn
                data-field="account_name"
                :caption="$t('AccountName')"
                :min-width="50"
                :width="200"
            />
            <DxColumn
                data-field="account_category_kind"
                :caption="$t('Property')"
                :width="150"
            />
            <DxColumn
                data-field="account_name_english"
                :caption="$t('EnglishName')"
                :width="180"
            />
            <DxColumn
                data-field="description"
                :caption="$t('Interpret')"
                width="calc(100% - 660px)"
            />
            <DxColumn data-field="state" :caption="$t('Status')" :width="150" />
            <DxColumn :min-width="50" :caption="$t('Feature')">
                <template #functionColumn>
                    <div class="dropdown-fun text-align-center">
                        <MButton
                            kind="link"
                            className="link-btn btn-link"
                            :text="$t('Fix')"
                            :click="() => doubleClickEditText(employee)"
                        ></MButton>
                        <div
                            class="input__icon-box ml-8"
                            @click="handleClickOptionMenu($event, employee)"
                            ref="iconContextMenu"
                        >
                            <div class="icon-dropdown" ref="ContextMenu"></div>
                        </div>
                    </div>
                </template>
            </DxColumn>
        </DxTreeList>
    </div>
</template>

<script>
import { DxTreeList, DxColumn } from "devextreme-vue/tree-list";
import MISAEnum from "@/js/enum";
import axios from "axios";
import MISAResouce from "@/js/resource";
export default {
    name: "TheTableAccount",
    components: {
        DxTreeList,
        DxColumn,
    },

    props: {
        pageSizeNumber: {
            type: String,
        },
        keyWordSearch: {
            type: String,
        },
        pageCurrent: {
            type: String,
        },
    },

    data() {
        return {
            MISAResouce,
            accounts: [],
            pageSize: 20,
            pageNumber: 1,
            totalRecord: 0,
            keyWord: "",
        };
    },

    created() {
        try {
            this.loadData();
        } catch (error) {
            console.log(error);
        }
    },

    watch: {
        /**
         * Theo dõi sự thay đổi pageSizeNumber. nếu pagesize thay đổi
         * Author: KienNT (25/04/2023)
         */
        pageSizeNumber: function () {
            this.pageSize = this.pageSizeNumber;
            if (this.pageNumber == 1) {
                this.loadData();
            }
        },
        /**
         * Theo dõi sự thay đổi keyWordSearch. tìm kiếm thay đổi
         * Author: KienNT (25/04/2023)
         */
        keyWordSearch: function () {
            this.keyWord = this.keyWordSearch;
            this.pageNumber = 1;
            this.loadData();
        },

        /**
         * Theo dõi sự thay đổi pageCurrent. khi click vào btn next
         * Author: KienNT (25/04/2023)
         */

        pageCurrent: function () {
            this.pageNumber = this.pageCurrent;
            this.loadData();
        },
    },

    methods: {
        /**
         * Call API get data account
         * Author: KienNT (25/04/2023)
         */
        loadData() {
            try {
                axios
                    .get(
                        `https://localhost:7153/api/v1/Accounts/FilterTable?keyword=${this.keyWord}&pageSize=${this.pageSize}&pageNumber=${this.pageNumber}`
                    )
                    .then(this.hideShowLoading(true))
                    .then((response) => {
                        this.accounts = response?.data?.Data?.Data;
                        this.accounts = this.accounts.map((account) => ({
                            account_id: account.account_id,
                            ...account,
                            account_category_kind: this.formatProperty(
                                account.account_category_kind
                            ),
                            state: this.formatStatus(account.state),
                        }));

                        this.totalRecord = response?.data?.Data?.TotalRecord;
                        this.$emit("getTotalRecord", this.totalRecord);
                        this.hideShowLoading(false);
                    })
                    .catch((error) => {
                        console.log(error);
                        this.hideShowLoading(false);
                    });
            } catch (error) {
                console.log(error);
                this.hideShowLoading(false);
            }
        },
        /**
         * Xử lý loading gửi emit lên cha
         * Author: KienNT (25/04/2023)
         * @param (isLoading): tham số là giá trị boolean loading có hay không
         */
        hideShowLoading(isLoading) {
            this.$emit("hideShowLoading", isLoading);
        },

        /**
         * Hàm thực hiện format property
         * Author: KienNT (25/04/2023)
         *  @param (property): là số cần truyền convert sang text
         */
        formatProperty(property) {
            try {
                switch (property) {
                    case MISAEnum.Property.Debt:
                        return this.$t("Debt");
                    case MISAEnum.Property.ExcessYes:
                        return this.$t("ExcessYes");
                    case MISAEnum.Property.Hermaphrodite:
                        return this.$t("Hermaphrodite");
                    case MISAEnum.Property.Nobalance:
                        return this.$t("Nobalance");
                    default:
                        console.log("Unknown property value:", property);
                        return property;
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm thực hiện format status
         * Author: KienNT (25/04/2023)
         *  @param (status): là số cần truyền convert sang text
         */
        formatStatus(status) {
            try {
                switch (status) {
                    case MISAEnum.Status.StopUsing:
                        return this.$t("StopUsing");
                    case MISAEnum.Status.Using:
                        return this.$t("Using");
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
<style>
.dx-treelist {
    line-height: inherit;
    font-family: notosans, sans-serif;
    position: relative;
    width: 100%;
    font-size: 1.3rem;
}
.dx-treelist .dx-row > td {
    padding: 0 16px;
    max-height: var(--size-row);
    line-height: var(--size-row);
}

.dx-treelist-text-content {
    text-align: left;
}

.dx-treelist-headers {
    background-color: #e5e8ec;
    font-weight: 600;
    font-size: 1.2rem;
    color: #111;
    font-family: notosansBold;
    cursor: all-scroll;
    position: sticky;
    top: 0;
    z-index: 2;
}

tr.dx-row.dx-data-row.dx-row-lines.dx-column-lines:hover {
    background-color: #f2f2f2;
}

.dx-treelist-rowsview .dx-treelist-collapsed span::before {
    content: "\002B";
    position: absolute;
    display: block;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 76%;
    left: 6px;
    border: 1px solid #959595;
    color: #959595;
    border-radius: 3px;
    font-family: "Font Awesome 5 Free";
    padding: 5px;
    cursor: pointer;
}

.dx-treelist-rowsview tr:not(.dx-row-focused) .dx-treelist-empty-space {
    color: #959595;
    margin-right: 10px;
}

.dx-treelist-rowsview .dx-treelist-expanded span::before {
    content: "\2212";
    position: absolute;
    display: block;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 76%;
    left: 6px;
    border: 1px solid #959595;
    color: #959595;
    border-radius: 3px;
    font-family: "Font Awesome 5 Free";
    padding: 5px;
    cursor: pointer;
}
.dx-treelist-text-content.dx-text-content-alignment-right {
    float: left;
}

tr.dx-row.dx-data-row.dx-row-lines.dx-column-lines:has(.dx-treelist-collapsed) {
    font-weight: 600;
    font-size: 1.3rem;
}

tr.dx-row.dx-data-row.dx-row-lines.dx-column-lines:has(.dx-treelist-expanded) {
    font-weight: 600;
    font-size: 1.3rem;
}

.dx-state-hover {
    height: 100px;
}

.dx-scrollable-scroll.dx-state-invisible {
    display: block !important;
    background-color: rgba(0, 0, 0, 0);
    opacity: 1;
    -webkit-transition: opacity 0.5s linear 1s;
    transition: opacity 0.5s linear 1s;
}

.dx-treelist-rowsview .dx-row.dx-row-lines:first-child {
    border-top: none;
}
.dx-treelist-rowsview .dx-treelist-table .dx-row.dx-virtual-row {
    border-top: 0;
    border-bottom: 0;
    display: none;
}

.dx-scrollable-scroll-content {
    display: none;
}
.dx-treelist .dx-row-lines td {
    border-right: 1px dotted var(--boder-primary);
    border-left: none;
}

tr.dx-row.dx-column-lines.dx-header-row td:not(:last-child) {
    border-right: 1px solid var(--boder-primary);
    border-left: none;
}
.dx-treelist-headers.dx-treelist-nowrap {
    border-left: none;
    border-right: none;
}
.dx-treelist-headers.dx-treelist-nowrap {
    border-top: none;
    border-bottom: none;
}
</style>
