const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.media_upload)

const post_media = (auth) => request.post('/v1/media/upload')
.set('Content-Type', 'multipart/form-data')
.set('Authorization', auth)
.field('directory', 'butler_support')
.attach('file', '/Users/iqbalee/Downloads/photo.jpg')


module.exports = {post_media}