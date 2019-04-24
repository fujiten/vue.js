vue = new Vue({
  el: '#app',
  data: {
    basePrice: 100
  },
  methods: {
    returnRandomNumber: function(){
      return Math.random()
    }
  },
  computed: {
    returnRandom: function(){
      return Math.random()
    }
  }
})


