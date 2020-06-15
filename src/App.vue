<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumberTag></LikeNumberTag>
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
  components: {
    HelloWorld,
    LikeHeader // 本来はLikeHeader: LikeHeaderの書き方だが、keyとvalueが同じなら省略して書ける
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
