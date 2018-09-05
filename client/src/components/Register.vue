<template>
  <div class="register">
    <h1>Register</h1>
    <input
        v-model="email"
        type="email"
        name="email"
        placeholder="email" />
    <br>
    <input
        v-model="password"
        type="password"
        name="password"
        placeholder="password" />
    <br>
    <button @click="register">register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
