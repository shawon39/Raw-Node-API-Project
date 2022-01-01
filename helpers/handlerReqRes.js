/*
 * Title: Handle Request Response
 * Description: Handle Request and Response
 * Author: Shakhawat Hossain
 * Date: 11/12/2021
 */
// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

// Module Scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parseUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        chosenHandler(requestProperties, (statusCode, payload) => {
            const stsCode = typeof statusCode === 'number' ? statusCode : 500;
            const pyLoad = typeof payload === 'object' ? payload : {};
            const payloadString = JSON.stringify(pyLoad);
            // return the final response
            res.writeHead(stsCode);
            res.end(payloadString);
        });
        // response handle
        res.end('Hello World !!');
    });
};

module.exports = handler;
