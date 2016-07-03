function BooksController(books, $filter, $scope) {
  this.data = books.data;

  $scope.$watch('books.search', function(val) {
    books.filteredList = $filter('filter')(this.data, val)
  });
}

angular 
  .module('app')
  .controller('BooksController', BooksController);