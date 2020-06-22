<template>
  <div class="home">
    <v-row v-bind:key="index" v-for="(item, index) in getAlbums">
      <v-col>
        <div>{{ item.title }} {{ index }}</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data: function() {
    return {
      page: 1,
      pageSize: 10,
    };
  },
  computed: {
    ...mapGetters(["getAlbums"]),
  },
  components: {},
  mounted: function() {
    this.fetchAlbums();
  },
  methods: {
    ...mapActions(["fetchAlbums"]),
  },
};
</script>
