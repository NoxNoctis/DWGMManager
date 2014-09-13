/**
 * Created by Alex on 20/08/2014.
 */

app.controller('encounterCtrl', function ($scope) {


    $scope.regions = [
        {
            name: 'region 1',
            monsters: [
                {
                    name: 'Dragon',
                    HP: 16,
                    armor: 5,
                    attack: {
                        action: 'Bite',
                        roll: 'b[2d12]+5',
                        piercing: 4,
                        extra: [
                            {
                                name: 'Reach'
                            },
                            {
                                name: 'Messy'
                            }
                        ]
                    },
                    tags: [
                        {
                            name: 'Solitary'
                        }
                        ,
                        {
                            name: 'Huge'
                        },
                        {
                            name: 'Terrifying'
                        },
                        {
                            name: 'Cautious'
                        },
                        {
                            name: 'Hoarder'
                        }
                    ],
                    specialQuality: 'Elemental blood, Wings',
                    instinct: 'To rule',
                    moves: ['Bend an element to its will', 'Demand tribute', 'Act with disdain']
                },
                {
                    name: "Skeleton",
                    HP: 7,
                    armor: 1,
                    attack: {
                        action: "Slam",
                        roll: "d6",
                        extra: [
                            {
                                name: 'Close'
                            }
                        ]
                    },
                    tags: [
                        {
                            name: "Horde"
                        }
                    ],
                    instinct: "To take the semblance of life",
                    moves: ["Act out what it did in life", "Snuff out the warmth of life", "Reconstruct from miscellaneous bones"]
                },
                {
                    name: 'Dragon',
                    HP: 16,
                    armor: 5,
                    attack: {
                        action: 'Bite',
                        roll: 'b[2d12]+5',
                        piercing: 4,
                        extra: [
                            {
                                name: 'Reach'
                            },
                            {
                                name: 'Messy'
                            }
                        ]
                    },
                    tags: [
                        {
                            name: 'Solitary'
                        }
                        ,
                        {
                            name: 'Huge'
                        },
                        {
                            name: 'Terrifying'
                        },
                        {
                            name: 'Cautious'
                        },
                        {
                            name: 'Hoarder'
                        }
                    ],
                    specialQuality: 'Elemental blood, Wings',
                    instinct: 'To rule',
                    moves: ['Bend an element to its will', 'Demand tribute', 'Act with disdain']
                },
                {
                    name: "Skeleton",
                    HP: 7,
                    armor: 1,
                    attack: {
                        action: "Slam",
                        roll: "d6",
                        extra: [
                            {
                                name: 'Close'
                            }
                        ]
                    },
                    tags: [
                        {
                            name: "Horde"
                        }
                    ],
                    instinct: "To take the semblance of life",
                    moves: ["Act out what it did in life", "Snuff out the warmth of life", "Reconstruct from miscellaneous bones"]
                },
                {
                    name: 'Dragon',
                    HP: 16,
                    armor: 5,
                    attack: {
                        action: 'Bite',
                        roll: 'b[2d12]+5',
                        piercing: 4,
                        extra: [
                            {
                                name: 'Reach'
                            },
                            {
                                name: 'Messy'
                            }
                        ]
                    },
                    tags: [
                        {
                            name: 'Solitary'
                        }
                        ,
                        {
                            name: 'Huge'
                        },
                        {
                            name: 'Terrifying'
                        },
                        {
                            name: 'Cautious'
                        },
                        {
                            name: 'Hoarder'
                        }
                    ],
                    specialQuality: 'Elemental blood, Wings',
                    instinct: 'To rule',
                    moves: ['Bend an element to its will', 'Demand tribute', 'Act with disdain']
                },
                {
                    name: "Skeleton",
                    HP: 7,
                    armor: 1,
                    attack: {
                        action: "Slam",
                        roll: "d6",
                        extra: [
                            {
                                name: 'Close'
                            }
                        ]
                    },
                    tags: [
                        {
                            name: "Horde"
                        }
                    ],
                    instinct: "To take the semblance of life",
                    moves: ["Act out what it did in life", "Snuff out the warmth of life", "Reconstruct from miscellaneous bones"]
                },
                {
                    name: 'Dragon',
                    HP: 16,
                    armor: 5,
                    attack: {
                        action: 'Bite',
                        roll: 'b[2d12]+5',
                        piercing: 4,
                        extra: [
                            {
                                name: 'Reach'
                            },
                            {
                                name: 'Messy'
                            }
                        ]
                    },
                    tags: [
                        {
                            name: 'Solitary'
                        }
                        ,
                        {
                            name: 'Huge'
                        },
                        {
                            name: 'Terrifying'
                        },
                        {
                            name: 'Cautious'
                        },
                        {
                            name: 'Hoarder'
                        }
                    ],
                    specialQuality: 'Elemental blood, Wings',
                    instinct: 'To rule',
                    moves: ['Bend an element to its will', 'Demand tribute', 'Act with disdain']
                },
                {
                    name: "Skeleton",
                    HP: 7,
                    armor: 1,
                    attack: {
                        action: "Slam",
                        roll: "d6",
                        extra: [
                            {
                                name: 'Close'
                            }
                        ]
                    },
                    tags: [
                        {
                            name: "Horde"
                        }
                    ],
                    instinct: "To take the semblance of life",
                    moves: ["Act out what it did in life", "Snuff out the warmth of life", "Reconstruct from miscellaneous bones"]
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
                    tags: ["fds, ser, vsd"],
                    specialQuality: "cxvwerads",
                    instinct: "vcxa",
                    moves: ["fdsa", "few    qcsxd"]
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
                    tags: ["fds, ser, vsd"],
                    specialQuality: "cxvwerads",
                    instinct: "vcxa",
                    moves: ["fdsa", "few    qcsxd"]
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
                    tags: ["fds, ser, vsd"],
                    specialQuality: "cxvwerads",
                    instinct: "vcxa",
                    moves: ["fdsa", "few    qcsxd"]
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
                    tags: ["fds, ser, vsd"],
                    specialQuality: "cxvwerads",
                    instinct: "vcxa",
                    moves: ["fdsa", "few    qcsxd"]
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
                    tags: ["fds, ser, vsd"],
                    specialQuality: "cxvwerads",
                    instinct: "vcxa",
                    moves: ["fdsa", "few    qcsxd"]
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
                    tags: ["fds, ser, vsd"],
                    specialQuality: "cxvwerads",
                    instinct: "vcxa",
                    moves: ["fdsa", "few    qcsxd"]
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
        },
        {
            name: "region 7",
            monsters: [],
            raps: [],
            treasures: []
        },
        {
            name: "region 8",
            monsters: [],
            raps: [],
            treasures: []
        },
        {
            name: "region 9",
            monsters: [],
            raps: [],
            treasures: []
        },
        {
            name: "region 10",
            monsters: [],
            raps: [],
            treasures: []
        }

    ];
    $scope.selectedMonster = {};
    $scope.editMode = false;
    $scope.fightingMonsters = [];

    $scope.monsterTags = [
        {
            name: "Horde"
        },
        {
            name: "Group"
        },
        {
            name: "Solitary"
        },
        {
            name: "Huge"
        }
        ,
        {
            name: "Large"
        }
    ];
    $scope.monsterAttackTags = [
        {
            name: "Hand"
        },
        {
            name: "Close"
        },
        {
            name: "Reach"
        },
        {
            name: "Messy"
        }
        ,
        {
            name: "Forceful"
        }
    ];


    $scope.monsters = $scope.regions[0].monsters;
    $scope.traps = $scope.regions[0].traps;
    $scope.treasures = $scope.regions[0].treasures;

    $scope.onRegionClick = function ($index) {
        $scope.monsters = $scope.regions[$index].monsters;
        $scope.traps = $scope.regions[$index].traps;
        $scope.treasures = $scope.regions[$index].treasures;
    };

    $scope.onMonsterEdit = function ($index) {
        $scope.editMode = true;
        $scope.selectedMonster = $scope.monsters[$index];
        angular.forEach($scope.monsterTags, function (tag) {
            tag.selected = angular.isDefined(_.find($scope.selectedMonster.tags, function (mTag) {
                return tag.name == mTag.name
            }));
        });
        angular.forEach($scope.monsterAttackTags, function (tag) {
            tag.selected = angular.isDefined(_.find($scope.selectedMonster.attack.extra, function (mTag) {
                return tag.name == mTag.name
            }));
        });
    };

    function generateMonster(generationParams) {
        return {};
    };

    $scope.onMonsterGenerate = function (generationParams) {
        $scope.editMode = true;
        $scope.selectedMonster = generateMonster(generationParams);
        $scope.selectedMonster.generated = true;
        angular.forEach($scope.monsterTags, function (tag) {
            tag.selected = false;
        });
        angular.forEach($scope.monsterAttackTags, function (tag) {
            tag.selected = false;
        });
    };

    $scope.editableExit = function () {
        if ($scope.selectedMonster.generated) {
            delete $scope.selectedMonster.generated;
            $scope.monsters.push($scope.selectedMonster);
        }
        $scope.editMode = false;
    };

    $scope.fightMonster = function ($index) {
        $scope.fightingMonsters.push(jQuery.extend({id: $scope.fightingMonsters.length}, $scope.monsters[$index]));
    };
    $scope.removeMonster = function ($index) {
        $scope.fightingMonsters.splice($index, 1);
    };

    $scope.removeMove = function (monster, $index) {
        monster.moves.splice($index, 1);
    };

    $scope.addMove = function (monster) {
        if (!angular.isDefined(monster.moves)) {
            monster.moves = [];
        }
        monster.moves.push("");
    };


});