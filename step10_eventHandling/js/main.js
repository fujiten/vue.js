const app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    message: ''
  },
  methods: {
    clickHandler: function(event) {
      this.counter++
      console.log(event)
      console.log(event.target)
      console.log(event.target.innerHTML) 
      console.log(event.target.type)
      console.log(event.target.tagName)
    },
    clickHandler2: function(message) {
      this.message = message
    },
    clickHandler3: function($event, message) {
      this.message = message + '!!!'
      console.log($event)
    },
    clear: function() {
      this.message = ''
    }
  }
})
