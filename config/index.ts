var env = require('./env.json')
const envVariables: any = process.env.NODE_ENV || null
const config = env[envVariables]
export default config