<template>
  <v-container>
    <!-- <div>{{ $attrs.winerySlug }}</div> -->
    <v-parallax dark :src="require(`@/assets/images/${winery.image}`)">
      <v-card elevation="3" class="pa-5 opacity-card">
        <v-row align="center" justify="center">
          <v-col class="text-left" cols="12">
            <h1 class="text-h4 font-weight-thin mb-4">{{ winery.name }}</h1>
            <h4 class="subheading">{{ winery.description }}</h4>
          </v-col>
        </v-row>
      </v-card>
    </v-parallax>

    <v-row class="mt-3">
      <v-col cols="12" md="3" v-for="(wine, i) in winery.wines" :key="wine.id">
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <WineCard
            :area="slug"
            :winery="$attrs.winerySlug"
            :wine="wine"
            :index="i"
          >
          </WineCard>
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import store from "@/store";
  import WineCard from "../components/WineCard";
  export default {
    props: {
      slug: {
        type: String,
        required: true,
      },
    },
    components: {
      WineCard,
    },

    data() {
      return {
        isActive: false,
        winery: store.state.areas
          .find((area) => area.slug === this.slug)
          .wineries.find((winery) => winery.slug === this.$attrs.winerySlug),
      };
    },
  };
</script>
<style scoped>
  .opacity-card {
    background-color: rgba(0, 0, 0, 0.39);
  }
  .opacity-card h1 {
    color: #d81b60;
  }
</style>
