<template>
  <div class="hotels-wrapper container">
    <div class="row">
      <div v-for='(hotel, i) in hotels' class="col-md-4" :key='i'>
        <HotelPreview :hotel='hotel'/>
      </div>
    </div>
  </div>
</template>

<script>
import HotelPreview from './HotelPreview'
const Hotels = {
  name: 'Hotels',
  props: {
    hotels: Array
  },
  components: {
    HotelPreview
  }
}
export default Hotels
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hotels-wrapper{
  padding: 0;
}
</style>
