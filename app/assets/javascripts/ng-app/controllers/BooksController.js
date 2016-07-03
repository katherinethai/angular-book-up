function BooksController(books) {
  this.data = books.data;
}

angular 
  .module('app')
  .controller('BooksController', BooksController);