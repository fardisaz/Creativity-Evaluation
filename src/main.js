import Vue from "vue";
import App from "./App.vue";

// import movable from "v-movable";
import store from "./store";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");

// Vue.use(movable);

Vue.use(VueRouter);
