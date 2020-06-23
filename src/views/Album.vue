<template>
  <div>
    <!-- {{ this.$route.params.albumId }} -->
    <h1 class="header">
      Photo from album '{{ getAlbums[getAlbumID - 1].title }}'
    </h1>
    <ManagePhoto v-bind:isLoading="isLoading" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ManagePhoto from "../components/ManagePhoto";
import router from "../router";
export default {
  name: "Album",
  data: function() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["getPhotobyAlbumID", "getAlbums", "getAlbumID"]),
  },
  components: {
    ManagePhoto,
  },
  mounted: async function() {
    if (!this.$route.params.albumId) router.push("/");
    this.isLoading = true;
    await this.fetchPhotobyAlbumID(this.$route.params.albumId);
    this.isLoading = false;
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
