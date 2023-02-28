<template>
    <div class="wrapper">
        <TheHeaderVue></TheHeaderVue>
        <TheContentVue></TheContentVue>
    </div>
</template>
<script>
import TheContentVue from "./TheContent.vue";
import TheHeaderVue from "./TheHeader.vue";

export default {
    name: "TheMain",
    components: {
        TheHeaderVue,
        TheContentVue,
    },
};
</script>
<style scoped></style>
