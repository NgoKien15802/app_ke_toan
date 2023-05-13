import { createRouter, createWebHistory } from "vue-router";

import EmployeeList from "@/Views/employee/EmployeeList.vue";
import CustomerList from "@/Views/customer/CustomerList.vue";
import TheCashDetail from "@/components/layout/TheCashDetail.vue";
import AccountSysterm from "@/Views/cash/AccountSysterm";
import CashPayment from "@/Views/cash/CashPayment";
import CashProcess from "@/Views/cash/CashProcess";

/**
 * Định nghĩa route
 * Author: KienNT (14/04/2023)
 */
const routes = [
    { path: "/", component: EmployeeList },
    { path: "/cash/employee", component: EmployeeList },
    { path: "/cash/customer", component: CustomerList },
    { path: "/cash/cashDetail", component: TheCashDetail },
    { path: "/cash/accountSysterm", component: AccountSysterm },
    { path: "/cash/payment", component: CashPayment },
    { path: "/cash/process", component: CashProcess },
    { path: "/:pathMatch(.*)*", component: Error },
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
