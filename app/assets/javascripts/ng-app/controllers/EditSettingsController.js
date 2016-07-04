function EditSettingsController(book, $scope, BooksService, $state) {
  this.data = book.data;
  $scope.book = this.data;
  $scope.update = function(id) {
    var book = this.edit.data;
    var data = {title: book.title, author: book.author, genre: book.genre, img_link: book.img_link, amazon_link: book.amazon_link, text: book.text};
    BooksService.editBook(data, id).then(function () {
      $state.go('settings.show', {}, {reload: true});
    });
  };
};

angular   
  .module('app')
  .controller('EditSettingsController', EditSettingsController);