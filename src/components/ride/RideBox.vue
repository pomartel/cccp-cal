<template>
  <content class='box' :class="{'is-loading ': isLoading}">
    <h1 class="title is-2">{{ride.name}}</h1>

    <div v-if="ride.nextEvents && ride.nextEvents.length">
      <definition :name="ride.nextEvents.length > 1 ? 'Prochaines dates' : 'Prochaine date'">
        <div v-for="evnt in ride.nextEvents" :key="evnt.date.fomat">
          {{evnt.date | dayOfWeekAndDate}}
          <mecano :event="evnt" />
        </div>
      </definition>

      <definition :name="ride.nextEvent.type === 'evenement' ? `Lieu de l'événement` : `Point de rassemblement`" v-if="ride.meetingAddress">
        <a :href="`https://www.google.ca/maps?q=${ride.meetingAddress}`" target="_blank">
          {{ride.meetingPlace}} - {{ride.meetingAddress}}
        </a>
      </definition>

      <definition v-if="ride.nextEvent.time" :name="ride.nextEvent.type === 'evenement' ? `Début de l'événement` : `Heure de départ (au point de rassemblement)`">
        {{ride.nextEvent.time}}
      </definition>

      <definition v-if="ride.nextEvent.facebookEventUrl" name="Événement Facebook">
        <a :href="ride.nextEvent.facebookEventUrl" v-text="ride.nextEvent.facebookEventUrl" target="_blank" />
      </definition>

      <definition v-if="ride.nextEvent.carpoolUrl" name="Inscription au covoiturage">
        <a :href="ride.nextEvent.carpoolUrl" v-text="ride.nextEvent.carpoolUrl" target="_blank" />
      </definition>

      <definition v-if="ride.nextEvent.notes" name="À noter">
        <span v-html="ride.nextEvent.notes" />
      </definition>
    </div>
  </content>
</template>

<script>
import DateMixin from '@/mixins/DateMixin'
import Definition from '../util/Definition'
import Mecano from '../util/Mecano'
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
  components: { Definition, Mecano },
  mixins: [DateMixin],
  props: ['ride']
}
</script>
