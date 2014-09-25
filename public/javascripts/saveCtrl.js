/**
 * Created by Alex on 25/09/14.
 */
app.controller('saveCtrl', function ($scope, $dataCollector) {

    $scope.download = function () {
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify($dataCollector.getPCs())));
        pom.setAttribute('download', 'myDWSavedPCs.json');
        pom.click();
    }

});

