angular.module('app')
    .controller('PrefectureMapCtrl', ['$scope', function ($scope) {
    }])
    .directive('prefectureMap', [
        'prefectureMapService',
        function (prefectureMapService) {
            return {
                restrict: 'EA',
                controller: 'PrefectureMapCtrl',
                replace: true,
                templateUrl: 'directives/prefecture_map.html',
                link: function (scope, el, attrs, ctrl) {
                    var svgSrc = attrs['src'];
                    var canvas = el[0];

                    if (svgSrc && canvas) {
                        prefectureMapService.render(canvas, svgSrc);
                    }
                }
            };
        }
    ]);
