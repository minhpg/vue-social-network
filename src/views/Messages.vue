<template>
  <v-container class="fill-height pa-0 ">
    <v-row class="no-gutters elevation-4">
      <v-col
        cols="12"
        md="3"
        class="flex-grow-1 flex-shrink-0 hidden-sm-and-down"
        style="border-right: 1px solid #0000001f;"
      >
        <v-responsive class="overflow-y-auto">
          <Sidebar />
        </v-responsive>
      </v-col>
      <v-col cols="12" class="flex-grow-1 flex-shrink-0" md="9">
        <v-responsive v-if="activeChat" class="overflow-y-auto fill-height">
          <v-card flat class="d-flex flex-column fill-height" height="766px">
            <v-card-title>
              Test User
            </v-card-title>
            <v-card-text class="flex-grow-1 overflow-y-auto">
              <infinite-loading
                direction="top"
                @infinite="infiniteHandler"
                spinner="spiral"
              >
                <div slot="no-more">No more message</div>
                <div slot="no-results">
                  No results message
                </div></infinite-loading
              >
              <v-card
                v-for="(msg, $index) in list"
                :key="$index"
                elevation="0"
                color="transparent"
              >
                <template>
                  <v-chip
                    :color="msg.me ? 'primary' : ''"
                    style="height:auto;white-space: normal;"
                    class="pa-4 mb-2 lower-case"
                    rounded
                    @click="selectItem(msg)"
                  >
                    {{ msg.title }}
                  </v-chip>
                </template>
                <v-card-text class="mt-n4" v-if="msg === selectedItem"
                  ><span>Sent at {{ msg.created_at }}</span>
                </v-card-text>
              </v-card>
            </v-card-text>
            <v-card-text class="flex-shrink-1">
              <v-text-field
                v-model="messageForm.content"
                type="text"
                no-details
                outlined
                append-outer-icon="mdi-send"
                @keyup.enter="messages.push(messageForm)"
                @click:append-outer="messages.push(messageForm)"
                hide-details
                rounded
              />
            </v-card-text>
          </v-card>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import InfiniteLoading from "vue-infinite-loading";
const api = "//hn.algolia.com/api/v1/search_by_date?tags=story";
import Sidebar from "../components/Messages/Sidebar";
export default {
  data: () => ({
    selectedItem: false,
    show: false,
    activeChat: 1,
    list: [],
    messageForm: {
      content: "",
      me: true,
      created_at: "11:11am",
    },
    page: 1,
  }),
  components: {
    Sidebar,
    InfiniteLoading,
  },
  methods: {
    selectItem(item) {
      if (this.selectedItem === item) {
        this.selectedItem = false;
      } else {
        this.selectedItem = item;
      }
    },
    unSelectItem() {
      this.selectedItem = false;
    },
    infiniteHandler($state) {
      axios
        .get(api, {
          params: {
            page: this.page,
          },
        })
        .then(({ data }) => {
          console.log(data);
          if (data.hits.length) {
            this.page += 1;
            this.list.unshift(...data.hits.reverse());
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
  },
};
</script>
<style scoped>
.lower-case {
  text-transform: none !important;
}
</style>
