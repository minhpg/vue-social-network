<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Username
            </v-list-item-title>
            <v-list-item-subtitle>user quote</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
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
        </v-list-item>
        <v-list-item class="mt-6">
          <v-text-field
            dense
            flat
            rounded
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            color="black"
          ></v-text-field>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-tooltip v-if="!$vuetify.theme.dark" bottom>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" small fab @click="darkMode">
                  <v-icon>mdi-moon-waxing-crescent</v-icon>
                </v-btn>
              </template>
              <span>Dark Mode On</span>
            </v-tooltip>

            <v-tooltip v-else bottom>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" small fab @click="darkMode">
                  <v-icon>mdi-white-balance-sunny</v-icon>
                </v-btn>
              </template>
              <span>Dark Mode Off</span>
            </v-tooltip>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dark Mode</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat>
      <v-container class="py-0 fill-height">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-avatar
          class="ml-10"
          v-if="!drawer"
          color="grey darken-1"
          size="32"
        ></v-avatar>
      </v-container>
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      {
        name: "Home",
        path: "/",
        icon: "mdi-home",
      },
      {
        name: "Messages",
        path: "/messages",
        icon: "mdi-message-round",
      },
      {
        name: "Profile",
        path: "/profile",
        icon: "mdi-account",
      },
    ],
  }),
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>
