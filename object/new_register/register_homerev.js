const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.home_revamp)

const regis_patient = (data) => request.post('/v1/patients')
.set('Content-Type', 'application/json')
.send(data)

module.exports = {regis_patient}