(function(){

    function loginService($http, $router, currentUser) {

        return {
            login: function(user){
                $http.post('/login', user)
                    .then(function(q){
                        $router.navigate('/maps');
                        currentUser.set(q.data.user);
                    });
            }
        }
    }

    app.factory('loginService', loginService);
})();



