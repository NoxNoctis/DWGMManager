function Class(props) {
    if(!angular.isDefined(props)) props={};
    this.name = props.name || "";
    this.damage = props.damage || 0;
    this.baseHP = props.baseHP || 0;
    this.baseLoad = props.baseLoad || 0;
    this.alignments = props.alignments || [];
    this.races = props.races || [];
    this.startingMoves = props.startingMoves || [];
    this.startingGear = props.startingGear || [];
    this.advancedMoves = props.advancedMoves || {beginner: [], advanced: []};
}

Class.prototype.getAdvancedMoves = function (overLvl5) {
    return overLvl5 ?
        this.advancedMoves["beginner"].join(this.advancedMoves["advanced"]) :
        this.advancedMoves["beginner"];
};

Class.prototype.getNewMoves = function (overLvl5, existingMoves) {
    var allMoves = this.getAdvancedMoves(overLvl5);
    return _.filter(allMoves, function (move) {
        return !_.contains(existingMoves, move);
    });
};


