<template>
    <!-- template内には1つの要素でくくる必要がある -->
    <div>
        <p>like! {{likedNumber}}</p>
        <!-- 親コンポーネントから子にデータを渡すときは子にpropsとその中で書いたプロパティを書く -->
        <p>parent total number like! {{totalNumber}}</p>
        <p>half total number {{halfTotalNumber}}</p>
        <button @click="increment">+1</button>
        <!-- 親コンポーネントから子にデータを渡すときは子にpropsとその中で書いたプロパティを書く -->
        <p>{{testProps}}</p>
        <p>Pass data to Parent component from child (= execute actinos)</p>
        <!-- 子から親コンポーネントにデータを渡す時は渡し役のv-onとメソッドを子に書く -->
        <button @click="passDataToParentFromChild">pass data to parent</button>
    </div>
</template>

<script>
export default {
    // 親コンポーネントから子にデータを渡すときは子にpropsとその中で書いたプロパティを書く
    // ここではキャメルケースが望ましい。が、親コンポーネントでのディレクティブではケバブが望ましい
    // propsの書き方は配列とオブジェクトの2通り
    // props: ["totalNumber", "testProps"],
    props: {
        totalNumber:{
            type: Number,
            default: 100
        },
        testProps: {
            type: String,
            default: 'this is default text for props by object'
        }
    },
    data: function(){
        return {
            likedNumber: 5
        }
    },
    methods: {
        increment() {
            this.likedNumber += 1;
            this.totalNumber += 1;
        },
        // 子から親コンポーネントにデータを渡す時は渡し役のv-onとメソッドを子に書く$emitを使う
        passDataToParentFromChild(){
            // $emitは本来はカスタムイベントを作成し子に反応して親でイベントを起こすということであり、データの受け渡しという意味での方法ではない
            // Javascript（キャメルケースが基本）で使うタイミングがないからカスタムイベント名はケバブケース。
            this.$emit('any-name-you-want', this.totalNumber + 1)
        }
    },
    computed:{
        halfTotalNumber(){
            return this.totalNumber/2
        }
    }
}
</script>

<style scoped>
div {
    border: 1px solid red;
}
</style>