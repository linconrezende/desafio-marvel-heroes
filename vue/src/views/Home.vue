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
  methods: {},
  created() {
    var vm = this
    vm.$API
      .Request('get', 'characters', {})
      .then(result => {
        console.debug(result)
      })
      .catch(error => {
        console.debug(error)
      })
  },
  mounted() {}
}
</script>
