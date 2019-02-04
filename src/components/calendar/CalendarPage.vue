<template>
  <content>
    <events-table />
    <footer-notes />
  </content>
</template>

<script>
import EventsTable from './EventsTable'
import HeaderNotes from './HeaderNotes'
import FooterNotes from './FooterNotes'
export default {
  components: {
    EventsTable,
    HeaderNotes,
    FooterNotes
  },
  created () {
    document.title = 'Calendrier des événements - CYCLEPOP'
  }
}
</script>
