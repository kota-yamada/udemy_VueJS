<template>
    <!-- template内には1つの要素でくくる必要がある -->
    <div>
        <p>like! {{likedNumber/2}}</p>
        <p>parent total number like! {{totalNumber}}</p>
        <p>half total number {{halfTotalNumber}}</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default {
    // 親コンポーネントから子にデータを渡すときは子にpropsを書く
    // ここではキャメルケースが望ましい
    props: ["totalNumber"],
    data: function(){
        return {
            likedNumber: 5
        }
    },
    methods: {
        increment() {
            this.likedNumber += 1
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