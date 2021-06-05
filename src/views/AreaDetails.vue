<template>
  <v-container fluid class="area">
    <v-row dense justify="center">
      <v-col
        col="12"
        md="4"
        sm="12"
        v-for="winery in area.wineries"
        :key="winery.id"
      >
        <v-card class="m-12" outlined>
          <v-img
            :src="require(`@/assets/images/${winery.image}`)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="30vh"
          >
            <router-link
              class="no-underline"
              :to="{
                name: 'WineryDetails',
                params: { winerySlug: winery.slug },
              }"
            >
              <v-card-title v-text="winery.name"></v-card-title>
            </router-link>
          </v-img>
          <div class="pa-2">
            <p>
              {{ winery.description }}
            </p>
            <router-link
              style="color: red"
              :to="{
                name: 'WineryDetails',
                params: { winerySlug: winery.slug },
              }"
            >
              <v-icon>{{ svgPath }}</v-icon>
            </router-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .v-card__title {
    font-size: 2rem;
    font-weight: 500;
    color: #d81b60;
    background-color: rgba(0, 0, 0, 0.39);
    padding: 1rem;
    border-radius: 0 5px 0 0;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
  }
  .no-underline {
    text-decoration: none;
  }
</style>

<script>
  import store from "@/store";
  import { mdiMagnifyPlusOutline } from "@mdi/js";
  export default {
    props: {
      slug: {
        type: String,
        required: true,
      },
    },
    methods: {},
    computed: {
      area() {
        return store.state.areas.find((area) => area.slug === this.slug);
      },
    },
    data() {
      return {
        svgPath: mdiMagnifyPlusOutline,
      };
    },
  };
</script>
