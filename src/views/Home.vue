<template>
    <div>
        <h1>Home</h1>
        <button @click="toUsers">move to Users page</button>
        <button @click="toUsersList">move to UserList page</button>
    </div>
</template>

<script>
export default {
    methods: {
        toUsers() {
            // thisでrouterにアクセス
            // push("行きたいURL")
            // this.$router.push("users"); でもOK
            this.$router.push({
                name: "user-profile",
                params:{id:1}
            });
        },

        toUsersList() {
            // thisでrouterにアクセス
            // push("行きたいURL")
            // this.$router.push("users"); でもOK
            this.$router.push({
                name: "users-list",
            });
        }
    }
}
</script>