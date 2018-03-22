<template>
  <content>
    <events-info />
    <events-table />
  </content>
</template>

<script>
import EventsTable from './EventsTable'
import EventsInfo from './EventsInfo'
export default {
  components: {
    EventsTable,
    EventsInfo
  },
  created () {
    document.title = 'Calendrier des événements - Club Cycliste Cycle Pop'
  }
}
</script>
