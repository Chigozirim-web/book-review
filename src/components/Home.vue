<!-- For fetching a review by id !-->
<template>
  <div >
    <br>
    <section style="text-align: center;">  
      <h2 style="font-family: Cursive"> Check out these awesome book reviews from fellow users! </h2>
    </section>
    
    <div class="container overflow-hidden row gy-3 center">
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

.center {
  margin: auto;
  width: 80%;
  padding: 10px;
}
</style>