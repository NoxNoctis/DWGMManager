/**
 * Created by Alex on 20/08/2014.
 */

app.controller('encounterCtrl', function ($scope) {



    $scope.selectedMonster={};

    $scope.regions = [
        {
            name: "town",
            monsters: [
                {
                    name: "Blade Horror",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Slash",
                        roll: "b[d8]+2",
                        piercing: 3,
                        extra: ["close, messy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "Spider Monkey",
                    HP: 6,
                    armor: 1,
                    attack: {
                        action: "Club",
                        roll: "d8",
                        extra: []
                    },
                    tags: ["group, intelligent, stealthy"],
                    specialQuality: undefined,
                    instinct: "Gather food",
                    moves: ["Ambush", "Ensnare with Webs", "Fight with improvised weapons"]
                },
                {
                    name: "Blade Horror",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Slash",
                        roll: "b[d8]+2",
                        piercing: 3,
                        extra: ["close, messy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "Spider Monkey",
                    HP: 6,
                    armor: 1,
                    attack: {
                        action: "Club",
                        roll: "d8",
                        extra: []
                    },
                    tags: ["group, intelligent, stealthy"],
                    specialQuality: undefined,
                    instinct: "Gather food",
                    moves: ["Ambush", "Ensnare with Webs", "Fight with improvised weapons"]
                },{
                    name: "Blade Horror",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Slash",
                        roll: "b[d8]+2",
                        piercing: 3,
                        extra: ["close, messy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "Spider Monkey",
                    HP: 6,
                    armor: 1,
                    attack: {
                        action: "Club",
                        roll: "d8",
                        extra: []
                    },
                    tags: ["group, intelligent, stealthy"],
                    specialQuality: undefined,
                    instinct: "Gather food",
                    moves: ["Ambush", "Ensnare with Webs", "Fight with improvised weapons"]
                },{
                    name: "Blade Horror",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Slash",
                        roll: "b[d8]+2",
                        piercing: 3,
                        extra: ["close, messy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "Spider Monkey",
                    HP: 6,
                    armor: 1,
                    attack: {
                        action: "Club",
                        roll: "d8",
                        extra: []
                    },
                    tags: ["group, intelligent, stealthy"],
                    specialQuality: undefined,
                    instinct: "Gather food",
                    moves: ["Ambush", "Ensnare with Webs", "Fight with improvised weapons"]
                },{
                    name: "Blade Horror",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Slash",
                        roll: "b[d8]+2",
                        piercing: 3,
                        extra: ["close, messy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "Spider Monkey",
                    HP: 6,
                    armor: 1,
                    attack: {
                        action: "Club",
                        roll: "d8",
                        extra: []
                    },
                    tags: ["group, intelligent, stealthy"],
                    specialQuality: undefined,
                    instinct: "Gather food",
                    moves: ["Ambush", "Ensnare with Webs", "Fight with improvised weapons"]
                },{
                    name: "Blade Horror",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Slash",
                        roll: "b[d8]+2",
                        piercing: 3,
                        extra: ["close, messy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "Spider Monkey",
                    HP: 6,
                    armor: 1,
                    attack: {
                        action: "Club",
                        roll: "d8",
                        extra: []
                    },
                    tags: ["group, intelligent, stealthy"],
                    specialQuality: undefined,
                    instinct: "Gather food",
                    moves: ["Ambush", "Ensnare with Webs", "Fight with improvised weapons"]
                },{
                    name: "Blade Horror",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Slash",
                        roll: "b[d8]+2",
                        piercing: 3,
                        extra: ["close, messy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "Spider Monkey",
                    HP: 6,
                    armor: 1,
                    attack: {
                        action: "Club",
                        roll: "d8",
                        extra: []
                    },
                    tags: ["group, intelligent, stealthy"],
                    specialQuality: undefined,
                    instinct: "Gather food",
                    moves: ["Ambush", "Ensnare with Webs", "Fight with improvised weapons"]
                },{
                    name: "Blade Horror",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Slash",
                        roll: "b[d8]+2",
                        piercing: 3,
                        extra: ["close, messy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "Spider Monkey",
                    HP: 6,
                    armor: 1,
                    attack: {
                        action: "Club",
                        roll: "d8",
                        extra: []
                    },
                    tags: ["group, intelligent, stealthy"],
                    specialQuality: undefined,
                    instinct: "Gather food",
                    moves: ["Ambush", "Ensnare with Webs", "Fight with improvised weapons"]
                }
            ],
            traps: [],
            treasures: []
        },
        {
            name: "region 2",
            monsters: [
                {
                    name: "fdsfds fdsfdsf",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Sldfdsash",
                        roll: "b[d8]+2, +3 piercing",
                        extra: ["cloddse, mesffsy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "fdsfds fdsfdsf",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Sldfdsash",
                        roll: "b[d8]+2, +3 piercing",
                        extra: ["cloddse, mesffsy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "fdsfds fdsfdsf",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Sldfdsash",
                        roll: "b[d8]+2, +3 piercing",
                        extra: ["cloddse, mesffsy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "fdsfds fdsfdsf",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Sldfdsash",
                        roll: "b[d8]+2, +3 piercing",
                        extra: ["cloddse, mesffsy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "fdsfds fdsfdsf",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Sldfdsash",
                        roll: "b[d8]+2, +3 piercing",
                        extra: ["cloddse, mesffsy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                },
                {
                    name: "fdsfds fdsfdsf",
                    HP: 9,
                    armor: 4,
                    attack: {
                        action: "Sldfdsash",
                        roll: "b[d8]+2, +3 piercing",
                        extra: ["cloddse, mesffsy"]
                    },
                    tags: ["group, intelligent, terrifying"],
                    specialQuality: "Made of metal",
                    instinct: "Follow orders",
                    moves: ["Eat Gems", "protect family"]
                }
            ],
            raps: [],
            treasures: []
        }  ,
        {
            name: "region 3",
            monsters: [],
            raps: [],
            treasures: []
        },
        {
            name: "region 4",
            monsters: [],
            raps: [],
            treasures: []
        },
        {
            name: "region 5",
            monsters: [],
            raps: [],
            treasures: []
        },
        {
            name: "region 6",
            monsters: [],
            raps: [],
            treasures: []
        }
    ];

    $scope.monsters = $scope.regions[0].monsters;
    $scope.traps = $scope.regions[0].traps;
    $scope.treasures = $scope.regions[0].treasures;

    $scope.onRegionClick=function($index){
        $scope.monsters =  $scope.regions[$index].monsters;
        $scope.traps =  $scope.regions[$index].traps;
        $scope.treasures =  $scope.regions[$index].treasures;
    };

    $scope.onMonsterEdit=function($index){
        $scope.selectedMonster =  $scope.monsters[$index];
    };

    function generateMonster(generationParams){


    }
    $scope.onMonsterGenerate=function(generationParams){
        $scope.selectedMonster.generated = true;
        $scope.selectedMonster =  generateMonster(generationParams);
    };




});