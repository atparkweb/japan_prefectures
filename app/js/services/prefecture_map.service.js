angular.module('app')
	.factory('prefectureMapService', [
			'paperService',
			function (paperService) {
				return {
					render: function (canvas, svgSrc) {
						paperService.init(canvas);
						paperService.renderSvg(svgSrc);
					}
				};
			}
	]);
