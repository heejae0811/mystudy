import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';

Vue.config.productionTip = false

new Vue({
  store, // store를 전역으로 등록
  render: h => h(App),
}).$mount('#app')
