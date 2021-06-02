<template>
  <div id="app">
    <v-app>
      <NavBar></NavBar>

      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </v-app>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";

  export default {
    name: "App",
    components: {
      NavBar,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .jumbotron {
    height: 100vh;
  }
</style>
