<template>
  <v-container>
    <v-card rounded class="mb-2">
      <v-list>
        <v-list-item>
          <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Username
            </v-list-item-title>
            <v-list-item-subtitle>See your profile</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card>
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
        <v-list-item>
          <v-list-item-content>
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
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item>
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
        </v-list-item> -->
      </v-list>
    </v-card>
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
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>
