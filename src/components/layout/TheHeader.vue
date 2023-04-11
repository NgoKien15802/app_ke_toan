<template>
    <div class="header">
        <div class="header__left">
            <div class="header__left-icon wrap-icon">
                <div
                    class="header__left-icon-img icon-normal-light icon-normal-light-hover"
                ></div>
            </div>
            <div class="header__left-dropdown">
                <div class="header__left-dropdown-text">
                    {{ MISAResouce.vi.MyCompany }}
                </div>
                <div class="header__left-dropdown-icon wrap-icon">
                    <div
                        class="header__left-dropdown-arrow icon-arrow icon-normal-light icon-normal-light-hover"
                    ></div>
                </div>
            </div>
        </div>

        <div class="header__right">
            <div class="header__right-noti-icon wrap-icon">
                <div
                    class="header__right-noti-img icon-normal-light icon-normal-light-hover"
                ></div>
            </div>

            <div class="header__right-info">
                <div class="header__right-info-avt"></div>
                <div class="header__right-info-dropdown">
                    <div class="header__right-info-name">
                        {{ MISAResouce.vi.Username }}
                    </div>
                    <div class="header__right-info-icon wrap-icon">
                        <div
                            class="header__right-info-arrow icon-arrow icon-normal-light icon-normal-light-hover"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";

export default {
    name: "TheHeader",
    data() {
        return {
            MISAResouce,
        };
    },
};
</script>
<style scoped>
@import url(../../css/layout/header.css);
</style>
