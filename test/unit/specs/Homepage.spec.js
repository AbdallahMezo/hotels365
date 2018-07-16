import Vue from 'vue'
import Homepage from '../../../src/components/Homepage'
import EventBus from '../../../src/eventBus'

const Constructor = Vue.extend(Homepage)
const vm = new Constructor().$mount()

/**
 * Test Component children components regitered
 */
describe('Homepage.vue', () => {
  it('should have HotelDetails and Hotels components', () => {
    expect(vm.components).hasOwnProperty('HotelDetails', 'Hotels')
  })
})
/**
 * Change hotel id
 */
describe('Homepage.vue', () => {
  it('should Listen hotel id', () => {
    EventBus.$emit('HOTEL_CHANGED', 1234)
    expect(vm.selectedHotelId).to.equal(1234)
  })
})
