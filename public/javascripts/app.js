
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
        .icon('nav:more', 'icons/navigation/svg/production/ic_more_vert_48px.svg')
        .icon('heart', 'images/heart.svg', 1000)
        .icon('swordFight', 'images/swordFight.svg', 512);
});

app.run(function ($router) {
    $router
     .config([{
            path: '/login',
            component:'login'
        },{
            path: '/registration',
            component:'registration'
        },{
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
});
app.controller('mainCtrl', function ($scope, currentUser) {
    $scope.user = currentUser.get();

    $scope.$watch(currentUser.get, function(newUser){
        $scope.user = newUser;
    });

    $scope.loggedIn = function(){
        return currentUser.get().id !== undefined;
    }
});