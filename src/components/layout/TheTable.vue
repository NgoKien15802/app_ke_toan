<template>
    <table id="tbEmployeeList" class="employee">
        <thead>
            <tr class="table__field">
                <th class="text-align-center">
                    <Mcheckbox></Mcheckbox>
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.EmployeeCode }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.EmployeeName }}
                </th>
                <th class="text-align-center" style="min-width: 200px">
                    {{ MISAResouce.vi.Gender }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.DateOfBirth }}
                </th>
                <th class="text-align-center tooltip">
                    {{ MISAResouce.vi.IdentityNumber
                    }}<span class="tooltiptext">{{
                        MISAResouce.vi.TooltipIdentityNumber
                    }}</span>
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.JobTitle }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.DepartmentName }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.AccountNumber }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.BankName }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.BankAddress }}
                </th>
                <th class="text-align-center">
                    {{ MISAResouce.vi.Freature }}
                </th>
            </tr>
        </thead>
        <tbody>
            <TheTdTable></TheTdTable>
        </tbody>
    </table>
</template>
<script>
import MISAResouce from "@/js/resource";
import TheTdTable from "./TheTdTable.vue";
import Mcheckbox from "../base/Mcheckbox.vue";
export default {
    name: "TheTable",
    data() {
        return {
            MISAResouce,
        };
    },
    components: {
        TheTdTable,
        Mcheckbox,
    },
};
</script>
<style scoped>
@import url(../../css/components/table.css);
</style>
