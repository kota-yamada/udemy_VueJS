<template>
    <div>
        <h3>Users</h3>
        <button @click="toHome">move to Home page</button>
        <br>
        <!-- :を使って動的なルートを使うとライフサイクルフックが呼ばれない。パラメータだけ変わってURLは変わってない。同じコンポーネントインスタンスが再利用されている。 -->
        <router-link to="/users/1">user1</router-link>
        <router-link to="/users/2">user2</router-link>
        <hr>
        <!-- router.jsでマッピング設定した文字（今回はid） -->
        <h1>User No. {{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
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
    watch: {
        $route(to, from){
            // toは切り替った後のルートオブジェクト、fromは切り替わる前
            console.log(to);
            console.log(from);
        }
    }
}
</script>