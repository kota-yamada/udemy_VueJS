<template>
    <div>
        <h1>Home</h1>
        <button @click="toUsers">move to Users page</button>
        <button @click="toUsersList">move to UserList page</button>
        <p>Count : {{ count }}</p>
        <p>doubleCount : {{ doubleCount }}</p>
        <p>tripleCount :{{ tripleCount }}</p>
        <!-- data入力方法1つ目 -->
        <input type="text" :value="message" @input="updateMessage">
        <!-- data入力方法2つ目 -->
        <input type="text" v-model="message">
        <p>{{ message }}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    methods: {
        toUsers() {
            // thisでrouterにアクセス
            // push("行きたいURL")
            // this.$router.push("users"); でもOK
            this.$router.push({
                name: "user-profile",
                params:{id:1}
            });
        },

        toUsersList() {
            // thisでrouterにアクセス
            // push("行きたいURL")
            // this.$router.push("users"); でもOK
            this.$router.push({
                name: "users-list",
            });
        },

        // data入力方法1つ目
        updateMessage(e){
            this.$store.dispatch("updateMessage", e.target.value)
        }
    },
    // Vuexのstore.jsにアクセスする時はcomputed
    computed: {
        count() {
            return this.$store.state.count;
        },
        
        // いろんなコンポーネントで使いたい式、関数をgettersにまとめておける
        // doubleCount() {
        //     return this.$store.getters.doubleCount;
        // },
        // tripleCount() {
        //     return this.$store.getters.tripleCount ;
        // }
        
        // 上記のthis.$store.gettersをまとめられる
        ...mapGetters(["message"]),
        // 名前空間を設定したら関数を書いているファイル名を第1引数にとる
        ...mapGetters("count", ["doubleCount", "tripleCount"]),
        // 名前空間を設定した場合の普通の書き方
        // doubleCount() {
        //     return this.$store.getters["count/doubleCount"];
        // }

        // オブジェクトの書き方もOK
        // {{keyDoubleCount}}という感じになる
        // ...mapGetters({
        //     keyDoubleCount: "doubleCount",
        //     keyTripleCount: "tripleCount"
        // }),

        // data入力方法2つ目
        // v-modelでvuexを使う時
        message: {
            get() {
                return this.$store.state.message;
            },
            set(value) {
                this.$store.dispatch("updateMessage", value)
            }
        }

    }
}
</script>