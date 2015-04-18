var router = require('express').Router();
var path = require('path');

var siteRootFolder = path.resolve(process.cwd(), "public");


router.get('/', function(req, res){
    res.sendfile(siteRootFolder + '/index.html');
});

router.get('/icons/*', function(req, res){
    res.sendfile(siteRootFolder + "/bower_components/material-design-icons" + req.url.replace('/icons', ''));
});

router.get('/*', function(req, res){
    res.sendfile(siteRootFolder + req.url);
});

module.exports = router;
