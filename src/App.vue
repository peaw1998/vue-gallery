<template>
  <v-app>
    <!-- <v-app-bar> -->
    <NavBar />
    <!-- </v-app-bar> -->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
