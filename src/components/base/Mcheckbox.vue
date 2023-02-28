<template>
    <label class="input__checkbox-wrapper">
        <input type="checkbox" class="input__checkbox" />
        <span class="ms__checkbox select__all-checkbox">
            <span class="ms__border-checkbox">
                <div class="ms__checbox-icon"></div>
            </span>
        </span>
    </label>
</template>
<script>
export default {
    name: "Mcheckbox",
};
</script>
<style scoped>
@import url(../../css/components/checkbox.css);
</style>
