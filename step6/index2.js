vue = new Vue({
  el: '#app',
  data: {
    firstName: '',
    lastName: '',
  },
  // watch: {
  //   firstName: function(value) {
  //     this.fullName = value + ' ' + this.lastName
  //   },
  //   lastName: function(value) {
  //     this.fullName = this.firstName + ' ' + value
  //   }
  // },
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  }
})
