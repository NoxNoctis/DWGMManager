/**
 * Created by Alex on 08/08/2014.
 */

var app = angular.module("dungeon-world-game-master", ['ui.bootstrap', 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('Maps', {
            url: "/Maps",
            templateUrl: "templates/Maps.html"
        })
        .state('Chars', {
            url: "/Chars",
            templateUrl: "templates/Characters.html"
        })
        .state('Moves', {
            url: "/Moves",
            templateUrl: "templates/Moves.html"
        })
        .state('Plots', {
            url: "/Plots",
            templateUrl: "templates/Plots.html"
        })
        .state('Encounters', {
            url: "/Encounters",
            templateUrl: "templates/Encounters.html"
        })                              ;
});
app.controller('mainCtrl', function ($scope) {

});