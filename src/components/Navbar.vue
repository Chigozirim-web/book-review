<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand text-style" :to="{ name: 'home' }"  aria-current="page"> Book-Review! </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse my-2" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-4">
                    <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }"> Home</router-link>
                </li>
                <li class="nav-item mx-4">
                    <router-link class="nav-link" aria-current="page" v-if="isAuthenticated" :to="{ name: 'Dashboard'}">Dashboard </router-link>
                </li>
                <li class="nav-item mx-4">
                    <router-link class="nav-link" v-if="isAuthenticated" :to="{ name: 'create' }">Create New Review</router-link>
                </li>
                <li class="nav-item mx-4">
                    <router-link class="nav-link" aria-current="page" v-if="!isAuthenticated" :to="{ name: 'login'}">Login</router-link>
                </li>
                <li class="nav-item mx-4">
                    <router-link class="nav-link" aria-current="page" v-if="!isAuthenticated" :to="{ name: 'signup'}">Sign Up</router-link>
                </li>
                <li class="nav-item mx-4">
                    <a class="btn btn-danger" v-if="isAuthenticated" @click="handleClick">Logout</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>


<script>
import Cookies from 'js-cookie'

export default {
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated
        }
    },

    methods: {
        handleClick() {
            /*localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('vuex') */
            Cookies.remove('vuex')
            this.$store.state.jwt = ''
            this.$store.state.user = ''
            this.$router.push({ name: 'login'})
        }
    }
}
</script>

<style>
.text-style
{
    font-size: 30px !important;
    font-family: fantansy !important;
    color: brown !important;
}

 

</style>


