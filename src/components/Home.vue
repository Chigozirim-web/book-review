<!-- For fetching a review by id !-->
<template>
  <div >
    <br>
    <div v-if="isEmpty(reviews)" class="card text-center" style="margin:130px; background-color:rgb(71, 68, 65); width:80%">
      <div class="card-header">
       <span style='font-size:40px; color:brown; font-family:Verdana'> No Reviews have been created yet &#128532;</span> 
      </div>

      <div class="card-body">
        <h4> <p class="card-text follow"> Submit great book reviews now for others to see! </p> </h4>
      </div>

      <div class="card-footer text-muted">
          <div class="row justify-content-center">
            <div class="col-4"> 
            <router-link class="btn btn-secondary" :to="{ name: 'login'}">Login</router-link>
            </div>
            <div class="col-4">
            <router-link class="btn btn-secondary" :to="{ name: 'signup'}">Sign Up</router-link>
            </div>
          </div>
        </div>
    </div>

    <section v-if="!isEmpty(reviews)" style="text-align: center;">  
      <h2 style="font-family: Cursive"> Check out these awesome book reviews from fellow users! </h2>
    </section>
    
    <div v-if="!isEmpty(reviews)" class="container overflow-hidden row gy-3 center">
      <div v-for="review in reviews" :key="review.rid" >
        <div class="col-12 p-3 border bg-dark" style="color: rgb(250, 235, 215)"> 
          <h2> {{review.book}} </h2>
           by: <h3> {{review.author}} </h3> 
          <button class="btn btn-primary btn-dark follow" @click="go(review.rid)"> See Book Review </button>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'


export default {
  setup() {
    //"`/review/${review.rid}`"

    const store = useStore()

    const reviews = computed(() => store.state.reviews)

    store.dispatch('loadReviews')

    return {
      reviews
    }
  },

  methods: {

    isEmpty(check) {
      if(check.length == 0) return true
      else return false
    },

    go(id) {
      this.$store.dispatch('loadReview', { rid: parseInt(id) })
      .then(() => {
        this.$router.push({ path: `/review/${id}`})
      })
    }
  }
}
</script>


<style>
.follow {
  text-decoration: none;
  color: brown;
  font-size: 20px;
}
/* rgb(209, 214, 216)*/
.center {
  margin: auto;
  width: 80%;
  padding: 10px;
}
</style>