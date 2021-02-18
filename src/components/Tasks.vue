<template>
  <v-card class="mx-auto mb-1" elevation="4">
    <v-list-item four-line>
      <v-avatar size="56">
        <img
          alt="user"
          :src="`https://randomuser.me/api/portraits/lego/${Math.floor(
            Math.random() * 10
          )}.jpg`"
        />
      </v-avatar>
      <v-list-item-content class="ml-5">
        <v-list-item-title ><router-link>English assignment due today</router-link></v-list-item-title>
        <v-list-item-subtitle>
          <span class="caption">
            <v-icon size="15">mdi-clock-outline</v-icon>
            Thursday 12.00pm
          </span>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <span class="caption"
            ><v-icon size="15">mdi-account-outline</v-icon>
             Minh Pham
            </span>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <div>
            <v-btn rounded x-small elevation="0">Exam</v-btn>
            <v-btn rounded x-small elevation="0">Graded</v-btn>
          </div>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>