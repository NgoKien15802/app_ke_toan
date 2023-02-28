<template>
    <div class="content__main-paging">
        <p class="content__main-paging-left">
            {{ MISAResouce.vi.Total }}: <strong>1035</strong>
            {{ MISAResouce.vi.Record }}
        </p>
        <div class="content__main-paging-right">
            <div class="paging__record">
                <div class="input__wrapper dropdown">
                    <button
                        class="input__icon dropdown-icon"
                        fdprocessedid="jeq9qa"
                    >
                        <div class="input__icon-dropdown"></div>
                    </button>
                    <input
                        readonly="true"
                        type="text"
                        style="border: none"
                        class="input__type dropdown-input paging-input"
                        value=""
                        fdprocessedid="epqss"
                    />

                    <div class="option__wrapper">
                        <ul class="option__list scrollbar_customize">
                            <TheOptionItem
                                text="10"
                                :isActive="true"
                            ></TheOptionItem>

                            <TheOptionItem text="20"></TheOptionItem>
                            <TheOptionItem text="30"></TheOptionItem>
                            <TheOptionItem text="40"></TheOptionItem>
                            <TheOptionItem text="50"></TheOptionItem>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="navbar">
                <a href="#" class="navbar__item">
                    {{ MISAResouce.vi.Previous }}
                </a>
                <a href="#" class="navbar__item active">1</a>
                <a href="#" class="navbar__item">2</a>
                <a href="#" class="navbar__item">3</a>
                <a href="#" class="navbar__item">...</a>
                <a href="#" class="navbar__item">52</a>
                <a href="#" class="navbar__item">
                    {{ MISAResouce.vi.Next }}
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import MISAResouce from "../../js/resource";
import TheOptionItem from "./TheOptionItem.vue";
export default {
    name: "ThePaging",
    data() {
        return {
            MISAResouce,
        };
    },
    components: {
        TheOptionItem,
    },
};
</script>
<style scoped>
@import url(../../css/components/paging.css);
</style>
