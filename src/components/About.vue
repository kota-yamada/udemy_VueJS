<template>
    <div>
        <p>Aboutコンポーネント</p>
        <input>
    </div>
</template>

<script>
export default {
    // keep-aliveを使うと新たに2つのライフサイクルイベントが使用可能になる。deactivated()とactivated()
    deactivated(){
        console.log('Aboutがdeactivateされました');
    },
    activated() {
        console.log('Aboutがactivateされました')
    }
}
</script>