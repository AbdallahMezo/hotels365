import Vue from 'vue'
import App from '../../../src/App.vue'
// https://github.com/ariya/phantomjs/issues/12401
import 'es6-promise/auto' // a polyfill for Promise support in phantom

const Constructor = Vue.extend(App)
const vm = new Constructor().$mount()

/**
 * Test Component children components regitered
 */
describe('App.vue', () => {
  it('should have Homepage component', () => {
    expect(vm.components).hasOwnProperty('Homepage')
  })
})

/**
 * Test component to fetch hotel data
 */
describe('App.vue', () => {
  it('should fetch all hotels data', done => {
    Vue.nextTick(() => {
      expect(vm.hotels.length).to.be.above(0)
      done()
    })
  })
})
