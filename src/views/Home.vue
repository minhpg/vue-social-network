<template>
  <v-container>
    <v-row>
      <v-col class="hidden-md-and-down" cols="12" md="3">
        <v-sheet rounded="lg" min-height="268">
          <v-list>
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
        </v-sheet>
      </v-col>

      <v-col cols="12" md="12" ms="12" lg="6">
        <v-sheet min-height="70vh" rounded="lg" class="pa-5">
          <v-card class="mx-auto mb-5">
            <v-card-text>
              <v-btn icon class="mr-5"><v-icon>mdi-camera</v-icon></v-btn>
              <v-btn icon class="mr-5"><v-icon>mdi-video</v-icon></v-btn>
              <v-btn icon class="mr-5"><v-icon>mdi-file</v-icon></v-btn>
            </v-card-text>
            <v-textarea
              counter
              :rules="rules"
              :value="value"
              class="mr-2 ml-2 mt-n5"
            ></v-textarea>
          </v-card>

          <v-card class="mx-auto">
            <v-card-text class="headline font-weight-bold">
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-btn icon>
                    <v-icon class="mr-1">
                      mdi-heart
                    </v-icon>
                  </v-btn>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-btn icon>
                    <v-icon class="mr-1">
                      mdi-share-variant
                    </v-icon>
                  </v-btn>
                  <span class="subheading mr-2">45</span>
                  <span class="mr-1">·</span>
                  <v-btn icon>
                    <v-icon class="mr-1">
                      mdi-bookmark
                    </v-icon>
                  </v-btn>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>

      <v-col class="hidden-md-and-down" cols="12" md="3">
        <v-sheet rounded="lg" min-height="268">
          <!--  -->
        </v-sheet>
      </v-col>
    </v-row>
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
