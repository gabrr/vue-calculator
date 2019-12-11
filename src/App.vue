<template>
  <div id="app">
    <num-calculator/>
  </div>
</template>

<script>
import numCalculator from './components/numCalculator.vue';

export default {
  name: 'app',
  components: {
    numCalculator
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
  margin-top: 60px;
}
</style>
