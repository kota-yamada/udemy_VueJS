<template>
    <div>
        <h1>Home</h1>
        <button @click="toUsers">move to Users page</button>
    </div>
</template>

<script>
export default {
    methods: {
        toUsers() {
            // thisでrouterにアクセス
            // push("行きたいURL")
            // this.$router.push({path: "users"}); でもOK
            this.$router.push("users");
            
        }
    }
}
</script>