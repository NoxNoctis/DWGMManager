(function(){

    function loginCtrl(loginService) {
        this.user = {};
        this.remember = false;

        this.login = function(){
            loginService.login(this.user);
        }
    }

    app.controller('loginCtrl', loginCtrl);
})();



