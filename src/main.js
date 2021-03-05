import Vue from "vue";
import App from "./App.vue";

// import movable from "v-movable";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");

// Vue.use(movable);
