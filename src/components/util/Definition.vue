<template>
  <dl>
    <dt v-text="name"></dt>
    <dd>
      <slot />
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    name: { required: true }
  }
}
</script>

<style lang="scss" scoped>
dt {
  font-weight: bold;
}
dd {
  margin-bottom: 1rem;
}
</style>
