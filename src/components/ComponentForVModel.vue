<template>
    <div>
        <p>コンポーネントでv-modelを使うには</p>
        <label for="title">title</label>
        <input id="title" type="text" :value="value" @input="$emit('input', $event.target.value)">
        <pre>{{value}}</pre>
    </div>
</template>

<script>
export default {
    // コンポーネントでv-modelを使うには親から子にデータを渡すpropsを子コンポーネントに書く、親コンポーネントのdataに初期値を書く
    props: ["value"],
}
</script>