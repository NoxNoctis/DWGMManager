(function () {

    function loginCtrl(loginService) {
        this.user = {};
        this.remember = false;

        this.login = function () {
            loginService.login(this.user);
        };
    }

    loginCtrl.prototype.activate = function() {
        initFacebookSdk();
    };

    function initFacebookSdk() {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.3&appId=854090267995598";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    app.controller('loginCtrl', loginCtrl);
})();



