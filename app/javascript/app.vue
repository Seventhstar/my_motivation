<template>
  <div id="main-app">
    <div>app here</div>
    <v-app>
      <TopMenu :menu="$router"/>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>

  import TopMenu from "./packs/components/TopMenu.vue";

  export default {
    data: function () {
      return {
        message: "Hello Vue!"
      }
    },
    components: {
      'TopMenu': TopMenu,
    }
  }
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
