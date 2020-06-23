<template>
  <v-app-bar id="nav-bar" app color="primary" dark>
    <v-btn v-on:click="goToHome" depressed small color="primary"
      >ALL ALBUMS</v-btn
    >
  </v-app-bar>
</template>
<script>
import router from "../router/index";
export default {
  methods: {
    goToHome: function() {
      router.push("/");
    },
  },
};
</script>
<style scoped></style>
