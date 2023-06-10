<template>
    <TheCash>
        <div class="cash__body">
            <div class="cash__main">
                <div class="cash__process">
                    <div class="cash__process-top">
                        <div class="cash__process-title">
                            {{ $t("CashBusiness") }}
                        </div>

                        <div class="cash__process-main">
                            <MProcessCash></MProcessCash>
                            <div class="icon__cash receive">
                                <div class="icon__title-cash">
                                    {{ $t("ReceiveMoney") }}
                                </div>
                            </div>
                            <router-link
                                to="/cash/cashDetail"
                                class="icon__cash payment"
                            >
                                <div class="icon__title-cash">
                                    {{ $t("Payment") }}
                                </div>
                            </router-link>
                            <div class="icon__cash audit">
                                <div class="icon__title-cash">
                                    {{ $t("Stocktaking") }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cash__process-bottom">
                        <ul class="cash__process-bottom-list">
                            <router-link
                                v-for="(processCash, index) in processCashs"
                                :key="index"
                                :to="processCash.to"
                                class="cash__process-bottom-item"
                            >
                                <div :class="processCash.icon"></div>
                                <p href="" class="cash__process-bottom-text">
                                    {{ processCash.text }}
                                </p>
                            </router-link>
                        </ul>
                    </div>
                </div>
                <!-- <div class="cash__report">
                    <div class="cash__report-title">
                        {{ $t("Report") }}
                    </div>
                </div> -->
            </div>
        </div>
    </TheCash>
</template>

<script>
import MProcessCash from "@/components/base/MProcessCash.vue";
import MISAResouce from "@/js/resource";
import TheCash from "@/components/layout/sidebar/TheCash.vue";
export default {
    name: "CashProcess",
    components: {
        MProcessCash,
        TheCash,
    },
    data() {
        return {
            MISAResouce,
            processCashs: [
                {
                    text: this.$t("AccountSystem"),
                    icon: "accountSystem",
                    to: "/cash/accountSysterm",
                },
            ],
        };
    },
   
};
</script>

<style scoped>
@import url(@/css/layout/sidebar/cash.css);
svg#Layer_1 {
    width: 100%;
    height: 100%;
}
</style>
