<template>
  <v-container class="pb-5 mb-5">
    <v-row>
      <v-col cols="12">
        <v-text-field
          outlined
          label="Início do nome (persnagens cujo nome começa por...)"
          v-model="search"
          clearable
          append-outer-icon="fas fa-search"
          @keydown="
            event => {
              if (event.keyCode === 13) {
                getCharacters()
                return false
              }
            }
          "
          @click:append-outer="getCharacters()"
        ></v-text-field>
      </v-col>
      <v-col v-if="fetchingData">
        <v-icon>fas fa-spinner fa-spin</v-icon> Carregando personagens...
      </v-col>
      <v-col
        v-else-if="characters && characters.length > 0"
        v-for="(char, ixChar) in characters"
        :key="ixChar"
      >
        <v-card
          :disabled="loadingCharacter"
          min-width="200px"
          @click="openCharacter(char)"
        >
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
      <v-col v-else>
        Ops! Nenhum personagem encontrado...
      </v-col>
      <v-col
        cols="12"
        class="text-caption"
        v-if="marvelCopy"
        v-html="marvelCopy"
      ></v-col>
    </v-row>
    <br />
    <br />
    <br />
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
    <template>
      <v-row justify="center">
        <v-dialog
          v-model="dialogs.character"
          fullscreen
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dense color="primary">
              <v-btn icon @click="closeCharacterDialog()">
                <v-icon>fas fa-times</v-icon>
              </v-btn>
              <v-toolbar-title>Detalhes do personagem</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items> </v-toolbar-items>
            </v-toolbar>
            <character :character="selectedCharacter" />
            <div class="pa-5">
              <v-btn large color="primary" @click="closeCharacterDialog()"
                >Voltar</v-btn
              >
            </div>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import Character from './../components/Character'
export default {
  name: 'Home',
  components: {
    character: Character
  },
  data() {
    return {
      marvelCopy: null,
      characters: [],
      pagination: {
        page: 1,
        size: 20,
        total: 0
      },
      dialogs: {
        character: false
      },
      search: null,
      fetchingData: false,
      loadingCharacter: false,
      selectedCharacter: null
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
      try {
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
            vm.fetchingData = false
            console.debug(error)
            vm.$snotify.error(error.message)
          })
      } catch (error) {
        vm.fetchingData = false
        console.debug(error)
        vm.$snotify.error(error.message)
      }
      function generateParams() {
        let _params = []
        _params.push('orderBy=name') // Hardcoded for now
        _params.push(`limit=${vm.pagination.size}`)
        if (vm.search && vm.search !== '') {
          _params.push(`nameStartsWith=${vm.search}`)
        }
        _params.push(
          `offset=${vm.pagination.page * vm.pagination.size -
            vm.pagination.size}`
        )
        return _params
      }
    },
    openCharacter(_char) {
      var vm = this
      vm.loadingCharacter = true
      console.debug(_char)
      vm.selectedCharacter = _char
      vm.$API
        .Request('get', `characters/${_char.id}`)
        .then(result => {
          // Preencher somente se retornar informações, já que a princípio, estas já são preenchidas anteriormente
          // com as informações vindas da getCharacterIndividual_get_0
          if (
            result &&
            result.data &&
            result.data.results &&
            result.data.results.length >= 1
          ) {
            result.data.results.forEach(character => {
              if (character.id === _char.id) {
                vm.selectedCharacter = character
              }
            })
          }
          // Mostrar o dialog para exibir informações do personagem
          vm.dialogs.character = true
          vm.loadingCharacter = false
        })
        .catch(error => {
          console.debug(error)
          vm.$snotify.error(error.message)
          vm.loadingCharacter = false
          // Mostrar o dialog mesmo assim, já que as informações foram preenchidas mesmo antes da chamada da api
          vm.dialogs.character = true
        })
    },
    closeCharacterDialog() {
      var vm = this
      vm.selectedCharacter = null
      vm.dialogs.character = false
    },
    inputPagination(val) {
      var vm = this
      console.debug(val) // for now, this is useless
      vm.getCharacters()
    }
  }
}
</script>
