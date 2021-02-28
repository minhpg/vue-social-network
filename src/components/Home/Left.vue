<template>
  <v-sheet rounded="lg" min-height="268">
    <v-container>
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
      </v-list>
    </v-container>
  </v-sheet>
</template>
<script>
export default {
    data(){
        return {
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

        }
    }
}
</script>