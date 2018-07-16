# hotels365

> A Vue.js project


## Acceptance Criteria
- ~~The application starts with listing all hotels http://my-json-server.typicode.com/fly365com/code-challenge/hotels~
- ~~The user can click on any hotel to get its details, the hotel details is rendered in same page "no router needed" http://my-json-server.typicode.com/fly365com/code-challenge/hotelDetails/{id}~~ 
- ~~The user can change the number of nights and this will reflect on all hotels prices, the default is one night~~
- ~~The user should find an image gallery for the hotel~~
- ~~The user should see the comments divided into pages and each page contains 3 comments~~
- ~~The user can sort comments based on comment score~~


## Expectations

- You can use any javascript framework you want for this task (using VUE is a plus)
-- VueJs used to create this page

- You can use any css framework
-- bootstrap.min.css used to create simple layout

- ~~ECMAScript 6 and beyond must be used~~

- Unit testing

  -- Karmajs used in addition to Mochajs and PhantomJs to create unit tests
  -- Tests covarge are 91.94%
  -- 5/23 Failed tests *to be fixed later*

- No plugin should be used for pagination and image gallery
  -- created a simple Vuejs component to display images in a gallary
  -- style needs some improvments

- How will the components commuicate with each other ?
  -- by following higher order component pattern and passing data from parent component to child
components as props
  -- for reveresed commuication event bus had beed used to fire events for parent components to listen and do something

- *Quality over quantity*

- For uncompleted points please mention in the readme how you were going to implement them.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
