const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.butler_dev)

const reg_patient = (data) => request.post('/v1/patient/register')
.set('Content-Type', 'application/json')
.send(data)

module.exports = {reg_patient}