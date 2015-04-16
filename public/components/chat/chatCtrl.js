app.controller('chatCtrl', function (socketFactory, chatFactory, currentUser) {

    this.socket = socketFactory();
    this.messages = chatFactory.getMessages();
    this.loadingSnapShot = false;
    this.stopRendering = false;

    this.send = function (event) {
        var message = event.currentTarget.value;
        event.currentTarget.value = "";

        chatFactory.addMessage(currentUser, message);

        this.socket.emit("newMessage", message);

        event.preventDefault();
    };

    this.socket.on("newMessage", function (message) {
        chatFactory.addMessage({id: 1, name: "david"}, message);
    }.bind(this));

    this.socket.on("drawingChange", function (message) {
        this.loadingSnapShot = true;
        this.lc.loadSnapshotJSON(message);
    }.bind(this));

    setTimeout(function () {
        this.lc = LC.init($('.literally').get(0), {imageURLPrefix: 'bower_components/literallycanvas/img'});
        this.lc.on( 'snapshotLoad', function() {
            this.loadingSnapShot = false;
            this.stopRendering = true;
        }.bind(this));

        this.lc.on('drawingChange', function() {
            if(!this.stopRendering && !this.loadingSnapShot){
                this.socket.emit('drawingChange', this.lc.getSnapshotJSON());
            }
            this.stopRendering = false;
        }.bind(this));

    }.bind(this), 100);
});



