<template>
  <div class="title">
    <div
      class="size"
      v-bind:key="index"
      v-for="(item, index) in getPhotobyAlbumID"
    >
      <v-row justify="center">
        <v-dialog class="frame-img" v-model="dialog" width="700px">
          <template justify="center" v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <img class="img" v-bind:src="item.thumbnailUrl" />
            </div>
          </template>

          <v-card>
            <v-card-actions class="photo-show">
              <img class="lg-img" :src="item.url" />
              {{ item.title }}
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ManagePhoto",
  data() {
    return {
      absolute: true,
      overlay: false,
    };
  },
  computed: {
    ...mapGetters(["getPhotobyAlbumID"]),
  },
};
</script>
<style scoped>
.size {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* width: 13em; */
  margin: 0.5em;
  border-radius: 10px;
  padding: 10px;
}
.title {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.photo-show {
  display: flex;
  flex-direction: column;
}
/* .frame-img {
  width: 700px;
} */
.img {
  border-radius: 10px;
}
@media only screen and (max-width: 599px) {
  .lg-img {
    width: 50%;
    height: 50%;
  }
}
</style>
