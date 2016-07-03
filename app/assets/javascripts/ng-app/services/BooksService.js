function BooksService($http) {
  var API_URL = 'http://localhost:3000/api/books'

  this.getRandomBook = function() {
    return $http.get(API_URL + '.json')
  }
}

angular 
  .module('app')
  .service('BooksService', BooksService)