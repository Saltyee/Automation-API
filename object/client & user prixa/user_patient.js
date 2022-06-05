const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.butler_dev)

const get_user = (auths) => request.get('/v1/user/me')
.set('Content-Type', 'application/json')
.set('Authorization', auths)


module.exports = {get_user}