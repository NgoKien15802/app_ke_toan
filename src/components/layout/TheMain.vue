<template>
    <div class="wrapper">
        <TheHeader></TheHeader>
        <router-view />
    </div>
</template>
<script>
import TheHeader from "./TheHeader.vue";
export default {
    name: "TheMain",
    components: {
        TheHeader,
    },
};
</script>
<style scoped></style>
