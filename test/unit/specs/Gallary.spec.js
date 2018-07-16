import Vue from 'vue'
import Gallary from '../../../src/ui/Gallary'

const Constructor = Vue.extend(Gallary)
const vm = new Constructor({
  propsData: {
    pictures: [
      {
        photo: 'http://domain.com/1500/1500?id=11',
        thumbnail: 'http://domain.com/100/100?id=11'
      },
      {
        photo: 'http://domain.com/1500/1500?id=12',
        thumbnail: 'http://domain.com/100/100?id=12'
      },
      {
        photo: 'http://domain.com/1500/1500?id=10',
        thumbnail: 'http://domain.com/100/100?id=10'
      }
    ]
  }
}).$mount()

const thumbnails = ['http://domain.com/100/100?id=11', 'http://domain.com/100/100?id=12', 'http://domain.com/100/100?id=10']

const photos = ['http://domain.com/1500/1500?id=11', 'http://domain.com/1500/1500?id=12', 'http://domain.com/1500/1500?id=10']

// TODO: Find a way to test container move to left and right

/**
 * Test return photo id
 */
describe('Gallary.vue', () => {
  it('should return photo id', () => {
    const url = 'http://domain.com/1500/1500?id=12'
    expect(vm.getPhotoId(url)).to.equal('12')
  })
})

/**
 * test selecting correct photo based on thumbnail id
 */
describe('Gallary.vue', () => {
  it('should set selected picture correctly with thumbnail id - computed', () => {
    const event = {
      target: {
        currentSrc: 'http://domain.com/100/100?id=12'
      }
    }
    vm.setSelectedPicture(event)
    expect(vm.selectedPicture.toString()).to.equal('http://domain.com/1500/1500?id=12')
  })
})

/**
 * test return correct photos from recieved pictures
 */
describe('Gallary.vue', () => {
  it('should return correct photos - computed', () => {
    expect(vm.photos).to.eql(photos)
  })
})

/**
 * test return correct thumbnails from recieved pictures
 */
describe('Gallary.vue', () => {
  it('should return correct photos', () => {
    expect(vm.thumbnails).to.eql(thumbnails)
  })
})
