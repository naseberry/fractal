'use strict';

const chai = require('chai');
const expect = chai.expect;

const createAdapter = require('./fixtures/adapter');
const fixtures = require('./fixtures');


describe('Parsing Fixtures', function() {

    const fixtureTypes = ['simple'];//fixtures.getTypes();

    fixtureTypes.forEach(type => {

        describe(type, function() {

            const adapter = createAdapter(type);
            const fixtureNames = fixtures.getBaseNames(type);

            before(adapter.load);

            fixtureNames.forEach(name => {

                it(`outputs expected values for the '${name}' component`, function() {

                    const expectedOutput = adapter.getExpectedOutput(name);
                    const actualOutput = adapter.getActualOutput(name);

                    console.log('a', actualOutput);
                    console.log('e', expectedOutput);

                    expect(actualOutput).to.deep.equal(expectedOutput);
                });
            })

        });

    });

});
