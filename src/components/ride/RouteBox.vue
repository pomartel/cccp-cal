<template>
  <content class="box">
    <h2 class="title is-3">
      Trajet {{routeNo}} - {{route.name}}
    </h2>

    <div class="content">
      <p v-if="route.description" v-text="route.description" />
    </div>

    <div class="field is-grouped is-grouped-multiline">
      <div class="control">
        <info-tag name="Difficulté" color-class="is-info">
          <div class="star" v-for="n in route.difficulty" v-bind:key="n">⭐️</div>
        </info-tag>
      </div>
      <div class="control">
        <info-tag name="Distance" color-class="is-success">{{route.distance}} km</info-tag>
      </div>
      <div class="control">
        <info-tag name="Élévation" color-class="is-danger">{{route.elevation}} m</info-tag>
      </div>
    </div>

    <div v-if="routeId" class="gps-container">
      <iframe :src='`https://rwgps-embeds.com/embeds?type=route&id=${routeId}&sampleGraph=true&metricUnits=true`' style='width: 1px; min-width: 100%; height: 700px; border: none;' scrolling='no'></iframe>

      <div class="field is-grouped is-grouped-multiline gps-links">
        <div class="control">
          <a :href="`https://ridewithgps.com/routes/${routeId}`" target="_blank">🗺 Page RwGPS</a>
        </div>
        <div class="control">
          <a :href="`https://ridewithgps.com/routes/${routeId}.gpx?sub_format=track`" target="_blank">📟 Fichier GPX</a>
        </div>
        <div class="control" v-if="false">
          <a :href="`https://ridewithgps.com/routes/${routeId}/print`" target="_blank">🖨 Imprimer le trajet</a>
        </div>
      </div>
    </div>
  </content>
</template>

<script>
import fetchJsonp from 'fetch-jsonp'
import InfoTag from '../util/InfoTag'
import Route from '@/core/Route'
export default {
  data () {
    return {
      route: []
    }
  },
  props: {
    routeId: { required: true },
    routeNo: { required: true }
  },
  computed: {
  },
  components: {
    InfoTag
  },
  created () {
    const url = `https://ridewithgps.com/routes/${this.routeId}.json?apikey=338acd0e&version=2`
    fetchJsonp(url)
      .then(response => {
        return response.json()
      }).then(routeJson => {
        console.debug(routeJson.route)
        this.route = new Route(routeJson.route)
      }).catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
.star {
  display: inline-block;
  margin-right: 3px;
  &:last-child {
    padding-right: 0;
  }
}
.gps-container {
  margin: 1rem 0 0;
}
.gps-links {
  margin-top: 0.3rem;
  .control {
    font-size: 0.85rem;
  }
}
</style>
