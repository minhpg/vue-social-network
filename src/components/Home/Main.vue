<template>
  <v-sheet min-height="70vh" rounded="lg" class="pa-5" height="100%">
    <CreatePost />
    
    <Post v-for="n in 10" :key="n"/>


  </v-sheet>
</template>
<script>
import CreatePost from "./Main/CreatePost";
import Post from "./Main/Post";
export default {
  components: {
    Post,
    CreatePost,
  }
};
</script>
