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

        <br>
        <!-- name属性を動的に変更し動的transitionを作る -->
        <button @click="myAnimation = 'slide'">slide</button>
        <button @click="myAnimation = 'fade'">fade</button>
        <p>{{myAnimation}}</p>
        <!-- 複数の要素が切り替わるtransitionでは消える要素と現れる要素が同じタイミングで消える/現れる。ので、mode属性でタイミングをずらす。普通使われるのはout-inで、消えてから現れる。in-outが現れてから消える。 -->
        <transition :name="myAnimation" appear mode="out-in">
            <!-- v-ifなどで要素を切り替える時に切り替えるタグが同じ場合はその中身のみ書き換わるので、属性で設定されているtransition/animationが効かない。そのため、key属性をつけて同じタグでもタグごと書き換わるようにする -->
            <p v-if="show" key="A">name属性を動的に変更し動的transitionを作る</p>
            <p v-else key="B">複数の要素を切り替える</p>
        </transition>

        <br>
        <!-- 動的コンポーネントのtransition -->
        <button @click="myComponent = 'ComponentA'">component A</button>
        <button @click="myComponent = 'ComponentB'">component B</button>
        <transition :name="myAnimation" mode="out-in" appear>
            <component :is="myComponent"></component>
        </transition>

        <br>
        <!-- JavaScriptでアニメーションを作る -->
        <!-- :css="false"でCSSアニメーションを適用しないようにする。v-bind:css -->
        <transition :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled">
            <div class="circle" v-if="show"></div>
        </transition>
    </div>
</template>

<script>
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

export default {
    components: {
        ComponentA,
        ComponentB
    },
    data() {
        return {
            show: true,
            myAnimation: "slide",
            myComponent: 'ComponentA'
        }
    },
    // methods: {
    //     // JavaScriptでアニメーションを作る
    //     // JavaScriptフック
    //     // elでDOM要素を対象として変更を加える
    //     beforeEnter(el) {
    //         // 現れる前
    //     },
    //     enter(el, done) {
    //         // 現れる時
    //         // アニメーションが終わった時を示すの第二引数done関数。非同期処理に使う。CSSアニメーションも設定されている時は設定しなくてもOK。doneをつけるとCSSアニメーション時間が残っていてもアニメーションを終了させる。
    //     },
    //     afterEnter(el) {
    //         // 現れた後
    //     },
    //     enterCancelled(el) {
    //         // 現れるアニメーションがキャンセルされた時
    //     },
    //     beforeLeave(el) {
    //         // 消える前
    //     },
    //     leave(el, done) {
    //         // 消える時
    //         // アニメーションが終わった時を示すの第二引数done関数。非同期処理に使う。CSSアニメーションも設定されている時は設定しなくてもOK。doneをつけるとCSSアニメーション時間が残っていてもアニメーションを終了させる。
    //     },
    //     afterLeave(el) {
    //         // 消えた後
    //     },
    //     leaveCancelled(el) {
    //         // 消えるアニメーションがキャンセルされた時
    //         // v-showと一緒に使う時だけ有効
    //     }
    // }
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


.circle {
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 100px;
    background-color: blue;
}


</style>


