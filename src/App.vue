<template>
  <v-app id="inspire">
    <v-transition transition="scroll-y-transition">
      <Navbar v-if="this.$route.name != 'Messages'" />
      <Sidenav v-if="this.$route.name == 'Messages'" />
      <v-main class="">
        <router-view> </router-view>
      </v-main>
    </v-transition>
  </v-app>
</template>

<script>
import Sidenav from "./components/Messages/Sidenav";
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
    Sidenav,
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
        if (theme == "true") {
            this.$vuetify.theme.dark = true;
        } else {
            this.$vuetify.theme.dark = false;
        }
    }
},
};
</script>
