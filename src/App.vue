<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <!-- 親コンポーネントから子にデータを渡すときは親のコンポーネントに子に渡す属性名を書く -->
    <!-- DOMテンプレートではケバブケースでかく ここでもケバブが好ましい-->
    <LikeNumberTag v-bind:totalNumber="number"></LikeNumberTag> 
    <LikeNumberTag :total-number="number"></LikeNumberTag>
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
      number: 10
    }
  },
  components: {
    HelloWorld,
    LikeHeader // 本来はLikeHeader: LikeHeaderの書き方だが、keyとvalueが同じなら省略して書ける
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
