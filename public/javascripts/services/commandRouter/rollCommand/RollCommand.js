app.factory('rollCommand', function(diceResolver, modifierResolver){
    return new RollCommand([diceResolver, modifierResolver]);
});

function RollCommand(resolvers){
    var resolvers = resolvers;
    this.name = "Roll dice";
    this.prefix = "\\roll";
    this.description = "Roll a dice.";
    this.params = ['{dice}'];

    this.apply = function(command){
        resolvers.forEach(function(resolver){
            command = command.replace(resolver.regExp, resolver.func);
        });

        return math.eval(command);
    };
}

RollCommand.prototype = Object.create(Command.prototype);

RollCommand.prototype.constructor = RollCommand;

