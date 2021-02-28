<template>
  <v-card class="mx-auto mt-3">
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
      "Turns out semicolon-less style is easier and safer in TS because most
      gotcha edge cases are type invalid as well."
    </v-card-text>
  </v-card>
</template>
