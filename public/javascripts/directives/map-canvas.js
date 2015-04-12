/**
 * Created by Alex on 14/08/2014.
 */

app.directive('ngMap', function () {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            src: '@'
        },
        template: '<canvas msd-wheel="mouseWheel($deltaY)"  ng-mousemove="mouseMove($event)" ng-mousedown="mouseDown($event)" ng-mouseup="dragging=false" class="draggable-map">'
//            '<img src={{src}} alt="no map found" width="{{width}}" class="draggable-map"></img>',
        + '</canvas>',

        link: function (scope, elem, attrs) {

            var mapWidth, mapHeigth, mapX = 0, mapY = 0;
            var startX, startY;

            var canvasOffset = elem.offset();
            var offsetX = canvasOffset.left;
            var offsetY = canvasOffset.top;

            var canvas = elem[0];
            var ctx = canvas.getContext("2d");
            var map = new Image();
            map.src = scope.src;
            map.onload = function () {
                mapWidth = map.width / 64;
                mapHeigth = map.height / 64;
                draw();
            };

            console.log("entered Map Link");

            function draw() {
                // clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // draw the image
                ctx.drawImage(map, mapX, mapY, mapWidth, mapHeigth);
            }


            scope.rawWidth = 100;
            scope.width = scope.rawWidth + "%";

            scope.mouseWheel = function ($deltaY) {
                scope.rawWidth += $deltaY * 2;
                if (scope.rawWidth < 100) {
                    scope.rawWidth = 100;
                }

                scope.width = scope.rawWidth + "%";
                event.preventDefault();
            };

            scope.$watch('rawWidth', function (newVal, oldVal) {
                console.log(newVal);
                mapWidth = mapWidth * newVal / oldVal;
                mapHeigth = mapHeigth * newVal / oldVal;
                draw();
            });

            scope.mouseDown = function ($event) {
                scope.dragging = true;
                startX = parseInt($event.clientX - offsetX);
                startY = parseInt($event.clientY - offsetY)
            };

            scope.mouseMove = function ($event) {
                if (scope.dragging) {
                    var mouseX = parseInt($event.clientX - offsetX);
                    var mouseY = parseInt($event.clientY - offsetY);
                    var dx = mouseX - startX;
                    var dy = mouseY - startY;
                    mapX += dx;
                    mapY += dy;

                    startX = mouseX;
                    startY = mouseY;

                    draw();
                }
            }
        }
    }
});