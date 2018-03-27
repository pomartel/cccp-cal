<template>
  <div>
    <nav class="breadcrumb" arial-label="breadcrumbs">
      <ul>
        <li>
          <router-link :to="{name: 'calendar'}">
            <span class="icon is-small">
              🗓
            </span>
            <span>Retour au calendrier</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <ride-box :ride="ride" />

    <route-box v-for="(routeId, index) in ride.routesIds" :key="routeId" :routeId="routeId" :routeNo="index + 1" />

  </div>
</template>

<script>
import DataStoreProxy from '@/core/DataStoreProxy'
import RideBox from './RideBox'
import RouteBox from './RouteBox'

export default {
  data () {
    return {
      ride: {}
    }
  },
  components: {RideBox, RouteBox},
  created () {
    const slug = this.$route.params.slug
    DataStoreProxy.getDataStore().then(
      dataStore => {
        this.ride = dataStore.findRideBySlug(slug)
        document.title = `${this.ride.name} - Club Cycliste Cycle Pop`
      }
    )
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-bottom: 0.5rem;
}
</style>
