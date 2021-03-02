import Vue from "vue";
import App from "./App.vue";
import movable from "v-movable";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

Vue.use(movable);