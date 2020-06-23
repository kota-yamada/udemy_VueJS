<template>
    <div>
        <p>aaa</p>
        <!-- computedとの違いはfilterは引数を取れるから同じ関数を何度も使える。computedは引数をとれないので、property/dataごとに関数を作らなくてはならない。その代わりcomputedの方が早い。 -->
        <p>{{ globalFilter | lowerCase }}</p>
        <p>↓mix in file</p>
        <mixInTo></mixInTo>
    </div>
</template>

<script>
import mixInTo from './MixInTo.vue';
import { mixInFrom } from "@/MixInFrom"

export default {
    mixins: [mixInFrom],
    data() {
        return {
            // mix in元のdataよりコンポーネントに書かれているdataが優先（上書き）される。
            globalFilter: "global Filter In Components"
        }
    },
    components: {
        mixInTo,
    }
}
</script>