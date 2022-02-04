
<template>
  <div>
    <form class="page-border" @submit.prevent="register">
      <h6> Don't have an account? Sign up </h6>
      <h5> If not, login here
          <router-link class="btn btn-dark btn-sm" aria-current="page" :to="{ name: 'login'}">Login</router-link> 
      </h5>
      <div class="mb-3">
          <label for="username" class="form-label">Username </label>
          <input type="name" class="form-control" v-model="username" placeholder="Input username">
      </div>
      <div class="mb-3">
          <label  class="col-sm-1 col-form-label">Password </label>
          <input type="password" class="form-control" v-model="password" id="inputPassword3" placeholder="Input password">
      </div>
      <div class="mb-3">
          <label for="inputPassword2" class="col-form-label"> Confirm Password</label>
          <input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm password">
      </div>
      <button type="submit" class="btn btn-primary btn-dark">Sign up</button>
    </form>
  <br>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      password_confirm: ''
    }
  },
  
  methods: {
    register() {
      if(this.username === '' || this.password === '' || this.password_confirm === '') {
        alert("Please fill out all the fields")
      }
      else {
        this.$store.dispatch('signUp', {
        username: this.username,
        password: this.password,
        password_confirm: this.password_confirm
        }).then(() => this.$router.push({name: 'login'}))
        .catch((error) => {
            console.log('Error Registering: ', error)
            this.$store.state.Errormsg = error
        })
      }
    }
  }
}
</script>

<style>

</style>