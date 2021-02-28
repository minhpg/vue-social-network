<template>
  <v-list min-width="350px">
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
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>
