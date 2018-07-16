<template>
    <div class="hotel-wrapper">
      <a href="#" v-on:click="selectHotel(hotel.id)">{{hotel.name}}</a>
      <div class="other-details">
        <div>
          <img :src="hotel.photo" :alt="hotel.name" class="img-responsive">
        </div>
        <div>
          <p><span class="colored-bold">{{totalPrice}}$</span> for <span class="colored-bold">{{totalNights}}</span>  Night</p>
          <p>{{hotel.totalScore}} - {{getScoreText(hotel.totalScore)}}</p>
          <p>{{hotel.totalReviews}} reviews</p>
        </div>
      </div>
    </div>
</template>

<script>
import EventBus from '../eventBus.js'

const HotelPreview = {
  name: 'HotelPreview',
  props: {
    hotel: Object
  },
  data () {
    return {
      totalNights: 1,
      /**
       * Just a simple mapping table for score values
       */
      scoreTable: {
        '8.5': 'Very good',
        '9': 'Excellent',
        '7': 'Good'
      }
    }
  },
  methods: {
    /**
     * Emit HOTEL_CHANED event passing id param
     * @param id - new hotel id
     */
    selectHotel: function (id) {
      EventBus.$emit('HOTEL_CHANGED', id)
    },
    /**
     * Map hotel score number to its score text
     * @param score - hotel score
     * @return score text
     */
    getScoreText: function (score) {
      return this.scoreTable[score]
    }
  },
  computed: {
    /**
     * Calculate nights price
     * @return nights price
     */
    totalPrice: function () {
      return this.hotel.pricePerNight * this.totalNights
    }
  },
  mounted () {
    /**
     * Listen to NIGHTS_CHANGED event
     * @return new totalNights
     */
    // eslint-disable-next-line
    EventBus.$on('NIGHTS_CHANGED', nights => this.totalNights = nights)
  }
}
export default HotelPreview
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hotel-wrapper{
  padding: 1em;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  transition: all .3s;
}
.hotel-wrapper:hover{
  -webkit-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.50);
  -moz-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.50);
  box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.50);
}
.other-details{
  margin: 1em 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  text-align: left;
}
.other-details div:nth-child(2){
  margin-left: 2em;
}
.hotel-wrapper > a {
  display: block;
  margin: .5em 0;
  text-align: left;
  font-size: 1em;
  color: rgb(0, 129, 161);
  text-transform: uppercase;
  font-weight: 600
}
.hotel-wrapper p{
  line-height: 1;
  margin: 1em 0;
}
.colored-bold {
  color: rgb(0, 129, 161);
  font-weight: 600;
}
</style>
