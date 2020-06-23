<template>
  <v-app-bar id="nav-bar" app color="primary" dark>
    <v-btn v-on:click="goToHome" depressed small color="primary"
      >ALL ALBUMS</v-btn
    >
    <v-btn v-on:click="prevPage" depressed small color="primary"
      >PREV ALBUM</v-btn
    >
    <v-btn v-on:click="nextPage" depressed small color="primary"
      >NEXT ALBUM</v-btn
    >
  </v-app-bar>
</template>
<script>
import router from "../router/index";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAlbumID"]),
  },
  methods: {
    ...mapActions(["fetchNextAlbumID", "fetchPrevAlbumID", "clearState"]),
    nextPage: function() {
      this.fetchNextAlbumID();
    },
    prevPage: function() {
      this.fetchPrevAlbumID();
    },
    goToHome: function() {
      router.push("/");
      this.clearState();
    },
  },
};
</script>
<style scoped></style>
