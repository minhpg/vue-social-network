<template>
  <v-list min-width="500px">
    <v-list-item>
      <v-list-item-title class="title">
        Notifications
      </v-list-item-title>
    </v-list-item>
    <v-divider></v-divider>
    <v-card>
      <v-virtual-scroll
        :bench="10"
        :items="items"
        height="700"
        item-height="64"
      >
        <template v-slot:default="{ item }">
          <v-list-item :key="item" @mouseover="selectItem(item)" link>
            <v-list-item-action>
              <v-btn fab small depressed>
                <v-avatar color="grey"></v-avatar>
              </v-btn>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                <strong>ID {{ item }}</strong>
              </v-list-item-title>
              <v-list-item-subtitle> at {{ item }} </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action v-if="item === selectedItem">
              <v-menu offset-x open-on-hover>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark v-bind="attrs" v-on="on" fab small>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-card rounded>
                  <v-list height="100%" class="pa-2">
                    <v-list-item
                      dense
                      v-for="(item, index) in menuItems"
                      :key="index"
                      link
                    >
                      <v-list-item-icon
                        ><v-icon>{{ item.icon }}</v-icon></v-list-item-icon
                      >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
    </v-card>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      selectedItem: false,
      menuItems: [
        {
          title: "Mark as unread",
          icon: "mdi-check",
        },
        {
          title: "Remove this notification",
          icon: "mdi-bookmark-remove-outline",
        },
        {
          title: "Report issue",
          icon: "mdi-bug-outline",
        },
      ],
    };
  },
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 7000;
    },
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
    unSelectItem() {
      this.selectedItem = false;
    },
  },
};
</script>
