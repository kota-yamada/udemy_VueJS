<template>
    <div>
        <h2>home header</h2>
        <!-- URLによって各コンポーネントの内容が動的に適用される -->
        <nav>
            <!-- aタグだとURL切り替わる度にネットワークにアクセスされるが、router-linkだと初回に全部読み込んで切り替えるので早い。 -->
            <!-- そのURLで始まるURLがアクティブな時につくclass、active-class属性。完全一致のURLにしたいはexact属性をつける。 -->
            <!-- exactがついていない/usersは、/usersで始まるURLがアクティブの時にはactive-classが適用される -->
            <router-link to="/" active-class="active-link" exact>Home</router-link>
            <router-link to="/users-list" active-class="active-link">Users</router-link>
        </nav>
    </div>
</template>