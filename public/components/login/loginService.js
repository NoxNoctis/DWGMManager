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

        function postLogin(q) {
            currentUser.update();
            statusHandlers[q.data.status](q);
        }

        var statusHandlers = {
            success: success,
            failure: failure
        };

        return {
            login: function(user){
                $http.post('/login', user)
                    .then(postLogin);
            }
        }
    }

    app.factory('loginService', loginService);
})();



