<template>
    <div class="content">
        <div class="content__header">
            <div class="content__header-title">
                <MHeading :text="MISAResouce.vi.Employee"></MHeading>
            </div>

            <MButton
                :text="MISAResouce.vi.AddNewEmployee"
                id="addEmployee"
                kind="primary"
                className="btn-primary"
                :click="showPopup"
            ></MButton>
        </div>

        <div class="content__main">
            <!-- header main -->
            <div class="content__main-right">
                <div class="content__main-filter">
                    <div class="input__wrapper">
                        <button class="input__icon" fdprocessedid="sd2h6">
                            <div class="input__icon-search"></div>
                        </button>
                        <input
                            type="text"
                            class="input__type input__search"
                            placeholder="Tìm theo mã, tên nhân viên"
                            fdprocessedid="q9kjmf"
                        />
                    </div>
                </div>

                <div class="content__main-refresh wrap-icon">
                    <div
                        class="content__main-refresh-icon icon-normal-light icon-normal-light-hover"
                    ></div>
                </div>
            </div>

            <div class="content__main-body scrollbar_customize">
                <div class="content__main-table">
                    <!-- begin table -->
                    <TheTable
                        @hideShowLoading="hideShowLoading"
                        @onDoubleClick="onDoubleClick"
                    ></TheTable>
                    <!-- end table -->

                    <!-- begin dialog -->

                    <!-- end dialog -->
                </div>

                <!-- begin paging -->
                <ThePaging></ThePaging>
                <!-- end paging -->

                <!-- begin popup -->
                <ThePopup
                    v-if="isShowPopup"
                    @onClosePopup="closePopup"
                    @hideShowLoading="hideShowLoading"
                    :employeeIdSelected="employeeIdSelected"
                    :textTitlePopup="textTitlePopup"
                ></ThePopup>

                <!-- begin dialog -->

                <!-- loading -->
                <Mloading v-if="isLoading"></Mloading>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import TheTable from "./TheTable.vue";
import ThePaging from "./ThePaging.vue";
import ThePopup from "./ThePopup.vue";
import Mloading from "../base/Mloading.vue";
export default {
    name: "TheContent",
    data() {
        return {
            MISAResouce,
            isShowPopup: false,
            isLoading: false,
            employeeIdSelected: null,
            textTitlePopup: "",
        };
    },
    components: {
        TheTable,
        ThePaging,
        ThePopup,
        Mloading,
    },
    methods: {
        /**
         * Hàm hiển thị popup khi click vào thêm mới nhân viên và lấy mã từ Call API
         * Author: KienNT (01/03/2023)
         */
        showPopup() {
            try {
                this.employeeIdSelected = "";
                this.textTitlePopup = MISAResouce.vi.EmployeeInfo;
                this.isShowPopup = true;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm handle khi double click và lấy id employee
         * Author: KienNT (04/03/2023)
         */
        onDoubleClick(employee) {
            try {
                this.employeeIdSelected = employee.EmployeeId;
                this.textTitlePopup = MISAResouce.vi.EditEmployeeInfo;

                this.isShowPopup = true;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm đóng popup khi click vào icon close từ con
         * Author: KienNT (01/03/2023)
         */
        closePopup() {
            try {
                this.isShowPopup = false;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm hiện thị và ẩn loading khi load dữ liệu
         * Author: KienNT (02/03/2023)
         * @param (isLoading): tham số là true, false ẩn hiển
         */
        hideShowLoading(isLoading) {
            try {
                this.isLoading = isLoading;
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
<style scoped>
@import url(../../css/layout/content.css);
</style>
