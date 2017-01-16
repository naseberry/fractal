'use strict';

const path = require('path');
const chai = require('chai');
const expect = chai.expect;

const createAdapter = require('./adapters/adapter-v1');
const fixtures = require('./fixtures');


describe('Parsing Fixtures', function() {

    const fixtureTypes = fixtures.getTypes();

    fixtureTypes.forEach(type => {

        describe(type, function() {

            const adapter = createAdapter(path.join(__dirname, 'fixtures', type));
            const fixtureNames = fixtures.getBaseNames(type);

            before(adapter.load);

            fixtureNames.forEach(name => {

                it(`outputs expected values for the '${name}' component`, function() {

                    const expectedOutput = adapter.getExpectedOutput(name);
                    const actualOutput = adapter.getActualOutput(name);
                    
                    expect(actualOutput).to.deep.equal(expectedOutput);
                });
            })

        });

    });

});
