'use strict';

const path = require('path'),
    fs = require('fs'),
    util = require('util'),
    _ = require('lodash'),
    _keysDeep = require('../support/lodash-keys-deep');

const fractal = require('../../src/fractal');

function load(app, done) {
    app.load().then(() => {
        done();
    }, err => {
        done(err);
    });
}

function getExpectedOutput(type, name) {

    if (expectedOutputs[type][name]) return expectedOutputs[type][name];

    let outputPath = path.join(__dirname, type, 'expected', name + '.js');

    if (fs.existsSync(outputPath)) {
        expectedOutputs[type][name] = require(outputPath);
    } else {
        throw new Error(`Expected outputs file for component with name '${name}' doesn't exist`);
    }

    return expectedOutputs[type][name];
}

function getRelevantProps(type, name) {
    var expected = getExpectedOutput(type, name);
    console.log('\n');
    console.log(type, name);
    console.log(_.keys(expected));
    console.log('deep: ', _keysDeep(expected));

    return _keysDeep(expected);
}

function getActualOutput(app, type, name) {
    const outputs = app.components.toJSON().items
        .filter(item => item.name === name)
        .map(item => _.pick(item, getRelevantProps(type, name)));

    if (outputs.length === 0) return undefined;

    if (outputs[0].name === 'headline') console.log('>>', util.inspect(outputs[0],{showHidden: false, depth: null}));
    
    return outputs.length === 1 ? outputs[0] : outputs;
}


let expectedOutputs = {};

module.exports = function(type) {

    const app = fractal({
        components: {
            path: path.join(__dirname, type, 'components')
        }
    });

    expectedOutputs[type] = expectedOutputs[type] || {};

    return {
        load: load.bind(null, app),
        getExpectedOutput: getExpectedOutput.bind(null, type),
        getActualOutput: getActualOutput.bind(null, app, type)
    };


}
