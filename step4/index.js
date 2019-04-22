Vue.filter('toUSD', function(jpy){
  return jpy / 100
})

Vue.filter('numberFormat', function(value){
  return value.toLocaleString()
})

Vue.filter('readMore', function(text, length, suffix){
  return text.substring(0, length) + suffix
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    price: 29800,
    text: 'oLocaleStrinoLocaleSsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatr'
  },
  // filters: {
  //   numberFormat: function(value){
  //     return value.toLocaleString()
  //   }
  // },
  methods: {
    clickHandler: function(event){
      this.message = this.message.split('').reverse().join('')
    }
  }
})
