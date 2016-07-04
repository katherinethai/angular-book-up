function SettingsController (book) {
  this.data = book.data;
}

angular 
  .module('app')
  .controller('SettingsController', SettingsController);