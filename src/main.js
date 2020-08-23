import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/elements.js'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'


import axios from 'axios'
import qs from 'qs'

import './assets/css/global.css'

Vue.use(ElementUI)
axios.defaults.baseURL='http://localhost:8081/users/'
Vue.prototype.$http=axios
Vue.prototype.$qs=qs

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
