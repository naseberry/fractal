'use strict';

const path = require('path'),
    fs = require('fs'),
    _ = require('lodash');

const fractal = require('../../src/fractal');

let expectedOutputs = {};

function load(app, done) {
    app.load().then(() => {
        done();
    }, err => {
        done(err);
    });
}

function getExpectedOutput(type, name) {

    if (expectedOutputs[name]) return expectedOutputs[name];

    let outputPath = path.join(__dirname, 'simple', 'expected', name + '.js');

    if (fs.existsSync(outputPath)) {
        expectedOutputs[name] = require(outputPath);
    } else {
        throw new Error(`Expected outputs file for component with name '${name}' doesn't exist`);
    }

    return expectedOutputs[name];
}

function getRelevantProps(type, name) {
    var expected = getExpectedOutput(type, name);
    return _.keys(expected);
}

function getActualOutput(app, type, name) {
    const outputs = app.components.toJSON().items
        .filter(item => item.name === name)
        .map(item => _.pick(item, getRelevantProps(type, name)));

    if (outputs.length === 0) return undefined;

    return outputs.length === 1 ? outputs[0] : outputs;
}


module.exports = function(type) {

    const app = fractal({
        components: {
            path: path.join(__dirname, type, 'components')
        }
    });

    return {
        load: load.bind(null, app),
        getExpectedOutput: getExpectedOutput.bind(null, type),
        getActualOutput: getActualOutput.bind(null, app, type)
    };


}
