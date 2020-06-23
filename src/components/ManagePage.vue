<template>
  <div class="container">
    <div class="title-album"><h1>All Albums</h1></div>
    <div class="title">
      <div
        class="size"
        v-bind:key="index"
        v-for="(item, index) in filterPage()"
      >
        <router-link
          tag="li"
          class="album-box"
          :to="{ name: 'Album', params: { albumId: item.id } }"
        >
          <div class="cursor-none-select">
            Album Name
          </div>
          <div class="cursor-none-select">
            {{ item.title }}
          </div>
        </router-link>
      </div>
    </div>
    <div class="button">
      <div class="text-center">
        <v-pagination
          v-model="page"
          class="my-4"
          :length="9"
          :total-visible="7"
        />
      </div>
      <!-- <v-btn v-on:click="prev">-</v-btn>
      <v-btn v-on:click="next">+</v-btn> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ManagePage",
  data: function() {
    return {
      page: 1,
      pageSize: 12,
    };
  },
  props: {
    items: Array,
  },
  components: {},
  methods: {
    indextoPageNumber: function(index) {
      return Math.ceil((index + 1) / this.pageSize);
    },
    filterPage: function() {
      return this.items.filter((item, index) => {
        if (this.indextoPageNumber(index) === this.page) return true;
        else return false;
      });
    },
    checkPage: function(page) {
      if (page > 0 && page <= this.indextoPageNumber(this.items.length - 1))
        return true;
      else return false;
    },
    next: function() {
      if (this.checkPage(this.page + 1)) this.page = this.page + 1;
    },
    prev: function() {
      if (this.checkPage(this.page - 1)) this.page = this.page - 1;
    },
  },
};
</script>

<style scoped>
.size {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 15em;
  height: 200px;
  background-color: skyblue;
  margin: 0.5em;
  border-radius: 10px;
}
.title {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.title-album {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
}
.album-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
}
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.cursor-none-select {
  user-select: none;
  -webkit-user-select: none;
}

@media only screen and (min-width: 1904px) {
  .size {
    width: 20em;
    /* background-color: firebrick; */
  }
}
@media only screen and (min-width: 1264px) and (max-width: 1903px) {
  .size {
    width: 15em;
    /* background-color: skyblue; */
  }
}
@media only screen and (min-width: 960px) and (max-width: 1263px) {
  .size {
    width: 13em;
    /* background-color: darkmagenta; */
  }
}
@media only screen and (min-width: 600px) and (max-width: 959px) {
  .size {
    width: 15em;
    /* background-color: darkblue; */
  }
}
@media only screen and (max-width: 599px) {
  .size {
    width: 28em;
    /* background-color: darkcyan; */
  }
}
</style>
