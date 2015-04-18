/**
 * Created by Alex on 02/09/2014.
 */
app.directive('ngEditable', function () {
    return {
        restrict: "A",
        scope: {
            ngEditable: '=',
            type:'@'
        },
        template:
            ['<span ng-show="!edit" ng-dblclick="edit=true" ng-init="edit=false" ng-class="editable-span">{{ngEditable}}</span>',
            '<input type="{{type}}" ng-blur="edit=false" ng-show="edit" ng-model=ngEditable>'].join(''),
         link: function (scope, elem, attrs) {
        }

    }
});
