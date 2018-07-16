<template>
  <div id="app">
    <Homepage :hotels='hotels'/>
  </div>
</template>

<script>
import axios from 'axios'
import Homepage from './components/Homepage'

export default {
  name: 'App',
  components: {
    Homepage
  },
  data () {
    return {
      hotels: []
    }
  },
  mounted () {
    /**
     * @return hotels data
     */

    axios
      .get('http://my-json-server.typicode.com/fly365com/code-challenge/hotels')
      // eslint-disable-next-line
      .then(result => this.hotels = result.data)
      .catch(error => console.log('== Error in fetching ==', error))
  }
}
</script>

<style>
#app {
  font-family: 'Oxygen', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
