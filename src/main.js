import Vue from 'vue'
import App from './App.vue'

// global component
// import
import LikeNumber from "./components/LikeNumber.vue"

Vue.config.productionTip = false

// global component
Vue.component('LikeNumberTag', LikeNumber)
// global custom directive
// Vue.directive("border", function(el, binding) {

// })

new Vue({
  render: h => h(App),
}).$mount('#app')
