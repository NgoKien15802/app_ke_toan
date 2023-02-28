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
                </div>

                <!-- begin paging -->
                <ThePaging></ThePaging>
                <!-- end paging -->
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
export default {
    name: "TheContent",
    data() {
        return {
            MISAResouce,
        };
    },
    components: {
        Mbutton,
        Mheading,
        TheTable,
        ThePaging,
    },
};
</script>
<style scoped>
@import url(../../css/layout/content.css);
</style>
