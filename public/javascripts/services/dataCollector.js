/**
 * Created by Alex on 22/08/2014.
 */
app.service('$dataCollector', function () {

    this.allClasses = [
        {
            name: 'Bard',
            damage: 'd6',
            baseHP: '6',
            alignments: [
                {
                    name: 'Good',
                    desc: 'Be Good'
                },
                {
                    name: 'Neutral',
                    desc: 'Don\'t care'
                },
                {
                    name: 'Evil',
                    desc: 'Be bad'
                }
            ],
            baseLoad: 9,
            moves: {
                racial: [
                    {
                        name: 'elf',
                        move: 'location knowledge'
                    },
                    {
                        name: 'human',
                        move: 'camp guest'
                    }
                ],
                starting: [
                    {
                        name: 'Arcane Art',
                        desc: 'When you weave a performance into a basic spell, choose an ally and an effect: \n' +
                            '• Heal 1d8 damage \n' +
                            '• +1d4 forward to damage    \n' +
                            '• Their mind is shaken clear of one enchantment  \n' +
                            '• The next time someone successfully assists the target with aid, they get +2 ' +
                            'instead of +1 \n' +
                            'Then roll+Cha. ✴On a 10+, the ally gets the selected effect. ✴On a 7-9, your spell still ' +
                            'works, but you draw unwanted attention or your magic reverberates to other targets ' +
                            'affecting them as well, GM’s choice.'
                    },
                    {
                        name: 'Bardic Lore',
                        desc: 'Choose an area of expertise:' +
                            '• Spells and Magicks \n' +
                            '• The Dead and Undead  \n' +
                            '• Grand Histories of the Known World  \n' +
                            '• A Bestiary of Creatures Unusual  \n' +
                            '• The Planar Spheres   \n' +
                            '• Legends of Heroes Past     \n' +
                            '• Gods and Their Servants                               \n' +
                            'When you first encounter an important creature, location, or item (your call) covered by ' +
                            'your bardic lore you can ask the GM any one question about it; the GM will answer ' +
                            'truthfully. The GM may then ask you what tale, song, or legend you heard that information in.'
                    },
                    {
                        name: 'Charming and Open',
                        desc: 'When you speak frankly with someone, you can ask their player a question from the list ' +
                            'below. They must answer it truthfully, then they may ask you a question from the list ' +
                            '(which you must answer truthfully). \n' +
                            '• Whom do you serve?  \n' +
                            '• What do you wish I would do? \n' +
                            '• How can I get you to ______?  \n' +
                            '• What are you really feeling right now?  \n' +
                            '• What do you most desire?'
                    },
                    {
                        name: 'A Port in the Storm',
                        desc: 'When you return to a civilized settlement you’ve visited before, tell the GM when you ' +
                            'were last here. They’ll tell you how it’s changed since then'
                    }
                ],
                advanced: [
                    {
                        name: 'Bamboozle',
                        desc: 'When you parley with someone, on a 7+ you also take +1 forward with them.'
                    },
                    {
                        name: 'Cast Spells (Multiclass)',
                        desc: 'When you release a spell you’ve prepared, roll+Int. ✴On a 10+, the spell is ' +
                            'successfully cast and you do not forget ' +
                            'the spell—you may cast it again later. ✴On a 7-9, the spell is cast, but choose one: \n' +
                            '• You draw unwelcome attention or put yourself in a spot. The GM will tell you how.\n' +
                            '• The spell disturbs the fabric of reality as it is cast—take -1 ongoing to cast a spell ' +
                            'until the next time you Prepare Spells.\n' +
                            ' After it is cast, the spell is forgotten. You cannot cast the spell again until you ' +
                            'prepare spells. \n' +
                            'Note that maintaining spells with ongoing effects will sometimes cause a penalty to ' +
                            'your roll to cast a spell.'
                    },
                    {
                        name: 'Wealth and Taste (Multiclass)',
                        desc: 'When you make a show of flashing around your most valuable possession, choose someone ' +
                            'present. They will do anything they can to obtain your item or one like it.'
                    },
                    {
                        name: 'It Goes To Eleven',
                        desc: 'When you unleash a crazed performance(a righteous lute solo or mighty brass ' +
                            'blast, maybe) choose a target who can hear you and roll+Cha. ✴On a 10+ the ' +
                            'target attacks their nearest ally in range. ✴On a 7–9 they attack their nearest ally, ' +
                            'but you also draw their attention and ire'
                    },
                    {
                        name: 'Connections (Multiclass)',
                        desc: 'When you put out word to the criminal underbelly about something you want ' +
                            'or need, roll+CHA. ✴On a 10+, someone has it, just for you. ✴On a 7–9, you’ll ' +
                            'have to settle for something close or it comes with strings attached, your call'
                    },
                    {
                        name: 'Con',
                        desc: 'When you parley with someone, on a 7+ you also take +1 forward with them ' +
                            'and get to ask their player one question which they must answer truthfully.'
                    }
                ]
            }
        },
        {
            name: 'Thief',
            damage: 'd8',
            baseHP: '6',
            alignments: [
                {
                    name: 'Good',
                    desc: 'Be Good'
                },
                {
                    name: 'Neutral',
                    desc: 'Don\'t care'
                },
                {
                    name: 'Evil',
                    desc: 'Be bad'
                }
            ],
            baseLoad: 9,
            moves: {
                racial: [
                    {
                        name: 'halfling',
                        move: '+2 dmg with ranged'
                    },
                    {
                        name: 'human',
                        move: '+1 to know crimes'
                    }
                ],
                starting: [
                    {
                        name: 'Trap Expert',
                        desc: 'When you spend a moment to survey a dangerous area, roll+DEX. ✴On a 10+, hold 3. ✴On a ' +
                            '7–9, hold 1. Spend your hold as you walk through the area to ask these questions: \n' +
                            '• Is there a trap here and if so, what activates it?  \n' +
                            '• What does the trap do when activated?  \n' +
                            '• What else is hidden here?'
                    },
                    {
                        name: 'Tricks of the Trade',
                        desc: 'When you pick locks or pockets or disable traps, roll+DEX. ✴On a 10+, you do it, no problem. ' +
                            '✴On a 7–9, you still do it, but the GM will offer you two options between suspicion, danger, or cost.'
                    },
                    {
                        name: 'Backstab',
                        desc: 'When you attack a surprised or defenseless enemy with a melee weapon, you can choose to deal your damage or roll+DEX. ✴On a 10+ choose two. ✴On a 7–9 choose one.\n' +
                            '• You don’t get into melee with them\n' +
                            '• You deal your damage+1d6\n' +
                            '• You create an advantage, +1 forward to you or an ally acting on it\n' +
                            '• Reduce their armor by 1 until they repair it'
                    },
                    {
                        name: 'Flexible Morals',
                        desc: 'When someone tries to detect your alignment you can tell them any alignment you like'
                    },
                    {
                        name: 'Poisoner',
                        desc: 'You’ve mastered the care and use of a poison. Choose a poison from the list below; that poison ' +
                            'is no longer dangerous for you to use. You also start with three uses of the poison you choose.' +
                            'Whenever you have time to gather materials and a safe place to brew you can make three uses' +
                            'of the poison you choose for free. Note that some poisons are applied, meaning you have to' +
                            'carefully apply it to the target or something they eat or drink. Touch poisons just need to touch' +
                            'the target, they can even be used on the blade of a weapon.' +
                            '• Oil of Tagit (applied): The target falls into a light sleep\n' +
                            '• Bloodweed (touch): The target deals -1d4 damage ongoing until cured\n' +
                            '• Goldenroot (applied): The target treats the next creature they see as a trusted ally, until proved otherwise\n' +
                            '• Serpent’s Tears (touch): Anyone dealing damage to the target rolls twice and takes the better result.'
                    }
                ],
                advanced: [
                    {
                        name: 'Bamboozle',
                        desc: 'When you parley with someone, on a 7+ you also take +1 forward with them.'
                    },
                    {
                        name: 'Poison Master',
                        desc: 'After you’ve used a poison once it’s no longer dangerous for you to use.'
                    },
                    {
                        name: 'Brewer',
                        desc: 'When you have time to gather materials and a safe place to brew you can create' +
                            'three doses of any one poison you’ve used before'
                    },
                    {
                        name: 'Envenom',
                        desc: 'You can apply even complex poisons with a pinprick. When you apply a poison ' +
                            'that’s not dangerous for you to use to your weapon it’s touch instead of applied.'
                    },
                    {
                        name: 'Wealth and Taste',
                        desc: 'When you make a show of flashing around your most valuable possession, choose someone ' +
                            'present. They will do anything they can to obtain your item or one like it.'
                    },
                    {
                        name: 'It Goes To Eleven',
                        desc: 'When you unleash a crazed performance(a righteous lute solo or mighty brass ' +
                            'blast, maybe) choose a target who can hear you and roll+Cha. ✴On a 10+ the ' +
                            'target attacks their nearest ally in range. ✴On a 7–9 they attack their nearest ally, ' +
                            'but you also draw their attention and ire'
                    },
                    {
                        name: 'Connections',
                        desc: 'When you put out word to the criminal underbelly about something you want ' +
                            'or need, roll+CHA. ✴On a 10+, someone has it, just for you. ✴On a 7–9, you’ll ' +
                            'have to settle for something close or it comes with strings attached, your call'
                    },
                    {
                        name: 'Con',
                        desc: 'When you parley with someone, on a 7+ you also take +1 forward with them ' +
                            'and get to ask their player one question which they must answer truthfully.'
                    }
                ]
            }
        },
        {
            name: 'Fighter',
            damage: 'd10',
            baseHP: '10',
            alignments: [
                {
                    name: 'Good',
                    desc: 'Be Good'
                },
                {
                    name: 'Neutral',
                    desc: 'Don\'t care'
                },
                {
                    name: 'Evil',
                    desc: 'Be bad'
                }
            ],
            baseLoad: 12,
            moves: {
                racial: [
                    {
                        name: 'elf',
                        move: 'location knowledge'
                    },
                    {
                        name: 'human',
                        move: 'camp guest'
                    }
                ],
                starting: [
                    {
                        name: 'Arcane Art',
                        desc: 'When you weave a performance into a basic spell, choose an ally and an effect: \n' +
                            '• Heal 1d8 damage \n' +
                            '• +1d4 forward to damage    \n' +
                            '• Their mind is shaken clear of one enchantment  \n' +
                            '• The next time someone successfully assists the target with aid, they get +2 ' +
                            'instead of +1 \n' +
                            'Then roll+Cha. ✴On a 10+, the ally gets the selected effect. ✴On a 7-9, your spell still ' +
                            'works, but you draw unwanted attention or your magic reverberates to other targets ' +
                            'affecting them as well, GM’s choice.'
                    },
                    {
                        name: 'Bardic Lore',
                        desc: 'Choose an area of expertise:' +
                            '• Spells and Magicks \n' +
                            '• The Dead and Undead  \n' +
                            '• Grand Histories of the Known World  \n' +
                            '• A Bestiary of Creatures Unusual  \n' +
                            '• The Planar Spheres   \n' +
                            '• Legends of Heroes Past     \n' +
                            '• Gods and Their Servants                               \n' +
                            'When you first encounter an important creature, location, or item (your call) covered by ' +
                            'your bardic lore you can ask the GM any one question about it; the GM will answer ' +
                            'truthfully. The GM may then ask you what tale, song, or legend you heard that information in.'
                    },
                    {
                        name: 'Charming and Open',
                        desc: 'When you speak frankly with someone, you can ask their player a question from the list ' +
                            'below. They must answer it truthfully, then they may ask you a question from the list ' +
                            '(which you must answer truthfully). \n' +
                            '• Whom do you serve?  \n' +
                            '• What do you wish I would do? \n' +
                            '• How can I get you to ______?  \n' +
                            '• What are you really feeling right now?  \n' +
                            '• What do you most desire?'
                    },
                    {
                        name: 'A Port in the Storm',
                        desc: 'When you return to a civilized settlement you’ve visited before, tell the GM when you ' +
                            'were last here. They’ll tell you how it’s changed since then'
                    }
                ],
                advanced: [
                    {
                        name: 'Bamboozle',
                        desc: 'When you parley with someone, on a 7+ you also take +1 forward with them.'
                    },
                    {
                        name: 'Cast Spells (Multiclass)',
                        desc: 'When you release a spell you’ve prepared, roll+Int. ✴On a 10+, the spell is ' +
                            'successfully cast and you do not forget ' +
                            'the spell—you may cast it again later. ✴On a 7-9, the spell is cast, but choose one: \n' +
                            '• You draw unwelcome attention or put yourself in a spot. The GM will tell you how.\n' +
                            '• The spell disturbs the fabric of reality as it is cast—take -1 ongoing to cast a spell ' +
                            'until the next time you Prepare Spells.\n' +
                            ' After it is cast, the spell is forgotten. You cannot cast the spell again until you ' +
                            'prepare spells. \n' +
                            'Note that maintaining spells with ongoing effects will sometimes cause a penalty to ' +
                            'your roll to cast a spell.'
                    },
                    {
                        name: 'Wealth and Taste (Multiclass)',
                        desc: 'When you make a show of flashing around your most valuable possession, choose someone ' +
                            'present. They will do anything they can to obtain your item or one like it.'
                    },
                    {
                        name: 'It Goes To Eleven',
                        desc: 'When you unleash a crazed performance(a righteous lute solo or mighty brass ' +
                            'blast, maybe) choose a target who can hear you and roll+Cha. ✴On a 10+ the ' +
                            'target attacks their nearest ally in range. ✴On a 7–9 they attack their nearest ally, ' +
                            'but you also draw their attention and ire'
                    },
                    {
                        name: 'Connections (Multiclass)',
                        desc: 'When you put out word to the criminal underbelly about something you want ' +
                            'or need, roll+CHA. ✴On a 10+, someone has it, just for you. ✴On a 7–9, you’ll ' +
                            'have to settle for something close or it comes with strings attached, your call'
                    },
                    {
                        name: 'Con',
                        desc: 'When you parley with someone, on a 7+ you also take +1 forward with them ' +
                            'and get to ask their player one question which they must answer truthfully.'
                    }
                ]
            }
        }
    ];
    this.getDebilities = function () {
        return{
            STR: 'weak',
            DEX: 'shaky',
            CON: 'sick',
            INT: 'stunned',
            WIS: 'confused',
            CHA: 'scarred'}
    };
    this.getClass = function (name) {
        return _.find(this.allClasses, function (val) {
            return name === val.name;
        })
    };

    this.getPCs = function () {
        return  [
            {
                name: 'Silver',
                armor: 1,
                xp: 57,
                drive: 'neutral',
                race: 'elf',
                bonds: [],
                class: {
                    name: 'Bard',
                    damage: 'd6',
                    baseHP: 6,
                    baseMaxLoad: 9,
                    moves: [
                        {
                            name: 'Arcane Art',
                            desc: 'When you weave a performance into a basic spell, choose an ally and an effect: \n' +
                                '• Heal 1d8 damage \n' +
                                '• +1d4 forward to damage    \n' +
                                '• Their mind is shaken clear of one enchantment  \n' +
                                '• The next time someone successfully assists the target with aid, they get +2 ' +
                                'instead of +1 \n' +
                                'Then roll+Cha. ✴On a 10+, the ally gets the selected effect. ✴On a 7-9, your spell still ' +
                                'works, but you draw unwanted attention or your magic reverberates to other targets ' +
                                'affecting them as well, GM’s choice.'
                        },
                        {
                            name: 'Bardic Lore',
                            desc: 'Choose an area of expertise:' +
                                '• Spells and Magicks \n' +
                                '• The Dead and Undead  \n' +
                                '• Grand Histories of the Known World  \n' +
                                '• A Bestiary of Creatures Unusual  \n' +
                                '• The Planar Spheres   \n' +
                                '• Legends of Heroes Past     \n' +
                                '• Gods and Their Servants                               \n' +
                                'When you first encounter an important creature, location, or item (your call) covered by ' +
                                'your bardic lore you can ask the GM any one question about it; the GM will answer ' +
                                'truthfully. The GM may then ask you what tale, song, or legend you heard that information in.'
                        },
                        {
                            name: 'Charming and Open',
                            desc: 'When you speak frankly with someone, you can ask their player a question from the list ' +
                                'below. They must answer it truthfully, then they may ask you a question from the list ' +
                                '(which you must answer truthfully). \n' +
                                '• Whom do you serve?  \n' +
                                '• What do you wish I would do? \n' +
                                '• How can I get you to ______?  \n' +
                                '• What are you really feeling right now?  \n' +
                                '• What do you most desire?'
                        },
                        {
                            name: 'A Port in the Storm',
                            desc: 'When you return to a civilized settlement you’ve visited before, tell the GM when you ' +
                                'were last here. They’ll tell you how it’s changed since then'
                        },
                        {
                            name: 'Elven racial Move',
                            desc: 'When you enter an important location (your call) you can ask the GM for one fact ' +
                                'from the history of that location'
                        },
                        {
                            name: 'Bamboozle',
                            desc: 'When you parley with someone, on a 7+ you also take +1 forward with them.'
                        },
                        {
                            name: 'Cast Spells (Multiclass)',
                            desc: 'When you release a spell you’ve prepared, roll+Int. ✴On a 10+, the spell is ' +
                                'successfully cast and you do not forget ' +
                                'the spell—you may cast it again later. ✴On a 7-9, the spell is cast, but choose one: \n' +
                                '• You draw unwelcome attention or put yourself in a spot. The GM will tell you how.\n' +
                                '• The spell disturbs the fabric of reality as it is cast—take -1 ongoing to cast a spell ' +
                                'until the next time you Prepare Spells.\n' +
                                ' After it is cast, the spell is forgotten. You cannot cast the spell again until you ' +
                                'prepare spells. \n' +
                                'Note that maintaining spells with ongoing effects will sometimes cause a penalty to ' +
                                'your roll to cast a spell.'
                        },
                        {
                            name: 'Wealth and Taste (Multiclass)',
                            desc: 'When you make a show of flashing around your most valuable possession, choose someone ' +
                                'present. They will do anything they can to obtain your item or one like it.'
                        },
                        {
                            name: 'It Goes To Eleven',
                            desc: 'When you unleash a crazed performance(a righteous lute solo or mighty brass ' +
                                'blast, maybe) choose a target who can hear you and roll+Cha. ✴On a 10+ the ' +
                                'target attacks their nearest ally in range. ✴On a 7–9 they attack their nearest ally, ' +
                                'but you also draw their attention and ire'
                        },
                        {
                            name: 'Connections (Multiclass)',
                            desc: 'When you put out word to the criminal underbelly about something you want ' +
                                'or need, roll+CHA. ✴On a 10+, someone has it, just for you. ✴On a 7–9, you’ll ' +
                                'have to settle for something close or it comes with strings attached, your call'
                        },
                        {
                            name: 'Con',
                            desc: 'When you parley with someone, on a 7+ you also take +1 forward with them ' +
                                'and get to ask their player one question which they must answer truthfully.'
                        }
                    ]
                },
                stats: {
                    STR: 8,
                    DEX: 13,
                    CON: 9,
                    INT: 18,
                    WIS: 13,
                    CHA: 18
                },
                inventory: [
                    {
                        name: 'rapier',
                        quantity: 1,
                        price: 20,
                        weight: 1,
                        effect: 'close range, +1 piercing'
                    },
                    {
                        name: 'A songbook in a forgotten tongue',
                        quantity: 1,
                        price: 0,
                        weight: 0,
                        effect: 'spellbook'
                    },
                    {
                        name: 'SoulStone',
                        quantity: 1,
                        price: 0,
                        weight: 0,
                        effect: 'connection to the guild'
                    },
                    {
                        name: 'Adventuring Gear',
                        quantity: 4,
                        weight: 1,
                        effect: 'close range, +1 piercing'
                    },
                    {
                        name: 'chainmail',
                        quantity: 1,
                        weight: 1,
                        effect: '1 armor'
                    },
                    {
                        name: 'Ugaly',
                        quantity: 3,
                        weight: 0,
                        effect: 'a drug that is grown in the sewers of Blackdeath - grants immunity to magical effects for one hour but makes you sick'
                    },
                    {
                        name: 'Lush',
                        quantity: 3,
                        weight: 0,
                        effect: 'a known drug. Can be used for bribes'
                    },
                    {
                        name: 'Pouch of Silver Powder',
                        quantity: 1,
                        price: 10,
                        weight: 0,
                        effect: 'can be sold'
                    },
                    {
                        name: 'Package with valuable drugs',
                        quantity: 1,
                        weight: 0,
                        effect: 'was gives to use as payment to get to Sandstorm'
                    },
                    {
                        name: 'Throwing Dagger',
                        quantity: 5,
                        weight: 0,
                        effect: 'thrown'
                    },
                    {
                        name: 'Halfling pipeleaf',
                        quantity: 10,
                        price: 10,
                        weight: 0,
                        effect: '+1 to parley'
                    } ,
                    {
                        name: 'Ragged bow',
                        quantity: 3,
                        weight: 2,
                        effect: 'near'
                    },
                    {
                        name: 'A long hollow bamboo',
                        quantity: 1,
                        weight: 0,
                        effect: '1 foot, hollow bamboo'
                    }


                ]

            },
            {
                name: 'Shadow',
                armor: 1,
                xp: 36,
                drive: 'neutral',
                race: 'drow',
                bonds: [],
                class: {
                    name: 'Thief',
                    damage: 'd8',
                    baseHP: 6,
                    baseMaxLoad: 9,
                    moves: [
                        {
                            name: 'Trap Expert',
                            desc: 'When you spend a moment to survey a dangerous area, roll+DEX. ✴On a 10+, hold 3. ✴On a ' +
                                '7–9, hold 1. Spend your hold as you walk through the area to ask these questions: \n' +
                                '• Is there a trap here and if so, what activates it?  \n' +
                                '• What does the trap do when activated?  \n' +
                                '• What else is hidden here?'
                        },
                        {
                            name: 'Tricks of the Trade',
                            desc: 'When you pick locks or pockets or disable traps, roll+DEX. ✴On a 10+, you do it, no problem. ' +
                                '✴On a 7–9, you still do it, but the GM will offer you two options between suspicion, danger, or cost.'
                        },
                        {
                            name: 'Backstab',
                            desc: 'When you attack a surprised or defenseless enemy with a melee weapon, you can choose to deal your damage or roll+DEX. ✴On a 10+ choose two. ✴On a 7–9 choose one.\n' +
                                '• You don’t get into melee with them\n' +
                                '• You deal your damage+1d6\n' +
                                '• You create an advantage, +1 forward to you or an ally acting on it\n' +
                                '• Reduce their armor by 1 until they repair it'
                        },
                        {
                            name: 'Flexible Morals',
                            desc: 'When someone tries to detect your alignment you can tell them any alignment you like'
                        },
                        {
                            name: 'Poisoner',
                            desc: 'You’ve mastered the care and use of a poison. Choose a poison from the list below; that poison ' +
                                'is no longer dangerous for you to use. You also start with three uses of the poison you choose.' +
                                'Whenever you have time to gather materials and a safe place to brew you can make three uses' +
                                'of the poison you choose for free. Note that some poisons are applied, meaning you have to' +
                                'carefully apply it to the target or something they eat or drink. Touch poisons just need to touch' +
                                'the target, they can even be used on the blade of a weapon.' +
                                '• Oil of Tagit (applied): The target falls into a light sleep\n' +
                                '• Bloodweed (touch): The target deals -1d4 damage ongoing until cured\n' +
                                '• Goldenroot (applied): The target treats the next creature they see as a trusted ally, until proved otherwise\n' +
                                '• Serpent’s Tears (touch): Anyone dealing damage to the target rolls twice and takes the better result.'
                        },
                        {
                            name: 'Poison Master',
                            desc: 'After you’ve used a poison once it’s no longer dangerous for you to use.'
                        },
                        {
                            name: 'Brewer',
                            desc: 'When you have time to gather materials and a safe place to brew you can create' +
                                'three doses of any one poison you’ve used before'
                        },
                        {
                            name: 'Envenom',
                            desc: 'You can apply even complex poisons with a pinprick. When you apply a poison ' +
                                'that’s not dangerous for you to use to your weapon it’s touch instead of applied.'
                        }
                    ]
                },
                stats: {
                    STR: 8,
                    DEX: 18,
                    CON: 13,
                    INT: 12,
                    WIS: 16,
                    CHA: 9
                },
                inventory: [
                    {
                        name: 'rapier',
                        quantity: 1,
                        price: 20,
                        weight: 1,
                        effect: 'close range, +1 piercing'
                    },
                    {
                        name: 'SoulStone',
                        quantity: 1,
                        price: 0,
                        weight: 0,
                        effect: 'connection to the guild'
                    },
                    {
                        name: 'Adventuring Gear',
                        quantity: 5,
                        weight: 1,
                        effect: 'Expande a use to take out any mundane item'
                    },
                    {
                        name: 'chainmail',
                        quantity: 1,
                        weight: 1,
                        effect: '1 armor'
                    },
                    {
                        name: 'Throwing Dagger',
                        quantity: 3,
                        weight: 0,
                        effect: 'thrown'
                    },
                    {
                        name: 'Throwing Dagger with Serpent\'s Tear',
                        quantity: 1,
                        weight: 0,
                        effect: 'thrown, poison effect'
                    },
                    {
                        name: 'rope',
                        quantity: 1,
                        weight: 0,
                        effect: 'a rope with a grappling hook'
                    },
                    {
                        name: 'Bladed Gloves',
                        quantity: 1,
                        weight: 0,
                        effect: 'Key word - "Blade"'
                    },
                    {
                        name: 'Persist House Ring',
                        quantity: 1,
                        weight: 0,
                        effect: 'House Ring'
                    },
                    {
                        name: 'Pin with Oil of Tagit',
                        quantity: 1,
                        weight: 0,
                        effect: 'A small concealable pin with a poison'
                    } ,
                    {
                        name: 'Ragged bow',
                        quantity: 4,
                        weight: 2,
                        effect: 'near'
                    },
                    {
                        name: 'Disebmodied hand',
                        quantity: 1,
                        weight: 0,
                        effect: 'unknown'
                    }


                ]

            }
        ];
    };
});