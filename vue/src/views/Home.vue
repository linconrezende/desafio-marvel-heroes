<template>
  <v-container class="">
    <v-row>
      <v-col v-for="(char, ixChar) in characters" :key="ixChar">
        <v-card min-width="200px" @click="openCharacter(char)">
          <v-img
            v-if="char.thumbnail"
            :src="
              `${char.thumbnail.path}/standard_medium.${char.thumbnail.extension}`
            "
            height="125"
            contain
            class="grey darken-4"
          ></v-img>
          <v-card-title class="text-body-1">
            {{ char.name }}
          </v-card-title>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        class="text-caption"
        v-if="marvelCopy"
        v-html="marvelCopy"
      ></v-col>
    </v-row>
    <v-footer app fixed inset>
      <v-container v-if="pagination && pagination.total > 0">
        <v-row>
          <v-col class="pt-0 mt-0" cols="12">
            <v-pagination
              :disabled="fetchingData"
              v-model="pagination.page"
              :length="pagination.total"
              @input="inputPagination"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      marvelCopy: null,
      characters: [],
      pagination: {
        page: 1,
        size: 20,
        total: 0
      },
      fetchingData: false
    }
  },
  created() {},
  mounted() {
    var vm = this
    vm.getCharacters()
  },
  methods: {
    getCharacters() {
      var vm = this
      vm.fetchingData = true
      let _parameters = generateParams()
      console.debug('API URL Params', _parameters)
      vm.$API
        .Request('get', 'characters', null, _parameters)
        .then(result => {
          vm.fetchingData = false
          console.debug(result)
          if (result && result.attributionHTML) {
            vm.marvelCopy = result.attributionHTML
          }
          if (result && result.data) {
            const _dt = result.data
            // UPDATE PAGINATION
            vm.pagination.total = _dt.total
              ? Math.ceil(_dt.total / vm.pagination.size)
              : 0

            // UPDATE CHARACTERS
            vm.characters = _dt.results
          }
        })
        .catch(error => {
          console.debug(error)
          vm.$snotify.error(error.message)
          vm.fetchingData = false
        })
      function generateParams() {
        let _params = []
        _params.push('orderBy=name') // Hardcoded for now
        _params.push(`limit=${vm.pagination.size}`)
        _params.push(
          `offset=${vm.pagination.page * vm.pagination.size -
            vm.pagination.size}`
        )
        return _params
      }
    },
    openCharacter(_char) {
      console.debug(_char)
    },
    inputPagination(val) {
      var vm = this
      console.debug(val) // for now, this is useless
      vm.getCharacters()
    }
  }
}
</script>
