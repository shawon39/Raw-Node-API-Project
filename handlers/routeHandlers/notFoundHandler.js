/*
 * Title: Not Found Handler
 * Description: NOt Found Handler
 * Author: Shakhawat Hossain
 * Date: 12/12/2021
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found',
    });
};

module.exports = handler;
