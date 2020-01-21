<template>
  <div>
    <h1>This is the admin page</h1>
    <form>
      <label for="username">Username</label>
      <input
        name="username"
        type="text"
        placeholder="Username"
        v-model="username"
      >
      <label for="password">Password</label>
      <input
        name="password"
        type="password"
        placeholder="Password"
        v-model="password"
      >
      <button @click.prevent="submitLogin()">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitLogin() {
      if (this.userNameIsValid(this.username) && this.passwordIsValid(this.password)) {
        alert('Welcome to the admin!')
        this.username = ''
        this.password = ''
      } else {
        alert('Please enter a valid username and password.')
      }
    },
    userNameIsValid(username) {
      if (username === 'mason') {
        return true
      } else {
        return false
      }
    },
    passwordIsValid(password) {
      if (password === 'password') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

