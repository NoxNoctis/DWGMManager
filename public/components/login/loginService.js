(function(){

    function loginService($http, $router, $mdToast, currentUser) {
        function success(){
            $router.navigate('/maps');
        }

        function failure(){
            showToast("Incorrect username or password");
        }

        function showToast(msg){
            $mdToast.show($mdToast.simple({
                content: msg,
                hideDelay: 6000,
                position: 'top right'
            }));
        }

        var statusHandlers = {
            success: success,
            failure: failure
        };

        return {
            login: function(user){
                $http.post('/login', user)
                    .then(function(q){
                        currentUser.update();
                        statusHandlers[q.data.status](q);
                    });
            }
        }
    }

    app.factory('loginService', loginService);
})();



