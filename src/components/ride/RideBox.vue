<template>
  <content class='box' :class="{'is-loading ': isLoading}">
    <h1 class="title is-2">{{ride.name}}</h1>

    <definition name="Prochaine sortie">
      <span v-if="ride.nextEvent">
        {{ride.nextEvent.date | dayOfWeek}} {{ride.nextEvent.date | longDate}}
      </span>
      <span v-else>
        À déterminer...
      </span>
    </definition>

    <definition name="Point de rassemblement">
      <a :href="`https://www.google.ca/maps?q=${ride.meetingAddress}`" target="_blank">
        {{ride.meetingPlace}} - {{ride.meetingAddress}}
      </a>
    </definition>

    <definition v-if="ride.nextEvent" name="Heure de départ (au point de rassemblement)">
      {{ride.nextEvent.time}}
    </definition>

    <definition v-if="ride.nextEvent" name="Inscription au covoiturage">
      <a :href="ride.nextEvent.carpoolUrl" v-text="ride.nextEvent.carpoolUrl" target="_blank" />
    </definition>
  </content>
</template>

<script>
import DateMixin from '@/mixins/DateMixin'
import Definition from '../util/Definition'
export default {
  data () {
    return {
    }
  },
  computed: {
    isLoading () {
      return !Object.keys(this.ride).length
    }
  },
  components: { Definition },
  mixins: [DateMixin],
  props: {
    ride: { required: true }
  }
}
</script>
