import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.withCredentials = true

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.console = window.console

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
