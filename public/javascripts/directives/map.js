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
        template:
            '<div msd-wheel="mouseWheel($deltaY)"  ng-mousemove="mouseMove($event)" ng-mousedown="mouseDown($event)" ng-mouseup="dragging=false" class="draggable-map">'+
            '<img src={{src}} alt="no map found" width="{{width}}"></img>'+
            '</div>',

        link: function (scope, elem, attrs) {


            var mapX=0, mapY=0;
            var startX, startY;
            var img = elem.children();

            console.log("entered Map Link");


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

//            scope.$watch('width', function (newVal, oldVal) {
//                console.log(newVal);
//            });

            scope.mouseDown = function($event){
                scope.dragging = true;
                startX = parseInt($event.clientX);
                startY = parseInt($event.clientY)
            };

            scope.mouseMove = function($event){

                scope.x = $event.clientX;
                scope.y = $event.clientY;


                if(scope.dragging) {
                    var mouseX = parseInt($event.clientX);
                    var mouseY = parseInt($event.clientY);
                    var dx = mouseX - startX;
                    var dy = mouseY - startY;
                    mapX += dx;
                    mapY += dy;

                    img[0].style.top =mapY+'px';
                    img[0].style.left=mapX+'px';


                    startX = mouseX;
                    startY = mouseY;


                }
            }


        }

    }
});