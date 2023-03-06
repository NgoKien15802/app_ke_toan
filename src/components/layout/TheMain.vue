<template>
    <div class="wrapper">
        <TheHeader></TheHeader>
        <TheContent></TheContent>
    </div>
</template>
<script>
import TheContent from "./TheContent.vue";
import TheHeader from "./TheHeader.vue";

export default {
    name: "TheMain",
    components: {
        TheHeader,
        TheContent,
    },
};
</script>
<style scoped></style>
