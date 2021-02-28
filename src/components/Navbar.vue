<template>
  <v-container>
    <v-app-bar app flat>
      <v-container class="py-0 fill-height">
        <v-app-bar-nav-icon class="hidden-lg-and-up" @click="toggleBookmark"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-responsive>
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-responsive>
                <v-spacer></v-spacer>
        <v-app-bar-nav-icon>
          <v-avatar
            v-if="!drawer"
            color="grey darken-1"
            size="32"
          ></v-avatar>
        </v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  methods : {
    toggleBookmark(){
      console.log(this.$route.name)
      if (this.$route.name == 'Bookmark' ){
        this.$router.go(-1)
      }
      else {
        this.$router.push({name:'Bookmark'})
      }
    }
  }
}
</script>