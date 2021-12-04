import Vue from 'vue';
import App from './App.vue';
import dayjs from 'dayjs';
import { store } from './store/store';

Object.defineProperties(Vue.prototype, {
  $date: {
    get() {
      return dayjs
    }
  }
});

Vue.config.productionTip = false

new Vue({
  store, // store를 전역으로 등록
  render: h => h(App),
}).$mount('#app')
