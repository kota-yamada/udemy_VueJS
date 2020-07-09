// 機能ごとにコードを抜き出し、別ファイルに分割したモジュールを使う

const state = {
    count: 2,
};

const getters = {
    doubleCount(state){
        return state.count *2;
    },
    // アロー関数でもOK。第1引数でstateオブジェクトをとれる。
    // アロー関数はreturnを省略できるのでgettersと相性がいい
    tripleCount: state => state.count *3,

};

const mutations = {
    // numberを複数渡したい場合はobjectで書く
    increment(state, number){
        state.count += number;
    },
    decrement(state, number) {
        state.count -= number;
    },
};

const actions = {
    // numberを複数渡したい場合はobjectで書く
    increment(context, number) {
        context.commit('increment', number);
    },
    decrement({ commit }, number) {
        commit('decrement', number);
    },
};

export default {
    // 名前空間を設定する
    // 全てのgettersとかの名前にこのjsファイル名（count）が先頭に付く＝ユニークな名前になる
    namespaced: true,

    state,
    getters,
    mutations,
    actions
}