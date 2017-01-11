'use strict';

const chai = require('chai');
const expect = chai.expect;

const createAdapter = require('./fixtures/adapter');
const fixtures = require('./fixtures');


describe('Parsing Fixtures', function() {

    const adapter = createAdapter('simple');
    const fixtureNames = fixtures.getBaseNames('simple');

    before(adapter.load);

    fixtureNames.forEach(name => {

        it(`outputs expected values for the '${name}' component`, function() {

            const expectedOutput = adapter.getExpectedOutput(name);
            const actualOutput = adapter.getActualOutput(name);

            expect(expectedOutput).to.deep.equal(actualOutput);
        });
    })



});
