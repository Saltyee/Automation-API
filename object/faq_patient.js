const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.butler_dev)

const get_patient = () => request.get('/v1/faq?type=PATIENT')
.set('Content-Type', 'application/json')

module.exports = {get_patient}