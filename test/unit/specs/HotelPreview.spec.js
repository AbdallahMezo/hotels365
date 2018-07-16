import Vue from 'vue'
import HotelPreview from '../../../src/components/HotelPreview.vue'
import EventBus from '../../../src/eventBus'

const Constructor = Vue.extend(HotelPreview)
const vm = new Constructor({
  propsData: {
    hotel: {
      pricePerNight: 80
    }
  },
  data () {
    return {
      totalNights: 5,
      scoreTable: {
        '8.5': 'Very good',
        '9': 'Excellent',
        '7': 'Good'
      },
      id: '123'
    }
  }
}).$mount()

/**
 * Test gettings score values
 */
describe('HotelPreview.vue', () => {
  it('should return correct string value per score', () => {
    expect(vm.getScoreText('7')).to.equal('Good')
  })
})

/**
 * Should return right total price per nights
 */
describe('HotelPreview.vue', () => {
  it('Should return a correct nights price', () => {
    expect(vm.totalPrice).to.equal(400)
  })
})
/**
 * Should change the totalPrice based on totalNights
 */
describe('HotelPreview.vue', () => {
  it('Should return new correct nights price', () => {
    EventBus.$emit('NIGHTS_CHANGED', 6)
    expect(vm.totalPrice).to.equal(480)
  })
})

/**
 * Should fire HOTEL_CHANGED event
 */
describe('HotelPreview.vue', () => {
  it('should fire HOTEL_CHANGED event', () => {
    vm.selectHotel(412)
    let newHotelId
    // eslint-disable-next-line
    EventBus.$on('HOTEL_CHANGED', value => newHotelId = value)
    Vue.nextTick(done => {
      expect(newHotelId).to.eqaul(412)
      done()
    })
  })
})
