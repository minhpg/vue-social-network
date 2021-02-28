<template>
  <v-sheet min-height="280px" rounded height="100%" color="transparent">
    <v-container class="overflow-scroll">
      <v-menu v-for="i in 6" :key="i" offset-x left dense open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" fab elevation="0">
            <v-badge
              bordered
              bottom
              color="green"
              dot
              offset-x="10"
              offset-y="10"
            >
              <v-avatar color="grey"> <v-img></v-img> </v-avatar
            ></v-badge>
          </v-btn>
        </template>
        <v-card rounded width="400px">
          <v-container>
            <v-layout row>
              <v-col>
                <v-avatar size="130" sm="6" color="grey">
                  <v-img
                    src=""
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col class="ml-n7">
                <v-list>
                  <v-list-item>
                    <v-list-item-title class="title"
                      >User</v-list-item-title
                    >
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-icon>
                      <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="ml-n5">
                      <v-list-item-subtitle>
                        Friends with ...
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="mt-n5">
                    <v-list-item-icon>
                      <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="ml-n5">
                      <v-list-item-subtitle>
                        Lives in ...
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col></v-col>
            </v-layout>
            <v-card-actions class="justify-space-around">
              <v-btn width="220px"
                ><v-icon>mdi-message</v-icon>
                <span class="ml-1">Message</span>
                </v-btn>
              <v-btn><v-icon>mdi-phone</v-icon></v-btn>
              <v-btn><v-icon>mdi-account-check</v-icon></v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-menu>
    </v-container>
  </v-sheet>
</template>
<script>
export default {
  methods: {},
};
</script>
