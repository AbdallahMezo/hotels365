<template>
  <div>
    <Hotels :hotels='hotels'/>
    <HotelDetails :selectedHotelId='selectedHotelId'/>
  </div>
</template>

<script>
import Hotels from './Hotels.vue'
import HotelDetails from './HotelDetails.vue'
import EventBus from '../eventBus.js'

const Homepage = {
  name: 'Homepage',
  data () {
    return {
      selectedHotelId: 37681 // default hotel id
    }
  },
  components: {
    Hotels,
    HotelDetails
  },
  props: {
    hotels: Array
  },
  mounted () {
    /**
     * Listing to HOTEL_CHANGED event
     * @return change selected hotel id
     */
    EventBus.$on('HOTEL_CHANGED', (id) => {
      this.selectedHotelId = id
    })
  }
}
export default Homepage
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
