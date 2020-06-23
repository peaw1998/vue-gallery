<template>
  <div>
    <div class="title" v-if="isLoading">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-else class="title">
      <div
        class="size"
        v-bind:key="index"
        v-for="(item, index) in getPhotobyAlbumID"
      >
        <v-row justify="center">
          <v-dialog class="frame-img" v-model="dialog" width="700px">
            <template justify="center" v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <img class="img" :src="item.thumbnailUrl" />
              </div>
            </template>
            <v-card>
              <v-card-actions class="photo-show">
                <h1>{{ item.title }}</h1>

                <div class="d-flex justify-content-center">
                  <img class="lg-img" :src="item.url" />
                </div>
                <!-- <img class="lg-img" :src="item.url" /> -->
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </div>
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
  props: {
    isLoading: Boolean,
  },
  computed: {
    ...mapGetters(["getPhotobyAlbumID"]),
  },
  methods: {},
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
.d-flex {
  display: flex;
}
.justify-content-center {
  justify-content: center;
}
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
