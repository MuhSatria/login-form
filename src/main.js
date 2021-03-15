import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import store from './store'
import Base from './Base.vue'
import './registerServiceWorker'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.prototype.$axios = axios
require('bootstrap')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Base)
}).$mount('#app')
