app.factory('chatFactory', function () {
    var classes = {even: 'even-message', odd:'odd-message'};
    var currentClass = 'even-message';

    return {
        messages: [],

        getMessages: function () {
            return messages;
        },
        addMessage: function (user, message) {
            if(message.length != 0){
                var last = this.messages[this.messages.length - 1];
                if(isLastUser(last, user)){
                    user = "";
                }else{
                    switchCurrentClass();
                }
                    this.messages.push({user: user, text: message, class:currentClass});
            }
        }
    };

    function switchCurrentClass () {
        if(currentClass == classes.even){
            currentClass = classes.odd;
        }else{
            currentClass = classes.even;
        }
    }

    function isLastUser(lastUser, newUser){
        return lastUser && (lastUser.user === newUser || lastUser.user === "")
    }
});