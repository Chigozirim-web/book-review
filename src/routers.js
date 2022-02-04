import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home'
import Create from './components/Create'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Review from './components/Review'
import Dashboard from './components/Dashboard'
import store from './store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/create',
        name: 'create',
        component: Create,
        beforeEnter (to, from, next) {
            if(!store.getters.isAuthenticated) {
                next('/login')
            }
            else{
                next()
            }
        }
    },

    { 
        path: '/login',
        name: 'login',
        component: Login
    },

    { 
        path: '/sign-up',
        name: 'signup',
        component: SignUp
    },

    {
        path: '/review/:id',
        name: 'Review',
        component: Review
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter (to, from, next) {
            if(! store.getters.isAuthenticated) {
                next({ name: 'login' })
            }
            else {
                next()
            }
        }
    }
]

const base_uri = process.env.BASE_URL
console.log("Base uri is: ", base_uri)

const router = createRouter({
    history: createWebHistory(base_uri),
    routes,
})

export default router;