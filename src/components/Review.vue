
<template>
  <div> 
    <br>
      <section style="text-align: center;"> 
          <div> 
            <label><h3 style="font-family: Cursive"> Book: </h3> </label>
              <p class="text-style"> {{rev.review.book}} </p>
              <label> <h3 style="font-family: Cursive"> Author: </h3> </label>
              <p class="text-style"> {{rev.review.author}} </p>
          </div>
          <div class="row"> 
            <label> <h3 style="font-family: Cursive"> Review: </h3> </label>
              <div class="col 12 text-style" id="box">
                  {{rev.review.review}}
              </div>
          </div>
          <div class="row">
            <label> <h3 style="font-family: Cursive"> Note: </h3> </label> 
              <div class="col 12 text-style" id="box">
                  {{rev.review.note}}
              </div>
          </div>
          <div>
            <p> Created by: <b>{{rev.creator}} </b> </p>
            <p> Created at: <i>  {{rev.review.created_at}} </i>  </p>
          </div>
      </section>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
//import { useRoute } from 'vue-router'


export default {
  setup() {

    const store = useStore()
    
    const rev = computed(() => store.getters.getCurrentReview)
    
    return {
      rev
    }
  }  
}
</script>

<style>
#box {
  background-color: rgb(250, 235, 215);
  width: 300px;
  border: 7px solid black;
  padding: 60px;
  margin: 20px;
}
</style>