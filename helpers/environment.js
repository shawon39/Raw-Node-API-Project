/*
 * Title: Environment
 * Description: Handle all environment related thinks
 * Author: Shakhawat Hossain
 * Date: 11/12/2021
 */

// dependencies

const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
};

environments.production = {
    port: 5000,
    envName: 'production',
};

// determine which environment was passed.
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
// NB: .slice(0, -1) solved the issue.
const environmentToExport =
    typeof environments[currentEnvironment.slice(0, -1)] === 'object'
        ? environments[currentEnvironment.slice(0, -1)]
        : environments.staging;

// export module
module.exports = environmentToExport;
