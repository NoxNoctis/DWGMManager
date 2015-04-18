/**
 * Created by Alex on 08/08/2014.
 */

var app = angular.module("dungeon-world-game-master",
    [   'ngMaterial',
        'ngNewRouter',
        'btford.socket-io',
        'luegg.directives',
        'monospaced.mousewheel',
        'multi-select',
        'ui.grid',
        'ui.directives',
        'angularFileUpload'
    ]);

app.config(function ($componentLoaderProvider, $mdIconProvider) {
    $componentLoaderProvider.setCtrlNameMapping(function (name) {
        return name[0] + name.substr(1) + 'Ctrl';
    });

    $mdIconProvider
        .icon('comm:chat', 'icons/communication/svg/production/ic_chat_48px.svg')
        .icon('heart', 'images/heart.svg', 1000)
        .icon('swordFight', 'images/swordFight.svg', 512)
});

app.run(['$router', function ($router) {
    $router
     .config([{
            path: '/maps',
            component:'maps'
        },{
            path: '/characters',
            component:'characters'
        },{
            path: '/moves',
            component:'moves'
        },{
            path: '/plots',
            component:'plots'
        },{
            path: '/encounters',
            component:'encounters'
        },{
            path: '/chat',
            component:'chat'
        }]);
}]);
app.controller('mainCtrl', function ($scope) {

});