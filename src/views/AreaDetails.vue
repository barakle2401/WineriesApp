<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col md="5" sm="12" v-for="winery in area.wineries" :key="winery.id">
        <v-card class="m-12" outlined>
          <p class="pa-2">{{ winery.description }}</p>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="50vh"
          >
            <v-card-title v-text="winery.name"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>

<script>
  import store from "@/store";
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
      return {};
    },
  };
</script>
