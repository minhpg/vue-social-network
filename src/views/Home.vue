<template>
  <v-container>
    <v-row>
      <v-col class="hidden-sm-and-down sidebar" cols="12" md="3" lg="3" sm="3">
        <Left />
      </v-col>

      <v-col cols="12" md="9" lg="8">
        <Main />
      </v-col>
      <v-col class="hidden-md-and-down sidebar" cols="12" md="1" lg="1">
        <Online />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Left from "../components/Home/Left";
import Main from "../components/Home/Main";
import Online from "../components/Home/Online";
export default {
  data: () => ({
    drawer: false,
  }),
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },

  },
  components: {
    Left,
    Main,
    Online
  },
};
</script>
<style scoped>

</style>
