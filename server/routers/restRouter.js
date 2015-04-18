var router = require('express').Router();
var database = require('mongoose');

router.put('/save', function(req){
    console.log(req.body);
    var collection = database.get().collection('testscheme');
    collection.insert(req.body);
});

module.exports = router;