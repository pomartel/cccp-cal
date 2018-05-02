<template>
  <tr :class="{ 'is-over': event.isOver(), 'selected': selected}">
    <td class="is-hidden-mobile">
      <span :title="event.typeLabel">{{typeEmoji}}</span>
    </td>
    <td class="is-hidden-mobile">{{event.date | dayOfWeek }}</td>
    <td>{{event.date | longDate }}</td>
    <td>{{event.time}}</td>
    <td class='event-name'>
      <router-link v-if="event.slug" :to="{ name: 'detailed-event',
        params: { slug: event.slug }}" v-text="event.title" />
      <a v-else-if="event.url" :href="event.url" v-text="event.title" />
      <span v-else v-text="event.title"></span>
      <mecano :event="event" />
    </td>
    <td class="is-hidden-mobile has-text-right">
      <add-to-calendar :event="event" />
    </td>
  </tr>
</template>

<script>
import DateMixin from '@/mixins/DateMixin'
import AddToCalendar from './AddToCalendar'
import Mecano from '../util/Mecano'
export default {
  mixins: [DateMixin],
  props: {
    event: {
      required: true
    },
    selected: false
  },
  computed: {
    typeEmoji () {
      return window.CONFIG.eventTypes[this.event.type]['emoji']
    }
  },
  components: {
    AddToCalendar, Mecano
  }
}
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
.is-over {
  opacity: 0.4;
}
.selected {
  font-weight: bold;
}
.event-name {
  width: 50%;
}
</style>
