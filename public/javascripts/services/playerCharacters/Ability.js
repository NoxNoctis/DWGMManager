function Ability(name, debilityName) {
    this.name = name;
    this.value = 0;
    this.debility = false;
    this.debilityName = debilityName;
}

Ability.prototype.getModifier = function () {
    var debility = this.debility ? -1 : 0,
        stat = this.value,
        mod;

    if (stat < 9)
        mod = -1;
    else if (stat < 13)
        mod = 0;
    else if (stat < 16)
        mod = 1;
    else if (stat < 18)
        mod = 2;
    else
        mod = 3;

    return mod + debility;
};