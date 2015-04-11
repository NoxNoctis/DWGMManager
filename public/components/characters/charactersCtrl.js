/**
 * Created by Alex on 22/08/2014.
 */

app.controller('charactersCtrl', function ($dataCollector) {

    this.PCs = $dataCollector.getPCs();
    this.debilities = $dataCollector.getDebilities();

    this.getMaxHp = function (char) {
        var CON = _.find(char.stats, function (stat) {
            return stat.name == 'CON';
        });
        return char.class.baseHP + CON.value;
    };

    this.getMaxLoad = function (char) {
        var STR = _.find(char.stats, function (stat) {
            return stat.name == 'STR';
        });
        return char.class.baseMaxLoad + this.getModifier(STR);
    };

    this.getModifier = function (stat, debility) {
        var mod = debility ? -1 : 0;
        if (stat < 9)
            return -1 + mod;
        else if (stat < 13)
            return 0 + mod;
        else if (stat < 16)
            return 1 + mod;
        else if (stat < 18)
            return 2 + mod;
        else
            return 3 + mod;
    };
    this.getLevelByXp = function (xp) {
        var lvl = 1;
        while (xp >= (lvl + 7)) {
            xp -= (lvl + 7);
            lvl++;
        }
        return lvl;
    };
    this.getRemainderXp = function (xp) {
        var lvl = 1;
        while (xp >= (lvl + 7)) {
            xp -= (lvl + 7);
            lvl++;
        }
        return (lvl + 7 - xp);
    };

    this.totalWeight = function (items) {
        var res = 0;
        angular.forEach(items, function (item) {
            if(angular.isString(item.weight)){
                item.weight = parseInt(item.weight);
            }
            res += item.weight;
        });
        return res;
    };

    this.addMoveTo = function (pc, move) {
        pc.class.moves.push(move);
    };

    this.getAvailableMoves = function(pc){
        var advancedMoves = $dataCollector.getClass(pc.class.name).moves.advanced;
        var availableMoves = _.filter(advancedMoves, function (move) {
            return !_.contains(pc.class.moves, move)
        });
        return availableMoves;
    };
    this.removeMove = function (moveIndex, pc) {
        pc.class.moves.splice(moveIndex, 1);
    };

    this.addItemTo = function (pc) {
        pc.inventory.push(
            {
                name: '',
                quantity: 0,
                weight: 0
            });
    };

    this.removeItem = function (itemIndex, pc) {
        pc.inventory.splice(itemIndex, 1);
    };

    this.getInventoryGridOption = function (inventory, $index) {
        var option = {
            data: getInventoryString($index),
            enableCellSelection: true,
            enableRowSelection: false,
            enableCellEditOnFocus: true,
            columnDefs: [
                {field: 'name', displayName: 'name', enableCellEdit: true},
                {field: 'quantity', displayName: 'quantity', enableCellEdit: true},
                {field: 'weight', displayName: 'weight', enableCellEdit: true},
                {field: 'price', displayName: 'price', enableCellEdit: true}
            ]
        };
        return option;
    };

    function getInventoryString(index){
        return 'PCs['+index+'].inventory';
    }


    this.gridOption ={
            data: 'PCs[0].inventory',
            enableCellSelection: true,
            enableRowSelection: false,
            enableCellEditOnFocus: true,
            columnDefs: [
                {field: 'name', displayName: 'name', enableCellEdit: true},
                {field: 'quantity', displayName: 'quantity', enableCellEdit: true},
                {field: 'weight', displayName: 'weight', enableCellEdit: true},
                {field: 'price', displayName: 'price', enableCellEdit: true}
            ]
        };



});