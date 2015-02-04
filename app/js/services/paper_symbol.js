angular.module('app')
	.factory('paperSymbol', function () {
		var Symbol = function () {

		};

		var create = function () {
			return new Symbol();
		};

		return {
			create: create
		};
	});
