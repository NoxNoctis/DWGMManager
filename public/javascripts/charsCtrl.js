/**
 * Created by Alex on 22/08/2014.
 */

app.controller('charsCtrl', function ($scope, $dataCollector) {

    $scope.PCs = $dataCollector.getPCs();
    $scope.debilities = $dataCollector.getDebilities();

    $scope.getMaxHp = function (char) {
        var CON = _.find(char.stats, function (stat) {
            return stat.name == 'CON';
        });
        return char.class.baseHP + CON.value;
    };

    $scope.getMaxLoad = function (char) {
        var STR = _.find(char.stats, function (stat) {
            return stat.name == 'STR';
        });
        return char.class.baseMaxLoad + $scope.getModifier(STR);
    };

    $scope.getModifier = function (stat, debility) {
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
    $scope.getLevelByXp = function (xp) {
        var lvl = 1;
        while (xp >= (lvl + 7)) {
            xp -= (lvl + 7);
            lvl++;
        }
        return lvl;
    };
    $scope.getRemainderXp = function (xp) {
        var lvl = 1;
        while (xp >= (lvl + 7)) {
            xp -= (lvl + 7);
            lvl++;
        }
        return (lvl + 7 - xp);
    };

    $scope.totalWeight = function (items) {
        var res = 0;
        angular.forEach(items, function (item) {
            if(angular.isString(item.weight)){
                item.weight = parseInt(item.weight);
            }
            res += item.weight;
        });
        return res;
    };

    $scope.addMoveTo = function (pc, move) {
        pc.class.moves.push(move);
    };

    $scope.getAvailableMoves = function(pc){
        var advancedMoves = $dataCollector.getClass(pc.class.name).moves.advanced;
        var availableMoves = _.filter(advancedMoves, function (move) {
            return !_.contains(pc.class.moves, move)
        });
        return availableMoves;
    };
    $scope.removeMove = function (moveIndex, pc) {
        pc.class.moves.splice(moveIndex, 1);
    };

    $scope.addItemTo = function (pc) {
        pc.inventory.push(
            {
                name: '',
                quantity: 0,
                weight: 0
            });
    };

    $scope.removeItem = function (itemIndex, pc) {
        pc.inventory.splice(itemIndex, 1);
    };

    $scope.getInventoryGridOption = function (inventory, $index) {
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


    $scope.gridOption ={
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