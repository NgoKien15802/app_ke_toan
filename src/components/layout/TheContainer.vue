<template >
    <div class="container">
        <TheSidebar></TheSidebar>
        <TheMain></TheMain>
    </div>
</template>
<script>

import TheSidebar from './TheSidebar.vue';
import TheMain from './TheMain.vue';
export default {
    name:"TheContainer",
    components:{
        TheSidebar,
        TheMain
    }
}
</script>
<style scoped>
@import url(../../css/main.css);
@import url(../../css/base.css);
</style>