function AddBookController($location, BooksService, $scope, $stateParams, $state) {
  $scope.create = function(id) {
    var book = this.addBook.book;
    var data = {title: book.title, author: book.author, genre: book.genre, img_link: book.img_link, amazon_link: book.amazon_link, text: book.text};
    BooksService.addBook(data).then(function (response) {
      $state.go('settings', {'id': response.data.id }, {reload: true});
    });
  };
};

angular
  .module('app')
  .controller('AddBookController', AddBookController)