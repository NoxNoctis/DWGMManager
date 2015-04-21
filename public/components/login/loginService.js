(function(){

    function loginService($http, $router, currentUser) {

        return {
            login: function(user){
                $http.post('/login', user)
                    .then(function(q){
                        $router.navigate('/maps');
                        currentUser.update();
                    });
            }
        }
    }

    app.factory('loginService', loginService);
})();



