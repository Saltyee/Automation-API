const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.butler_dev)

const act_patient = (auths) => request.get('/v1/patient-activity')
.set('Content-Type', 'application/json')
.set('Authorization', auths)


module.exports = {act_patient}