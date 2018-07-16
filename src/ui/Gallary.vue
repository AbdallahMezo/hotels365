<template>
  <div class="slider-wrapper">
    <div class="selected-image" >
      <img v-if="selectedPicture" :src="selectedPicture" alt="image" class="img-responsive">
    </div>
    <div class="thumbnail-slider">
      <button v-on:click="scrollLeft">⏪</button>
      <div id="thumbnail-container">
        <img
          v-for="thumbnail in thumbnails"
          :src="thumbnail"
          :key="thumbnail"
          v-on:click="setSelectedPicture"
        >
      </div>
      <button v-on:click="scrollRight">⏩</button>
    </div>
  </div>
</template>

<script>

const Gallary = {
  name: 'Gallary',
  props: {
    pictures: Array
  },
  data () {
    return {
      selectedPicture: ''
    }
  },
  methods: {
    /**
     * @param {string} src - string url
     * @return {string} photo id
     */
    getPhotoId: src => {
      return src.slice(src.length - 2)
    },
    /**
     * @param {object} e - click event
     */
    setSelectedPicture: function (e) {
      const id = this.getPhotoId(e.target.currentSrc)
      this.selectedPicture = this.photos.filter(photo => this.getPhotoId(photo) === id)
    },
    /**
     * @param {object} e - click event
     */
    scrollLeft: function (e) {
      const container = document.getElementById('thumbnail-container')
      container.scrollLeft += 100
    },
    /**
     * @param {object} e - click event
     */
    scrollRight: function (e) {
      const container = document.getElementById('thumbnail-container')
      container.scrollLeft -= 100
    }
  },
  computed: {
    /**
     * @return {array} hotel thumbnails for slider
     */
    thumbnails: function () {
      return this.pictures && this.pictures.map(picture => picture.thumbnail)
    },
    /**
     * @return {array} hotel photos for slider
     */
    photos: function () {
      return this.pictures && this.pictures.map(picture => picture.photo)
    }
  },
  watch: {
    /**
     * @return {string} default image url
     */
    photos: function (value, oldValue) {
      // eslint-disable-next-line
      (!oldValue && value[0]) || (oldValue[0] !== value[0])
        ? this.selectedPicture = value[0]
        : null
    }
  }
}
export default Gallary
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slider-wrapper{
    margin: 2em auto;
    width: 70%;
  }
  #thumbnail-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
  }
  .thumbnail-slider{
    display: flex;
    align-items: center;
    width: 100%;
  }
  .thumbnail-slider button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 2em;
  }
  .selected-image img{
    width: auto;
    height: 400px;
    animation: blink .5s linear;
  }
  .thumbnail-slider img{
    margin: 1em;
    cursor: pointer
  }
  .thumbnail-slider img:hover{
    filter: opacity(.8)
  }

  @keyframes blink {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  </style>
