function Command(){
    this.name = "";
    this.prefix = "";
    this.description = "";
    this.params = [];
    this.syntax = "";
}

Command.prototype.getHelp = function(){
    return this.name + " - " + this.description + " usage: " + this.prefix + this.params.toString().replace(',', ' ');
};

Command.prototype.splitCommand = function(command){
    return command.split(' ');
};
