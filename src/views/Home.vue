<template>
    <div>
        <h1>Home</h1>
        <button @click="toUsers">move to Users page</button>
        <button @click="toUsersList">move to UserList page</button>
        <p>Count : {{ count }}</p>
        <p>doubleCount : {{ doubleCount }}</p>
        <p>tripleCount :{{ tripleCount }}</p>
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
        ...mapGetters(["doubleCount", "tripleCount"]),
        // オブジェクトの書き方もOK
        // {{keyDoubleCount}}という感じになる
        // ...mapGetters({
        //     keyDoubleCount: "doubleCount",
        //     keyTripleCount: "tripleCount"
        // }),

    }
}
</script>