const app = new Vue({
  el: '#app',
  data: {
    styleObject: {
      color: 'blue',
      fontSize: '36px',
    },
    color: 'blue',
    fontsize: 36,
    classObject: {
      large: true,
      'text-danger' : false
    },
    largeClass: {
      large: true,
      'bg-gray': true
    },
    dangerClass: {
      'text-danger': true
    },
    isLarge: false
  }
})
