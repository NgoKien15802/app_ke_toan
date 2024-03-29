import { createApp } from "vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import MISAResouce from "./js/resource";
import App from "./App.vue";
import MInput from "./components/base/Minput.vue";
import MButton from "./components/base/Mbutton.vue";
import MCheckbox from "./components/base/Mcheckbox.vue";
import MDialog from "./components/base/Mdialog.vue";
import MHeading from "./components/base/Mheading.vue";
import MRadio from "./components/base/Mradio.vue";
import MTooltip from "./components/base/Mtooltip.vue";
import MToast from "./components/base/Mtoast.vue";
import MContextmenu from "./components/base/Mcontextmenu.vue";
import MSkeletonTable from "./components/base/MSkeletonTable.vue";
import MconditionFilter from "./components/base/MconditionFilter.vue";
import MNotData from "./components/base/MNotData.vue";
import MCombobox from "./components/base/Mcombobox.vue";
import MOptionItem from "./components/base/MOptionItem.vue";
import MComboboxTable from "./components/base/MComboboxTable.vue";
import Mloading from "./components/base/Mloading.vue";

import MLoadingCombobox from "./components/base/MLoadingCombobox.vue";

import MPaging from "./components/base/MPaging.vue";

const i18n = createI18n({
    locale: localStorage.getItem("lang") || "vi",
    messages: MISAResouce,
});

const app = createApp(App);

/**
 * sử dụng route trong app
 * Author: KienNT (14/04/2023)
 */
app.use(router);

/**
 * import các component tái sử dụng thành global
 * Author: KienNT (01/03/2023)
 */
app.component("MInput", MInput);
app.component("MButton", MButton);
app.component("MCheckbox", MCheckbox);
app.component("MDialog", MDialog);
app.component("MHeading", MHeading);
app.component("MRadio", MRadio);
app.component("MTooltip", MTooltip);
app.component("MToast", MToast);
app.component("MContextmenu", MContextmenu);
app.component("MSkeletonTable", MSkeletonTable);
app.component("MconditionFilter", MconditionFilter);
app.component("MNotData", MNotData);
app.component("MCombobox", MCombobox);
app.component("MOptionItem", MOptionItem);
app.component("MComboboxTable", MComboboxTable);
app.component("MLoadingCombobox", MLoadingCombobox);
app.component("MPaging", MPaging);
app.component("Mloading", Mloading);

app.use(i18n);

app.mount("#app");
