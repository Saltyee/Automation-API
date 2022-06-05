const assert = require('chai').expect;
const datas = require('../data/vars')
const New_regs = require('../object/new_register/register_homerev')

describe.only('Automation Api Testing', () => {
    describe('HOME REVAMP', () => {
        it('POST REGISTER', async() => {
            const res = await New_regs.regis_patient(datas.new_register)
            console.log("Result"+res.text);
            assert(res.status).to.equal(200)
            assert(res.body.data).to.have.property('user_id')
        });
    
    });
});