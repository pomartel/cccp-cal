<template>
  <content>
    <events-table />
    <!-- <events-info /> -->
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

<style scoped lang='scss'>

</style>
