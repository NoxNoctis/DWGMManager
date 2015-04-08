var router = require('express').Router();
var bodyParser = require('body-parser');
var siteRouter = require('./siteRouter');
var restRouter = require('./restRouter');

module.exports = function(){
    var initializeMiddlewares = function(){
        router.use(bodyParser.json());
    };

    var registerRouters = function(){
        router.use(siteRouter);
        router.use(restRouter);
    };

    initializeMiddlewares();
    registerRouters();

    return router;
}();