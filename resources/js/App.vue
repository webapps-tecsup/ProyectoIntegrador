<template>
    <v-app>
        <Navbar v-if="$route.path != '/login'"></Navbar>
        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>
<script></script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");

#app {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
