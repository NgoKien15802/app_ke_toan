<template>
    <div class="input__wrapper-combobox combobox dropdown-popup-wrapper">
        <button class="input__icon btn-combobox popup__combobox-icon">
            <div class="input__icon-dropdown"></div></button
        ><Minput
            tabindex="3"
            autocomplete="off"
            name="DepartmentName"
            id="donvi"
            style="border: none"
            :required="true"
            className="combobox-input"
            kind="combobox"
            :placeHolder="MISAResouce.vi.LabelDepartmentName.toLowerCase()"
        />
        <div class="option__wrapper-combobox">
            <ul class="option__list-combobox scrollbar_customize">
                <li class="option__item-combobox">
                    <a class="option__link-combobox"
                        >Phòng Công Nghệ Thông Tin</a
                    >
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import MISAResouce from "@/js/resource";
import Minput from "./Minput.vue";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Mcombobox",
    components: {
        Minput,
    },
    data() {
        return {
            MISAResouce,
        };
    },
};
</script>
<style scoped>
@import url(../../css/components/combobox.css);
</style>
