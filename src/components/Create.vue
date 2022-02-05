<template>
  <div>
    <form class="page-border" @submit.prevent="submitReview"> 
      <div class="mb-3">
          <label class="form-label">Book Name </label>
          <input type="text" class="form-control" v-model="book" placeholder="Input name of book">
      </div>
      <div class="mb-3">
          <label class="form-label">Author of Book </label>
          <input type="text" class="form-control" v-model="author" placeholder="Author">
      </div>
      <div class="mb-3">
          <label class="form-label">Your Review: </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="review" placeholder="Insert here"></textarea>
      </div>
      <div class="mb-3">
          <label class="form-label">Any extra note? </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" v-model="note" placeholder="Insert here"></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-dark">Submit New review </button>
    </form>
  <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: '',
      author: '',
      review: '',
      note: '',
    }
  },

  methods: {
    submitReview() {
      this.$store.dispatch('submitNewReview', {
        book: this.book,
        author: this.author,
        review: this.review,
        note: this.note
      }).then(() => this.$router.push({ name: 'Dashboard'}))
      .catch((error) => {
          console.log("Error Creating new Review: ", error)
          this.$store.state.Errormsg = error
          this.$router.push({ name: 'login'})
      })
      
    }
  }
  
}
</script>

<style>

</style>