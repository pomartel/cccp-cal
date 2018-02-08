<template>
  <div class="filter select">
    <select @change="filterChanged" v-model="selectedFilter">
      <option value="">Toutes les sorties</option>
      <option v-for="(eventType, key) in eventTypeList" :key="key" :value="key">
        {{eventType.emoji}} {{eventType.text}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      eventTypeList: window.CONFIG.eventTypes,
      selectedFilter: ''
    }
  },
  methods: {
    filterChanged () {
      this.$emit('change', this.selectedFilter)
    }
  }
}
</script>
