app.factory('diceResolver', function () {
    return {
        regExp: /\d*d([368]|10|20|100)/g, func: function (rollExpression) {
            var splited = rollExpression.split('d');

            var roll = Math.floor(Math.random() * splited[1]) + 1;

            if (splited[0] !== '') {
                roll *= splited[0];
            }

            return roll;
        }
    };
});

