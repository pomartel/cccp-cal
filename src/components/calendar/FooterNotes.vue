<template>
  <div>
    <content class="content box">
      <p>Si votre application de calendrier supporte le format iCal (<a href="https://support.google.com/calendar/answer/37100" target="_blank">Google</a>, <a href='https://support.apple.com/fr-ca/HT202361' target='_blank'>Apple</a> ou <a href='https://support.office.com/fr-fr/article/importer-un-calendrier-ou-s-y-abonner-dans-outlook-com-cff1429c-5af6-41ec-a5b4-74f2c278e98c' target='_blank'>Outlook</a>), vous pouvez y ajouter toutes les sorties du club en copiant l'URL suivant:</p>
      <input type='text' class="input" @click="selectAll" value='http://www.google.com/calendar/ical/0f4jmq27ap2q5u28guk0nsj444%40group.calendar.google.com/public/basic.ics' />
    </content>
  </div>
</template>

<script>
export default {
  methods: {
    selectAll (event) {
      const elem = event.target
      elem.setSelectionRange(0, elem.value.length)
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  margin: 1rem 0;
  td:first-child {
    font-weight: bold;
  }
}
ul {
  list-style-type: square;
}
</style>
