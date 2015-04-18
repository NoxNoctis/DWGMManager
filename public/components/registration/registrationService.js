(function(){

    function registrationService($http) {
        return {
            registerUser: function(user){
                $http.post('/register', user);
            }
        }
    }

    app.factory('registrationService', registrationService);
})();



