<template>
  <div>
    <!-- {{ this.$route.params.albumId }} -->
    <h1 class="header">
      Photo from album '{{ getAlbums[this.$route.params.albumId].title }}'
    </h1>

    <ManagePhoto />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ManagePhoto from "../components/ManagePhoto";
export default {
  name: "Album",
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["getPhotobyAlbumID", "getAlbums"]),
  },
  components: {
    ManagePhoto,
  },
  mounted: function() {
    this.fetchPhotobyAlbumID(this.$route.params.albumId);
  },
  methods: {
    ...mapActions(["fetchPhotobyAlbumID"]),
  },
};
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
