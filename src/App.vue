<template>
  <div id="app">
    <b-container >
      <Navbar/>
      <Navigation/>
      <router-view></router-view>
    </b-container >
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Navigation from './components/Navigation.vue'

export default {
  components: { Navbar, Navigation},
  name: 'App',
  
}
</script>

<style>

</style>
