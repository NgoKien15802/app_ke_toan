<template>
    <DxTreeList
        id="employees"
        :data-source="employees"
        :allow-column-resizing="true"
        column-resizing-mode="nextColumn"
        :column-min-width="50"
        :column-auto-width="true"
        :show-row-lines="true"
        :show-borders="true"
        key-expr="ID"
        parent-id-expr="Parent_ID"
    >
        <DxColumn data-field="AccountNumber" :caption="$t('AccountNumber')" />
        <DxColumn data-field="AccountName" :caption="$t('AccountName')" />
        <DxColumn data-field="Property" :caption="$t('Property')" />
        <DxColumn data-field="EnglishName" :caption="$t('EnglishName')" />
        <DxColumn data-field="Interpret" :caption="$t('Interpret')" />
        <DxColumn data-field="Status" :caption="$t('Status')" />
        <!-- <DxColumn :min-width="50">
            <dxo-cell-template v-slot="data">
                <div class="dropdown-fun text-align-center">
                    <MButton
                        kind="link"
                        className="link-btn btn-link"
                        :text="$t('Fix')"
                        :click="() => doubleClickEditText(data)"
                    ></MButton>
                    <div
                        class="input__icon-box ml-8"
                        @click="handleClickOptionMenu($event, data)"
                        ref="iconContextMenu"
                    >
                        <div class="icon-dropdown" ref="ContextMenu"></div>
                    </div>
                </div>
            </dxo-cell-template>
        </DxColumn> -->
    </DxTreeList>
</template>
<script>
import { DxTreeList, DxColumn } from "devextreme-vue/tree-list";

export default {
    components: {
        DxTreeList,
        DxColumn,
    },
    props: {
        employees: {
            type: Array,
        },
    },
};
</script>
<style scoped></style>
