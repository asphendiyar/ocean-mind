<template>
  <div id="app">
    <b-container >
      <Navbar/>
      <router-view></router-view>
    </b-container >
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar},
  name: 'App',
  
}
</script>

<style>
  *{
    font-family: "Raleway", sans-serif;
  }
  body{
    background-color: #c4d3f6;
  }
  
</style>
