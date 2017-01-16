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

function getExpectedOutput(dirpath, name) {

    if (expectedOutputs[dirpath][name]) return expectedOutputs[dirpath][name];

    let outputPath = path.join(dirpath, 'expected', name + '.js');

    if (fs.existsSync(outputPath)) {
        expectedOutputs[dirpath][name] = require(outputPath);
    } else {
        throw new Error(`Expected outputs file for component with name '${name}' doesn't exist`);
    }

    return expectedOutputs[dirpath][name];
}

function getRelevantProps(dirpath, name) {
    var expected = getExpectedOutput(dirpath, name);
    return _keysDeep(expected);
}

function getActualOutput(app, dirpath, name) {
    const outputs = app.components.toJSON().items
        .filter(item => item.name === name)
        .map(item => _.pick(item, getRelevantProps(dirpath, name)));

    if (outputs.length === 0) return undefined;

    return outputs.length === 1 ? outputs[0] : outputs;
}


let expectedOutputs = {};

module.exports = function(dirpath) {

    const app = fractal({
        components: {
            path: path.join(dirpath, 'components')
        }
    });

    expectedOutputs[dirpath] = expectedOutputs[dirpath] || {};

    return {
        load: load.bind(null, app),
        getExpectedOutput: getExpectedOutput.bind(null, dirpath),
        getActualOutput: getActualOutput.bind(null, app, dirpath)
    };


}
