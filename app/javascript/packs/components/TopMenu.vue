<template>
  <div id="menu">
    <v-app-bar app dark color="blue">
      <div class="header">
        <div class="h1">{{ appTitle }}</div>
        <% if a = @wishes %>
        <div class="h2">222</div>
        <% else %>
        <div class="h2">{{wishes}}</div>
        <% end %>
      </div>
      <v-spacer></v-spacer>
      <v-icon></v-icon>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text replace
               v-for="item in menuItems"
               :key="item.name"
               :href="item.path">
          {{ item.name }}
        </v-btn>

      </v-toolbar-items>
      <v-btn icon href="/login">
        <v-icon>login</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: "TopMenu",
    props: ['menu'],
    data() {
      return {
        appTitle: 'Моя мотивация',
        appSubTitle: 'Психолог',
        sidebar: false,
        wishes: "<%= @wishes %>",
        rightMenus: [
          {title: 'Sign Up', path: '/signup', icon: 'face'},
          {title: 'Sign In', path: '/login', icon: 'lock_open'}
        ],
        menuItems: [],
        fab: true,
        hidden: false,
        tabs: null,
      }
    },

    created() {
      this.$set(this, 'menuItems', this.$router.options.routes)
    },

    computed: {
      routers() {
        return this.menu.options.routes
      },
      activeFab() {
        switch (this.tabs) {
          case 'one':
            return {color: 'success', icon: 'share'}
          case 'two':
            return {color: 'red', icon: 'edit'}
          case 'three':
            return {color: 'green', icon: 'keyboard_arrow_up'}
          default:
            return {}
        }
      },
    }
  };
</script>
<style>

</style>
