<template>
  <div>
    <h1 class="text-center m-4">
      DASHBOARD
    </h1>
    <table class="table my-5">
      <thead>
        <tr>
          <th>User</th>
          <th>Email</th>
          <th>Register date</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for mock data-->
        <tr>
          <td>User 1</td>
          <td>user@gmail.com</td>
          <td>2022.12.12</td>
        </tr>
      </tbody>
    </table>
    <p class="text-center">
      <button class="btn btn-primary" @click="logout">
        LOGOUT
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  mounted () {
    if (!localStorage.getItem('authToken')) {
      this.$router.replace('/login')
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('authToken')
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>

</style>
