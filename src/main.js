import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'


Vue.config.productionTip = false
Vue.prototype.$axios = axios;


new Vue({
  render: h => h(App),
  router,
  // 延迟5s 保证页面请求和内容全部能够加载渲染完成
  mounted () {
    setTimeout(() => {
      console.log("dispatch event");
      window.document.dispatchEvent(new Event("render-event"));
    }, 5000);
  }
  }).$mount("#app");

// document.addEventListener("DOMContentLoaded", () => {
//   app.$mount("#app");
// });

