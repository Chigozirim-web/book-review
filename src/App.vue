<template>
  <div id="app" style="background-color: rgb(250, 235, 215);"> 
    <Navbar />
    <alert :error=err :success=succ> </alert>
    <router-view/>
  </div>
</template>

<script >
import { computed } from 'vue'
import {useStore } from 'vuex'

import Navbar from './components/Navbar.vue'
import Alert from './components/Alert.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    alert: Alert,
  },

  setup() {
    
    const store = useStore()

    const err = computed(() => store.state.Errormsg) 
    const succ = computed(() => store.state.Successmsg)
    
    return {
        err,
        succ
    }
  }
}
</script>

<style>

</style>
