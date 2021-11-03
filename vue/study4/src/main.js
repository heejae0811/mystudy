import VueRouter from 'vue-router' // vue-router를 사용하면 3주차에서 실습한 것 처럼 VLink.vue 파일을 만들 필요가 없다.
import routes from './router.js' // ./ 경로를 지정하지 않으면 오류가 난다.
import App from './App.vue'
/*
  import 없이 변수, 컴포넌트를 모든 페이지에서 사용할 수 있다. = 전역으로 사용하고 싶다.(global)
  -> 프로그램이 많아지면 꼬일 수 있기 때문에 자주 사용하는 방식은 아니다.(스코프)
*/
import Vue from 'vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
