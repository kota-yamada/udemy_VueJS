<template>
  <div>
    <!-- VueRouter -->
    <!-- URLによって各コンポーネントの内容が動的に適用される -->
    <nav>
      <!-- aタグだとURL切り替わる度にネットワークにアクセスされるが、router-linkだと初回に全部読み込んで切り替えるので早い。 -->
      <!-- そのURLで始まるURLがアクティブな時につくclass、active-class属性。完全一致のURLにしたいはexact属性をつける。 -->
      <!-- exactがついていない/usersは、/usersで始まるURLがアクティブの時にはactive-classが適用される -->
      <router-link to="/" active-class="active-link" exact>Home</router-link>
      <router-link to="/users" active-class="active-link">Users</router-link>
    </nav>
    <router-view></router-view>

    <Transition></Transition>
    <filterMixIn></filterMixIn>

    <customDirective></customDirective>
    <Vmodel></Vmodel>
    <!-- componentでv-modelを使う場合 -->
    <useVmodelInCompo v-model="compoVModel.title"></useVmodelInCompo>

    <!-- 動的コンポーネントの切り替え -->
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!-- <p>動的コンポーネントは毎回インスタンスがdestroyed状態、コンポーネントが再生性されている。キャッシュが残らないタブ移動した時とかinputタグの内容とか全部飛ぶ</p>
    <p>キャッシュを残すためにはcomponentタグをkeep-aliveタグで囲む</p> -->
    <!-- keep-aliveを使うと新たに2つのライフサイクルイベントが使用可能になる。deactivated()とactivated() -->
    <keep-alive>
      <!-- 親コンポーネントにでdataとcomponentタグを用意し、:is属性にdataを渡す -->
      <component :is="currentComponent"></component>
    </keep-alive>
    <!-- <Home v-if="currentComponent === 'Home'"></Home>
    <About v-if="currentComponent === 'About'"></About> -->

    <!-- 親コンポーネントにて、データが受け渡し先の子コンポーネントのタグに何も書かれていない時（templateも書かれていないと判断される）は<br>子コンポーネント内のスロット内に書いた文章がデフォルト文章として表示される -->
    <LikeHeader header-text="hello"></LikeHeader>

    <p>templateタグはslotに何も記載していないと判断されるため、slotのデフォルメテキストが表示される↓</p>

    <LikeHeader>
      <!-- 複数のslotを用意し、それぞれに任意のデータを渡したい時は親コンポーネントにてtemplateタグを作り、v-slotディレクティブを設定し、v-slotで指定したものをslotタグのname属性に指定する。 -->

      <template v-slot:anyNameYouWant>
        <p>templateタグ内↓</p>
        <p>v-slotを設定したslot1↓</p>
        複数のslotを用意し、それぞれに任意のデータを渡したい時は親コンポーネントにてtemplateタグを作り、<br>v-slotディレクティブを設定し、v-slotで指定したものをslotタグのname属性に指定する。
        <p>v-slotを設定したslot1↑</p>
        <p>templateタグ内↑</p>
      </template>


      <!-- v-slot:は#で書き換えられる -->
      <template #anyNumber>
        <p>templateタグ内↓</p>
        <p>v-slotを設定したslot2↓</p>
        <p>{{number}}</p>
        <p>v-slotを設定したslot2↑</p>
        <p>templateタグ内↑</p>
      </template>
    </LikeHeader>

    <LikeHeader header-text="hello">
      <!-- 親コンポーネントから子にHTMLテンプレート毎データを渡す時は渡す子タグ内に内容を通常通り書く -->
      <!-- 何も書かないslotは親コンポーネント内でtemplateで囲われていない部分が入る -->
      <!-- templateで囲われていない部分がv-slot:defaultとして自動的に設定され、何も書かないslotのnameにdefaultが設定される -->
      <!-- templateで囲われていない↓この部分がdefaultになる -->
      <p>v-slot:defaultのslot↓</p>
      <h1>total like number</h1>
      <h2>{{ number }}</h2>
      <p>v-slot:defaultのslot↑</p>
    </LikeHeader>

    <LikeHeader>
      <template v-slot:anyNumber="slotProperty">
        <p>slot property</p>
        <p>{{ slotProperty }}</p>
      </template>
    </LikeHeader>

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
import Home from './components/Home.vue';
import About from './components/About.vue';
import Vmodel from './components/V_model.vue';
import useVmodelInCompo from './components/ComponentForVModel.vue';
import customDirective from './components/CustomDirective.vue';
import filterMixIn from './components/FilterMixIn.vue';
import Transition from './components/Transition.vue';


export default {
  name: 'App',
  data(){
    return {
      number: 10,
      testText: 'this is props text defined in Parent by object',
      // 親コンポーネントにでdataとcomponentタグを用意し、:is属性にdataを渡す
      currentComponent: "Home",
      // コンポーネントでv-modelを使うには親から子にデータを渡すpropsを子コンポーネントに書く、親コンポーネントのdataに初期値を書く
      compoVModel: {
        title: ""
      }
    }
  },
  components: {
    HelloWorld,
    LikeHeader, // 本来はLikeHeader: LikeHeaderの書き方だが、keyとvalueが同じなら省略して書ける
    Home,
    About,
    Vmodel,
    useVmodelInCompo,
    customDirective,
    filterMixIn,
    Transition
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
