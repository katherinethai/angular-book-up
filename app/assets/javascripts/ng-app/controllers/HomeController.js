function HomeController($scope) {
  $scope.tagline = 'Get hooked on a good book.'
}

angular
  .module('app')
  .controller('HomeController', HomeController);