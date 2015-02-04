angular.module('app')
    .service('svgService', [
        '$http',
        '$q',
        function ($http, $q) {
        return {
            loadSvg: function (filePath) {
                var deferred = $q.defer();

                $http.get(filePath)
                    .success(deferred.resolve)
                    .error(deferred.reject);

                return deferred.promise;
            }
        };
    }]);