<template>
    <tr>
        <td class="text-align-center">
            <Mcheckbox></Mcheckbox>
        </td>
        <td class="text-align-left">nv011</td>
        <td class="text-align-left">a</td>
        <td class="text-align-left" style="min-width: 200px"></td>
        <td class="text-align-center">4/1/1970</td>
        <td class="text-align-left"></td>
        <td class="text-align-left"></td>
        <td class="text-align-left"></td>
        <td class="text-align-left"></td>
        <td class="text-align-left"></td>
        <td class="text-align-left"></td>
        <td class="dropdown-fun text-align-center">
            <Mbutton
                kind="link"
                className="link-btn btn-link-primary"
                :text="MISAResouce.vi.Fix"
            ></Mbutton>

            <div class="input__icon-box ml-8">
                <div class="icon-dropdown"></div>
            </div>
        </td>
    </tr>
</template>
<script>
import MISAResouce from "../../js/resource";
import Mcheckbox from "../base/Mcheckbox.vue";
import Mbutton from "../base/Mbutton.vue";
export default {
    name: "TheTdTable",
    data() {
        return {
            MISAResouce,
        };
    },
    components: {
        Mcheckbox,
        Mbutton,
    },
};
</script>
<style scoped></style>
