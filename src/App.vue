<template>
  <div id="app">
    <navbar />
    <numCalculator/>
  </div>
</template>

<script>
import numCalculator from './components/numCalculator.vue';
import navbar from "./components/navbar.vue";

export default {
  name: 'app',
  components: {
    numCalculator,
    navbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  border: 0;
}
body{
  background-color: #000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  min-height: 550px;
}
</style>
