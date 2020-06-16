<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <!-- 親コンポーネントから子にデータを渡すときは子でpropsで定義したプロパティを属性名として親に書く -->
    <!-- DOMテンプレートではケバブケースでかく ここでもtotal-numberなどケバブが好ましい-->
    <!-- 子から親コンポーネントにデータを渡す時は受け取り役のv-onディレクティブと受け取りメソッドを親に書く。-->
    <LikeNumberTag :total-number="number" @any-name-you-want="addChildData"></LikeNumberTag> 
    <!-- またはでもOK。$eventは受け取ったデータ（子コンポーネント内の$emitの第2引数）を表す -->
    <LikeNumberTag v-bind:totalNumber="number" @any-name-you-want="number = $event"></LikeNumberTag>
    <LikeNumberTag :test-props="testText"></LikeNumberTag>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// local component
import HelloWorld from './components/HelloWorld.vue'
import LikeHeader from './components/LikeHeader.vue';

export default {
  name: 'App',
  data(){
    return {
      number: 10,
      testText: 'this is props text defined in Parent by object'
    }
  },
  components: {
    HelloWorld,
    LikeHeader // 本来はLikeHeader: LikeHeaderの書き方だが、keyとvalueが同じなら省略して書ける
  },
  methods: {
    // 子から親コンポーネントにデータを渡す時は受け取り役のv-onディレクティブと受け取りメソッドを親に書く
    addChildData(value) {
    // 子コンポーネント内の$emitの第2引数を"value"で受け取れる
      this.number = value
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
    border: 1px solid blue;
}
</style>
