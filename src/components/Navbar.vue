<template>
  <v-container>
    <v-app-bar app flat>
      <v-container class="py-0 fill-height">
        <!-- <v-app-bar-nav-icon>
          <v-btn fab @click="$router.push({ name: 'Home' })" elevation="0">
            <v-icon size="40">mdi-facebook</v-icon>
          </v-btn>
        </v-app-bar-nav-icon> -->
        <!-- <v-app-bar-nav-icon class="hidden-md-and-down">
          <v-avatar color="grey darken-1" size="32"></v-avatar>
        </v-app-bar-nav-icon> -->
        <v-app-bar-nav-icon
          class="hidden-lg-and-up"
          @click="toggleBookmark"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-responsive>
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
          <v-menu rounded="lg" left offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-badge :content="6" :value="6" color="red" offset-x="25" offset-y="25">
                <v-btn v-bind="attrs" v-on="on" fab elevation="0">
                  <v-icon>mdi-bell</v-icon>
                </v-btn></v-badge
              >
            </template>
            <Notifications />
          </v-menu>
        </v-app-bar-nav-icon>

        <v-app-bar-nav-icon>
          <v-menu rounded="lg" left offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" fab elevation="0">
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list min-width="350px">
              <v-list-item>
                <v-avatar
                  class="mr-10"
                  color="grey darken-1"
                  size="32"
                ></v-avatar>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    Username
                  </v-list-item-title>
                  <v-list-item-subtitle>See your profile</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
              <v-list-item
                v-for="(link, i) in links_main"
                :key="i"
                link
                :to="link.path"
                class="pl-5"
              >
                <v-list-item-icon>
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ link.name }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-menu-right</v-icon>
                </v-list-item-icon>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-icon
                  ><v-icon> mdi-comment-alert-outline</v-icon></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title>Give Feedback</v-list-item-title>
                  <v-list-item-subtitle
                    >Help us improve the new
                    <v-icon>mdi-code-json</v-icon></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item
                v-for="(link, i) in links"
                :key="i"
                link
                :to="link.path"
                class="pl-5"
              >
                <v-list-item-icon>
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ link.name }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-menu-right</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>
  </v-container>
</template>
<script>
import Notifications from "./NavbarComponents/Notifications";
export default {
  components: {
    Notifications,
  },
  data: () => ({
    links: [
      {
        name: "Settings and Privacy",
        path: "/settings",
        icon: "mdi-cog",
      },
      {
        name: "Help and Support",
        path: "/help",
        icon: "mdi-comment-question",
      },
      {
        name: "Log Out",
        path: "/log-out",
        icon: "mdi-logout-variant",
      },
    ],
    links_main: [
      {
        name: "Home",
        path: "/",
        icon: "mdi-home",
      },
      {
        name: "Messages",
        path: "/messages",
        icon: "mdi-message-outline",
      },
      {
        name: "Profile",
        path: "/profile",
        icon: "mdi-account",
      },
    ],
  }),
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
