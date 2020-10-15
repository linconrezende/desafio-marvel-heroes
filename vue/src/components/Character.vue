<template>
  <v-container>
    <v-row>
      <v-col v-if="fetchingData">
        <v-icon>fas fa-spinner fa-spin</v-icon> Carregando informações...
      </v-col>
      <v-col v-else>
        <v-card>
          <v-card-title class="pa-0 ma-0 text-h4">
            <span>{{ character.name }}</span>
          </v-card-title>
          <v-img
            v-if="character.thumbnail"
            :src="
              `${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`
            "
            height="300"
            contain
            class="grey darken-4"
          ></v-img>
        </v-card>
        <p><b>Descrição</b>: <span>{{ character.description || 'não disponível' }}</span></p>
        <p><b>Eventos</b>: <span>{{ character.events.items }}</span></p>
        <p><b>Comics</b>: <span>{{ character.comics.items }}</span></p>
        <p><b>Séries</b>: <span>{{ character.series.items }}</span></p>
        <p><b>Histórias</b>: <span>{{ character.stories.items }}</span></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Character',
  props: {
      character: Object
  },
  components: {},
  data() {
    return {
        fetchingData: false
    }
  },
  created() {},
  mounted() {
  },
  methods: {
  }
}
</script>
