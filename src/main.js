import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import moment from 'moment'

require('@/assets/scss/main.scss')

moment.locale('fr-ca')

window.CONFIG = {
  spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/1_zXpbThqwS0xxYcF8NouVxW3UVMA55KlVttf9rvsDZ0/',
  eventTypes: {
    'sortie-locale': {
      text: 'Sorties locales',
      emoji: '🚲'
    },
    'sortie-regionale': {
      text: 'Sorties régionales',
      emoji: '🚗'
    },
    'mensuelle': {
      text: 'Sorties mensuelles',
      emoji: '🚌'
    },
    'evenement': {
      text: 'Événements',
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

// Capitalize extension for strings
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}
