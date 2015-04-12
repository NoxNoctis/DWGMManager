var io = require('socket.io');

module.exports = {
    start: function (app) {
        io = io(app);

        io.on('connection', function(socket){
            console.log('a user connected');

            socket.on("newMessage", function(message){
                this.broadcast.emit("newMessage", message);
            });

            socket.on('disconnect', function(){
                console.log('user disconnected');
            });
        });
    }
};
