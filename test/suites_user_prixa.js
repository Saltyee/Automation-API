const assert = require('chai').expect;
const datas = require('../data/vars')
const Logins = require('../object/log_patient')
const Registers = require('../object/register_patient')
const Acts = require('../object/client & user prixa/patient_activity')
const Keluhan = require('../object/client & user prixa/patient_keluhan')
const Prescriptions = require('../object/client & user prixa/get_prescription')
const Clientapp = require('../object/client & user prixa/client_appId')
const Users = require('../object/client & user prixa/user_patient')

describe.skip('Automation API Testing', () => {
    describe('REGISTER_PATIENT', () => {
        it('POST REGISTER', async() => {
            const res = await Registers.reg_patient(datas.registers_patients)
            console.log("Result"+res.text);
            assert(res.status).to.equal(400)
            assert(res.body).to.have.property('message')
        });
    });
    describe('LOGIN_TOKEN', () => {
        it('GET ACCESS TOKEN', async() => {
            const res = await Logins.log_patient(datas.login_patient)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
            global.tokens = res.body.data.accessToken
        });
    });
    describe('PATIENT_ACTIVITY', () => {
        it('GET ACTIVITY HISTORY', async() => {
            const res = await Acts.act_patient(global.tokens)
            console.log("Result : "+res.text);
            assert(res.status).to.equal(200)
        });
        it('GET KELUHAN HISTORY', async() => {
            const res = await Keluhan.keluhan_patient(global.tokens)
            console.log("Result : "+res.text);
            assert(res.status).to.equal(200)
        });
        it('GET PRESCRIPTION PATIENT', async() => {
            const res = await Prescriptions.get_prescription(global.tokens)
            console.log("Result : "+res.text);
            assert(res.status).to.equal(200)
        });
        it('GET CLIENT APPID', async() => {
            const res = await Clientapp.get_appId(global.tokens, global.appsid)
            console.log("Result : "+res.text);
            assert(res.status).to.equal(200)
        });
        it('GET USER PATIENT', async() => {
            const res = await Users.get_user(global.tokens)
            console.log("Result : "+res.text);
            assert(res.status).to.equal(200)
        });
    });
}); 