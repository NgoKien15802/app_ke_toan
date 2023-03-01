<template>
    <div class="content">
        <div class="content__header">
            <div class="content__header-title">
                <Mheading :text="MISAResouce.vi.Employee"></Mheading>
            </div>

            <Mbutton
                :text="MISAResouce.vi.AddNewEmployee"
                id="addEmployee"
                kind="primary"
                className="btn-primary"
                :click="showPopup"
            ></Mbutton>
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
                    <TheTable></TheTable>
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
                ></ThePopup>

                <!-- begin dialog -->
                <Mdialog
                    iconClass="dialog__icon-error"
                    :title="MISAResouce.vi.DialogNotifyError"
                    message="Không được để trống"
                ></Mdialog>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import Mbutton from "../base/Mbutton.vue";
import Mheading from "../base/Mheading.vue";
import TheTable from "./TheTable.vue";
import ThePaging from "./ThePaging.vue";
import ThePopup from "./ThePopup.vue";
import Mdialog from "../base/Mdialog.vue";
export default {
    name: "TheContent",
    data() {
        return {
            MISAResouce,
            isShowPopup: false,
        };
    },
    components: {
        Mbutton,
        Mheading,
        TheTable,
        ThePaging,
        ThePopup,
        Mdialog,
    },
    methods: {
        /**
         * Hàm hiển thị popup khi click vào thêm mới nhân viên
         * Author: KienNT (1/3/2023)
         */
        showPopup() {
            try {
                this.isShowPopup = true;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm đóng popup khi click vào icon close từ con
         * Author: KienNT (1/3/2023)
         */
        closePopup() {
            try {
                this.isShowPopup = false;
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
