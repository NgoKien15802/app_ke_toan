<template>
    <div>
        <DxDataGrid
            :data-source="orders"
            key-expr="ID"
            :allow-column-resizing="true"
            :show-borders="true"
            column-resizing-mode="nextColumn"
            :column-min-width="50"
            :column-auto-width="true"
        >
            <DxSelection
                select-all-mode="page"
                mode="multiple"
                show-check-boxes-mode="always"
            />  
            <DxColumn
                data-field="AccountNumber"
                :caption="this.$t('AccountNumber')"
            />
            <DxColumn
                data-field="AccountName"
                :caption="this.$t('AccountName')"
            />
            <DxColumn data-field="Property" :caption="this.$t('Property')" />
            <DxColumn
                data-field="EnglishName"
                :caption="this.$t('EnglishName')"
            />
            <DxColumn data-field="Interpret" :caption="this.$t('Interpret')" />
            <DxColumn data-field="Status" :caption="this.$t('Status')" />
        </DxDataGrid>
    </div>
</template>

<script>
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";

export default {
    name: "MDataGrid",
    components: {
        DxDataGrid,
        DxColumn,
    },
    props: {
        orders: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style>
.dx-datagrid-text-content.dx-text-content-alignment-left {
    font-weight: 600;
    color: #000;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
}
</style>
