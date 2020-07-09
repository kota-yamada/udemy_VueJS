import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store';

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

// 全ページの遷移時、その前に何か実行したい時に使うナビゲーションガード：global設定版beforeEch
// ログイン前のユーザーを必ずログインページに飛ばしたい時などに使う
// 引数は3つto,from,next
// toとfromは遷移前後のルート状態。
// 必ずnextを関数で宣言しないと遷移できない
// router.beforeEach((to, from, next) => {
//   console.log('navigation guard: global - beforeEach')
//   // next(false);でもページ遷移しないようにできる
//   // next('/');などURLも設定できる。
//   // ただし設定したURLにいる時に実行されるとそこにいるのに、同じページにいこうとするのでループし続けてしまうので基本はif文と一緒につかう
//   if(to.path === '/users/2'){
//     next('/');
//     // objectも可能
//     // next({path: '/'});
//   }
  
//   next();
// })


new Vue({
  // router: router,
  // URLとコンポーネントとマッピングするVueRouter
  router,
  // このVueインスタンスに含まれてる全コンポーネントでstore.jsのデータにアクセスできるVuex
  store,
  render: h => h(App),
}).$mount('#app')
