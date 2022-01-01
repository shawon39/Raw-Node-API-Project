/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Shakhawat Hossain
 * Date: 11/12/2021
 */

const http = require('http');
const { handleReqRes } = require('./helpers/handlerReqRes');
const environment = require('./helpers/environment');

// app object - module scaffolding
const app = {};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
