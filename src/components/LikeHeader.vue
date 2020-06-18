<template>
    <!-- 親コンポーネントから子にHTMLテンプレート毎データを渡す時は子コンポーネントに<slot>タグを書く -->
    <!-- slotを使う時はCSSスタイル以外はこのインスタンス内では設定できない（dataなど設定して使えない） -->
    <div class='slot_div'>
        <slot>
            <p>slotのデフォルトテキスト↓</p>
            <p>親コンポーネントにて、データが受け渡し先の子コンポーネントのタグに何も書かれていない時は<br>子コンポーネント内のスロット内に書いた文章がデフォルト文章として表示される</p>
            <p>slotのデフォルトテキスト↑</p>
        </slot>
        <p>{{headerText}}</p>

        <!-- 複数のslotを用意し、それぞれに任意のデータを渡したい時は親コンポーネントにてtemplateタグを作り、v-slotディレクティブを設定し、v-slotで指定したものをslotタグのname属性に指定する。 -->
        <slot name="anyNameYouWant"></slot>
        <slot name="anyNumber"></slot>

        <!-- 何も書かないslotは親コンポーネント内でtemplateで囲われていない部分が入る -->
        <!-- templateで囲われていない部分がv-slot:defaultの名前付きslotが自動的に設定され、何も書かないslotのnameにdefaultが設定される -->
        <!-- <p>何も書かないslot↓</p> -->
        <slot></slot>

        <slot :slotPropertyText="user"></slot>
    </div>
</template>

<script>
export default {
    props: ['headerText'],
    data() {
        return {
            user: {
                slotPropertyText: 'text for slot property',
            }
        }
    }
};
</script>