<template>
  <div>
    <Blog></Blog>
    <Contact></Contact>
    <Portfolio></Portfolio>
  </div>
</template>

<script>
import Blog from './Blog'
import Contact from './Contact'
import Portfolio from './Portfolio'

export default {
  name: 'Main',
  components: {
    Blog,
    Contact,
    Portfolio
  }
}
</script>

<style scoped>
h1 {
  color: #654321;
}
</style>
