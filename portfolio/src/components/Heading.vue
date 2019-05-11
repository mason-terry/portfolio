<template>
  <div>
    <h1
      class="f1 lh-title"
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
