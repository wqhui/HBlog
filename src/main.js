import Vue from 'vue'
import App from './App.vue'
import doBg from './bg.js'
import './assets/css/font-awesome.min.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  beforeMount: function () {
    doBg()
  }
}).$mount('#app')
