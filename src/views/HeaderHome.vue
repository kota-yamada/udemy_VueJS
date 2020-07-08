<template>
    <div>
        <h2>home header</h2>
        <!-- URLによって各コンポーネントの内容が動的に適用される -->
        <nav>
            <!-- aタグだとURL切り替わる度にネットワークにアクセスされるが、router-linkだと初回に全部読み込んで切り替えるので早い。 -->
            <!-- そのURLで始まるURLがアクティブな時につくclass、active-class属性。完全一致のURLにしたいはexact属性をつける。 -->
            <!-- exactがついていない/usersは、/usersで始まるURLがアクティブの時にはactive-classが適用される -->
            <router-link to="/" active-class="active-link" exact>Home</router-link>
            <router-link to="/users-list" active-class="active-link">Users</router-link>
        </nav>
        <!-- mapGettersのmutaions版mapMutations、またはactions版mapActionsを使った場合、引数はここの（）に書く -->
        <button @click="increment(1)">+1</button>
        <button @click="decrement(1)">-1</button>
        <!-- mutationsは非同期処理がかけないので、非同期処理を使うためにactionsを使う -->
        <!-- 引数はmutationsと違い、methodsに書く -->
        <!-- <button @click="increment">+1</button> -->
        <!-- <button @click="decrement">-1</button> -->
    </div>
</template>

<script>
// mapGettersのmutaions版mapMutations
// import {mapMutations} from 'vuex';

// actions版mapActions
import {mapActions} from 'vuex';

export default {
    methods: {
        // increment() {
        //     // global変数なので使い方、データの予測と追跡に注意必要
        //     // this.$store.state.count++;

        //     // mutationsを使って下記の書き方が好ましい
        //     this.$store.commit('increment', 1);
        // },
        // decrement() {
        //     // global変数なので使い方、データの予測と追跡に注意必要
        //     // this.$store.state.count--;
            
        //     // mutationsを使って下記の書き方が好ましい
        //     this.$store.commit('decrement', 1);
        // },
        // mapGettersのmutaions版mapMutations
        // mapMutationsを使った場合、引数はHTMLタグv-onの（）に書く
        // ...mapMutations(["increment", "decrement"])

        // mutationsは非同期処理がかけないので、非同期処理を使うためにactionsを使う
        // increment(){
        //     this.$store.dispatch("increment", 1);
        // },
        // decrement(){
        //     this.$store.dispatch("decrement", 1);
        // }
        // mapGettersのactioins版mapActions
        ...mapActions(["increment", "decrement"])
    }
}
</script>