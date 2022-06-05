const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.base_url)

const register = (nama, email, pass) => request.post('/auth/register')
.set('Content-Type', 'application/json')
.send({
    "name" : nama,
    "email" : email,
    "password" : pass
})
// .query({
//     page = '1'
// }) SET BODY

module.exports = {register}