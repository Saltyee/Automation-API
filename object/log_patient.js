const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.login_token)

const log_patient = (data) => request.post('/v1/logins/patients')
.set('Content-Type', 'application/json')
.send(data)

module.exports = {log_patient}