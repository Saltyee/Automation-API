const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.base_url)

const getalls = (auths) => request.get('/panel/blogs')
.set('Content-Type', 'application/json')
.set('Authorization', `bearer ${auths}`)

module.exports = {getalls}