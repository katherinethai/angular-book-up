function AddBookController($location, BooksService) {
  this.create = function() {
    var data = {title: this.title, author: this.author, genre: this.genre, img_link: this.img_link, amazon_link: this.amazon_link, text: this.text};

    BooksService.addBook(data).then(function (response) {
      $location.path('#/admin/' + response.data.id)
    })
  }
}

angular
  .module('app')
  .controller('AddBookController', AddBookController)