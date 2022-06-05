const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.butler_dev)

const get_appId = (auths, IDapp) => request.get('/v1/client-app/'+IDapp)
.set('Content-Type', 'application/json')
.set('Authorization', auths)


module.exports = {get_appId}