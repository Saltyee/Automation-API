const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.butler_dev)

const keluhan_patient = (auths) => request.get('/v1/patient-history')
.set('Content-Type', 'application/json')
.set('Authorization', auths)
.query({
    page : '10'
})

module.exports = {keluhan_patient}