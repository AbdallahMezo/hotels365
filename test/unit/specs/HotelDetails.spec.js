import Vue from 'vue'
import HotelDetails from '../../../src/components/HotelDetails.vue'
import EventBus from '../../../src/eventBus'
// https://github.com/ariya/phantomjs/issues/12401
import 'es6-promise/auto' // a polyfill for Promise support in phantom

const Constructor = Vue.extend(HotelDetails)
const vm = new Constructor({
  data () {
    return {
      numberOfNights: '1'
    }
  }
}).$mount()

/**
 * Test Component children components regitered
 */
describe('Homepage.vue', () => {
  it('should have Gallary and Comments', () => {
    expect(vm.components).hasOwnProperty('Gallary', 'Comments')
  })
})

/**
 * Test component to fetch hotel data
 */
describe('HotelDetails.vue', () => {
  it('should fetch hotel data', done => {
    vm.fetchHotelDetails(37681)
    Vue.nextTick(() => {
      expect(vm.selectedHotel.id).to.equal(37681)
      done()
    })
  })
})
/**
 * Test fetching new hotel on id change
 */
describe('HotelDetails.vue', () => {
  it('should fetch new hotel data on id change', done => {
    vm.selectedHotel.id = 18671
    Vue.nextTick(() => {
      expect(vm.selectedHotel.name).to.equal('Sheraton Sharm')
      done()
    })
  })
})
/**
 * Test change number of nights event
 */
describe('HotelDetails.vue', () => {
  it('should fire NIGHTS_CHANGED event', done => {
    vm.numberOfNights = 3
    let newNumberOfNights
    // eslint-disable-next-line
    EventBus.$on('NIGHTS_CHANGED', value => newNumberOfNights = value)
    Vue.nextTick(() => {
      expect(newNumberOfNights).to.eqaul(3)
      done()
    })
  })
})
