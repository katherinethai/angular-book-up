function BooksService($http) {
  var API_URL = 'http://localhost:3000/api/books'

  this.getRandomBook = function() {
    return $http.get(API_URL + '.json')
  }

  this.getBook = function(id) {
    return $http.get(API_URL + '/' + id + '.json')
  }

  this.addBook = function(data) {
    return $http.post(API_URL, data);
  }
}

angular 
  .module('app')
  .service('BooksService', BooksService)