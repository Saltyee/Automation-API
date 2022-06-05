const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.butler_dev)

const get_prescription = (auths) => request.get('/v1/prescription')
.set('Content-Type', 'application/json')
.set('Authorization', auths)


module.exports = {get_prescription}