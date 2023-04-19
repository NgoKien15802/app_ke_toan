import { createRouter, createWebHistory } from "vue-router";

import EmployeeList from "@/Views/employee/EmployeeList.vue";
import CustomerList from "@/Views/customer/CustomerList.vue";
import TheCash from "@/components/layout/sidebar/TheCash.vue";
import CashDetail from "@/Views/cash/CashDetail";
import AccountSysterm from "@/Views/cash/AccountSysterm";

/**
 * Định nghĩa route
 * Author: KienNT (14/04/2023)
 */
const routes = [
    { path: "/", component: EmployeeList },
    { path: "/cash", component: TheCash },
    { path: "/cash/employee", component: EmployeeList },
    { path: "/cash/customer", component: CustomerList },
    { path: "/cash/cashDetail", component: CashDetail },
    { path: "/cash/accountSysterm", component: AccountSysterm },
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
