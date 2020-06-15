<template>
    <!-- template内には1つの要素でくくる必要がある -->
    <div>
        <p>like! {{likedNumber}}</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            likedNumber: 5
        }
    },
    methods: {
        increment() {
            this.likedNumber += 1
        }
    }
}
</script>