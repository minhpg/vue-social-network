<template>
  <v-app id="inspire">
    <system-bar />
    <side-nav />
    <v-main class="grey lighten-2 mt-3">
      <v-container>
        <v-row>
          <v-col>
            <timetable />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 class="mb-3">Due today</h2>
            <div v-for="i in 6" :key="i">
              <tasks />
            </div>
            

            <v-col> </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav";
import SystemBar from "./components/SystemBar";
import Timetable from "./components/Timetable";
import Tasks from './components/Tasks'
export default {
  components: { SideNav, Timetable, SystemBar, Tasks },
  data: () => ({ drawer: null }),
};
</script>