import Vue from 'vue'
import './plugins/snotify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './scripts/router'
import store from './store'
import vuetify from './plugins/vuetify'
import API from './scripts/api'
import LocalConfig from './class/LocalConfig'
import '@babel/polyfill'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$API = API
Vue.prototype.$lConfig = new LocalConfig()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
