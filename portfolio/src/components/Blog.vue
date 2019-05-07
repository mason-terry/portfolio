<template>
  <div>
    <Heading title="BLOG"></Heading>
    <div
      id='blog'
      class="h-100"
    >
      <a
        href="/"
        class="f4 link br-pill mt2 ph3 pv2 mb2 dib b"
      >Back To Portfolio</a>
      <div
        v-for="blog in blogs"
        :key="blog._id"
        class="pa2"
      >
        <div class="shadow-5 br2 bg-white w-80 center">
          <h1 class="pt4">{{ blog.title }}</h1>
          <p class="f5 f3-ns pa4 w-90 center tl">{{ blog.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from './Heading'
import BlogService from '../service/BlogService'

export default {
  name: 'Blog',
  components: {
    Heading
  },
  data() {
    return {
      blogs: []
    }
  },
  async mounted() {
    this.getBlogEntries()
  },
  methods: {
    async getBlogEntries() {
      const response = await BlogService.getBlogEntries()
      this.blogs = response.data
    }
  }
}
</script>

<style scoped>
#blog {
  /* background-color: lightblue; */
  background-color: #9eebcf;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
}
</style>


