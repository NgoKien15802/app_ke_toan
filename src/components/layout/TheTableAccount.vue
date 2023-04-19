<template>
    <div>
        <MDataGrid :orders="orders"></MDataGrid>
    </div>
</template>
<script>
export default {
    name: "TheTableAccount",
    data() {
        return {
            orders: [
                {
                    ID: 1,
                    AccountNumber: "3241",
                    AccountName: "Tiền mặt",
                    Property: "Dư nợ",
                    EnglishName: "Cash in hand",
                    Interpret: "",
                    Status: "Đang sử dụng",
                },
                {
                    ID: 2,
                    AccountNumber: "3241",
                    AccountName: "Tiền mặt",
                    Property: "Dư nợ",
                    EnglishName: "Cash in hand",
                    Interpret: "",
                    Status: "Đang sử dụng",
                },
            ],
        };
    },
};
</script>
<style scoped></style>
