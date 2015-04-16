app.factory('commandRouter', function(rollCommand){
    var routes = {
        '\\p' : "",
        '\\roll': rollCommand
    };

    return {send: function(message){
        if(isCommand(message)){
            return runCommand(message);
        }

        return message;
    }};

    function isCommand(message){
        return message.indexOf('\\') === 0;
    }

    function runCommand(message) {
        var firstSpace = message.indexOf(' ');
        var command = message.substr(0, firstSpace);
        var commendExpr = message.slice(firstSpace + 1);

        return routes[command].apply(commendExpr);
    }
});