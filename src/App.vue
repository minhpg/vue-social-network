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

            <v-card class="mx-auto" tile>
              
              <v-list-item four-line>
                <v-avatar size="56">
                  <img
                    alt="user"
                    :src="`https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`"
                  />
                </v-avatar>
                <v-list-item-content class="ml-5">
                  <v-list-item-title
                    >English assignment due today</v-list-item-title
                  >
                  <v-list-item-subtitle>
                    <span class="caption">Thursday 12.00pm</span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="caption">Thursday 12.00pm</span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <div>
                      <v-btn
                        color="red"
                        rounded
                        x-small
                        >Exam</v-btn
                      >
                      <v-btn
                        color="green"
                        rounded
                        x-small
                        >Graded</v-btn
                      >
                    </div>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            

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
// import Tasks from './components/Tasks'
export default {
  components: { SideNav, Timetable, SystemBar },
  data: () => ({ drawer: null }),
};
</script>