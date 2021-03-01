<template>
  <v-list min-width="350px">
    <v-list-item
      v-for="(link, i) in settings"
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
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      settings: [
        {
          name: "Settings",
          path: "/settings",
          icon: "mdi-cog",
        },
        {
          name: "Privacy Checkup",
          path: "/settings",
          icon: "mdi-lock-check",
        },
        {
          name: "Privacy Shortcuts",
          path: "/settings",
          icon: "mdi-lock",
        },
        {
          name: "Activity Log",
          path: "/settings",
          icon: "mdi-format-list-bulleted",
        },
        {
          name: "News Feed Preference",
          path: "/settings",
          icon: "mdi-newspaper",
        },
        {
          name: "Language",
          path: "/settings",
          icon: "mdi-earth",
        },
      ],
    };
  },
};
</script>
