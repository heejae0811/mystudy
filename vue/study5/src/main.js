import VueRouter from 'vue-router';
import routes from './router.js';
import vueMoment from 'vue-moment'
import App from './App.vue';
import Vue from 'vue';

Vue.use(VueRouter);
Vue.use(vueMoment);

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')