<template>
  <div class="tags has-addons">
    <span class="tag is-dark" v-text="name"></span>
    <span class="tag-value" :class="['tag', colorClass]">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: { required: true },
    colorClass: String
  }
}
</script>

<style lang="scss" scoped>
.tag-value {
  font-weight: bold;
}
</style>
