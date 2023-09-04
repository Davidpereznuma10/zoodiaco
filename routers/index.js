const animals = require('./animals_routers');
const employees = require('./employees_routers');
const enclosures = require('./enclosures_routers');
const purchases = require('./purchases_routers');
const species = require('./species_routers');
const visitors = require('./visitors_routers');
const {appLogin} = require("./login_routes.js")
const express = require('express');


function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);

    router.use("/login", appLogin);
    router.use('/animals',animals);
    router.use('/employees',employees);
    router.use('/enclosures',enclosures);
    router.use('/purchases',purchases);
    router.use('/species',species);
    router.use('/visitors',visitors);
}

module.exports = routerApi;