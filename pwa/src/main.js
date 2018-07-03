import Vue from 'vue'
import VueResource from 'vue-resource'
import Raphael from 'raphael/raphael'
import jQuery from 'jquery'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

global.Raphael = Raphael
global.jQuery = jQuery // Should be put in webpack config

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  router,
  render: h => h(App)
}).$mount('#app')
