import Vue from 'vue'
import App from './App.vue'
import router from './router'  //router
import store from './store'   //store


//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

Vue.use(router)

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
