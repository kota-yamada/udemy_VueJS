import Vue from 'vue'
import App from './App.vue'

// global component
// import
import LikeNumber from "./LikeNumber.vue"

Vue.config.productionTip = false

// global component
Vue.component('LikeNumberTag', LikeNumber)

new Vue({
  render: h => h(App),
}).$mount('#app')
