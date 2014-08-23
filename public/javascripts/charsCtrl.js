/**
 * Created by Alex on 22/08/2014.
 */

app.controller('charsCtrl', function ($scope, $dataCollector) {

    $scope.PCs = $dataCollector.getPCs();
    $scope.debilities=$dataCollector.getDebilities();


    $scope.getMaxHp=function(char){
            return char.class.baseHP + char.stats.CON;
    };
    $scope.getModifier=function(stat, debility){
        var mod = debility?-1:0;
        if(stat < 9)
            return -1+mod;
        else if(stat < 13)
            return 0+mod;
        else if(stat < 16)
            return 1+mod;
        else if(stat < 18)
            return 2+mod;
        else
            return 3+mod;
    };
    $scope.getLevelByXp=function(xp){
        var lvl=1;
        while(xp>=(lvl+7)){
            xp -=(lvl+7);
            lvl++;
        }
        return lvl;
    };
    $scope.getRemainderXp=function(xp){
        var lvl=1;
        while(xp>=(lvl+7)){
            xp -=(lvl+7);
            lvl++;
        }
        return (lvl+7 -xp);
    };
    $scope.totalWeight=function(items){
        var res=0;
        angular.forEach(items, function(item){
           res+=item.weight;
        });
        return res;
    };

   $scope.addMoveTo = function(pc){
       var advancedMoves = $dataCollector.getClass(pc.class.name).moves.advanced;
       var availableMoves = _.filter(advancedMoves, function(move){
           return !_.contains(pc.class.moves, move)
       });


   }


});