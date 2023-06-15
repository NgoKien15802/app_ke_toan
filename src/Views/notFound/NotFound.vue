<template>
    <div class="main"><Mbutton :click="()=>  this.$router.push('/cash/process')">{{ $t('BackToHome') }}</Mbutton></div>
</template>

<script>
import Mbutton from '@/components/base/Mbutton.vue';
import MISAResouce from '@/js/resource';
export default {
    name: "NotFound",
    components: { Mbutton },
    data() {
        return {
            MISAResouce
        }
    },
};
</script>

<style scoped>
    .main{
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
</style>
