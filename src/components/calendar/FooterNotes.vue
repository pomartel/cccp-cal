<template>
  <div>
    <content class="content box">
      <p>Si votre application de calendrier supporte le format iCal (<a href="https://support.google.com/calendar/answer/37100" target="_blank">Google</a>, <a href='https://support.apple.com/fr-ca/HT202361' target='_blank'>Apple</a> ou <a href='https://support.office.com/fr-fr/article/importer-un-calendrier-ou-s-y-abonner-dans-outlook-com-cff1429c-5af6-41ec-a5b4-74f2c278e98c' target='_blank'>Outlook</a>), vous pouvez y ajouter toutes les sorties du club en copiant l'URL suivant:</p>
      <input type='text' class="input" @click="selectAll" value='http://www.google.com/calendar/ical/0f4jmq27ap2q5u28guk0nsj444%40group.calendar.google.com/public/basic.ics' />
    </content>

    <div class="columns">
      <div class="column">
        <content class="content box">
          <p>Les sorties CCCP sont offertes aux cyclistes de tous niveaux répartis en cinq catégories selon la vitesse de croisière :</p>

          <table class='table'>
            <tr>
              <td>Groupe 1</td>
              <td>26 à 28 km/h (avec distances réduites)</td>
            </tr>
            <tr>
              <td>Groupe 2</td>
              <td>29 à 32 km/h</td>
            </tr>
            <tr>
              <td>Groupe 3</td>
              <td>33 à 35 km/h</td>
            </tr>
            <tr>
              <td>Groupe 4</td>
              <td>36 à 39 km/h</td>
            </tr>
            <tr>
              <td>Groupe 5</td>
              <td>40 km/h et plus</td>
            </tr>
          </table>
        </content>
      </div>
      <div class="column">
        <content class="content box">
          <p><b>Chaque membre doit avoir à chaque sortie :</b></p>

          <ul>
            <li>L'itinéraire de la sortie</li>
            <li>Kit CCCP (maillot & cuissard)</li>
            <li>Casque</li>
            <li>Chambre à air / Pompe (ou cartouche CO2)</li>
            <li>Bidons / Collation</li>
            <li>Lumières clignotantes (avant & arrière)</li>
            <li>Odomètre (recommandé)</li>
            <li>Carte Assurance Maladie</li>
            <li>Argent comptant / Carte Crédit</li>
            <li>Documents exigés (sorties aux États-Unis)</li>
          </ul>
        </content>
      </div>
    </div>
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
</style>
