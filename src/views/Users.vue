<template>
    <div>
        <h3>Users</h3>
        <button @click="toHome">move to Home page</button>
        <hr>
        <!-- :を使って動的なルートを使うとライフサイクルフックが呼ばれない。パラメータだけ変わってURLは変わってない。同じコンポーネントインスタンスが再利用されている。 -->
        <router-link to="/users/1">user1</router-link>
        <router-link to="/users/2">user2</router-link>
        <hr>
        <!-- router.jsでマッピング設定した文字（今回はid） -->
        <!-- <h1>User No. {{ $route.params.id }}</h1> -->
        <!-- router.jsでpropsをtrueを設定すればidだけでアクセスできる -->
        <h1>User No. {{ id }}</h1>
        <hr>
        <router-view></router-view>
        <!-- to属性を動的にする -->
        <!-- パターン1 -->
        <hr>
        <br>
        <!-- パターン2オブジェクトで設定 -->
        <!-- router.jsでnameを設定しておき、ここでname属性とparams属性を設定 -->
        <!-- paramsを使う時はpathではなく必ずhameを使う -->
        <!-- quertも設定可能。nameじゃなくてpathプロパティでもOK -->
        <!-- URLにつくidの#設定もhashで可能。ただし、デフォルトではそこまでスクロールしないようになっている。 ので、scrollBehavior関数をrouter.jsに設定する。-->
        <router-link :to="{ name: 'user-profile', params: { id: Number(id)+1}, query:{lang: 'ja', page: 2}, hash: '#next-user' }">to next user</router-link>
        <div style="height: 1000px"></div>
        <router-link id="next-user" :to="'/users/' + (Number(id)+1) + '/profile'">to next user</router-link>

    </div>
</template>

<script>
export default {
    props: [
        "id"
    ],
    methods: {
        toHome() {
            // thisでrouterにアクセス
            // push("行きたいURL")
            // this.$router.push({path: "users"}); でもOK
            this.$router.push("/");
            
        }
    },
    // :を使って動的なルートを使うとライフサイクルフックが呼ばれない。パラメータだけ変わってURLは変わってない。同じコンポーネントインスタンスが再利用されている。
    // createdなどに初期設定の処理で書いていても、user1/2の切り替え時に処理したくてもされない。切り替わっても処理されるようにするにはwatchを使う。
    // watch: {
    //     $route(to, from){
            // toは切り替った後のルートオブジェクト、fromは切り替わる前
            // console.log(to);
            // console.log(from);
    //     }
    // },

    // 特定のページの遷移時、その前に何か実行したい時に使うナビゲーションガード
    // ルートコンポーネント（router.jsに設定されているコンポーネント）に設定でき、3つある
    // beforeEachやbeforeEnter違い、thisを取ることができ、leaveやupdate時もとれる
    beforeRouteEnter(to, from, next){
        console.log('specific-navigation guard : beforeRouteEnter')
        // beforeRouteEnterはコンポーネントがインスタンスされる前に実行されるのでthisが指定できない
        // ので、next()内でのみ、vmを設定でき、アクセスできる。非同期的に実行される
        next(vm => {
            console.log(vm.id);
        });
    },
    // beforeRouteUpdateはvueインスタンスが消えたり増えたり（ライフサイクルフックcreatedやdestroy）がない時に実行される
    // 上の方に記述のewatchと同じ動き
    beforeRouteUpdate(to, from, next){
        console.log('specific-navigation guard : beforeRouteUpdate')
        next();
    },
    beforeRouteLeave(to, from, next){
        console.log('specific-navigation guard : beforeRouteLeave');
        // 下記パターンなどでよく使われる
        const isLeave = window.confirm('本当に離れますか？');
        if(isLeave){
            next();
        } else {
            next(false);
        }
    },
}
</script>

<style scoped>
</style>