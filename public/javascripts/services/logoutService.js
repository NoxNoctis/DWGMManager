
(function(){
    function logoutService($http, currentUser){
        return (function(){
            $http.post('/logout');
            currentUser.update();
        })
    }

    app.factory('logoutService', logoutService);
})();