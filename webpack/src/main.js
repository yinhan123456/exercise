const add = require('./add.js')
const img1 = require('./b.jpg')
const img2 = require('./11.jpg')
require('./style.css')

import Vue from 'vue'


console.log('main')
console.log(add)
console.log(add(3,4))
console.log(img1)
console.log(img2)
// console.log(style)


console.log(3333, Vue)
window.onload = function () {
  new Vue({
    el: '#vd',
    data: {
      good: 'abcdefg'
    },
    created() {
      console.log(11111111111111111111)
    },
    mounted() {
      console.log(222222222222222)
    },
    template: '<p>vupp{{good}}pppe</p>'
  })
}

