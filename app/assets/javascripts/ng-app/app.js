angular 
  .module('app', [
    'ngAnimate',
    'ui.router',
    'templates'
    ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'HomeController as home'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'home/about.html',
        controller: 'HomeController as home'
      })
      .state('books', {
        url: '/books',
        templateUrl: 'books/index.html',
        controller: 'BookController as book',
        resolve: {
          book: ['BooksService', function (BooksService) {
            return BooksService.getRandomBook();
          }]
        }
      });

      $urlRouterProvider.otherwise('/');
  });