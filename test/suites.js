const assert = require('chai').expect;
const Regs = require('../object/register')
const Gets = require('../object/getall')
const Faqs = require('../object/faq_patient')
const TCregs = require('../testcase/register.json')
const datas = require('../data/vars')
const Logins = require('../object/log_patient')
 

describe.skip('Automation Api Testing', () => {
    describe('Api Register', () => {
        it(`${TCregs.positive.validData}`, async() => {
            const res = await Regs.register(datas.register.nama, datas.register.email, datas.register.password)
            console.log("Result"+res.text);
            assert(res.status).to.equal(201)
            assert(res.body).to.have.property('message').to.equal('Your account has ben created successfully')
            global.tokens = res.body.token
            console.log("Token : "+tokens)
        });
        it(`${TCregs.negative.invalidData}`, async() => {
            const res = await Regs.register(datas.register.nama, datas.register.email, datas.register.pass)
            console.log("Result"+res.text);
            assert(res.status).to.equal(400)
        });
    });
    describe('GET API', () => {
        it('GET all data valid', async() => {
            const res = await Gets.getalls(global.tokens)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
        });
        it('GET all faq patient', async() => {
            const res = await Faqs.get_patient(global.tokens)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
        });
    });
});