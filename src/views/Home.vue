<template>
  <div>
    <template>
      <v-row align="center">
        <h1 class="main-title">Discover Israelies Wineries</h1>
      </v-row>
    </template>
  </div>
</template>

<style scoped>
  body {
    height: 100vh;
  }
  div {
    background-image: url("../assets/images/grape-berries-basket.jpg");
    background-size: cover;
    background-position: center;
    min-height: 100%;
  }
  .main-title {
    font-size: 3rem !important;
    color: #d81b60;
    letter-spacing: 0.01rem;
    background-color: rgba(0, 0, 0, 0.39);
    padding: 1rem;
    border-radius: 30px;
  }
</style>

<script>
  export default {
    data() {
      return {
        text: "",
      };
    },
  };
</script>
