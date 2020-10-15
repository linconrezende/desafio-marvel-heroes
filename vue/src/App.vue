<template>
  <v-app>
    <vue-snotify></vue-snotify>
    <router-view
      name="appBar"
      @toggle-menu="
        () => {
          this.drawer = !this.drawer
        }
      "
    />
    <v-navigation-drawer
      v-model="drawer"
      :expand-on-hover="false"
      app
      fixed
      v-if="$router.currentRoute.meta.ShowMenu"
    >
      <div v-for="(item, ixmi) in menu_items" :key="ixmi">
        <v-list-item
          link
          @click="$router.push(item.route).catch(_err => {})"
          :style="
            $router.currentRoute.name == item.name
              ? {
                  'background-color': $vuetify.theme.dark
                    ? '#5C5C5C'
                    : '#EAEAEA'
                }
              : {}
          "
        >
          <v-list-item-icon color="primary">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <v-badge color="red" :content="item.news" v-if="item.news > 0">
                {{ item.title }}
              </v-badge>
              <span v-else>{{ item.title }}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <router-view name="sidebarItems"></router-view>
      <v-spacer></v-spacer>
      <v-footer fixed class="pa-0">
        <v-btn
          class="mx-auto"
          style="width: 50%"
          right
          @click="
            $vuetify.theme.dark = !$vuetify.theme.dark
            $lConfig.Dark = $vuetify.theme.dark
          "
        >
          <v-icon class="mr-2">fas fa-adjust</v-icon>
          {{ $vuetify.theme.dark ? 'LIGHT' : 'DARK' }}
        </v-btn>
      </v-footer>
    </v-navigation-drawer>
    <v-main fluid style="overflow: hidden;">
      <keep-alive>
        <router-view
          @toggle-menu="
            () => {
              this.drawer = !this.drawer
            }
          "
          @sync="
            dialogs.sync = true
            sync()
          "
        ></router-view>
      </keep-alive>
    </v-main>
  </v-app>
</template>
<style lang="sass">
@import './../node_modules/typeface-roboto/index.css'
</style>
<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: false,
    menu_items: [
      {
        title: 'Início',
        name: 'home',
        icon: 'fas fa-home',
        route: '/',
        news: 0,
        access_level: 0
      }
    ]
  }),
  mounted() {},
  created() {
    var vm = this
    vm.$vuetify.theme.dark = vm.$lConfig.Dark
  },
  methods: {},
  watch: {}
}
</script>
