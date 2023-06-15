import { createRouter, createWebHistory } from "vue-router";

import EmployeeList from "@/Views/employee/EmployeeList.vue";
import CustomerList from "@/Views/customer/CustomerList.vue";

import AccountSysterm from "@/Views/account/AccountSysterm";
import CashPayment from "@/Views/cash/CashPayment";
import CashProcess from "@/Views/cash/CashProcess";
import NotFound from "@/Views/notFound/NotFound.vue";
import PaymentDetail from "@/Views/cash/PaymentDetail.vue";

/**
 * Định nghĩa route
 * Author: KienNT (14/04/2023)
 */
const routes = [
    { path: "/", component: EmployeeList },
    { path: "/cash/employee", component: EmployeeList },
    { path: "/cash/customer", component: CustomerList },
    {
        path: "/cash/cashDetail/:formMode/:kind?/:payment_id_selected?",
        component: PaymentDetail,
        props: true,
    },
    { path: "/cash/accountSysterm", component: AccountSysterm },
    { path: "/cash/payment", component: CashPayment },
    { path: "/cash/process", component: CashProcess },
    { path: "/404", name: "errorpage", component: NotFound },
    { path: "/:pathMatch(.*)*", redirect: "/404" },
];

/**
 * Khởi tạo route
 * Author: KienNT (14/04/2023)
 */
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
