angular 
  .module('app', ['ngAnimate','ui.router','templates'])
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
      })
      .state('add', {
        url: '/add',
        templateUrl: 'books/new.html',
        controller: 'AddBookController as addBook'
      })
      .state('show', {
        url: '/books/:id',
        templateUrl: 'books/show.html',
        controller: 'BookController as book',
        resolve: {
          book: ['$stateParams', 'BooksService', function ($stateParams, BooksService) {
            return BooksService.getBook($stateParams.id);
          }]
        }
      })
      .state('all', {
        url: '/all',
        templateUrl: 'books/all.html',
        controller: 'BooksController as books',
        resolve: {
          books: ['BooksService', function (BooksService) {
            return BooksService.getBooks();
          }]
        }
      })
      .state('settings', {
        url: '/settings/:id',
        templateUrl: 'settings/settings.html',
        controller: 'SettingsController as settings',
        resolve: {
          book: ['$stateParams', 'BooksService', function ($stateParams, BooksService) {
            return BooksService.getBook($stateParams.id);
          }]
        }
      })
      .state('settings.show', {
        url: '/show',
        templateUrl: 'settings/show.html',
        controller: 'ShowSettingsController as show'
      })
      .state('settings.edit', {
        url: '/edit',
        templateUrl: 'settings/edit.html',
        controller: 'EditSettingsController as edit'
      });
      $urlRouterProvider.otherwise('/');
  });