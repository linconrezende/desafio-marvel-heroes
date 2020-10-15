<template>
  <v-container class="">
    <v-row>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
    var vm = this
    vm.getCharacters()
  },
  methods: {
    getCharacters() {
      //
    }
  }
}
</script>
