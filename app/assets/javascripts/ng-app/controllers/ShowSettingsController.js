function ShowSettingsController(book) {
  this.data = book.data;
}

angular   
  .module('app')
  .controller('ShowSettingsController', ShowSettingsController);