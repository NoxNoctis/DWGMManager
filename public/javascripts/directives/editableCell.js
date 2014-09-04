/**
 * Created by Alex on 02/09/2014.
 */
app.directive('ngEditableCell', function () {
    return {
        restrict: "A",
        replace:true,
        scope: {
            ngEditableCell: '=',
            type:'@'
        },
        template:
            '<td ng-dblclick="edit=true" ng-init="edit=false" class=""><span ng-show="!edit">{{ngEditableCell}}</span>'+
            '<input type="{{type}}" ng-blur="edit=false" ng-show="edit" ng-model=ngEditableCell>'+
            '</td>',
         link: function (scope, elem, attrs) {
        }

    }
});
