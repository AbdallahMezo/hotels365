<template>
  <div>
    <hr>
    <div class="comments-header">
      <h2>Reviews</h2>
      <button v-on:click='sortCommentsAcs(reviews)'>&uarr;</button>
      <button v-on:click='sortCommentsDec(reviews)'>&darr;</button>
    </div>
    <div class="reviews">
      <div v-for='(comment, i) in comments' class="single-review" :key='i'>
        <span class="score">{{comment.score}}</span>
        <p class="review">{{comment.review}}</p>
      </div>
    </div>
    <div class="pagination">
      <button
        :class='{disabled:currentPage === 1}'
        v-on:click='getPrevPage'
        >Previous</button>
      <div>
        <span
          v-for="n in numberOfPages"
          :class="{selected: n === currentPage}"
          class="pagination-number"
          v-on:click='changePage(n, reviews)'
          :key='n'
          >{{n}}</span>
      </div>
      <button
        :class='{disabled:currentPage === numberOfPages}'
        v-on:click='getNextPage'
        >Next</button>
    </div>
  </div>
</template>

<script>

const Comments = {
  name: 'Comments',
  props: {
    reviews: Array
  },
  data () {
    return {
      comments: [],
      numberOfPages: 0,
      currentPage: 1,
      commentsPerPage: 3
    }
  },
  watch: {
    /**
     * Watch reviews data
     * @return new number of pages
     * @return changes the comments page data
     */
    reviews: function (value, oldValue) {
      if (
        ((!oldValue) && value[0]) ||
        (oldValue[0] || value[0])
      ) {
        this.numberOfPages = this.getPagesCount(value, 3)
        this.changePage(this.currentPage, this.reviews)
      }
    }
  },
  methods: {
    /**
     * @param {array} comments - reviews or comments
     * @param {number} commentsPerPage - comments needed per page
     * @return {number} reviews total pages
     */
    getPagesCount: function (comments, commentsPerPage) {
      return comments.length % commentsPerPage === 0
        ? comments.length / commentsPerPage
        : Math.floor(comments.length / commentsPerPage) + 1
    },
    /**
     * Sort comments ascending
     */
    sortCommentsDec: function (reviews) {
      return reviews.sort((a, b) => b.score - a.score)
    },
    /**
     * Sort comments descending
     */
    sortCommentsAcs: function (reviews) {
      return reviews.sort((a, b) => a.score - b.score)
    },
    /**
     * change comments page one before currnet
     */
    getPrevPage: function () {
      if (this.currentPage >= 1) {
        this.currentPage--
        this.changePage(this.currentPage, this.reviews)
      }
    },
    /**
     * Change comments page one after current
     */
    getNextPage: function () {
      if (this.currentPage <= this.numberOfPages) {
        this.currentPage++
        this.changePage(this.currentPage, this.reviews)
      }
    },
    /**
     * Change comments page
     * @param page - page number
     * @return new page data
     */
    changePage: function (page, reviews) {
      // eslint-disable-next-line
      page < 1 ? page = 1 : null
      // eslint-disable-next-line
      page > this.numberOfPages ? page = this.numberOfPages : null
      this.comments = []
      for (
        let i = (page - 1) * this.commentsPerPage;
        i < (page * this.commentsPerPage) && i < reviews.length;
        i++) {
        this.comments.push(reviews[i])
      }
      this.currentPage = page
    }
  }
}

export default Comments

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comments-header{
    padding: 1em 2em;
    text-align: left;
    display: flex;
    align-items: center;
  }
  .comments-header h2{
    margin: 0;
  }
  .comments-header button{
    border: none;
    margin-left: .3em;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.5em;
    font-weight: 600;
  }
  .comments-header button:focus{
    color: rgb(0, 129, 161);
    outline: none;
  }
  .reviews {
    padding: 1em;
    text-align: left;
  }
  .single-review{
    padding: 1.2em;
    display: flex;
    align-items: center;
    animation: blink .5s linear;
    justify-content: flex-start;
  }
  .review {
    color: #000;
    margin-bottom: 0;
  }
  .score {
    display: block;
    font-size: 1em;
    min-width: 3em;
    padding: 0;
    line-height: 3;
    font-weight: 600;
    background-color: rgb(0, 129, 161);
    color: #fff;
    margin: 0 2em 0 0;
    text-align: center;
    border: 1px solid rgb(0, 129, 161);
    border-radius: 50%;
  }
  .pagination {
    text-align: center;
    margin: 0 auto;
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pagination button {
    width: 5em;
    text-align: center;
    padding: .3em;
    background-color: rgb(0, 129, 161);
    color: #fff;
    border: none;
    margin:0 1em;
    cursor: pointer;
  }
  .pagination-number{
    display: inline-block;
    margin:0 .5em;
    cursor: pointer;
    min-width: 2em;
  }
  .pagination-number.selected{
    border-bottom: 2px solid rgb(0, 129, 161);
  }
  button.disabled{
    background-color: grey;
    cursor: not-allowed;
  }
  @keyframes blink {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
</style>
