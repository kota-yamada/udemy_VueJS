<template>
    <div>
        <p>about v-model</p>
        <label for="title">title</label>
        <input id="title" type="text" v-model="eventData.title">
        <p>{{ eventData.title }}</p>

        <!-- 入力の度にエラーメッセージが出たら不便な時に使う。メアドとか -->
        <label for="title">about  v-model.lazy</label>
        <input id="title" type="text" v-model.lazy="eventData.titleLazy">
        <p>{{ eventData.titleLazy }}</p>

        <!-- 初期値が0で、typeがnumberでも数字が変わるとstringになってしますので.numberを使う -->
        <label for="maxNumber">max number</label>
        <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
        <p>{{ eventData.maxNumber }}</p>
        <p>{{ typeof eventData.maxNumber }}</p>

        <!-- 先頭の空白や改行を取り除く.trim -->
        <label for="host">主催者</label>
        <input id="host" type="text" v-model.trim="eventData.host">
        <pre>{{ eventData.host }}</pre>

        <!-- 複数行の表示 -->
        <label for="detaii">detail</label>
        <textarea id="detaii" cols="30" rows="10" v-model="eventData.detaii"></textarea>
        <p style="white-space: pre;">{{ eventData.detaii }}</p>

        <!-- 単体のチェックボックス -->
        <input id="isPrivate" type="checkbox" v-model="eventData.isPrivate">
        <label for="isPrivate">非公開</label>
        <pre>{{ eventData.isPrivate }}</pre>

        <!-- 複数のチェックボックス -->
        <label for="10">teen</label>
        <input type="checkbox" id="10" value="teen" v-model="eventData.age">
        <label for="20">twenteen</label>
        <input type="checkbox" id="20" value="twenteen" v-model="eventData.age">
        <label for="30">thirteen</label>
        <input type="checkbox" id="30" value="thirteen" v-model="eventData.age">
        <pre>{{ eventData.age }}</pre>

        <!-- ラジオボタン -->
        <!-- v-modelで同じものを設定するだけでラジオボタンをまとめてくれる -->
        <input type="radio" id="free" value="無料" v-model="eventData.price">
        <label for="free">無料dayo</label>
        <input type="radio" id="paid" value="有料" v-model="eventData.price">
        <label for="paid">有料だよ</label>
        <pre>{{ eventData.price }}</pre>

        <!-- select box -->
        <!-- multipleをselectタグ内につけると複数選択できる -->
        <select v-model="eventData.location">
            <option v-for="location in locations" :key="location">{{ location }}</option>
        </select>
        <pre>{{ eventData.location }}</pre>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
            locations: ["tokyo", "osaka", "nagoya"],
            eventData: {
                title: "v-modelのタイトル",
                titleLazy: "about v-model.lazy",
                maxNumber: 0,
                host: "",
                detaii: "",
                isPrivate: false,
                age: [],
                price: "無料",
                location: "tokyo"
            }
        }
    }
}
</script>