<template>
  <v-container>
    <v-app-bar app flat>
      <v-container class="py-0 fill-height">
        <v-app-bar-nav-icon>
          <v-btn fab @click="$router.go(-1)" elevation="0">
            <v-icon size="40">mdi-chevron-left</v-icon>
          </v-btn>
        </v-app-bar-nav-icon>
        <v-app-bar-nav-icon
          class="hidden-lg-and-up"
          @click="toggleBookmark"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-responsive class="hidden-md-and-down">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-responsive>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon class="mr-2">
          <v-menu rounded="lg" left offset-y :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
              <v-badge
                :content="6"
                :value="6"
                color="red"
                offset-x="25"
                offset-y="25"
              >
                <v-btn v-bind="attrs" v-on="on" fab elevation="0">
                  <v-icon>mdi-bell</v-icon>
                </v-btn></v-badge
              >
            </template>
            <Notifications />
          </v-menu>
        </v-app-bar-nav-icon>

        <v-app-bar-nav-icon>
          <v-menu rounded="lg" left offset-y :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" fab elevation="0">
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <Menu />
          </v-menu>
        </v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>
  </v-container>
</template>
<script>
import Notifications from "./NavbarComponents/Notifications";
import Menu from "./NavbarComponents/Menu";
export default {
  components: {
    Notifications,
    Menu,
  },
  data: () => ({}),
  methods: {
    
    toggleBookmark() {
      console.log(this.$route.name);
      if (this.$route.name == "Bookmark") {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: "Bookmark" });
      }
    },
  },
};
</script>
