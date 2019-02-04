<template>
  <span class='mecano-icon' v-if="event.mecano" title="Atelier mobile ArsenoVélo sur place une heure avant le départ">🔧</span>
</template>

<script>
export default {
  props: {
    event: { required: true }
  }
}
</script>

<style lang="scss" scoped>
.mecano-icon {
  font-size: 0.8rem;
}
</style>
