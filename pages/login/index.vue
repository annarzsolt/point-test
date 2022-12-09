<template>
  <div>
    <h1 class="text-center m-4">
      LOGIN
    </h1>
    <form class="login-form" @submit.prevent="onSubmit">
      <div class="form-group">
        <label class="form-label">Username</label>
        <input v-model="username" class="form-control" type="text">
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <input v-model="password" class="form-control" type="password">
      </div>
      <button type="submit" class="btn btn-primary">
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    if (localStorage.getItem('authToken')) {
      this.$router.replace('/dashboard')
    }
  },
  methods: {
    onSubmit () {
      if (this.username && this.password) {
        localStorage.setItem('authToken', 'SpjcYz8xQyY7w9Jz-DRU')
        this.$router.replace('/dashboard')
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  max-width: 500px;
  margin: 30px auto;
}

.form-group {
  margin-bottom: 20px;
}
</style>
