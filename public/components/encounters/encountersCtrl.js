/**
 * Created by Alex on 20/08/2014.
 */

app.controller('encountersCtrl', function () {


    this.regions = [
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
    this.selectedMonster = {};
    this.editMode = false;
    this.fightingMonsters = [];

    this.monsterTags = [
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
    this.monsterAttackTags = [
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


    this.monsters = this.regions[0].monsters;
    this.traps = this.regions[0].traps;
    this.treasures = this.regions[0].treasures;

    this.onRegionClick = function ($index) {
        this.monsters = this.regions[$index].monsters;
        this.traps = this.regions[$index].traps;
        this.treasures = this.regions[$index].treasures;
    };

    this.onMonsterEdit = function ($index) {
        this.editMode = true;
        this.selectedMonster = this.monsters[$index];
        angular.forEach(this.monsterTags, function (tag) {
            tag.selected = angular.isDefined(_.find(this.selectedMonster.tags, function (mTag) {
                return tag.name == mTag.name
            }));
        });
        angular.forEach(this.monsterAttackTags, function (tag) {
            tag.selected = angular.isDefined(_.find(this.selectedMonster.attack.extra, function (mTag) {
                return tag.name == mTag.name
            }));
        });
    };

    function generateMonster(generationParams) {
        return {};
    };

    this.onMonsterGenerate = function (generationParams) {
        this.editMode = true;
        this.selectedMonster = generateMonster(generationParams);
        this.selectedMonster.generated = true;
        angular.forEach(this.monsterTags, function (tag) {
            tag.selected = false;
        });
        angular.forEach(this.monsterAttackTags, function (tag) {
            tag.selected = false;
        });
    };

    this.editableExit = function () {
        if (this.selectedMonster.generated) {
            delete this.selectedMonster.generated;
            this.monsters.push(this.selectedMonster);
        }
        this.editMode = false;
    };

    this.fightMonster = function ($index) {
        this.fightingMonsters.push(jQuery.extend({id: this.fightingMonsters.length}, this.monsters[$index]));
    };
    this.removeMonster = function ($index) {
        this.fightingMonsters.splice($index, 1);
    };
    this.dealDamageTo = function (monster, damage, piercing, ignoreArmor) {
        if (!ignoreArmor) {
            piercing = angular.isDefined(piercing) ? piercing : 0;
            var armor = monster.armor;
            var piercingBonus = Math.min(piercing, armor, damage);
            if (damage - armor > 0) {
                damage = damage - armor;
            } else {
                damage = 0;
            }
            damage += piercingBonus;
        }

        monster.HP -= damage;
    };

    this.removeMove = function (monster, $index) {
        monster.moves.splice($index, 1);
    };

    this.addMove = function (monster) {
        if (!angular.isDefined(monster.moves)) {
            monster.moves = [];
        }
        monster.moves.push("");
    };


});