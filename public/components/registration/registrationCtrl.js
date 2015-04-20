(function(){

    function registrationCtrl(registrationService, $router) {
        this.user = {};

        this.register = function(){
            registrationService.registerUser(this.user);
        }
    }

    app.controller('registrationCtrl', registrationCtrl);
})();



