<template>
  <div>
    <div v-if="error" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong> {{ error }} </strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div v-if="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong> {{ success }} </strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>


export default {

    props: ['error', 'success'],

}
</script>

<style>

</style>