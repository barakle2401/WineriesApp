<template>
  <div>WINERY</div>
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
    data() {
      return {
        areas: store.state.areas,
      };
    },
  };
</script>
