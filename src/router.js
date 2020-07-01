import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";


// importしたRouterプラグインの使用宣言
Vue.use(Router);

// URLとコンポーネントのマッピング
export default new Router({
    // URLの＃を消す（デフォルト設定はhash）
    mode: 'history',
    routes: [
        {path: '/', component: Home}, 
        {path: "/users", component: Users},
        // /users:idと書くと何かしらの文字がURLの/usersの後についたら/usersにとばす（動的URL）
        {path: "/users/:id", component: Users}
    ]
});

