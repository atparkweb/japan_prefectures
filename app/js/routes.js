angular.module('app')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeViewCtrl'
            })
            .when('/play', {
                templateUrl: 'views/play.html',
                controller: 'PlayViewCtrl'
            })
            .when('/gameover', {
                templateUrl: 'views/gameover.html',
                controller: 'GameoverView.html'
            });
    });