/*
 * Title: Routes
 * Description: Application routes
 * Author: Shakhawat Hossain
 * Date: 12/12/2021
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
