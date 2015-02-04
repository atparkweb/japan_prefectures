angular.module('app')
    .service('prefectureMapService', [
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
