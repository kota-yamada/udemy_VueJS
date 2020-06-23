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
//   border(el, binding) {

//   }
// })

// global filter
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
})

// global mix in
// filterやカスタムディレクテティブのglobalと違って、実行するコンポーネントを選べず全てのコンポーネントで毎回実行される。基本的には使わない
// Vue.mixin({

// })


new Vue({
  render: h => h(App),
}).$mount('#app')
