<template>
  <v-sheet rounded="lg" min-height="268">
    <v-container>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              <h3>Intro</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle
              ><v-icon size="15" color="grey">mdi-home</v-icon
              ><span class="subtitle-2 ml-1">Lives in ...</span></v-list-item-subtitle
            >
            <v-list-item-subtitle
              ><v-icon size="15" color="grey">mdi-map-marker</v-icon
              ><span class="subtitle-2 ml-1">From ...</span></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list >
      <v-list class="mt-n3" dense>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          class="pl-5"
        >
          <v-list-item-content>
            <v-btn><span class="subtitle-2 normal">{{link.name}}</span></v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Edit Details",
          path: "/",
          icon: "mdi-home",
        },
        {
          name: "Add Hobbies",
          path: "/messages",
          icon: "mdi-message-outline",
        },
        {
          name: "Edit Featured",
          path: "/profile",
          icon: "mdi-account",
        },
      ],
    };
  },
};
</script>
<style scoped>
.normal {
  text-transform: none;
}
</style>
