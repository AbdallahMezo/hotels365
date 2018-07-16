<template>
  <div class="hotel-details_wrapper container">
    <div class="details-header">
      <h2>{{selectedHotel.name}}</h2>
      <p>For <input type="number" min="1" max="365" value="1" v-model="numberOfNights"> nights</p>
    </div>
    <Gallary :pictures="selectedHotel.pictures"/>
    <Comments :reviews="selectedHotel.reviews"/>
  </div>
</template>

<script>
import axios from 'axios'
import Gallary from './../ui/Gallary'
import Comments from './../ui/Comments'
import EventBus from './../eventBus.js'

const HotelDetails = {
  name: 'HotelDetails',
  props: {
    selectedHotelId: Number
  },
  data () {
    return {
      selectedHotel: {},
      numberOfNights: '1',
      loading: false
    }
  },
  components: {
    Gallary,
    Comments
  },
  methods: {
    /**
     * @param id - hotel id
     * @return promise from request
     */
    fetchHotelDetails: id =>
      axios
        .get(`http://my-json-server.typicode.com/fly365com/code-challenge/hotelDetails/${id}`)
        .then(result => result.data)
        .catch(error => console.log('== Error in fetching ==', error))
  },
  async mounted () {
    /**
     * @return hotel data
     */
    this.selectedHotel = await this.fetchHotelDetails(this.selectedHotelId)
  },
  watch: {
    /**
     * Checks if hotel id is changed
     * @return new hotel data
     */
    selectedHotelId: async function (value, oldValue) {
      // eslint-disable-next-line
      value !== oldValue
        ? this.selectedHotel = await this.fetchHotelDetails(this.selectedHotelId)
        : null
    },
    /**
     * Emit NIGHT_CHANGED event passing param
     * @param value - new nights count
     */
    numberOfNights: function (value, oldValue) {
      // eslint-disable-next-line
      value !== oldValue
        ? EventBus.$emit('NIGHTS_CHANGED', value)
        : null
    }
  }
}
export default HotelDetails
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hotel-details_wrapper{
  margin: 2em auto;
  padding: 0;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}
.details-header{
  text-align: left;
  background-color: rgb(0, 129, 161);
  padding: 2em;
  color: #fff;
}
.details-header input{
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  margin-top: .5em;
  text-align: center;
}
</style>
