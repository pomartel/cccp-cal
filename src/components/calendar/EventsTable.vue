<template>
  <div class="calendar-view">
    <div class="filters">
      <select-filter @change="applyTypeFilter" :selected="typeFilter">
        <option value="">Tous les types</option>
        <option v-for="(eventType, key) in eventsTypeList" :key="key" :value="key">
          {{eventType.emoji}} {{eventType.textPlural}}
        </option>
      </select-filter>

      <select-filter @change="applyTimeFilter" :selected="timeFilter">
        <option value="future">Événements à venir</option>
        <option value="all">Tous les événements</option>
      </select-filter>
    </div>

    <content :class="{'is-loading': isLoading}">
      <div class="box" v-for="(events, month) in groupedByMonth" :key="month">
        <div class="title-container">
          <h2 class="title is-2">{{month}}</h2>
          <div class="line" />
        </div>
        <table class=" table is-striped is-fullwidth ">
          <tbody>
            <event-row v-for="event in events" :key="event.id " :event="event " :selected="event===nextUp " />
          </tbody>
        </table>
      </div>
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
    filteredList () {
      return this.eventsList.slice(0)
        .sort((a, b) => a.date - b.date)
        .filter(evnt => !evnt.isOver() || this.timeFilter === 'all')
        .filter(evnt => this.typeFilter === '' || evnt.type === this.typeFilter)
    },
    groupedByMonth () {
      let monthGrouping = {}
      this.filteredList.forEach(evnt => {
        const month = evnt.date.format('MMMM')
        monthGrouping[month] = monthGrouping[month] || []
        monthGrouping[month].push(evnt)
      })
      return monthGrouping
    },
    nextUp () {
      return this.filteredList.find(evnt => !evnt.isOver())
    }
  },
  components: {
    EventRow,
    SelectFilter
  },
  methods: {
    applyTypeFilter (filter) {
      this.typeFilter = filter
    },
    applyTimeFilter (filter) {
      this.timeFilter = filter
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/bulma.scss";

.filters {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.filter {
  margin-bottom: 1rem;
}
.calendar-view {
  margin-bottom: 1.5rem;
}
.title-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  .title {
    text-transform: capitalize;
    font-weight: normal;
    margin: 0;
    padding-right: 0.8rem;
  }
  .line {
    flex-grow: 2;
    height: 2px;
    background: linear-gradient(to right, $primary, white);
  }
}
.table {
  margin-bottom: 0;
}
hr {
  z-index: -1;
  // margin-bottom: -2.5rem;
  height: 2px;
}
</style>
