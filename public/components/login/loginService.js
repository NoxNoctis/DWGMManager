(function(){

    function loginService($http, currentUser) {

        return {
            login: function(user){
                $http.post('/login', user)
                    .then(function(q){
                        currentUser.set(q.data.user);
                    });
            }
        }
    }

    app.factory('loginService', loginService);
})();



