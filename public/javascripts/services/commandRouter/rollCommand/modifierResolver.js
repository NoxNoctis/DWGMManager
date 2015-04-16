app.factory('modifierResolver', function (currentUser) {
    return {
        regExp: /(str|dex|con|int|wis|cha)/g, func: function (rollExpression) {
            return currentUser.stats[rollExpression];
        }
    };
});

