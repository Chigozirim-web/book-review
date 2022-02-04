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
          <input type="text" class="form-control" v-model="review" placeholder="Insert here">
      </div>
      <div class="mb-3">
          <label class="form-label">Any extra note? </label>
          <input type="text" class="form-control" v-model="note" placeholder="Insert here">
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
      note: ''
    }
  },

  methods: {
    submitReview() {
      this.$store.dispatch('submitNewReview', {
        book: this.book,
        author: this.author,
        review: this.review,
        note: this.note
      }).then(() => this.$router.push('/dashboard'))
      .catch((error) => {
          console.log("Error Creating new Review: ", error)
          this.$store.state.Errormsg = error
          this.$router.push('/login')
      })
      
    }
  }
  
}
</script>

<style>

</style>