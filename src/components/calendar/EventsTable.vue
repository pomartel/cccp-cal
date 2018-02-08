<template>
  <div class="calendar-view">
    <div class="filters">
      <event-type-filter @change="applyFilter" />
    </div>
    <content class="box">
      <table class="table is-striped is-fullwidth" :class="{'is-loading': isLoading}">
        <tbody>
          <event-row v-for="event in sortedList" :key="event.id" :event="event" :selected="event === nextUp" />
        </tbody>
      </table>
    </content>
  </div>
</template>

<script>
import DataStoreProxy from '@/core/DataStoreProxy'
import EventRow from './EventRow'
import EventTypeFilter from './EventTypeFilter'

export default {
  data () {
    return {
      eventsList: [],
      isLoading: true,
      typeFilter: null
    }
  },
  created () {
    DataStoreProxy.getDataStore().then(dataStore => {
      this.eventsList = dataStore.allEvents()
      this.isLoading = false
    })
  },
  computed: {
    sortedList () {
      return this.eventsList.slice(0)
        .sort((a, b) => a.date - b.date)
        .filter(evnt => !this.typeFilter || evnt.type === this.typeFilter)
    },
    nextUp () {
      return this.sortedList.find(evnt => !evnt.isOver())
    }
  },
  components: {
    EventRow,
    EventTypeFilter
  },
  methods: {
    applyFilter (filter) {
      if (filter === '') {
        filter = null
      }
      this.typeFilter = filter
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
.filters {
  margin: 2rem 0;
}
.calendar-view {
  margin-bottom: 1.5rem;
}
</style>
