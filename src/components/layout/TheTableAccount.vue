<template>
    <div>
        <MDataGrid :employees="employees"></MDataGrid>
    </div>
</template>

<script>
export default {
    name: "TheTableAccount",
    data() {
        return {
            employees: [
                {
                    ID: "8b79ba21-3a2a-4c19-8ee1-068821a564f1",
                    Parent_ID: null,
                    AccountNumber: "234",
                    AccountName: "Danh sách tài khoản",
                    Property: "",
                    EnglishName: "",
                    Interpret: "",
                    Status: "",
                },
                {
                    ID: "6f31783b-5c5b-4d81-9a7e-6f8e6cfac9c1",
                    Parent_ID: "8b79ba21-3a2a-4c19-8ee1-068821a564f1",
                    AccountNumber: "112",
                    AccountName: "Tiền mặt",
                    Property: "Dư nợ",
                    EnglishName: "Cash in hand",
                    Interpret: "",
                    Status: "Ngừng sử dụng",
                },
                {
                    ID: "bb81c9a2-85df-437c-a87e-02d5083717ca",
                    Parent_ID: "8b79ba21-3a2a-4c19-8ee1-068821a564f1",
                    AccountNumber: "111",
                    AccountName: "Tiền gửi Ngân hàng",
                    Property: "Dư nợ",
                    EnglishName: "Cash in hand",
                    Interpret: "",
                    Status: "Ngừng sử dụng",
                },
                {
                    ID: "c4468890-db2c-4c12-937f-1859d93c9f10",
                    Parent_ID: null,
                    AccountNumber: "333",
                    AccountName: "Tiền gửi Ngân  kien",
                    Property: "Dư nợ",
                    EnglishName: "Cash in hand",
                    Interpret: "",
                    Status: "Ngừng sử dụng",
                },
                {
                    ID: "f9338d0a-c939-4f2e-8e03-0fd654c96a95",
                    Parent_ID: "c4468890-db2c-4c12-937f-1859d93c9f10",
                    AccountNumber: "444",
                    AccountName: "Tiền gửi Ngân con kien",
                    Property: "Dư nợ",
                    EnglishName: "Cash in hand",
                    Interpret: "",
                    Status: "Ngừng sử dụng",
                },

                {
                    ID: "c8d492b4-9007-49ad-84bb-81bd1822b0ea",
                    Parent_ID: "f9338d0a-c939-4f2e-8e03-0fd654c96a95",
                    AccountNumber: "354",
                    AccountName: "Tiền gửi Ngân chau kien",
                    Property: "Dư nợ",
                    EnglishName: "Cash in hand",
                    Interpret: "",
                    Status: "Ngừng sử dụng",
                },
            ],
        };
    },
};
</script>
<style>
.dx-treelist {
    line-height: inherit;
    font-family: "Roboto", sans-serif;
}
.dx-treelist .dx-row > td {
    padding: 0 16px;
    max-height: var(--size-row);
    line-height: var(--size-row);
}

.dx-treelist-headers {
    background-color: #eeeeee;
    font-weight: 600;
    font-size: 1.4rem;
    color: #000000;
    cursor: all-scroll;
    text-transform: uppercase;
}

tr.dx-row.dx-data-row.dx-row-lines.dx-column-lines:hover {
    background-color: #f2f2f2;
}

.dx-treelist-rowsview .dx-treelist-collapsed span::before {
    content: "\002B";
    position: absolute;
    display: block;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 120%;
    left: 0px;
    border: 1px solid #959595;
    color: #959595;
    border-radius: 3px;
    font-family: "Font Awesome 5 Free";
    padding: 5px;
}

.dx-treelist-rowsview tr:not(.dx-row-focused) .dx-treelist-empty-space {
    color: #959595;
    margin-right: 8px;
}

.dx-treelist-rowsview .dx-treelist-expanded span::before {
    content: "\2212";
    position: absolute;
    display: block;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 120%;
    left: 0px;
    border: 1px solid #959595;
    color: #959595;
    border-radius: 3px;
    font-family: "Font Awesome 5 Free";
    padding: 5px;
}
</style>
