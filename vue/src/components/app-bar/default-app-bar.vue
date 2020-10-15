<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="$emit('toggle-menu')"></v-app-bar-nav-icon>
    <v-toolbar-title v-if="title">{{ title }}</v-toolbar-title>
    <v-toolbar-title v-else>{{
      $router.currentRoute.meta.customName
    }}</v-toolbar-title>
    <v-spacer></v-spacer>
    v0.0.1
  </v-app-bar>
</template>

<script>
export default {
  props: {},
  name: 'default-app-bar',
  components: {},
  data() {
    return {
      title: null
    }
  },
  created() {},
  methods: {},
  watch: {
    $route(to) {
      this.title = to.meta.customName
    }
  }
}
</script>
