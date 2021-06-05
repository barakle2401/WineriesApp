<template>
  <div>
    <div class="d-flex align-center justify-center px-5">
      <ul class="navbar mx-auto">
        <router-link to="/"> Home </router-link>
        <li :key="area.id" v-for="area in areas">
          <router-link
            :to="{
              name: 'AreaDetails',
              params: { slug: area.slug },
            }"
          >
            {{ area.name }}
          </router-link>
        </li>
      </ul>
      <ThemeToggler />
    </div>
  </div>
</template>

<style scoped>
  .navbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-size: 1.6rem;
  }
  .navbar li {
    margin: 0 0.5rem;
    list-style: none;
    font-weight: 400;

    padding: 1rem;
  }
  .navbar a {
    text-decoration: none;

    padding: 0.5rem 1rem;
  }
  .navbar a:hover {
    text-decoration: none;
    color: #d81b60;
  }
  .navbar :active {
    text-decoration: none;
    color: #d81b60;
  }
  .wine-app-active-class {
    color: #d81b60 !important;
    font-weight: 600;
  }
</style>

<script>
  import store from "@/store";
  import ThemeToggler from "./ThemeToggler";
  export default {
    components: {
      ThemeToggler,
    },
    data() {
      return {
        areas: store.state.areas,
      };
    },
  };
</script>
