import Vue from 'vue'
import Hotels from '../../../src/components/Hotels'

const Constructor = Vue.extend(Hotels)
const vm = new Constructor().$mount()

/**
 * Test Component children components regitered
 */
describe('Hotels.vue', () => {
  it('should have HotelPreview component', () => {
    expect(vm.components).hasOwnProperty('HotelPreview')
  })
})
