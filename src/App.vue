<template>
  <v-app id="inspire">
    <v-transition transition="scroll-y-transition">
      <Navbar />
      <v-main class="mt-n5">
        <router-view> </router-view>
      </v-main>
    </v-transition>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
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
<style scoped>

</style>
