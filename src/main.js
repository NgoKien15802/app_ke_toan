import { createApp } from "vue";
import App from "./App.vue";
import MInput from "./components/base/Minput.vue";
import MButton from "./components/base/Mbutton.vue";
import MCheckbox from "./components/base/Mcheckbox.vue";
import MDialog from "./components/base/Mdialog.vue";
import MHeading from "./components/base/Mheading.vue";
import MRadio from "./components/base/Mradio.vue";
import MTooltip from "./components/base/Mtooltip.vue";

const app = createApp(App);
/**
 * import các component tái sử dụng thành global
 * Author: KienNT (01/03/2023)
 */
app.component("MInput", MInput);
app.component("MButton", MButton);
app.component("MButton", MButton);
app.component("MCheckbox", MCheckbox);
app.component("MDialog", MDialog);
app.component("MHeading", MHeading);
app.component("MRadio", MRadio);
app.component("MTooltip", MTooltip);
app.mount("#app");
