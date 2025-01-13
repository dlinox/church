import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import vuetify from "@/common/ui/plugins/vuetify";
import permission from "@/common/directives/permissions";
import "vue-toast-notification/dist/theme-sugar.css";
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import "./style.css";

import { QuillEditor } from '@vueup/vue-quill'
import { LnxDataTable, LnxDialogConfirm } from "@/common/ui/components";

import router from "@/app/routes";

const pinia = createPinia();
const app = createApp(App);
app.directive("permission", permission);
app.use(pinia);
app.use(router);
app.use(vuetify);
app.component("LnxDataTable", LnxDataTable);
app.component("LnxDialogConfirm", LnxDialogConfirm);
app.component('QuillEditor', QuillEditor)
app.mount("#app");
