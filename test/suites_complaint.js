const assert = require('chai').expect;
const datas = require('../data/vars')
const Logins = require('../object/log_patient')
const Posts = require('../object/butler complaint/post_complaint')
const Gets = require('../object/butler complaint/get_complaint')
const Dels = require('../object/butler complaint/delete_complaint')
const Falcons = require('../object/media upload/post_falcon')


describe.skip('Automation API Testing', () => {
    describe('LOGIN_TOKEN', () => {
        it('GET ACCESS TOKEN', async() => {
            const res = await Logins.log_patient(datas.login_patient)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
            global.tokens = res.body.data.accessToken
        });
    });
    describe('BUTLER COMPLAINT', () => {
        it('POST COMPLAINT', async() => {
            const res = await Posts.post_complaint(datas.complaints, global.tokens)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
            assert(res.body.data).to.have.property('categoryId').to.equal('BfNmCXVQ4YQN-cjeUGM1Y')
            global.id_complaints = res.body.data.id
            console.log("Result : "+global.id_complaints);
        });
        it('GET COMPLAINT', async() => {
            const res = await Gets.get_complaint(global.tokens, global.id_complaints)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
        });
        it('DELETE COMPLAINT', async() => {
            const res = await Dels.del_complaint(global.tokens, global.id_complaints)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
        });
        it('GET DELETED COMPLAINT', async() => {
            const res = await Gets.get_complaint(global.tokens, global.id_complaints)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
        });
    });
});