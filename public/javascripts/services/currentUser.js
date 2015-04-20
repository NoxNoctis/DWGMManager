(function(){
    function currentUser(){
        var currentUser = {};
        return {get: function(){
            return currentUser;
        },
        set : function(user){
            currentUser = user;
        }};
    }

    app.factory('currentUser', currentUser);
})();