//import Vuex from 'vuex'
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import Cookies from 'js-cookie'

import { fetchReviews, fetchReview, updateReview, postReview, deleteReview, seeDashboard, register, authenticate } from '../api'
import { isValidJwt } from '../utils'


const state = {
    reviews: [],
    currentReview: [],
    user: '',
    jwt: '', 
    Errormsg: '',
    Successmsg: ''
}

const actions = {
    async loadReviews(context) {
        const response = await fetchReviews()
        return context.commit('setReviews', { reviews: response.data })
    },

    async loadReview(context, { rid }) {
        const response = await fetchReview(rid)
        return context.commit('setReview', { review: response.data })
    },

    putReview(context, review) {
        context.commit('setReview', { review })
        return updateReview(review, context.state.jwt.token)
    },

    async submitNewReview(context, review) {
        await postReview(review, context.state.jwt.token)
        const msg = "New Review Added!"
        context.commit('successMessage', { msg })
   
    },

    removeReview(context, { rid }) {
        return deleteReview(rid, context.state.jwt.token)
    },
    
    async see_dashboard(context) {
        const response = await seeDashboard(context.state.jwt.token)
        return context.commit('setReviews', {reviews: response.data})
    },

    async login(context, userData) {
        context.commit('setUserData', { userData })
        try {
            const response = await authenticate(userData)
            const msg = 'You are now logged in!'
            context.commit('successMessage', { msg })
            return context.commit('setJwtToken', { jwt: response.data })
        } catch (error) {
            console.log('Error Authenticating: ', error);
            context.commit('errorMessage',  { error } )
        }
    },

    async signUp(context, userData) {
        context.commit('setUserData', { userData })
      
        await register(userData)
        const msg = "Successful Registeration!"
        return context.commit('successMessage', { msg })
    }
}

const mutations = {
    setReviews(state, payload) {
        state.reviews = payload.reviews
    },

    setReview(state, payload) {
        state.currentReview = payload.review
    },
    
    setUserData(state, payload) {
        localStorage.setItem('user', payload.userData.username)
        state.user = payload.userData.username
    },

    setJwtToken(state, payload) {
        localStorage.setItem('token', payload.jwt.token)
        state.jwt = payload.jwt
    },

    errorMessage(state, payload) {
        state.Errormsg = payload.error
    },

    successMessage(state, payload) {
        state.Successmsg = payload.msg
    }
}

const getters = {
    isAuthenticated(state) {
        return isValidJwt(state.jwt.token)
    },
    getUser(state) {
        return state.user
    },
    getCurrentReview(state) {
        return state.currentReview
    }

}

const dataState = createPersistedState({
    paths: ['jwt', 'user'],
    storage: {
        getItem: (key) => Cookies.get(key),

        setItem: (key, value) =>
          Cookies.set(key, value, { secure: true }),
        removeItem: (key) => Cookies.remove(key),
    }
})

export default createStore({
    state,
    getters,
    actions,
    mutations,
    plugins: [dataState]
})
