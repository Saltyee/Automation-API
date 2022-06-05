const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.csv_upload)

const post_csv = (auth) => request.post('/api/v1/tools/external/users/import')
.set('Content-Type', 'multipart/form-data')
.set('Authorization', auth)
.field('clientAppId', 'Q0LoSDuLXrw-7jb67gdOX')
.attach('file', '/Users/iqbalee/Downloads/Testing SME POSTMAN - Sheet1.csv')


module.exports = {post_csv}