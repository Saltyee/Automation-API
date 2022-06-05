const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.butler_dev)

const del_complaint = (auth, ID) => request.delete('/v1/complaint/'+ID)
.set('Content-Type', 'application/json')
.set('Authorization', auth)

module.exports = {del_complaint}