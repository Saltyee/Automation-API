const assert = require('chai').expect;
const datas = require('../data/vars')
const Logins = require('../object/log_patient')
const Falcons = require('../object/media upload/post_falcon')


describe.skip('Automation API Testing', () => {
    describe('LOGIN_TOKEN', () => {
        it('GET ACCESS TOKEN', async() => {
            const res = await Logins.log_patient(datas.login_patient)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
            global.tokens = res.body.data.accessToken
            console.log('Result : '+global.tokens)
        });
    });
    describe('TESTING FALCON', () => {
        it('POST IMG', async() => {
            const res = await Falcons.post_media(global.tokens)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
            uploaded_pict = res.body.data.url
            console.log("URL Picture : "+uploaded_pict)
        });
    });
});