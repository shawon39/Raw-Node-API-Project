/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Shakhawat Hossain
 * Date: 12/12/2021
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    // console.log(requestProperties);
    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;
