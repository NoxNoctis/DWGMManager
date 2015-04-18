(function(){

    function registrationCtrl(registrationService) {
        this.user = {};

        this.register = function(){
            registrationService.registerUser(this.user);
        }
    }

    app.controller('registrationCtrl', registrationCtrl);
})();



