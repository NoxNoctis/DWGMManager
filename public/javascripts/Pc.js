
define(function(){
    var pc  = function(){
        var stats = [
            {
                name: 'STR',
                value: 8,
                getModifier : getModifier
            },
            {
                name: 'DEX',
                value: 13
            },
            {
                name: 'CON',
                value: 9
            },
            {
                name: 'INT',
                value: 18
            },
            {
                name: 'WIS',
                value: 13
            },
            {
                name: 'CHA',
                value: 18
            }
        ]
    }
    return pc;
})