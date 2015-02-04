angular.module('app')
    .service('paperService', ['svgService', function (svgService) {
        var update = function () {
            paper.view.update();
        };

        var attachEvents = function () {

        };

        return {
            init: function (canvas) {
                paper.install(window);
                paper.setup(canvas);
            },
            
            renderSvg: function (src) {
                svgService.loadSvg(src).then(
                    function onSuccess(xml) {
                        var symbol = new paper.Symbol(paper.project.importSVG(xml));
                        symbol.place(300, 300);
                        update();
                    },
                    function onError() {
                        throw new Error('Unabled to load SVG: ' + src);
                    });
            }
        };
    }]);
