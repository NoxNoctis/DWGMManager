/**
 * Created by Alex on 25/09/14.
 */
app.controller('saveCtrl', function ($scope, $dataCollector, $http) {

    $scope.download = function () {

        $http.put('/save', $dataCollector.getPCs());
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify($dataCollector.getPCs())));
        pom.setAttribute('download', 'myDWSavedPCs.json');
        pom.click();
    }

});

