<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand text-style" :to="{ name: 'home' }"> Book Review App</router-link>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-2">
                        <router-link class="btn btn-primary" aria-current="page" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="btn btn-primary btn-light" aria-current="page" v-if="isAuthenticated" :to="{ name: 'Dashboard'}">Dasboard </router-link>
                    </li>
                    <li class="nav-item mx-2">
                        <router-link class="btn btn-success" v-if="isAuthenticated" :to="{ name: 'create' }">Create New Review</router-link>
                    </li>
                    <li class="nav-item mx-2">
                        <router-link class="btn btn-secondary" aria-current="page" v-if="!isAuthenticated" :to="{ name: 'login'}">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="btn btn-secondary" aria-current="page" v-if="!isAuthenticated" :to="{ name: 'signup'}">Sign Up</router-link>
                    </li>
                    <li class="nav-item mx-2">
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


