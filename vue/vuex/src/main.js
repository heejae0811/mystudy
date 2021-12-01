import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  }
});

Vue.config.productionTip = false

new Vue({
  store, // store를 전역으로 등록
  render: h => h(App),
}).$mount('#app')
