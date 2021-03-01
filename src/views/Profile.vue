<template>
  <v-container>
    <v-row justify="space-around">
      <v-card color="" elevation="0" rounded>
        <v-img
          height="400px"
          width="100%"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          class="d-flex"
          gradient="to bottom, rgba(18,18,18,1),rgb(30,30,30,0),rgb(30,30,30,0.1), #1e1e1e"
        >
          <div class="outer bottom">
            <v-card-title class="inner">
              <v-avatar size="200" class="mb-n2" color="grey">
                <v-img alt="user" />
              </v-avatar>
            </v-card-title>
          </div>
        </v-img>
        <v-row justify="center" dense>
          <v-card-title>
            <h2>Username</h2>
          </v-card-title>
        </v-row>
        <v-row justify="center" class="mt-n7">
          <v-card-title>
            <h5 class="blue--text">Add Bio</h5>
          </v-card-title>
        </v-row>
        <v-card-action>
          <v-tabs background-color="transparent">
            <v-tab><span class="subtitle-1 normal">Posts</span></v-tab>
            <v-tab><span class="subtitle-1 normal">About</span></v-tab>
            <v-tab><span class="subtitle-1 normal">Friends</span></v-tab>
            <v-tab><span class="subtitle-1 normal">Photos</span></v-tab>
            <v-tab
              ><span class="subtitle-1 normal">More</span>
              <v-icon>mdi-menu-down</v-icon></v-tab
            >
          </v-tabs>
        </v-card-action>
      </v-card>
    </v-row>
    <v-row>
      <v-col col="12" md="12" lg="4">
        <Left />
      </v-col>
      <v-col col="12" md="12" sm="12" lg="8">
        <v-sheet min-height="7vw"> </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Left from "../components/Profile/Left";
export default {
  components: {
    Left,
  },
};
</script>

<style>
.bottom {
  position: absolute;
  bottom: 0;
}
.inner {
  display: block;
}

.outer {
  width: 100%;
  display: flex;
  justify-content: center;
}
.normal {
  text-transform: none;
}
</style>
