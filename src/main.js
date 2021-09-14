import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import moment from 'moment'
import tippy from 'tippy.js'

require('@/assets/scss/main.scss')

moment.locale('fr-ca')

window.CONFIG = {
  spreadsheetId: '1_zXpbThqwS0xxYcF8NouVxW3UVMA55KlVttf9rvsDZ0',
  apiKey: 'AIzaSyBKlqE-VpGkZsAQLvNVutvOwt4QHLdb6Hw',
  rideWithGpsUrl: `https://ridewithgps.com/routes/[routeId].json?apikey=338acd0e&version=2`,
  eventTypes: {
    'sortie-locale': {
      textSingular: 'Sortie locale',
      textPlural: 'Sorties locales',
      emoji: '🚲'
    },
    'sortie-regionale': {
      textSingular: 'Sortie régionale',
      textPlural: 'Sorties régionales',
      emoji: '🚗'
    },
    'mensuelle': {
      textSingular: 'Sortie mensuelle',
      textPlural: 'Sorties mensuelles',
      emoji: '🚌'
    },
    'evenement': {
      textSingular: 'Événement',
      textPlural: 'Événements',
      emoji: '🏠'
    }
  }
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

tippy('#app', { arrow: true, target: '[title]' })

// Capitalize extension for strings
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}
