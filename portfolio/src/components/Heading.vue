<template>
  <div>
    <h1
      class="f1 lh-title tracked fw9"
      :id="id"
    >{{ title }}</h1>
    <!-- <a
      class="fl"
      v-if="title === 'BLOG'"
      href="/"
    >Back Home</a> -->
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: ['title', 'id']
}
</script>

<style scoped>
</style>
