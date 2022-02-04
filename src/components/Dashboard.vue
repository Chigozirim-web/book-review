<template>
  <div >
    <br>
    <section style="text-align: center;">  
      <h2 style="font-family: Cursive"> Your created Book Reviews! </h2>
    </section>
    <br> <br>
    <div v-if="isEmpty(reviews)" class="card">
      <div class="card-body fun">
        <p >
        <strong> You have not added any reviews yet </strong>
        </p>
        <p >  
          <router-link class="btn btn-success" to="/create">Create a new Review now</router-link>
        </p>
      </div>
    </div>

    <div v-if="!isEmpty(reviews)">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Book Title </th>
            <th scope="col">Author </th>
            <th scope="col">Created At </th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="review in reviews" :key="review.rid">
            <td> {{ review.book }}  </td>
            <td> {{ review.author }}  </td>
            <td> {{ review.created_at }}  </td>
            <td>     <!-- Button trigger modal -->
              <button type="button" class="btn btn-warning btn-sm" 
              data-bs-toggle="modal" 
              data-bs-target="#updateModal"
              @click="editForm(review)"> 
                Update      <!-- DONE add event here that would transfer the input into a form declared in script or sth.. -->
              </button>
            </td>
            <td> 
              <button type="button" class="btn btn-danger btn-sm" 
              data-bs-toggle="modal" 
              data-bs-target="#deleteModal"
              @click="saveForDelete(review.rid)"> 
                Delete 
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal -->
      <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="updateModalLabel">Update Review</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form class="page-border" @submit.prevent="updateReview"> <!-- change @submit=... DONE -->
                <div class="mb-3">
                    <label class="form-label">Book Name </label>
                    <input type="text" class="form-control" v-model="book"  placeholder="Input name of book">
                </div>
                <div class="mb-3">
                    <label class="form-label">Author of Book {{ review.author }} </label>
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
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deleteModalLabel">Delete Review</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p> 
                <strong> Are you sure you want to delete this review? </strong>
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="deleteReview" data-bs-dismiss="modal">Yes</button>  <!--DONE add a @click= method here for deletion -->
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script> 
import { useStore } from 'vuex'
import { computed, onBeforeMount } from 'vue'
//REMOVE LATER: value={{review.author}}

export default {

  data() {
    return {
      id: '',
      book: '',
      author: '',
      review: '',
      note: ''
    }
  },

  setup() {
    const store = useStore()

    const reviews = computed(() => store.state.reviews)

    onBeforeMount(() =>{
      store.dispatch('see_dashboard')
    })
    
    return {
      reviews
    }
  }, 
  
  methods: {
    isEmpty(check) {
      if(check.length == 0) return true
      else return false
    },

    editForm(review) {
      this.id = review.rid
      this.book = review.book
      this.author = review.author
      this.review = review.review
      this.note = review.note
    },

    updateReview() {
      this.$store.dispatch('putReview', {
        rid: this.id,
        book: this.book,
        author: this.author,
        review: this.review,
        note: this.note
      }).then(() => this.$store.dispatch('see_dashboard'))
        .catch((error) => {
          console.log("Error Updating Review: ", error)
          this.$store.state.Errormsg = error
          //this.$router.push('/login')
        })
    },

    saveForDelete(id) {
      this.id = id
      console.log("To delete: ", this.id)
    },

    deleteReview() {
      this.$store.dispatch('removeReview',  { rid: parseInt(this.id) })
      .then(() => this.$store.dispatch('see_dashboard'))
      .catch((error) => {
        console.log("Error Deleting Review: ", error)
        this.$store.state.Errormsg = error
        //this.$router.push('/login')
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

.follow:hover {
  color: brown;
}

.fun {
  color:brown;
  background-color: rgb(250, 235, 215);
  font-size: 280%;
  font-family: cursive;
  text-align: center;
  width: 95%;
  margin: 40px;
}
</style>