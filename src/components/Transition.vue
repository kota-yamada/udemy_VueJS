<template>
    <div>
        <button @click="show = !show">switch</button>
        <!-- transitionタグには実際に表示される1要素しか置けない。v-ifでどちらか表示切り替えなどの場合は表示されるのはどちらかなので、タグ内にはどちらも置ける。複数置く時は1要素内にまとめる -->
        <!-- appear属性をつけるとリロード、初回描画の時にもtransition, animationが適用される。 -->
        <transition name="fade" appear>
            <div v-if="show">
                <p>fade out/in</p>
                <p>a</p>
                <p>b</p>
            </div>
        </transition>

        <transition name="slide" appear>
            <p v-if="show">slide in/out</p>
        </transition>

        <!-- 時間設定が被ってる場合、デフォルトでは長い方が優先されるが、type指定すると指定した方が優先される。 -->
        <transition name="fadeSlide" type="animation" appear>
            <p v-if="show">animation and transition</p>
        </transition>

        <!-- enter-activeなどのクラス名を任意のものに変更できる -->
        <!-- CSSに存在しないクラスを指定するとクラス名がないものとされる -->
        <!-- 基本的にはずっとついたままのenter-active-classにつける -->
        <transition name="fade" enter-class="" enter-active-class="animate__animated animate__shakeX" enter-to-class="" leave-class="" leave-active-class="animate__animated animate__bounce" leave-to-class="" appear>
            <div v-if="show">
                <p>animate.css</p>
                <p>custom transition class</p>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        }
    }
}
</script>

<style scoped>
/* <trainsition>にnameを指定しなかったv-enter~が自動的に設定される */
.fade-enter {
    /* 現れる時の最初の状態 */
    opacity: 0;
}
.fade-enter-active {
    /* 現れる時のトランジションの状態 */
    transition: opacity 1s;
}
.fade-enter-to {
    /* 現れる時の最後の状態 */
    opacity: 1;
}
.fade-leave {
    /* 消える時の最初の状態 */
    opacity: 1;
}
.fade-leave-active {
    /* 消える時のトランジションの状態 */
    transition: opacity 1s;
}
.fade-leave-to {
    /* 消える時の最後の状態 */
    opacity: 0;
}



/* CSSアニメーションで最初と最後の状態を指定しているから、enter, entere-to, leave, leave-toはいらない */
.slide-enter-active {
    animation: slide-in 0.5s;
}
.slide-leave-active {
    /* reverseをつけると逆動作（slide-out）を設定できる。 */
    animation: slide-in 0.5s reverse;
}

@keyframes slide-in {
    from {
        transform: translateX(100px);
    }
    to {
        transform: translateX(0);
    }
}

.fadeSlide-enter, .fadeSlide-leave-to {
    opacity: 0;
}
.fadeSlide-enter-active {
    animation: slide-in 0.5s;
    transition: opacity 1s;
}
.fadeSlide-enter-to, .fadeSlide-leave {
    
}
.fadeSlide-leave-active {
    animation: slide-in 0.5s reverse;
    transition: opacity 1s;
}


</style>