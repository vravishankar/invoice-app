// TODO: Use JOI from hapi.js to validate the environment variables
// TODO: Refer to the link https://www.npmjs.com/package/joi

require('dotenv').config()

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    mongo: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT
    }
}

export default config;