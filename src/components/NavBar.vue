<template>
  <div>
    <ul class="navbar">
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
  </div>
</template>

<style scoped>
  .navbar {
    background: #000000;
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

    padding: 0.25rem 1rem;
  }
  .navbar a {
    text-decoration: none;
    color: white;
  }
  .navbar a:hover {
    text-decoration: none;
    color: #d81b60;
  }
  .navbar :active {
    text-decoration: none;
    color: #d81b60;
  }
  .router-link-exact-active {
    color: #d81b60 !important;
  }
</style>

<script>
  import store from "@/store";
  export default {
    data() {
      return {
        areas: store.state.areas,
      };
    },
  };
</script>
