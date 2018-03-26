<template>
  <div class="calendar-view">
    <div class="filters">

      <select-filter @change="applyTimeFilter" :selected="timeFilter">
        <option value="future">Sorties à venir</option>
        <option value="all">Toutes les sorties</option>
      </select-filter>

      <select-filter @change="applyTypeFilter" :selected="typeFilter">
        <option value="">Toutes les types</option>
        <option v-for="(eventType, key) in eventsTypeList" :key="key" :value="key">
          {{eventType.emoji}} {{eventType.text}}
        </option>
      </select-filter>

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
import SelectFilter from './SelectFilter'

export default {
  data () {
    return {
      eventsList: [],
      eventsTypeList: window.CONFIG.eventTypes,
      isLoading: true,
      typeFilter: '',
      timeFilter: 'future'
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
        .filter(evnt => !evnt.isOver() || this.timeFilter === 'all')
        .filter(evnt => !this.typeFilter || evnt.type === this.typeFilter)
    },
    nextUp () {
      return this.sortedList.find(evnt => !evnt.isOver())
    }
  },
  components: {
    EventRow,
    SelectFilter
  },
  methods: {
    applyTypeFilter (filter) {
      if (filter === '') {
        filter = null
      }
      this.typeFilter = filter
    },
    applyTimeFilter (filter) {
      this.timeFilter = filter
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
