const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.butler_dev)

const post_complaint = (data, auth) => request.post('/v1/complaint')
.set('Content-Type', 'application/json')
.set('Authorization', auth)
.send(data)

module.exports = {post_complaint}