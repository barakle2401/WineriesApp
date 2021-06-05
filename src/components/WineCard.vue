<template>
  <v-card class="mb-5">
    <v-row>
      <v-col cols="4" class="align-center justify-center d-flex">
        <v-img contain max-height="200" :src="wine.image"></v-img>
      </v-col>
      <v-col cols="12" md="8">
        <v-card-title> {{ wine.name }} - {{ wine.vintage }}</v-card-title>

        <v-card-subtitle>
          <v-rating
            :value="rating"
            background-color="white"
            color="yellow accent-4"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          Price: <span class="text--teal">{{ price }}</span>
        </v-card-subtitle>

        <v-btn @click="show = !show" x color="orange lighten-2" text>
          Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ wine.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  //   import store from "@/store";
  export default {
    props: {
      area: {
        type: String,
        required: true,
      },
      winery: {
        type: String,
        required: true,
      },
      wine: {
        type: Object,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      },
    },
    computed: {
      rating() {
        return this.wine.rating;
      },
      price() {
        return "$" + this.wine.price;
      },
    },
    data: () => ({
      show: false,
    }),
  };
</script>
<style scoped></style>
