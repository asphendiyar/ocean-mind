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
    font-family: 'Montserrat', sans-serif;
  }
  body{
    background-color: #264da8;
  }
  .app{
    background-color: #264da8;
  }
</style>
