import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise'
import App from './App.vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
