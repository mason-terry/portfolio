<template>
  <div class='fl w-100 w-50-ns pa2'>
    <article class="shadow-5 br2 ba dark-gray b--black-10 mv4 w-100 w-50-m center">
      <img
        :src="imageUrl"
        class="db w-100 br2 br--top"
        :alt="name"
      >
      <div class="pa2 ph3-ns pb3-ns bg-white-90">
        <div class="dt w-100 mt1">
          <div class="dtc">
            <h1 class="f5 f4-ns mv0">{{ name }}</h1>
          </div>
        </div>
        <!-- <p class="f6 lh-copy center mid-gray"><strong>My Role: </strong>{{ role }}</p> -->
        <p class="f6 lh-copy center mid-gray"><strong>Technologies: </strong>{{ technology }}</p>
        <a
          :href="url"
          target="_blank"
          class="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib black b"
        >View Page</a>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PortfolioEntry',
  props: ['name', 'imageUrl', 'role', 'technology', 'url']
}
</script>

