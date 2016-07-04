function BookController(book, $state) {
  this.data = book.data;
  this.refresh = function() {
    $state.go('books', {}, {reload: true});
  }
}

angular 
  .module('app')
  .controller('BookController', BookController);