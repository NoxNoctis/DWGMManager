function Move(){
    this.name = "";
    this.description = "";
    this.behaviour = function(){};
}

Move.prototype.run = function(){
    return this.behaviour(arguments);
};


