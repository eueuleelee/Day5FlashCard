var app = angular.module('FlashCards', ['ui.router']);

app.config(function ($stateProvider) {

  $stateProvider.state('statistics', {
    url: '/statistics',
    templateUrl: '/templates/stats.html',
    controller: 'StatsController'
  });

  $stateProvider.state('newCard', {
    url: '/newcard',
    templateUrl: '/templates/newCard.html',
    controller: 'NewCardController'
  });

  $stateProvider.state('view', {
    url: '/view',
    templateUrl: '/templates/view.html',
    controller: 'MainController'
  });

  $stateProvider
    .state('manageCard', {
      url: '/:id',
      template: '<ui-view></ui-view>', //RENDER CHILDREN'S HTML!!!!
      controller: 'ManageCardController'
    })

      .state('manageCard.edit', {
        url: '/edit',
        templateUrl: '/templates/edit.html'
      })

      .state('manageCard.delete', {
        url: '/delete',
        templateUrl: '/templates/delete.html'
      });


})
