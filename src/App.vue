<template>
  <div id="app">
    <navbar></navbar>
    <numCalculator></numCalculator>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import NumCalculator from './components/numCalculator'

export default {
  name: 'App',
  data() {
    return {
      'msg': "message"
    }
  },
  components: {
    Navbar,
    NumCalculator
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: none;
}

body {
  background-color: #000;
  color: #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
