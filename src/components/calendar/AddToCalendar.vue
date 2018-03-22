<template>
  <div title="Ajouter à mon calendrier" class="addeventatc" data-styling="none">
    <img src="@/assets/gfx/icon-calendar-t1.svg" alt="" style="width:18px;" />
    <span class="start">{{event.date | shortDate}} {{event.time | hourWithColon}}</span>
    <span class="timezone">America/Montreal</span>
    <span class="title">{{event.title}}</span>
    <span class="description">http://calendrier.cyclepop.ca/{{event.slug}}</span>
    <span class="location" v-if="event.ride">{{event.ride.meetingPlace}} - {{event.ride.meetingAddress}}</span>
  </div>
</template>

<script>
import DateMixin from '@/mixins/DateMixin'

export default {
  props: {
    event: { required: true }
  },
  mixins: [DateMixin],
  mounted () {
    window.addeventatc.refresh()
  }
}
</script>
