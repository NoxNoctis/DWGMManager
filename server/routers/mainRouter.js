var router = require('express').Router();
var bodyParser = require('body-parser');
var siteRouter = require('./siteRouter');
var restRouter = require('./restRouter');
var userManagementRouter = require('./userManagementRouter');

module.exports = function(){
    var initializeMiddlewares = function(){
        router.use(bodyParser.json());
    };

    var registerRouters = function(){
        router.use(userManagementRouter);
        router.use(restRouter);
        router.use(siteRouter);
    };

    initializeMiddlewares();
    registerRouters();

    return router;
}();