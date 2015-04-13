app.controller('chatCtrl', function (socketFactory) {

    this.socket = socketFactory();
    this.messages = [];
    this.currentUser = {name: "david"};

    this.send = function (event) {
        var message = event.currentTarget.value;
        event.currentTarget.value = "";

        this.addNewMessage(this.currentUser, message);

        this.socket.emit("newMessage", message);

        event.preventDefault();
    };

    this.socket.on("newMessage", function (message) {
        this.addNewMessage({name: "david"}, message);
    }.bind(this));

    this.addNewMessage = function (user, message) {
        this.messages.push({user: user, text: message});
    }
});
