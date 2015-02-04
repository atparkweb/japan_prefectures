angular.module('app')
    .controller('HomeViewCtrl', [
        '$scope',
        '$location',
        function ($scope, $location) {
            $scope.title = 'Learn the Prefectures of Japan';
            $scope.startGame = function () {
                // Redirect to game view
            };
        }
    ]);
