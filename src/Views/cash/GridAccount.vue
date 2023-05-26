<template>
    <table id="tbEmployeeList" class="employee" ref="gridTable">
        <thead>
            <draggable tag="tr" v-model="headers" class="table__field">
                <th
                    v-for="header in headers"
                    :key="header"
                    :class="[
                        header === 'account_number' ? 'min-w160' : '',
                        header === 'account_name' ? 'min-w250' : '',
                        header === 'account_category_kind' ? 'min-w160' : '',
                        header === 'account_name_english' ? 'min-w350' : '',
                        header === 'description' ? 'min-w200' : '',
                        header === 'state' ? 'min-w160' : '',
                        header === 'feature' ? 'min-w120' : '',
                    ]"
                    ref="thElement"
                >
                    <template v-if="header === 'feature'">
                        <span class="text-align-center"
                            >{{ $t("feature") }}
                        </span>
                    </template>
                    <template v-else>
                        <span style="display: flex">
                            <span class="text-align-left">{{
                                $t(header)
                            }}</span>
                            <div
                                class="mi-16 icon-head mi-header-option"
                                @click="
                                    handleShowConditionFilter($event, header)
                                "
                                ref="iconConditionFilter"
                            ></div>
                        </span>
                    </template>
                </th>
            </draggable>
        </thead>
        <tbody>
            <MSkeletonTable
                v-if="isShowSkeleton"
                :dataList="accounts"
            ></MSkeletonTable>

            <tr
                v-else
                v-for="(account, index) in accounts"
                v-show="account?.isShow"
                :key="index"
                @dblclick="($event) => doubleClickRow($event, account)"
                ref="trElementRef"
                :class="account?.is_parent ? 'row-parent' : ''"
            >
                <template v-for="header in headers" :key="header">
                    <td
                        v-if="header === 'feature'"
                        class="dropdown-fun text-align-center min-w120"
                    >
                        <MButton
                            kind="link"
                            className="link-btn btn-link"
                            :text="$t('Fix')"
                            :click="() => doubleClickEditText(account)"
                        ></MButton>
                        <div
                            class="input__icon-box ml-8"
                            @click="handleClickOptionMenu($event, account)"
                            ref="iconContextMenu"
                        >
                            <div class="icon-dropdown" ref="ContextMenu"></div>
                        </div>
                    </td>

                    <MTooltip
                        v-else-if="header === 'account_number'"
                        kind="data_parent"
                        :className="[
                            header === 'account_number' ? 'min-w160' : '',
                        ]"
                        :paddingLeft="account.isClassML"
                        :grade="account?.grade"
                        :text="account[header] || ''"
                        :subtext="account[header] || ''"
                        ><div
                            v-if="account.is_parent"
                            style="cursor: pointer"
                            @click="
                                ($event) => {
                                    account.isExpand = !account.isExpand;
                                    handleClickParent(
                                        account.account_id,
                                        account?.grade,
                                        account?.isShow,
                                        account.isExpand,
                                        $event
                                    );
                                }
                            "
                            class="mi-16 mr-7"
                            :class="
                                account.is_parent
                                    ? account.isExpand
                                        ? 'mr-12 mi-tree-expand--small'
                                        : 'mr-12 mi-tree-collapse--small'
                                    : ''
                            "
                        ></div
                    ></MTooltip>

                    <MTooltip
                        v-else
                        kind="data"
                        :className="[
                            header === 'account_name' ? 'min-w250' : '',
                            header === 'account_category_kind'
                                ? 'min-w160'
                                : '',
                            header === 'account_name_english' ? 'min-w350' : '',
                            header === 'description' ? 'min-w200' : '',
                            header === 'state' ? 'min-w160' : '',
                        ]"
                        :text="account[header] || ''"
                        :subtext="account[header] || ''"
                    ></MTooltip>
                </template>
            </tr>
        </tbody>
    </table>
</template>

<script>
import MISAEnum from "@/js/enum";
import axios from "axios";
import { VueDraggableNext } from "vue-draggable-next";
import MISAResouce from "@/js/resource";
export default {
    name: "GridAccount",
    components: { draggable: VueDraggableNext },

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
        isExpandAccount: {
            type: Boolean,
        },
        isReload: {
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
            isShowSkeleton: false,
            headers: [
                "account_number",
                "account_name",
                "account_category_kind",
                "account_name_english",
                "description",
                "state",
                "feature",
            ],
            cloneAccounts: [],
        };
    },

    created() {
        try {
            this.accounts = new Array(this.pageSize).fill(0);
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

        isExpandAccount: function (newValue) {
            if (newValue) {
                this.accounts.forEach((el) => {
                    el.isShow = newValue;
                    el.isExpand = !newValue;
                    el.isClassML = 140;
                });
            } else {
                this.accounts.forEach((el) => {
                    if (el.grade != 1) {
                        el.isShow = newValue;
                        el.isExpand = !newValue;
                    } else {
                        el.isExpand = !newValue;
                    }
                });
            }
        },

        /**
         * Theo dõi sự thay đổi isReload: nếu thay đổi là true thì reload lại trang
         * Author: KienNT (17/03/2023)
         */
        isReload: function (newValue) {
            if (newValue) {
                this.loadData();
                this.$emit("setIsReLoad");
            }
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
                    // .then(this.hideShowLoading(true))
                    .then((this.isShowSkeleton = true))
                    .then((response) => {
                        this.accounts = response?.data?.Data?.Data;

                        this.accounts = this.accounts.map((account) => {
                            account.isShow = account?.grade == 1;
                            account.isClassML = 0;
                            account.isExpand = true;
                            account.state = this.formatStatus(account.state);
                            account.account_category_kind = this.formatProperty(
                                account.account_category_kind
                            );
                            return account;
                        });

                        this.cloneAccounts = this.accounts;

                        this.totalRecord = response?.data?.Data?.TotalRecord;
                        this.$emit("getTotalRecord", this.totalRecord);
                        // this.hideShowLoading(false);
                        this.isShowSkeleton = false;
                    })
                    .catch((error) => {
                        console.log(error);
                        // this.hideShowLoading(false);
                        this.isShowSkeleton = false;
                    });
            } catch (error) {
                console.log(error);
                this.hideShowLoading(false);
            }
        },

        /**
         * Thực hiện ẩn các danh sách con cháu,...
         * Author: KienNT (26/05/2023)
         */
        setHideAndShow(account_id) {
            this.accounts.forEach((el) => {
                if (el.parent_id === account_id) {
                    el.isShow = false;
                    this.setHideAndShow(el.account_id);
                }
            });
        },

        /**
         * Thực hiện click vào icon expand and collapse
         * Author: KienNT (26/05/2023)
         */
        handleClickParent(account_id, grade, isShow, isExpand, event = null) {
            if (isExpand == true) {
                this.accounts.forEach((el) => {
                    if (
                        el.parent_id === account_id &&
                        el?.grade === grade + 1 &&
                        el.isShow == true
                    ) {
                        el.isShow = isExpand;
                        this.setHideAndShow(el.account_id);
                    }
                });
            }
            this.accounts.forEach((el) => {
                if (
                    el.parent_id === account_id &&
                    el?.grade === grade + 1 &&
                    el.isShow == false
                ) {
                    el.isShow = isShow;
                    el.isExpand = true;
                    el.isClassML = event
                        ? event.target.parentNode.clientWidth
                        : 0;
                } else if (
                    el.parent_id === account_id &&
                    el?.grade === grade + 1 &&
                    el.isShow == true
                ) {
                    el.isShow = !isShow;
                    el.isClassML = 0;
                }
            });
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
<style scoped>
@import url(../../css/components/table.css);
</style>
