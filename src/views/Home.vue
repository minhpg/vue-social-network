<template>
  <v-container>
    <v-row>
      <v-col class="hidden-md-and-down" cols="12" md="3">
        <Left />
      </v-col>

      <v-col cols="12" md="8" sm="9" lg="6">
        <v-sheet min-height="70vh" rounded="lg" class="pa-5">
          <v-card class="mx-auto mb-5">
            <v-card-text>
              <v-btn icon class="mr-5" color="light-blue"
                ><v-icon>mdi-camera</v-icon></v-btn
              >
              <v-btn icon class="mr-5" color="orange"
                ><v-icon>mdi-video</v-icon></v-btn
              >
              <v-btn icon class="mr-5" color="teal"
                ><v-icon>mdi-file</v-icon></v-btn
              >
            </v-card-text>
            <v-textarea
              counter
              :rules="rules"
              :value="value"
              class="mr-2 ml-2 mt-n5"
            ></v-textarea>
          </v-card>

          <v-card class="mx-auto">
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
                  <v-btn icon color="red">
                    <v-icon class="mr-1">
                      mdi-heart
                    </v-icon>
                  </v-btn>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-btn icon color="amber">
                    <v-icon class="mr-1">
                      mdi-share
                    </v-icon>
                  </v-btn>
                  <span class="subheading mr-2">45</span>
                  <span class="mr-1">·</span>
                  <v-btn icon color="blue">
                    <v-icon class="mr-1">
                      mdi-bookmark
                    </v-icon>
                  </v-btn>
                </v-row>
              </v-list-item>
            </v-card-actions>
            <v-card-text>
              "Turns out semicolon-less style is easier and safer in TS because
              most gotcha edge cases are type invalid as well."
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>

      <v-col class="hidden-xs-and-down" cols="12" md="4" lg="3" sm="3">
        <v-sheet rounded="lg" min-height="268">
          <!--  -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Left from '../components/Home/Left'
export default {
  data: () => ({
    drawer: false,
  }),
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
  components: {
    Left
  }
};
</script>
