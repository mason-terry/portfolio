<template>
  <div id='contact-body'>
    <div class="">
      <form class="pa4 black-80">
        <div class="measure center">
          <label class="fl f4 b db mb2">Name</label>
          <input
            class="input-reset ba b--black-20 pa2 mb2 db w-100 br2"
            type="text"
            placeholder="John Doe"
            v-model="name"
          >
          <label class="fl f4 b db mb2">Email</label>
          <input
            class="input-reset ba b--black-20 pa2 mb2 db w-100 br2"
            type="text"
            placeholder="john.doe@example.com"
            v-model="email"
          >
          <label class="fl f4 b db mb2">Message</label>
          <textarea
            class="input-reset ba b--black-20 pa2 mb2 db w-100 br2"
            type="text"
            placeholder="Your message"
            v-model="message"
          ></textarea>
          <button
            @click.prevent="sendMessage()"
            class="f4 dim br-pill pointer b ba ph3 pv2 mb2 dib near-black mt3"
          >Send Message</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendMessage() {
      const completedForm = this.isFormComplete()
      const validEmail = this.isEmail()

      if (!completedForm) {
        alert('Please enter fill out all fields.')
        return
      }
      if (!validEmail) {
        alert('Please enter a valid email address.')
        return
      }
      alert('Your email has been sent!')
      this.name = ''
      this.email = ''
      this.message = ''
    },
    isEmail() {
      if (!this.email.includes('@') || !this.email.includes('.')) {
        return false
      } else {
        return true
      }
    },
    isFormComplete() {
      if (this.name === '' || this.email === '' || this.message === '') {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
#contact-body {
  /* background-color: #ff8573; */
  background-color: #357edd;
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.35' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"); */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
}
</style>
