<template>
  <v-tabs v-model="tab" height="100%" max-width="500px">
    <v-list-item v-if="tab != 'main'">
      <v-list-item-icon>
        <v-btn
          @click="changeTab('main')"
          fab
          flat
          depressed
          color="transparent"
          width="30"
          height="30"
        >
          <v-icon size="30">
            mdi-chevron-left
          </v-icon>
        </v-btn>
      </v-list-item-icon>
    </v-list-item>
    <v-list-item v-else class="pt-1">
      <v-list-icon>
        <v-avatar class="mr-5" color="grey darken-1" size="50"></v-avatar>
      </v-list-icon>
      <v-list-item-content>
        <v-list-item-title class="title">
          Username
        </v-list-item-title>
        <v-list-item-subtitle>See your profile</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-tab-item value="main">
      <v-list min-width="350px">
        
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
          @click="changeTab(link.tab)"
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
        <v-list-item link to="/log-out" class="pl-5">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-tab-item>
    <v-tab-item value="settings">
      <Settings />
    </v-tab-item>
        <v-tab-item value="accessibility">
      <Accessibility />
    </v-tab-item>
  </v-tabs>
</template>
<script>
import Settings from './Settings'
import Accessibility from './Accessibility'
export default {
  components: {
    Settings, Accessibility
  },
  data() {
    return {
      tab: "main",
      links: [
        {
          name: "Settings and Privacy",
          tab: "settings",
          icon: "mdi-cog",
        },
        {
          name: "Help and Support",
          tab: "help",
          icon: "mdi-comment-question",
        },
        {
          name: "Display & Accessibility",
          tab: "accessibility",
          icon: "mdi-moon-waning-crescent",
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
    };
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
    },
  },
};
</script>
