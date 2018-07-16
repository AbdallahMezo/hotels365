import Vue from 'vue'
import Comments from '../../../src/ui/Comments'

const Constructor = Vue.extend(Comments)
const vm = new Constructor({
  propsData: {
    reviews: [
      {
        'review': 'I really liked my stay in hilton sharm',
        'score': 5
      },
      {
        'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna. Mattis vulputate enim nulla aliquet porttitor.',
        'score': 4.9
      },
      {
        'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et magnis dis parturient montes nascetur ridiculus. Dictum varius duis at consectetur lorem donec.',
        'score': 4.6
      },
      {
        'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. In fermentum posuere urna nec.',
        'score': 4.5
      },
      {
        'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Ipsum dolor sit amet consectetur adipiscing elit.',
        'score': 4
      },
      {
        'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius.',
        'score': 4.8
      },
      {
        'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.',
        'score': 4.7
      },
      {
        'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.',
        'score': 4.7
      },
      {
        'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.',
        'score': 4.7
      },
      {
        'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.',
        'score': 4.7
      },
      {
        'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.',
        'score': 4.7
      }
    ]
  },
  data () {
    return {
      currentPage: 2,
      commentsPerPage: 3,
      numberOfPages: 4
    }
  }
}).$mount()

/**
 * Test getPagesCount method to return number of pages
 */
describe('Comments.vue', () => {
  it('should return number of pages', () => {
    const comments = ['comment1', 'comment2', 'comment3', 'comment4', 'comment4', 'comment4', 'comment4', 'comment4']
    expect(vm.getPagesCount(comments, 3)).to.equal(3)
  })
})

/**
 * Test sortCommentsDec to return sorted array ascending
 */
describe('Comments.vue', () => {
  it('should return sorted array', () => {
    const arr = [{score: 3}, {score: 5}, {score: 4}, {score: 1}, {score: 2}]
    const sorted = [{score: 5}, {score: 4}, {score: 3}, {score: 2}, {score: 1}]
    expect(vm.sortCommentsDec(arr)).to.eql(sorted)
  })
})

/**
 * Test SortAcs to return sorted array ascending
 */
describe('Comments.vue', () => {
  it('should return sorted array', () => {
    const arr = [{score: 3}, {score: 5}, {score: 4}, {score: 1}, {score: 2}]
    const sorted = [{score: 1}, {score: 2}, {score: 3}, {score: 4}, {score: 5}]
    expect(vm.sortCommentsAcs(arr)).to.eql(sorted)
  })
})

/**
 * Test getNextPage to change current page
 */
describe('Comments.vue', () => {
  it('should update current page one next', () => {
    vm.getNextPage()
    expect(vm.currentPage).to.equal(3)
  })
})

/**
 * Test getPrevPage to change current page
 */
describe('Comments.vue', () => {
  it('should update current page one before', () => {
    vm.getPrevPage()
    expect(vm.currentPage).to.equal(2)
  })
})

/**
 * Test getPrevPage to change page comments
 */
describe('Comments.vue', () => {
  it('should update current page to selected page', () => {
    vm.changePage(3, vm.reviews)
    expect(vm.currentPage).to.equal(3)
  })
})
