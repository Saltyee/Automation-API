const assert = require('chai').expect;
const datas = require('../data/vars')
const Logins = require('../object/log_patient')
const Csv = require('../object/upload_csv')


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
    describe('UPLOAD CSV', () => {
        it('POST CSV', async() => {
            const res = await Csv.post_csv(global.tokens)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
        });
    });
});