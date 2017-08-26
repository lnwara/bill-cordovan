angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('signUp', {
    url: '/page1',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('signIn', {
    url: '/page8',
    templateUrl: 'templates/signIn.html',
    controller: 'signInCtrl'
  })

  .state('menu.home', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.add', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/add.html',
        controller: 'addCtrl'
      }
    }
  })

  .state('menu.invoices', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/invoices.html',
        controller: 'invoicesCtrl'
      }
    }
  })

  .state('menu.billInfo', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/billInfo.html',
        controller: 'billInfoCtrl'
      }
    }
  })

  .state('menu.budget', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/budget.html',
        controller: 'budgetCtrl'
      }
    }
  })

  .state('menu.offers', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/offers.html',
        controller: 'offersCtrl'
      }
    }
  })

  .state('menu.notifications', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('camera', {
    url: '/page11',
    templateUrl: 'templates/camera.html',
    controller: 'cameraCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});