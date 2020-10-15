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
        <template>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Eventos
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p v-for="(obj, ixObj) in character.events.items" :key="ixObj">
                            {{obj.name}}
                        </p>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Comics
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p v-for="(obj, ixObj) in character.comics.items" :key="ixObj">
                            {{obj.name}}
                        </p>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Séries
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p v-for="(obj, ixObj) in character.series.items" :key="ixObj">
                            {{obj.name}}
                        </p>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        Histórias
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p v-for="(obj, ixObj) in character.stories.items" :key="ixObj">
                            {{obj.name}}
                        </p>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </template>
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
