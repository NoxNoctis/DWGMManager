(function(){

    function registrationService($http, $router, $mdToast) {
        function success(){
            $router.navigate('/login');

            showToast('Welcome! Please login.');
        }

        function failure(response){
            showToast("Sorry, this " + response.data.field + " Is already taken.")
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
            registerUser: function(user){
                $http.post('/register', user)
                    .then(function(response){
                    statusHandlers[response.data.status](response);
                });
            }
        }
    }

    app.factory('registrationService', registrationService);
})();



