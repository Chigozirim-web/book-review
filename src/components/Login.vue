
<template>
<section>
    <form class="page-border" @submit.prevent="login">
       <h6> Already have an account? Login </h6>
       <h5> If not, sign up here
           <router-link class="btn btn-dark btn-sm" aria-current="page" :to="{ name: 'signup'}">Sign Up</router-link> 
       </h5>
        <div class="mb-3">
            <label for="username" class="form-label">Username </label>
            <input type="name" class="form-control" v-model="username" placeholder="Input username">
        </div>
        <div class="mb-3">
            <label for="inputPassword3" class="col-sm-1 col-form-label">Password </label>
            <input type="password" class="form-control" v-model="password" placeholder="Input password">
        </div>
        <button type="submit" class="btn btn-primary btn-dark">Log in</button>
    </form>
    <br>
</section>
   
</template>

<script>

export default {
    data() {
        return {
            username:'',
            password: ''
        }
    },

    methods: {
      login() {
          this.$store.dispatch('login', {
              username: this.username,
              password: this.password
          }).then(() => this.$router.push({ name: 'Dashboard'}))
      }
    },


}
</script>

<style>

.page-border
{
  margin: 70px;
}
</style>