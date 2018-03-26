<template>
  <div class="filter select">
    <select @change="filterChanged" v-model="selected">
      <slot />
    </select>
  </div>
</template>

<script>
export default {
  props: [
    'selected'
  ],
  methods: {
    filterChanged () {
      this.$emit('change', this.selected)
    }
  }
}
</script>
