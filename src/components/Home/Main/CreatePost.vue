<template>
  <v-card class="mx-auto mb-5">
    <v-card-text>
      <v-btn icon class="mr-5" color="light-blue"
        ><v-icon>mdi-camera</v-icon></v-btn
      >
      <v-btn icon class="mr-5" color="orange"><v-icon>mdi-video</v-icon></v-btn>
      <v-btn icon class="mr-5" color="teal"><v-icon>mdi-file</v-icon></v-btn>
    </v-card-text>
    <v-textarea
      counter
      :rules="rules"
      :value="value"
      class="mr-2 ml-2 mt-n5"
    ></v-textarea>
  </v-card>
</template>
