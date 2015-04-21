(function () {
    function currentUser($http) {
        var currentUser = {};
        return {
            get: function () {
                return currentUser;
            },
            update: function () {
                $http.get('/users/current')
                    .then(function(q){
                    currentUser = q.data;
                })
            }
        };
    }

    app.factory('currentUser', currentUser);
})();