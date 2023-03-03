<template>
    <ul
        class="contextmenu__fun-list d-block"
        style="left: 1400.8px; top: 278.438px"
    >
        <li class="contextmenu__fun-item">
            <a href="#" class="contextmenu__fun-link">{{
                MISAResouce.vi.Duplicate
            }}</a>
        </li>

        <li class="contextmenu__fun-item">
            <a href="#" class="contextmenu__fun-link">{{
                MISAResouce.vi.Delete
            }}</a>
        </li>
        <li class="contextmenu__fun-item">
            <a href="#" class="contextmenu__fun-link">{{
                MISAResouce.vi.StopUse
            }}</a>
        </li>
    </ul>
</template>
<script>
import MISAResouce from "@/js/resource";
export default {
    name: "MContextmenu",
    data() {
        return {
            MISAResouce,
        };
    },
};
</script>
<style scoped>
@import url(../../css/components/contextMenu.css);
</style>
