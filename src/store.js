import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    // global変数なので使い方には注意必要
    // データの予測と追跡に注意必要
    state:{
        count: 2,
    },
    // Vuex用の算出プロパティ(computed プロパティ)がgetter
    // いろんなコンポーネントで使いたい式、関数をgettersにまとめておける
    getters: {
        doubleCount(state){
            return state.count *2;
        },
        // アロー関数でもOK。第1引数でstateオブジェクトをとれる。
        // アロー関数はreturnを省略できるのでgettersと相性がいい
        tripleCount: state => state.count *3,
    },
    // データの内容（stateの内容）を変えられる場所を制限して、データの予測性や追跡性を高めるmutations
    // 基本的にはここの中でのみ、データの内容（stateの内容）を変える
    // 非同期処理はかけない
    mutations: {
        // numberを複数渡したい場合はobjectで書く
        increment(state, number){
            state.count += number;
        },
        decrement(state, number) {
            state.count -= number;
        },
    },
    // mutaionsにかけない非同期処理はactionsに書く
    // 同期処理書いてもOK
    actions: {
        // numberを複数渡したい場合はobjectで書く
        increment(context, number) {
            context.commit('increment', number);
        },
        decrement({ commit }, number) {
            commit('decrement', number);
        },
    }  
})