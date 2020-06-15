// global component
Vue.component('global-component', {
    // componentではdataはfunctionで設定する　通常通り書くと全ての要素でdataの中身が共通のものになってしまう
    data: function(){
        return {
            number: 12,
            message: 'component'
        }
    },
    //componentではdataをfunctionで設定しないと下記のボタンを押したら全ての数字が一度に＋1されてしまう
    template: '<p>this is {{message}}! {{ number }}<button @click="increment">+1</button></p>',
    methods: {
        increment: function(){
            this.number += 1;
        }
    }
});
new Vue({
    el: '#app5',
})

// local component
// 基本的にはローカルを使う
var varlocalComponent = {
    data: function(){
        return {
            localnumber: 100,
            message: 'local component'
        }
    },
    template: '<p>this is {{message}}! {{ localnumber }}<button @click="incrementLocal">+1</button></p>',
    methods: {
        incrementLocal: function(){
            this.localnumber += 20;
        }
    }
}
new Vue({
    el: '#app6',
    components: {
        // 'HTMLで使うタグ': 事前に設定したcomponentのオブジェクトの変数名
        'local-component': varlocalComponent
    }
})


var vm1 = new Vue({
    el: '#app',
    data: {
        message: 'HelloWprld!!!',
        ok: true,
        // html要素として読み込み
        html: '<h1>this is h1.</h1>',
        // v-bind
        url: 'https://google.com',
        attribute: 'href',
        number: 31,
        twitterObject: {
            href: 'https://twitter.com',
            id: 33
        },
        // v-on
        vOnNumber: 0,
        mousePositionX: 0,
        mousePositionY: 0,
        // 引数
        vOnNumber2: 0,
        // 引数2
        mousePositionX2: 0,
        mousePositionY2: 0,
        vOnNumber3: 0,
        clickevent: "click",

        // css styleをobjectで表現 
        White: 'white',
        textColor: 'red',
        bgColor: 'blue',
        styleObject: {
            'background-color': 'red',
            color: 'blue',    
        },
        fontStyle: {
            'font-size': '14px',
        },

        // v-if
        ok: true,
        maybeOK: false,

        // v-for
        fruits: ['apple', 'banana', 'grape'],
        vForObject: {
            firstname: 'kota',
            lastname: 'yamada',
            age: 26
        }
    },

    methods: {
        reverseMesssage: function(){
            this.message = this.message.split('').reverse().join('')
            document.querySelector('p').style.color = 'red';
        },
        sayHi(){
            this.message = 'Hello Vue'
            return this.message
        },
        // v-on
        countUp: function(){
            this.vOnNumber += 1
        },
        // イベントオブジェクト
        mousePosition: function(event) {
            this.mousePositionX = event.clientX;
            this.mousePositionY = event.clientY;
        },
        // v-on 引数
        countUp2: function(times){
            this.vOnNumber2 += 1*times
        },
        // v-on 引数2
        mousePosition2: function(divideNumber, event) {
            this.mousePositionX2 = event.clientX / divideNumber;
            this.mousePositionY2 = event.clientY / divideNumber;
        },
        // stopPropagation
        noEvent: function(event){
            event.stopPropagation()
        },
        // prevent
        noJump: function(event) {
            event.preventDefault();
        },
        myAlert() {
            alert('alert!');
        },

        countUp3: function(){
            this.vOnNumber3 += 1
        },

        // v-for
        remove: function() {
            this.fruits.shift()
        }
    },

    computed: {
        lessThanThree: function(){
            return this.vOnNumber > 3 ? 'more than 3' : 'less than 3' 
        },
        // 中側からインスタンスにアクセスするとき
        myData: function(){
            return this.$data;
        }
    },

    // watchは非同期処理　computedが使えないときに使う
    watch: {
        counter: function(){
            var vm = this;
            setTimeout(function(){
                vm.vOnNumber = 0
            }, 3300)
        }
    }
})

var vm2 = new Vue({
    data: {
        message: 'instance2',
    },
    methods: {
        changeMessage1: function(){
            vm1.message = 'change by instance2'
        }
    },
})
// elプロパティを後付したい場合(あまり使わない) 
vm2.$mount('#app2')

new Vue({
    data: {
        temp: 'this is template property'
    },
    // DOMの他の表現方法・あまり使われないtemplateプロパティ
    template: '<p>{{ temp }}</p>'
}).$mount('#app3')
// ↑elプロパティを後付したい場合方法2(あまり使わない) 

// インスタンスのデータを全部取り出したい場合
console.log(vm1.$data)

// DOMの他の表現方法・render関数
new Vue({
    el: '#app4',
    data: {
        name: 'koty'
    },
    render: function(h){
        // 第1引数にタグ、第2引数に中身
        // 仮装Nodeを仮装DOMに与えている
        return h('h1', 'hello ' + this.name);
    }
})

var dir = document.createElement('div');
console.log(dir);
console.dir(dir);


