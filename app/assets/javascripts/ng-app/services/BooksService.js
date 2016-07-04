function BooksService($http) {
  var API_URL = 'http://localhost:3000/api'

  this.getRandomBook = function() {
    return $http.get(API_URL + '/books.json')
  }

  this.getBook = function(id) {
    return $http.get(API_URL + '/books/' + id + '.json')
  }

  this.getBooks = function() {
    return $http.get(API_URL + '/all.json')
  }

  this.addBook = function(data) {
    return $http.post(API_URL + '/books', data);
  }

  this.editBook = function(data, id) {
    return $http.put(API_URL + '/books/' + id, data);
  }
}

angular 
  .module('app')
  .service('BooksService', BooksService)