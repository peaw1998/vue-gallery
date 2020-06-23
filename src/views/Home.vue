<template>
  <div>
    <ManagePage v-bind:items="getAlbums" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ManagePage from "../components/ManagePage";
export default {
  name: "Home",
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["getAlbums"]),
  },
  components: {
    ManagePage,
  },
  mounted: function() {
    this.fetchAlbums();
  },
  methods: {
    ...mapActions(["fetchAlbums"]),
  },
};
</script>
<style scoped></style>
