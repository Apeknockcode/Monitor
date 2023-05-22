import { createApp } from "vue";
import "./style.css";
import "@/uStyles/element/element-variarbles.scss";
import "@/uStyles/element/dark/css-vars.css";
import ElementPlus from "element-plus";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

const app = createApp(App);

app.use(ElementPlus, {  zIndex: 3000 });
app.use(createPinia);
app.use(router);
app.mount("#app");
