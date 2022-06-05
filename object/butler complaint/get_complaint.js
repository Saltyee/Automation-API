const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.butler_dev)

const get_complaint = (auth, ID) => request.get('/v1/complaint/'+ID)
.set('Content-Type', 'application/json')
.set('Authorization', auth)
.set('clientAppId', 'Q0LoSDuLXrw-7jb67gdOX')

module.exports = {get_complaint}