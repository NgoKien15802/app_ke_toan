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
                        header === 'account_name_english' ? 'min-200' : '',
                        header === 'description' ? 'min-w350' : '',
                        header === 'state' ? 'min-w100' : '',
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
                            <span class="text-align-left text-only-line">{{
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
                :columnCount="headers"
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
                            :click="
                                () => doubleClickEditText(account, accounts)
                            "
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
                        ><div>
                            <div
                                v-if="account.is_parent"
                                style="cursor: pointer"
                                @click="
                                    () => {
                                        account.isExpand = !account.isExpand;
                                        handleClickParent(
                                            account.account_id,
                                            account?.grade,
                                            account?.isShow,
                                            account.isExpand
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
                            ></div>
                            <div
                                v-else
                                style="
                                    cursor: pointer;
                                    background-color: transparent;
                                "
                                class="mi-16 mr-7"
                                :class="
                                    account.is_parent
                                        ? account.isExpand
                                            ? 'mr-12 mi-tree-expand--small'
                                            : 'mr-12 mi-tree-collapse--small'
                                        : ''
                                "
                            ></div>
                        </div>
                    </MTooltip>

                    <MTooltip
                        v-else
                        kind="data"
                        :className="[
                            header === 'account_name' ? 'min-w250' : '',
                            header === 'account_category_kind'
                                ? 'min-w160'
                                : '',
                            header === 'account_name_english' ? 'min-200' : '',
                            header === 'description' ? 'min-w350' : '',
                            header === 'state' ? 'min-w160' : '',
                        ]"
                        :text="account[header] || ''"
                        :subtext="account[header] || ''"
                    ></MTooltip>
                </template>
            </tr>
        </tbody>
    </table>
    <MNotData v-if="accounts.length <= 0 && !isShowSkeleton"></MNotData>

    <MContextmenu
        v-if="isContextMenu"
        :left="leftContextMenu"
        :top="topContextMenu"
        @hideContextMenu="hideContextMenu"
        :employeeIdSelected="account_id_delete"
        :state="stateAccount"
        :misaCodeId="misaCodeId"
        :is_parent="is_parent"
        :refElement="this.$refs.iconContextMenu"
        kind="contextAccount"
        @hideShowLoading="hideShowLoading"
        @handleDeleteRow="handleDeleteRow"
        @handleDuplicateAccount="handleDuplicateAccount"
        @handleUpdateState="handleUpdateState"
    ></MContextmenu>

    <MDialog
        v-if="isDialogError || isDialogWarning || isDialogDeleteMul"
        :iconClass="
            isDialogError ? 'dialog__icon-error' : 'dialog__icon-warning'
        "
        :title="
            isDialogError ? $t('DialogNotifyErrorDelete') : $t('DialogWarning')
        "
        :message="
            isDialogWarning
                ? !isUpdateState
                    ? $t('MessageWarningAccount') +
                      '<' +
                      account_number_delete +
                      '> ' +
                      $t('TxtNo') +
                      '?'
                    : $t('MessageUpdateAccount')
                : isDialogError
                ? !isToastWarningNoUpdateState
                    ? $t('MessageErrorDeleteAccount')
                    : '<' +
                      parent_number +
                      '> ' +
                      $t('MessageErrorNoUpdateState') +
                      '<' +
                      account_number_delete +
                      '> '
                : $t('MessageWarningMul') + ' ' + $t('TxtNo') + '?'
        "
        :BtnWarningNo="!isDialogError && $t('BtnDestroyDialog')"
        :textButton="isDialogError ? $t('BtnClose') : $t('BtnYes')"
        @onBtnWarningNo="onBtnWarningNo(isUpdateState)"
        @hideShowDialogError="hideShowDialogError"
        @onBtnWarningYes="
            onBtnWarningYes(
                isDialogWarning
                    ? !isUpdateState
                        ? 'isDialogWarning'
                        : 'isDialogUpdateState'
                    : 'isDialogDeleteMul'
            )
        "
        :kind="isDialogError ? 'error' : 'warning'"
    ></MDialog>
</template>

<script>
import MISAEnum from "@/js/enum";
import axios from "axios";
import { VueDraggableNext } from "vue-draggable-next";
import MISAResouce from "@/js/resource";
export default {
    name: "TheTableAccount",
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
        checkReload: {
            type: Boolean,
        },
        isReloadAdd: {
            type: Boolean,
        },
    },

    data() {
        return {
            MISAResouce,
            accounts: [],
            isContextMenu: false,
            pageSize: 5,
            pageNumber: 1,
            totalRecord: 0,
            totalRecordParent: 0,
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
            isUpdateState: false,
            modeListAccount: "",
            isCallExpand: false,
            totalRecordParentInPage: 0,
            cloneAccountExpand: [],
            cloneAccountCollapse: [],
            leftContextMenu: "",
            topContextMenu: "",
            stateAccount: 0,
            misaCodeId: "",
            account_id_delete: "",
            is_parent: false,
            account_number_delete: "",
            isDialogWarning: false,
            isDialogError: false,
            isToastWarningNoUpdateState: false,
            parent_id: "",
            parent_number: "",
        };
    },

    created() {
        try {
            this.accounts = new Array(this.pageSize).fill(0);
            this.isCallExpand = false;
            this.loadData();
        } catch (error) {
            console.log(error);
        }
    },

    watch: {
        /**
         * Theo dõi sự thay đổi pageSizeNumber. nếu pagesize thay đổi
         * Author: KienNT (26/05/2023)
         */
        pageSizeNumber: function () {
            this.pageSize = this.pageSizeNumber;
            if (this.pageNumber == 1) {
                this.loadData();
            }
            this.isCallExpand = false;
        },
        /**
         * Theo dõi sự thay đổi keyWordSearch. tìm kiếm thay đổi
         * Author: KienNT (26/05/2023)
         */
        keyWordSearch: function () {
            this.keyWord = this.keyWordSearch;
            this.pageNumber = 1;
            if (this.keyWord === "") {
                this.isCallExpand = false;
                this.cloneAccountCollapse = [];
            } else {
                this.isCallExpand = true;
            }
            this.loadData();
        },

        /**
         * Theo dõi sự thay đổi pageCurrent. khi click vào btn next
         * Author: KienNT (26/05/2023)
         */

        pageCurrent: function () {
            this.pageNumber = this.pageCurrent;
            this.loadData();
            this.isCallExpand = false;
        },

        isExpandAccount: function (newValue) {
            if (newValue) {
                this.isCallExpand = newValue;

                if (
                    this.cloneAccountCollapse.length !=
                    this.cloneAccountExpand.length
                ) {
                    this.loadData();
                } else {
                    this.modeListAccount = MISAEnum.ModeListAccount.Expand;
                }
            } else {
                this.isCallExpand = newValue;
                this.modeListAccount = MISAEnum.ModeListAccount.Collapse;
                if (this.checkReload) {
                    this.cloneAccountCollapse = [];
                    this.$emit("setCheckReLoad");
                } else if (this.keyWord !== "") {
                    this.cloneAccountCollapse = this.accounts;
                }
            }
        },

        modeListAccount: function (newValue) {
            if (newValue === MISAEnum.ModeListAccount.Expand) {
                this.accounts.forEach((el) => {
                    el.isShow = true;
                    el.isExpand = false;
                    el.isClassML = el.is_parent
                        ? MISAEnum.SpaceWithParent.IsParent
                        : MISAEnum.SpaceWithParent.IsNotParent;
                });
            } else {
                this.accounts.forEach((el) => {
                    if (el.grade != 1) {
                        el.isShow = false;
                        el.isExpand = true;
                    } else {
                        el.isExpand = true;
                    }
                });
            }
        },

        /**
         * Theo dõi sự thay đổi isReload: nếu thay đổi là true thì reload lại trang
         * Author: KienNT (26/05/2023)
         */
        isReload: function (newValue) {
            if (newValue) {
                this.isCallExpand = false;
                this.loadData();
                this.$emit("setIsReLoad");
            } else {
                this.cloneAccountCollapse = [];
            }
        },

        isReloadAdd: function (newValue) {
            if (newValue) {
                this.loadData();
                this.$emit("setIsReLoadAdd");
            } else {
                this.cloneAccountCollapse = [];
            }
        },
    },

    methods: {
        /**
         * Call API get data account
         * Author: KienNT (26/05/2023)
         */
        loadData() {
            try {
                axios
                    .get(
                        `https://localhost:7153/api/v1/Accounts/FilterTable?keyword=${this.keyWord}&pageSize=${this.pageSize}&pageNumber=${this.pageNumber}&isExpand=${this.isCallExpand}`
                    )
                    // .then(this.hideShowLoading(true))
                    .then((this.isShowSkeleton = true))
                    .then((response) => {
                        this.accounts = response?.data?.Data?.Data;
                        if (this.isCallExpand) {
                            this.accounts = this.accounts.map((account) => {
                                account.isShow = true;
                                account.isClassML = account.is_parent
                                    ? MISAEnum.SpaceWithParent.IsParent
                                    : MISAEnum.SpaceWithParent.IsNotParent;
                                account.isExpand = false;
                                account.state = this.formatStatus(
                                    account.state
                                );
                                account.account_category_kind =
                                    this.formatProperty(
                                        account.account_category_kind
                                    );
                                return account;
                            });
                            this.cloneAccountExpand = this.accounts;
                        } else {
                            this.accounts = this.accounts.map((account) => {
                                account.isShow = account?.grade == 1;
                                account.isClassML = 0;
                                account.isExpand = true;
                                account.state = this.formatStatus(
                                    account.state
                                );
                                account.account_category_kind =
                                    this.formatProperty(
                                        account.account_category_kind
                                    );
                                return account;
                            });
                            this.totalRecordParentInPage = this.accounts.length;
                            this.cloneAccountExpand = this.accounts;
                        }

                        this.cloneAccounts = this.accounts;

                        if (this.isCallExpand) {
                            this.modeListAccount =
                                MISAEnum.ModeListAccount.Expand;
                            this.$emit("setModeAccountList", true);
                            this.cloneAccountCollapse = this.accounts;
                        } else {
                            this.modeListAccount =
                                MISAEnum.ModeListAccount.Collapse;
                            this.$emit("setModeAccountList", false);
                        }

                        this.totalRecord = response?.data?.Data?.TotalRecord;
                        this.totalRecordParent =
                            response?.data?.Data?.TotalRecordParent;
                        this.$emit(
                            "getTotalRecord",
                            this.totalRecord,
                            this.totalRecordParent
                        );
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
         * Hàm gửi emit lên cha để lấy id account, TH double click
         * Author: KienNT (29/05/2023)
         *  @param (account): Tham số là object chứa thông tin nhân viên
         */
        doubleClickRow(event, account) {
            // Bỏ handleClickRow với icon ContextMenu khi db click
            const arrIconContextMenu = this.$refs["iconContextMenu"];
            const iconContextMenu = this.$refs["ContextMenu"];
            for (let index = 0; index < arrIconContextMenu.length; index++) {
                if (
                    !event.target.isEqualNode(arrIconContextMenu[index]) &&
                    !event.target.isEqualNode(iconContextMenu[index])
                ) {
                    this.$emit("onDoubleClick", account, this.accounts);
                }
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
        handleClickParent(account_id, grade, isShow, isExpand) {
            let check = true;
            this.cloneAccounts.forEach((el) => {
                if (el.parent_id === account_id) {
                    check = false;
                }
            });
            if (check) {
                this.getRecordChildren(account_id);
            } else {
                if (isExpand == true) {
                    this.accounts.forEach((el) => {
                        if (
                            el.parent_id === account_id &&
                            el?.grade === grade + 1 &&
                            el.isShow == true
                        ) {
                            el.isShow = false;
                            this.setHideAndShow(el.account_id);
                        }
                    });
                } else {
                    this.accounts.forEach((el) => {
                        if (
                            el.parent_id === account_id &&
                            el?.grade === grade + 1 &&
                            el.isShow == false
                        ) {
                            el.isShow = true;
                            el.isExpand = true;
                            if (this.isCallExpand) {
                                el.isClassML = el.is_parent
                                    ? MISAEnum.SpaceWithParent.IsParent
                                    : MISAEnum.SpaceWithParent.IsNotParent;
                            }
                        } else if (
                            el.parent_id === account_id &&
                            el?.grade === grade + 1 &&
                            el.isShow == true
                        ) {
                            el.isShow = !isShow;
                            el.isClassML = 0;
                        }
                    });
                }
            }
        },

        /**
         * Hàm hiển thị dialog có muốn xóa tài khoản không?
         * Author: KienNT (29/05/2023)
         */
        handleDeleteRow() {
            try {
                if (this.account_id_delete) {
                    this.isContextMenu = false;
                    if (this.is_parent) {
                        this.isToastWarningNoUpdateState = false;
                        this.isDialogError = true;
                    } else {
                        this.isDialogWarning = true;
                        this.isUpdateState = false;
                        this.$emit("setIsDeleteOne");
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * lấy danh sách con
         * Author: KienNT (26/05/2023)
         */
        getRecordChildren(account_id) {
            try {
                let parentIdArray = [];
                if (!Array.isArray(account_id)) {
                    parentIdArray.push(account_id);
                } else {
                    account_id.forEach((el) => {
                        parentIdArray.push(el.account_id);
                    });
                }

                axios
                    .get(
                        "https://localhost:7153/api/v1/Accounts/GetRecordChildren",
                        {
                            headers: {
                                parent_ids: parentIdArray.join(","), // Chuyển đổi mảng thành một chuỗi phân cách bằng dấu phẩy
                            },
                        }
                    )
                    // .then(this.hideShowLoading(true))
                    .then((this.isShowSkeleton = true))
                    .then((response) => {
                        let accountChildrents = response?.data?.Data;

                        accountChildrents = accountChildrents.map((account) => {
                            account.isShow = true;
                            account.isClassML = account.is_parent
                                ? MISAEnum.SpaceWithParent.IsParent
                                : MISAEnum.SpaceWithParent.IsNotParent;
                            account.isExpand = account.is_parent;
                            account.state = this.formatStatus(account.state);
                            account.account_category_kind = this.formatProperty(
                                account.account_category_kind
                            );
                            return account;
                        });

                        let index = 0;
                        for (let i = 0; i < this.cloneAccounts.length; i++) {
                            if (
                                this.cloneAccounts[i].account_id == account_id
                            ) {
                                index = i;
                                break;
                            }
                        }

                        let check = true;
                        accountChildrents.forEach((el) => {
                            this.cloneAccounts.forEach((el2) => {
                                if (el.account_id === el2.account_id) {
                                    check = false;
                                }
                            });
                        });

                        if (check) {
                            this.cloneAccounts.splice(
                                index + 1,
                                0,
                                ...accountChildrents
                            );
                            this.accounts = [...this.cloneAccounts];
                        }

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
         * Hàm xóa tài khoản khi click có xóa
         * Author: KienNT (29/05/2023)
         */
        onBtnWarningYes(isDialogValue) {
            try {
                // TH xoá 1 tài khoản
                if (isDialogValue === "isDialogWarning") {
                    axios
                        .delete(
                            `https://localhost:7153/api/v1/Accounts/${this.account_id_delete}`
                        )
                        .then(this.hideShowLoading(true))
                        .then((res) => {
                            console.log(res);
                            this.isDialogWarning = false;

                            this.hideShowLoading(false);
                            this.$emit(
                                "hideShowToast",
                                "delete",
                                this.$t("Account")
                            );
                            this.loadData();
                        })
                        .catch((error) => {
                            console.log(error);
                            this.hideShowLoading(false);
                        });
                } else if (isDialogValue === "isDialogUpdateState") {
                    this.updateState(true, false);
                    this.isDialogWarning = false;
                    this.isUpdateState = false;
                } else {
                    // Xóa nhiều nhân viên
                    axios
                        .delete(
                            "https://localhost:7153/api/v1/Employees/DeleteMultiple",
                            {
                                data: this.selectedEmployeeIds,
                            }
                        )
                        .then(this.hideShowLoading(true))
                        .then((res) => {
                            console.log(res);
                            this.isDialogDeleteMul = false;
                            this.oldCheckedArr = [];
                            this.$emit(
                                "handleSelectChechbox",
                                this.oldCheckedArr
                            );
                            this.$emit("setIsDialogDeleteMuliple");
                            this.hideShowLoading(false);
                            this.$emit("hideShowToast", "delete");
                            this.loadData();
                        })
                        .catch((error) => {
                            console.log(error);
                            this.hideShowLoading(false);
                        });
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm lấy được id của account chọn
         * Author: KienNT (30/05/2023)
         */
        handleDuplicateAccount() {
            try {
                this.isContextMenu = false;
                if (this.account_id_delete) {
                    this.$emit(
                        "showPopupDuplicate",
                        MISAEnum.formMode.Duplicate,
                        this.account_id_delete,
                        this.accounts
                    );
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm lấy được id của account chọn
         * Author: KienNT (30/05/2023)
         */
        handleUpdateState(state, is_parent) {
            try {
                this.isContextMenu = false;
                // TH state ngừng sử dụng -> sử dụng
                if (state === MISAEnum.Status.StopUsing) {
                    if (this.parent_id) {
                        const account_selected = this.accounts.find(
                            (el) => el.account_id === this.parent_id
                        );
                        if (account_selected.state === this.$t("StopUsing")) {
                            this.parent_number =
                                account_selected.account_number;
                            this.isToastWarningNoUpdateState = true;
                            this.isDialogError = true;
                        } else {
                            if (is_parent) {
                                this.isDialogWarning = true;
                                this.isUpdateState = true;
                            } else {
                                this.updateState(false, false);
                            }
                        }
                    } else {
                        if (is_parent) {
                            this.isDialogWarning = true;
                            this.isUpdateState = true;
                        } else {
                            this.updateState(false, false);
                        }
                    }
                } else {
                    // TH state sử dụng => ngừng sử dụng
                    if (is_parent) {
                        this.updateState(true, true);
                    } else {
                        this.updateState(false, true);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm cập nhật trạng thái account
         * Author: KienNT (31/05/2023)
         */
        updateState(isChild, isActive) {
            try {
                axios
                    .put(
                        `https://localhost:7153/api/v1/Accounts/UpdateStateAccount?is_child=${isChild}&id_parent=${this.account_id_delete}&is_active=${isActive}`
                    )
                    .then(this.hideShowLoading(true))
                    .then((res) => {
                        console.log(res);
                        this.hideShowLoading(false);
                        this.$emit(
                            "hideShowToast",
                            "updateState",
                            this.$t("Account"),
                            !isActive
                        );
                        this.loadData();
                    })
                    .catch((error) => {
                        console.log(error);
                        this.hideShowLoading(false);
                    });
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm gửi emit lên cha để lấy id account, TH click btn sửa
         * Author: KienNT (04/03/2023)
         */
        doubleClickEditText(account, accounts) {
            this.$emit("onDoubleClick", account, accounts);
        },

        /**
         * Hàm lấy toại độ sau đó set tọa độ cho contextmenu để hiển thị
         * Author: KienNT (04/03/2023)
         *  @param (event,employee): tham số 1 là event, tham số 2 là thông tin của 1 nhân viên
         */
        handleClickOptionMenu(event, account) {
            try {
                this.stateAccount =
                    account.state === this.$t("StopUsing") ? 0 : 1;
                this.account_id_delete = account.account_id;
                this.account_number_delete = account.account_number;
                this.is_parent = account.is_parent || false;
                this.isContextMenu = !this.isContextMenu;
                this.parent_id = account.parent_id;
                this.leftContextMenu =
                    event.target.getBoundingClientRect().x -
                    MISAEnum.getboundingAccount.x;
                this.topContextMenu =
                    event.target.getBoundingClientRect().y +
                    MISAEnum.getboundingAccount.y;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm ẩn hiện dialog error
         * Author: KienNT (29/05/2023)
         * @param (isDialogError): tham số là true, false để hiển thị dialog
         */
        hideShowDialogError(isDialogError) {
            try {
                this.isDialogError = isDialogError;
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Hàm xóa dilog đi nếu ko muốn xóa nhân viên
         * Author: KienNT (07/03/2023)
         */
        onBtnWarningNo(isUpdateState) {
            try {
                if (isUpdateState) {
                    this.updateState(false, false);
                    this.isDialogWarning = false;
                    this.isUpdateState = false;
                } else {
                    this.isDialogWarning
                        ? (this.isDialogWarning = false)
                        : this.isDialogError
                        ? (this.isDialogError = false)
                        : this.$emit("setIsDialogDeleteMul");
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm ẩn contextmenu khi click ra ngoài element
         * Author: KienNT (29/05/2023)
         */
        hideContextMenu() {
            this.isContextMenu = !this.isContextMenu;
        },

        /**
         * Xử lý loading gửi emit lên cha
         * Author: KienNT (26/05/2023)
         * @param (isLoading): tham số là giá trị boolean loading có hay không
         */
        hideShowLoading(isLoading) {
            this.$emit("hideShowLoading", isLoading);
        },

        /**
         * Hàm thực hiện format property
         * Author: KienNT (26/05/2023)
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
         * Author: KienNT (26/05/2023)
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
