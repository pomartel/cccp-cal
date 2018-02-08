<template>
  <content class="box" :class="{'is-loading ': isLoading}">
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

    <div v-if="route.gpsId" class="gps-container">
      <iframe :src='`https://rwgps-embeds.com/embeds?type=route&id=${route.gpsId}&sampleGraph=true`' style='width: 1px; min-width: 100%; height: 700px; border: none;' scrolling='no'></iframe>

      <div class="field is-grouped is-grouped-multiline gps-links">
        <div class="control">
          <a :href="`https://ridewithgps.com/routes/${route.gpsId}`" target="_blank">🗺 Page RwGPS</a>
        </div>
        <div class="control">
          <a :href="`https://ridewithgps.com/routes/${route.gpsId}.gpx?sub_format=track`" target="_blank">📟 Fichier GPX</a>
        </div>
        <div class="control">
          <a :href="`https://ridewithgps.com/routes/${route.gpsId}/print`" target="_blank">🖨 Imprimer le trajet</a>
        </div>
      </div>
    </div>
  </content>
</template>

<script>
import InfoTag from '../util/InfoTag'
export default {
  props: {
    route: { required: true },
    routeNo: { required: true }
  },
  computed: {
    isLoading () {
      return !Object.keys(this.route).length
    }
  },
  components: {
    InfoTag
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
