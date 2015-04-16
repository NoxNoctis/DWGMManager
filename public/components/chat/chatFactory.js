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
                    appendTo(last, message);
                }else{
                    switchCurrentClass();
                    this.messages.push({user: user, text: message, class:currentClass});
                }
            }
        }
    };

    function isLastUser(last, newUser){
        return last && (last.user.id === newUser.id)
    }

    function appendTo(last, message){
        return last.text += '\n' + message;
    }

    function switchCurrentClass () {
        if(currentClass == classes.even){
            currentClass = classes.odd;
        }else{
            currentClass = classes.even;
        }
    }
});