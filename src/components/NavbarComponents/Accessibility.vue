<template>
  <v-list min-width="350px">
    <v-list-item class="pl-5">
      <v-list-item-icon>
        <v-icon>mdi-moon-waning-crescent</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Dark Mode</v-list-item-title>
        <v-list-item-subtitle
          >Adjust the appearance to reduce glare and give your eyes a
          break.</v-list-item-subtitle
        >
        <v-radio-group v-model="$vuetify.theme.dark" class="ml-2">
          <v-radio
            v-for="n in 2"
            :key="n"
            :label="n == 1 ? 'On' : 'Off'"
            :value="n == 1 ? true : false"
          ></v-radio>
        </v-radio-group>
      </v-list-item-content>
    </v-list-item>
    <v-list-item class="pl-5">
      <v-list-item-icon>
        <v-icon>mdi-format-size</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Compact Mode</v-list-item-title>
        <v-list-item-subtitle
          >Make your font size smaller so more content can fit on the
          screen.</v-list-item-subtitle
        >
        <v-radio-group v-model="radioGroup" class="ml-2">
          <v-radio
            v-for="n in 2"
            :key="n"
            :label="n == 1 ? 'On' : 'Off'"
            :value="n == 1 ? true : false"
          ></v-radio>
        </v-radio-group>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
          darkMode(state) {
              console.log(state)
      this.$vuetify.theme.dark = state;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  }
};
</script>
