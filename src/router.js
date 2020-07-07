import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// 遅延ローディング。動的import
const Home = () => import(/*webpackChunkName: 'home' */"./views/Home.vue");
import Users from "./views/Users.vue";
import UsersList from "./views/UsersList.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/UsersProfile.vue";
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUser from "./views/HeaderUser.vue";


// importしたRouterプラグインの使用宣言
Vue.use(Router);

// URLとコンポーネントのマッピング
export default new Router({
    // URLの＃を消す（デフォルト設定はhash）
    mode: 'history',
    routes: [
        {
            path: '/', 
            components: {
                default: Home,
                header: HeaderHome,
            },
            // 全ページの遷移時、その前に何か実行したい時に使うナビゲーションガード：local設定版beforeEnter
            // beforeEnter(to, from, next) {
            //     next();
            // }
        }, 
        { 
            path: "/users-list", 
            // router-viewを複数使い分けるためにApp.vueでname属性をkeyを設定し、components's'複数形にして名前つきビューを設定する
            components: {
                default: UsersList,
                header: HeaderUser,
            },
            name: "users-list"
        },
        // {path: "/users", component: Users},
        // /users:idと書くと何かしらの文字がURLの/usersの後についたら/usersにとばす（動的URL）
        {
            path: "/users/:id", 
            components: {
                default: Users,
                header: HeaderUser,
            }, 
            // 名前つきビューを設定したらpropsをオブジェクト形式にする必要がある
            props: {
                default: true,
                header: false,
            }, 
            // childrenを設定するとrouter-viewのコンポーネントの中にさらにrouter-viewを設定できる
            // '/'は最後尾にのみつけられる
            // nameを設定するとto属性を動的に操作できる
            children: [
                { path: "posts", component: UsersPosts, props: true, name: "user-posts"},
                { path: "profile", component: UsersProfile, props: true, name: "user-profile"}
            ]
        },
        {
            // リダイレクトする文字列
            // ＊は上記で設定されたもの以外全てという意味
            path: "*",
            // リダイレクト先設定
            redirect: "/"
        }
    ],
    // URLにつくidの#設定もhashで可能。ただし、デフォルトではそこまでスクロールしないようになっている。 ので、scrollBehavior関数をrouter.jsに設定する。
    // 初回リロードの後のURL遷移ごとに実行される。
    // 3つ引数をとれる
    // toとfromは$routeでアクセスできる
    scrollBehavior(to, from, savedPosition){
        console.log('scroll behavior');
        console.log('to');
        console.log(to);
        console.log('from');
        console.log(from);
        console.log('savedPosition');
        console.log(savedPosition);
        console.log(pageYOffset);

        console.log('end');
        // 戻るボタン押した時などに前回表示の位置を返すsavedPosition
        if(savedPosition){
            return savedPosition;
        }
        if(to.hash){
            // 遷移方法2 遷移先idの指定
            return{
                // router-linkに設定されている遷移先(to)のhashをとる
                selector: to.hash,
                // selector: "#next-user",
                // idの位置からずらしたいpx分指定できる
                offset: {x:0, y: 100}
            }
        }
        // 遷移方法1 xとy軸位置を指定する。
        // hashもsavedPositionもない場合
        return{ x: 0, y: 0 }
    }
});