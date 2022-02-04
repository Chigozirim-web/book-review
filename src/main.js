import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './routers'
import store from './store'
//import mitt from 'mitt'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')


